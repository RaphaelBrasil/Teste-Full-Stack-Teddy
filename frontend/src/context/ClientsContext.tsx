// ClientsContext.tsx
import React, { createContext, useContext, useState } from "react";

interface Client {
  name: string;
  salary: string;
  company: string;
}

interface ClientsContextType {
  clients: Client[];
  addClient: (client: Client) => void;
  updateClient: (index: number, updatedClient: Client) => void;
  removeClient: (index: number) => void;
}

const ClientsContext = createContext<ClientsContextType | undefined>(undefined);

export const ClientsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const mockClients = [
    {
      id: "1",
      name: "Carlos",
      salary: "R$ 4.500,00",
      company: "R$ 150.000,00",
    },
    {
      id: "2",
      name: "Eduardo",
      salary: "R$ 3.500,00",
      company: "R$ 120.000,00",
    },
    {
      id: "3",
      name: "Eduardo",
      salary: "R$ 3.500,00",
      company: "R$ 120.000,00",
    },
    {
      id: "4",
      name: "Eduardo",
      salary: "R$ 3.500,00",
      company: "R$ 120.000,00",
    },
  ];
  const [clients, setClients] = useState<Client[]>(mockClients);

  const addClient = (client: Client) => setClients((prev) => [...prev, client]);
  const updateClient = (index: number, updatedClient: Client) => {
    setClients((prev) =>
      prev.map((client, i) => (i === index ? updatedClient : client))
    );
  };
  const removeClient = (index: number) => {
    setClients((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ClientsContext.Provider
      value={{ clients, addClient, updateClient, removeClient }}
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
