import React, { createContext, useContext, useState } from "react";

interface Client {
  name: string;
  salary: string;
  company: string;
}

interface SelectedClientsContextType {
  selectedClients: Client[];
  addSelectedClient: (client: Client) => void;
  removeSelectedClient: (client: Client) => void;
}

const SelectedClientsContext = createContext<
  SelectedClientsContextType | undefined
>(undefined);

export const SelectedClientsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [selectedClients, setSelectedClients] = useState<Client[]>([]);

  const addSelectedClient = (client: Client) => {
    setSelectedClients((prev) => [...prev, client]);
  };

  const removeSelectedClient = (client: Client) => {
    setSelectedClients((prev) => prev.filter((c) => c !== client));
  };

  return (
    <SelectedClientsContext.Provider
      value={{ selectedClients, addSelectedClient, removeSelectedClient }}
    >
      {children}
    </SelectedClientsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSelectedClients = () => {
  const context = useContext(SelectedClientsContext);
  if (!context) {
    throw new Error(
      "useSelectedClients deve ser usado dentro de um SelectedClientsProvider"
    );
  }
  return context;
};
