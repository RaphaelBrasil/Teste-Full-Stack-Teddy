import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";
import { Sidebar } from "./Sidebar";
import Logo from "./Logo";
import { useUser } from "../context/UserContext";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { name } = useUser();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-24 w-full flex justify-between items-center px-4 sm:px-8 shadow-md bg-white">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-black"
          >
            <IconMenu2 size={24} />
          </button>
          <Logo onClick={() => navigate("/")} />
        </div>
        <nav className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-orange-500 font-semibold" : "text-gray-500"
              }`
            }
          >
            Clientes
          </NavLink>
          <NavLink
            to="/selected-clients"
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-orange-500 font-semibold" : "text-gray-500"
              }`
            }
          >
            Clientes selecionados
          </NavLink>
          <NavLink
            to="/welcome"
            className={({ isActive }) =>
              `cursor-pointer ${
                isActive ? "text-orange-500 font-semibold" : "text-gray-500"
              }`
            }
          >
            Sair
          </NavLink>
        </nav>
        <div className="hidden md:block text-gray-700">
          Olá,{" "}
          <span className="font-semibold">
            {name ? `${name}!` : "Usuário!"}
          </span>{" "}
        </div>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};
