import React from "react";
import {
  IconX,
  IconLayoutGridFilled,
  IconHomeFilled,
  IconUserFilled,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing

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
        } transition-transform duration-300 ease-in-out`}
        style={{
          background:
            "linear-gradient(to bottom, gray-800 0%, gray-800 128px, white 128px, white 100%)",
        }}
      >
        <div className="p-4 mt-52">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black mb-4"
          >
            <IconX size={24} />
          </button>
          <ul>
            <li className="mb-2">
              <NavLink
                to="/home" // Link to Home page
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
                to="/" // Link to Clients page
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
                to="/products" // Link to Products page
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
