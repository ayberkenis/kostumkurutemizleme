import { Link } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faClockRotateLeft, faSquarePlus, faStar } from "@fortawesome/free-solid-svg-icons";
interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ sidebarOpen, setSidebarOpen }: Props) {
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  return (
    <div className="lg:w-64">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-black p-2 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between pr-3 mb-10 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="text-gray-500 lg:hidden hover:text-gray-400"
            onClick={() => setSidebarOpen(false)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Kapat</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <div className="flex justify-center ">
          <Link href="/" className="p-8 text-xl font-bold text-white bg-black font-poppins tracking-widest">
              Kostüm Kuru Temizleme
            </Link>

          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="pl-3 text-xs font-semibold text-gray-500 uppercase w-full">Panel</h3>
          <ul className="font-poppins text-2xl flex flex-col gap-2 mt-4 w-full">
            {/* Dashboard */}
            <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 p-4">
              <Link href="/home" className="block text-gray-200 hover:text-white">
                <div className="flex items-center flex-grow">
                <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200">
                  <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon> 
                  <span className="text-sm font-medium">Anasayfa</span>
                </div>
                </div>
              </Link>
            </li>
            {/* Customers */}
            <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 p-4">
              <Link href="/yeni-randevu" className="block text-gray-200 hover:text-white">
                <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200">
                  <FontAwesomeIcon icon={faSquarePlus}></FontAwesomeIcon> 
                  <span className="text-sm font-medium">Yeni Randevu Oluştur</span>
                </div>
              </Link>
            </li>

            <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 p-4">
              <Link href="/gecmis-randevular" className="block text-gray-200 hover:text-white">
                <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200">
                  <FontAwesomeIcon icon={faClockRotateLeft}></FontAwesomeIcon> 
                  <span className="text-sm font-medium">Geçmiş Randevularınız</span>
                </div>
              </Link>
            </li>

            
            <li className="px-3 py-2 rounded-sm hover:bg-zinc-900 p-4">
              <Link href="/degerlendirmeler" className="block text-gray-200 hover:text-white">
                <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200">
                  <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> 
                  <span className="text-sm font-medium">Değerlendirmeler</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
