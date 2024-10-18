import React from "react";
import { IconX } from "@tabler/icons-react";

interface RemoveAllSelectedClientsModalProps {
  onConfirm: () => void;
  onClose: () => void;
}

export const RemoveAllSelectedClientsModal: React.FC<
  RemoveAllSelectedClientsModalProps
> = ({ onConfirm, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <IconX />
        </button>
        <h2 className="text-lg font-bold mb-4">Remover clientes:</h2>
        <p>Você está prestes a remover todos os clientes selecionados</p>
        <div className="flex justify-end mt-4">
          <button
            className="w-full border bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400"
            onClick={onConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveAllSelectedClientsModal;
