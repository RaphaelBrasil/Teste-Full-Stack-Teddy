import React, { useEffect, useState } from "react";
import ClientList from "../components/ClientList";
import EditClientModal from "../components/EditClientModal";
import RemoveClientModal from "../components/RemoveClientModal";
import Pagination from "../components/Pagination";
import { Client } from "../types/clientTypes";
import {
  createClient,
  updateClient,
  deleteClient,
  getClients,
} from "../services/clientService";

export const ClientsPage: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [clientsPerPage, setClientsPerPage] = useState(16);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const initialClients = await getClients();
        setClients(initialClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  const totalClients = clients.length;
  const totalPages = Math.ceil(totalClients / clientsPerPage);
  const currentClients = clients.slice(
    (currentPage - 1) * clientsPerPage,
    currentPage * clientsPerPage
  );

  const handleEdit = (id: string) => {
    setSelectedClientId(id);
    setIsEditing(true);
  };

  const handleSave = async (updatedClient: Client) => {
    try {
      if (selectedClientId) {
        await updateClient(selectedClientId, updatedClient);
        const updatedClients = await getClients();
        setClients(updatedClients);
      } else {
        const createdClient = await createClient(updatedClient);
        setClients((prevClients) => [...prevClients, createdClient]);
      }
    } catch (error) {
      console.error("Error saving client:", error);
    }
    setIsEditing(false);
    setIsAdding(false);
  };

  const handleRemove = (id: string) => {
    setSelectedClientId(id);
    setIsRemoving(true);
  };

  const confirmRemove = async () => {
    if (selectedClientId) {
      try {
        await deleteClient(selectedClientId);
        const updatedClients = await getClients();
        setClients(updatedClients);
      } catch (error) {
        console.error("Error removing client:", error);
      }
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

  const handleToggleSelect = async (clientId: string) => {
    try {
      // Primeiro, obter o cliente atual para alternar a seleção
      const clientToUpdate = clients.find((client) => client.id === clientId);
      if (clientToUpdate) {
        // Atualizar o backend
        await updateClient(clientId, {
          isSelected: !clientToUpdate.isSelected,
        });

        // Após a atualização no backend, buscar os clientes novamente
        const updatedClients = await getClients();
        setClients(updatedClients);
      }
    } catch (error) {
      console.error("Error updating client selection:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-md md:text-md">
          <span className="font-bold">{totalClients}</span> Clientes
          encontrados:
        </h1>

        <div className="text-md md:text-md">
          <label htmlFor="clientsPerPage" className="text-md md:text-md">
            Clientes por página:
          </label>
          <select
            id="clientsPerPage"
            value={clientsPerPage}
            onChange={handleClientsPerPageChange}
            className="text-md md:text-md border rounded p-1 bg-transparent"
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
        onToggleSelect={handleToggleSelect} // Passa a função de alternar seleção
        isSelectPage={false}
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
              ? clients.find((client) => client.id === selectedClientId) || {
                  name: "",
                  salary: "",
                  company: "",
                }
              : { name: "", salary: "", company: "" }
          }
          onClose={() => {
            setIsEditing(false);
            setIsAdding(false);
          }}
          onSave={handleSave}
        />
      )}

      {isRemoving && selectedClientId && (
        <RemoveClientModal
          client={clients.find((client) => client.id === selectedClientId)!}
          onClose={() => setIsRemoving(false)}
          onConfirm={confirmRemove}
        />
      )}
    </>
  );
};

export default ClientsPage;
