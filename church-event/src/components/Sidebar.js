/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from "react";
import { MdDashboard, MdEvent } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

const Sidebar = forwardRef(({ isVisible }, ref) => {
  return (
    <div
      ref={ref}
      className={`fixed md:relative md:flex flex-col w-64 bg-gray-800 h-full z-30 transform transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
    >
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white font-bold uppercase">Church Event</span>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <a
            href="/dashboard"
            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
          >
            <MdDashboard className="h-6 w-6 mr-2" />
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <MdEvent className="h-6 w-6 mr-2" />
            Manage Events
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <IoSettings className="h-6 w-6 mr-2" />
            Settings
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <TbLogout2 className="h-6 w-6 mr-2" />
            LogOut
          </a>
        </nav>
      </div>
    </div>
  );
});

export default Sidebar;
