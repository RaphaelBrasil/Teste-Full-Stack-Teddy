import React, { useState } from "react";

interface EditClientModalProps {
  client: { name: string; salary: string; company: string };
  onClose: () => void;
  onSave: (client: { name: string; salary: string; company: string }) => void;
}

export const EditClientModal: React.FC<EditClientModalProps> = ({
  client,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState(client.name);
  const [salary, setSalary] = useState(client.salary);
  const [company, setCompany] = useState(client.company);

  const handleSubmit = () => {
    onSave({ name, salary, company });
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {client.name ? "Editar cliente" : "Criar cliente"}
        </h2>
        <label className="block mb-2">
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border w-full p-2 rounded mt-1"
          />
        </label>
        <label className="block mb-2">
          Salário:
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="border w-full p-2 rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          Empresa:
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border w-full p-2 rounded mt-1"
          />
        </label>
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            onClick={handleSubmit}
          >
            {client.name ? "Editar cliente" : "Criar cliente"}
          </button>
        </div>
      </div>
    </div>
  );
};
