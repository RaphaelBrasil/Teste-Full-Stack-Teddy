import React from "react";
import { ClientCard } from "./ClientCard";
interface Client {
  name: string;
  salary: string;
  company: string;
}

interface ClientListProps {
  clients: Client[];
  onEdit: (index: number) => void;
  onRemove: (index: number) => void;
  onSelect: (client: Client) => void;
  selectedClients: Client[];
}

export const ClientList: React.FC<ClientListProps> = ({
  clients,
  onEdit,
  onRemove,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {clients.map((client, index) => {
        return (
          <ClientCard
            key={index}
            name={client.name}
            salary={client.salary}
            company={client.company}
            onEdit={() => onEdit(index)}
            onRemove={() => onRemove(index)}
            onSelect={() => onSelect(client)}
          />
        );
      })}
    </div>
  );
};

export default ClientList;
