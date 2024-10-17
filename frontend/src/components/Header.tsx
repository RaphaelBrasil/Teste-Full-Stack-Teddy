import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom"; // Import NavLink
import { IconMenu2 } from "@tabler/icons-react";
import { Sidebar } from "./Sidebar";
import Logo from "./Logo";

export const Header: React.FC = () => {
  const navigate = useNavigate();
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
          <Logo onClick={() => navigate("/")} />
        </div>
        <nav className="flex space-x-8">
          <NavLink
            to="/" // Navigate to the clients page
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-orange-500 font-semibold" : "text-gray-500"
              }`
            }
          >
            Clientes
          </NavLink>
          <NavLink
            to="/selected-clients" // Navigate to the selected clients page
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-orange-500 font-semibold" : "text-gray-500"
              }`
            }
          >
            Clientes selecionados
          </NavLink>
          <NavLink
            to="/welcome" // Navigate to the selected clients page
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-orange-500 font-semibold" : "text-gray-500"
              }`
            }
          >
            Sair
          </NavLink>
        </nav>
        <div className="text-gray-700">
          Olá, <span className="font-semibold">Usuário!</span>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
