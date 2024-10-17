import React from "react";
import { IconPlus, IconPencil, IconTrash } from "@tabler/icons-react";

interface ClientCardProps {
  name: string;
  salary: string;
  company: string;
  onAdd: () => void;
  onEdit: () => void;
  onRemove: () => void;
}

export const ClientCard: React.FC<ClientCardProps> = ({
  name,
  salary,
  company,
  onAdd,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="border p-4 rounded-md shadow-md bg-white relative">
      <h3 className="font-bold text-center">{name}</h3>
      <p className="text-center">Salário: {salary}</p>
      <p className="text-center">Empresa: {company}</p>

      <div className="flex justify-between mt-4">
        <button className="text-gray-500 hover:text-black" onClick={onAdd}>
          <IconPlus size={24} />
        </button>
        <button
          className="text-gray-500 hover:text-orange-500"
          onClick={onEdit}
        >
          <IconPencil size={24} />
        </button>
        <button className="text-red-500 hover:text-red-600" onClick={onRemove}>
          <IconTrash size={24} />
        </button>
      </div>
    </div>
  );
};
