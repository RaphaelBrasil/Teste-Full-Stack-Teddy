// SelectedClientsPage.tsx
import React from "react";
import { useSelectedClients } from "../context/SelectedClientsContext";

const SelectedClientsPage: React.FC = () => {
  const { selectedClients } = useSelectedClients();

  return (
    <div>
      <h1>Clientes Selecionados</h1>
      <ul>
        {selectedClients.map((client, index) => (
          <li key={index}>
            {client.name} - {client.salary} - {client.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedClientsPage;
