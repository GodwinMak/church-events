import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Navabr from "../components/Navabr";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    // Only toggle sidebar visibility for small screens
    if (window.innerWidth < 768) {
      setSidebarVisible(!isSidebarVisible);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarVisible(false);
    }
  };

  useEffect(() => {
    if (isSidebarVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarVisible]);

  return (
    <div className="relative flex h-screen bg-gray-100">
      {/* Overlay for small screens */}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarVisible(false)}
        ></div>
      )}

      <Sidebar ref={sidebarRef} isVisible={isSidebarVisible} />
      <div
        className={`flex flex-col flex-1 overflow-y-auto ${
          isSidebarVisible ? "md:ml-64" : ""
        }`}
      >
        <Navabr onMenuClick={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
