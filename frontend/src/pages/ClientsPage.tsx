import React, { useState } from "react";
import ClientList from "../components/ClientList";
import EditClientModal from "../components/EditClientModal";
import RemoveClientModal from "../components/RemoveClientModal";
import Pagination from "../components/Pagination";

const mockClients = [
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Carlos", salary: "R$ 4.500,00", company: "R$ 150.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
  { name: "Eduardo", salary: "R$ 3.500,00", company: "R$ 120.000,00" },
];

export const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState(mockClients);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [selectedClientIndex, setSelectedClientIndex] = useState<number | null>(
    null
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage, setClientsPerPage] = useState(16);

  const totalClients = clients.length;
  const totalPages = Math.ceil(totalClients / clientsPerPage);
  const currentClients = clients.slice(
    (currentPage - 1) * clientsPerPage,
    currentPage * clientsPerPage
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

  const handleClientsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setClientsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 ">
        <h1 className="text-md md:text-md">
          <span className="font-bold">{totalClients}</span> Clientes encontrados
        </h1>

        <div className="text-md md:text-md">
          <label htmlFor="clientsPerPage" className="text-md md:text-md">
            Clientes por página:
          </label>
          <select
            id="clientsPerPage"
            value={clientsPerPage}
            onChange={handleClientsPerPageChange}
            className="text-md md:text-md border rounded p-1"
          >
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={64}>64</option>
          </select>
        </div>
      </div>

      <ClientList
        clients={currentClients}
        onEdit={handleEdit}
        onRemove={handleRemove}
      />

      <div className="flex justify-center mt-4">
        <button
          className="w-full border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition-colors"
          onClick={handleAddClient}
        >
          Criar cliente
        </button>
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

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
