import React, { useState } from "react";
import { ClientList } from "../components/ClientList";
import { EditClientModal } from "../components/EditClientModal";
import { RemoveClientModal } from "../components/RemoveClientModal";

const mockClients = [
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
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
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
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
      setClients([...clients, updatedClient]);
    }
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleRemove = (index: number) => {
    setSelectedClientIndex(index);
    setIsRemoving(true);
  };

  const confirmRemove = () => {
    if (selectedClientIndex !== null) {
      setClients(clients.filter((_, i) => i !== selectedClientIndex));
    }
    setIsRemoving(false);
  };

  const handleAddClient = () => {
    setIsAdding(true);
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-4 ">Clientes encontrados:</h1>
      <ClientList
        clients={clients}
        onEdit={handleEdit}
        onRemove={handleRemove}
      />
      <div className="flex justify-center mt-6">
        <button
          className="w-full border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition-colors"
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
      {isRemoving && selectedClientIndex !== null && (
        <RemoveClientModal
          client={clients[selectedClientIndex]}
          onClose={() => setIsRemoving(false)}
          onConfirm={confirmRemove}
        />
      )}
    </>
  );
};

export default ClientsPage;
