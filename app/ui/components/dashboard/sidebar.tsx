"use client";

import NavLinks from "./nav-links";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`relative flex flex-col bg-gray-800 h-screen p-4 ${
        collapsed ? "w-16" : "w-64"
      } text-gray-200 transition-all duration-300`}
    >
      <div className="relative flex justify-between items-center mb-4">
        <button
          onClick={toggleSidebar}
          className="text-white flex items-center justify-center w-10 h-10 rounded hover:bg-gray-700 hover:text-teal-400"
        >
          {collapsed ? (
            <FaBars className="size-5" />
          ) : (
            <FaTimes className="size-5" />
          )}
        </button>
      </div>
      <NavLinks collapsed={collapsed} />
    </div>
  );
}
