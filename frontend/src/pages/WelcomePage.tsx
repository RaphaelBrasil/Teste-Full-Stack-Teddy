import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleEnter = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl  mb-6">Olá, seja bem-vindo!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o seu nome:"
        className="border border-gray-300 bg-transparent px-4 py-2 rounded w-96 mb-4"
      />
      <button
        onClick={handleEnter}
        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors w-96"
      >
        Entrar
      </button>
    </div>
  );
};

export default WelcomePage;
