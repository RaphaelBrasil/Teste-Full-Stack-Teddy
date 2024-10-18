import React, { useState, useEffect } from "react";
import { useClients } from "../context/ClientsContext";
import ClientList from "../components/ClientList";
import RemoveAllSelectedClientsModal from "../components/RemoveAllSelectedClientsModal";
import { Client } from "../types/clientTypes";

const SelectedClientsPage: React.FC = () => {
  const { clients, toggleClientSelection, removeAllSelectedClients } =
    useClients();

  const [selectedClients, setSelectedClients] = useState<Client[]>([]);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const updatedSelectedClients = clients
      .filter((client) => client.isSelected && client.id)
      .map((client) => ({
        id: client.id!,
        name: client.name,
        salary: client.salary,
        company: client.company,
        isSelected: client.isSelected,
      }));

    setSelectedClients(updatedSelectedClients);
  }, [clients]);

  const handleToggleSelect = (client: Client) => {
    toggleClientSelection(client.id);
  };

  const confirmRemove = () => {
    removeAllSelectedClients();
    setIsRemoving(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-md md:text-md">
          <span className="font-bold">{selectedClients.length}</span> Clientes
          selecionados:
        </h1>

        <div className="text-md md:text-md">
          <label htmlFor="dummy" className="text-md md:text-md">
            Clientes por página:
          </label>
          <select
            id="dummy"
            className="text-md md:text-md border rounded p-1 bg-transparent"
            disabled
          >
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
          </select>
        </div>
      </div>

      <ClientList
        clients={selectedClients}
        onToggleSelect={handleToggleSelect}
        isSelectPage={true}
      />

      <div className="flex justify-center mt-4">
        <button
          className="w-full border border-orange-500 text-orange-500 py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition-colors"
          onClick={() => setIsRemoving(true)}
        >
          Limpar clientes selecionados
        </button>
      </div>

      {isRemoving && (
        <RemoveAllSelectedClientsModal
          onConfirm={confirmRemove}
          onClose={() => setIsRemoving(false)}
        />
      )}
    </>
  );
};

export default SelectedClientsPage;
