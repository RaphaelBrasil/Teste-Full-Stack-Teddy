import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { Sidebar } from "./Sidebar";

export const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-24 w-full flex justify-between items-center px-8 shadow-md bg-white">
        <div className="flex items-center space-x-8">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-black"
          >
            <IconMenu2 size={24} />
          </button>
          <img
            src="/logo.png"
            alt="Teddy Open Finance"
            className="h-auto w-24"
          />
        </div>
        <nav className="flex space-x-8">
          <a href="#" className="text-orange-500 font-semibold">
            Clientes
          </a>
          <a href="#" className="text-gray-500">
            Clientes selecionados
          </a>
          <a href="#" className="text-gray-500">
            Sair
          </a>
        </nav>
        <div className="text-gray-700">
          Olá, <span className="font-semibold">Usuário!</span>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
