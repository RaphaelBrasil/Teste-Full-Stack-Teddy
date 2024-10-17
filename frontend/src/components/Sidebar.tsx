import React from "react";
import {
  IconLayoutGridFilled,
  IconHomeFilled,
  IconUserFilled,
  IconArrowLeft,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out rounded-tr-lg`}
        style={{
          background:
            "linear-gradient(to bottom, #1F2937 0%, #1F2937 128px, white 128px, white 100%)",
        }}
      >
        <div className="relative flex items-center justify-center h-32">
          <Logo onClick={onClose} />
        </div>
        {isOpen && (
          <div className="absolute top-[104px] -right-6 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-colors duration-200">
            <button
              onClick={onClose}
              className="w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg"
            >
              <IconArrowLeft className="text-gray-800" />
            </button>
          </div>
        )}
        <div className="p-4 ">
          <ul>
            <li className="mb-2">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `text-gray-700 flex items-center ${
                    isActive ? "font-semibold text-orange-500" : ""
                  }`
                }
              >
                <IconHomeFilled size={24} className="mr-2" /> Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-700 flex items-center ${
                    isActive ? "font-semibold text-orange-500" : ""
                  }`
                }
              >
                <IconUserFilled size={24} className="mr-2" /> Clientes
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `text-gray-700 flex items-center ${
                    isActive ? "font-semibold text-orange-500" : ""
                  }`
                }
              >
                <IconLayoutGridFilled size={24} className="mr-2" /> Produtos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black opacity-50 z-30"
        ></div>
      )}
    </>
  );
};
