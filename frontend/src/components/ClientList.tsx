import React from "react";
import { ClientCard } from "./ClientCard";

interface ClientListProps {
  clients: { name: string; salary: string; company: string }[];
  onEdit: (index: number) => void;
  onRemove: (index: number) => void;
}

export const ClientList: React.FC<ClientListProps> = ({
  clients,
  onEdit,
  onRemove,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {clients.map((client, index) => (
        <ClientCard
          key={index}
          name={client.name}
          salary={client.salary}
          company={client.company}
          onEdit={() => onEdit(index)}
          onRemove={() => onRemove(index)}
          onAdd={function (): void {
            throw new Error("Função não implementada");
          }}
        />
      ))}
    </div>
  );
};
