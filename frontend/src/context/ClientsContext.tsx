import React, { createContext, useContext, useState } from "react";
import { Client } from "../types/clientTypes";

interface ClientsContextType {
  clients: Client[];
  addClient: (client: Client) => void;
  updateClient: (id: string, updatedClient: Client) => void;
  removeClient: (id: string) => void;
  toggleClientSelection: (clientId: string) => void;
  removeAllSelectedClients: () => void;
}

const ClientsContext = createContext<ClientsContextType | undefined>(undefined);

export const ClientsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clients, setClients] = useState<Client[]>([]);

  const addClient = (client: Client) => setClients((prev) => [...prev, client]);

  const updateClient = (id: string, updatedClient: Client) => {
    setClients((prev) =>
      prev.map((client) => (client.id === id ? updatedClient : client))
    );
  };

  const removeClient = (id: string) => {
    setClients((prev) => prev.filter((client) => client.id !== id));
  };

  const toggleClientSelection = (clientId: string) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === clientId
          ? { ...client, isSelected: !client.isSelected }
          : client
      )
    );
  };

  const removeAllSelectedClients = () => {
    setClients((prev) =>
      prev.map((client) => ({ ...client, isSelected: false }))
    );
  };

  return (
    <ClientsContext.Provider
      value={{
        clients,
        addClient,
        updateClient,
        removeClient,
        toggleClientSelection,
        removeAllSelectedClients,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useClients = (): ClientsContextType => {
  const context = useContext(ClientsContext);
  if (!context) {
    throw new Error("useClients must be used within a ClientsProvider");
  }
  return context;
};
