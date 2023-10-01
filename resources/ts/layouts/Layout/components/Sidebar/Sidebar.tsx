import { Link } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePage } from "@inertiajs/react";
import {faHouse, faClockRotateLeft, faSquarePlus, faStar, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import AdminSidebar from "./AdminSidebar";
import SidebarItem from "./SidebarItem";
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const auth = usePage().props;
  const roles = JSON.parse(auth.user.roles);
  const isAdmin =roles.some(role => role.name === 'admin');
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);

  }, [sidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  
  return (
    <div className="lg:w-64 bg-black">
      {/* Sidebar backdrop (mobile only) */}


      {/* Sidebar */}

      <div
        id="sidebar"
        ref={sidebar}
        className={`h-full lg:visible lg:h-full transform lg:bg-black p-2 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "hidden" : "visible"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-center items-center pr-4 flex-col">
          {/* Close button */}
          <button
            ref={trigger}
            className="text-gray-500 lg:hidden hover:text-gray-400 mt-12 flex flex-row justify-center items-center gap-4 border p-4 border-opacity-25 border-white"
            onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle the state
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Kapat</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 11-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <span>Menüyü Kapat</span>
          </button>
          {/* Logo */}
          <div className="flex justify-center">
          <Link href="/" className="p-8 text-xl font-bold text-white bg-black font-poppins tracking-widest mt-20 lg:mt-0">
              Kostüm Kuru Temizleme
            </Link>

          </div>
        </div>

        {/* Links */}
        <div>
        <ul className="font-poppins text-2xl flex flex-col gap-2 mt-4 w-full">
            {
              isAdmin && window.location.pathname.includes('/admin') ? (
                <AdminSidebar />
              ) : (
                
                <>
                <h3 className="pl-3 text-xs font-semibold text-gray-500 uppercase w-full">Panel</h3>
      
                <SidebarItem href="/customer" title="Anasayfa" icon={faHouse} />
                <SidebarItem href="/customer/yeni-randevu" title="Yeni Randevu Oluştur" icon={faSquarePlus} />
                <SidebarItem href="/customer/gecmis-randevular" title="Geçmiş Randevular" icon={faClockRotateLeft} />
                <SidebarItem href="/customer/degerlendirmeler" title="Değerlendirmeler" icon={faStar} />

            </>
              )
            }
                  {isAdmin && (
        <Link
          href={window.location.pathname.includes('/customer') ? '/admin' : '/customer'}
          className="block text-black hover:animate-pulse"
        >
          <div className="flex items-center justify-center gap-2 hover:gap-6 flex-grow ease-in-out transition-all duration-200 hover:bg-zinc-400 hover:text-white bg-zinc-300 rounded-sm px-2 py-2 w-full mt-12 text-center">
            <span className="text-sm font-medium">
              {window.location.pathname.includes('/customer') ? 'Yönetici Panelinize Geçiş Yapın' : 'Müşteri Panelinize Geçiş Yapın'}
            </span>
          </div>
        </Link>
      )}

            


          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
