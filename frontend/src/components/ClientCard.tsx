import React from "react";
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconMinus,
} from "@tabler/icons-react";

interface ClientCardProps {
  name: string;
  salary: string;
  company: string;
  isSelected: boolean;
  isSelectPage: boolean;
  onToggleSelect?: () => void;
  onDeselect?: () => void;
  onEdit?: () => void;
  onRemove?: () => void;
}

export const ClientCard: React.FC<ClientCardProps> = React.memo(
  ({
    name,
    salary,
    company,
    isSelected,
    isSelectPage,
    onToggleSelect,
    onEdit,
    onRemove,
  }) => {
    return (
      <div className="border p-4 rounded-md shadow-md bg-white relative">
        <h3 className="font-bold text-center">{name}</h3>
        <p className="text-center">Salário: {salary}</p>
        <p className="text-center">Empresa: {company}</p>

        <div className="flex justify-between mt-4">
          {isSelectPage ? (
            <button
              className="ml-auto text-orange-500 hover:text-orange-600"
              onClick={onToggleSelect}
            >
              <IconMinus size={24} />
            </button>
          ) : (
            <>
              <button
                className={`text-gray-500 hover:text-black ${
                  isSelected ? "text-orange-500" : ""
                }`}
                onClick={onToggleSelect}
              >
                {isSelected ? <IconMinus size={24} /> : <IconPlus size={24} />}
              </button>
              <button
                className="text-gray-500 hover:text-orange-500"
                onClick={onEdit}
              >
                <IconPencil size={24} />
              </button>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={onRemove}
              >
                <IconTrash size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
);

export default ClientCard;
