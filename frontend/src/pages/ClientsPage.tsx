import React, { useState } from "react";
import { ClientList } from "../components/ClientList";
import { EditClientModal } from "../components/EditClientModal";
import { Header } from "../components/Header";

const mockClients = [
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  // Adicione mais clientes conforme necessário
];

export const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState(mockClients);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // Novo estado para adicionar
  const [selectedClientIndex, setSelectedClientIndex] = useState<number | null>(
    null
  );

  const handleEdit = (index: number) => {
    setSelectedClientIndex(index);
    setIsEditing(true);
  };

  const handleSave = (updatedClient: {
    name: string;
    salary: string;
    company: string;
  }) => {
    if (selectedClientIndex !== null) {
      const updatedClients = clients.map((client, i) =>
        i === selectedClientIndex ? updatedClient : client
      );
      setClients(updatedClients);
    } else {
      // Adiciona o novo cliente
      setClients([...clients, updatedClient]);
    }
    setIsEditing(false);
    setIsAdding(false); // Fecha o modal de adição também
  };

  const handleRemove = (index: number) => {
    setClients(clients.filter((_, i) => i !== index));
  };

  const handleAddClient = () => {
    setIsAdding(true);
  };

  return (
    <div className="p-6">
      <Header />
      <h1 className="text-xl font-bold mb-4 mt-24">Clientes encontrados:</h1>

      <ClientList
        clients={clients}
        onEdit={handleEdit}
        onRemove={handleRemove}
      />
      <div className="flex justify-center mt-6">
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
          onClick={handleAddClient}
        >
          Criar cliente
        </button>
      </div>
      {(isEditing || isAdding) && (
        <EditClientModal
          client={
            isEditing
              ? clients[selectedClientIndex!]
              : { name: "", salary: "", company: "" }
          }
          onClose={() => {
            setIsEditing(false);
            setIsAdding(false);
          }}
          onSave={handleSave}
        />
      )}
    </div>
  );
};
