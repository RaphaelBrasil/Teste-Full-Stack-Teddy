import React from "react";
import { IconX } from "@tabler/icons-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black mb-4"
          >
            <IconX size={24} />
          </button>
          <h2 className="font-bold text-lg mb-4">Menu Lateral</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Opção 1
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Opção 2
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700">
                Opção 3
              </a>
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
