import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { Link } from "@inertiajs/react";
import Header from "./components/Header";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
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
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">{children}</div>
          <div className="border-fade my-12 mx-24"></div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
