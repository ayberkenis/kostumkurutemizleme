import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Link } from "@inertiajs/react";
import Header from "./components/Header";
import { HeaderBig } from "./components/ContentAreas/Header";
import { InnerContent } from "./components/ContentAreas/Inner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHouse } from "@fortawesome/free-solid-svg-icons";

interface Props {
  children: React.ReactNode;
}

function Layout({ children, title, description }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [previousPage, setPreviousPage] = useState(""); // State to store the previous page URL

  useEffect(() => {
    // Get the previous page URL from the browser's history
    const previousPageUrl = document.referrer;
    setPreviousPage(previousPageUrl);
  }, []);

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main content */}
        <main>
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl my-8">
            <div className="flex flex-col flex-grow justify-center items-center w-full px-8 py-4">
              {
                title ? (
                  <HeaderBig pageTitle={title} pageDescription={description} />
                ) : (
                  ''
                )
              }
            <InnerContent>
            {children}
            </InnerContent>
            </div>
            </div>
          <div className="border-fade my-12 mx-24"></div>
          <div className="w-full flex flex-row justify-center items-center divide-neutral-900 ">
          <Link href={previousPage} className="w-1/2 text-black hover:text-gray-700 font-playfair px-4 font-bold flex flex-row gap-4 justify-center items-center">
              <FontAwesomeIcon icon={faArrowLeft} className="text-black" />
              Geri Dön
            </Link>
            <div className="w-1/2">
              <a className="font-poppins italic text-white shadow-xl shadow-white w-1/4 p-4 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-neutral-200 via-gray-900 to-zinc-900 hover:animate-pulse font-medium text-center" href="https://ayberkenis.com.tr" target="_blank">
                AyberkEnis tarafından geliştirildi
                </a>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

export default Layout;
