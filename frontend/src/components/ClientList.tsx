import React from "react";
import { ClientCard } from "./ClientCard";
import { Client } from "../types/clientTypes";

interface ClientListProps {
  clients: Client[];
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
  onToggleSelect?: (clientId: string) => void;
  isSelectPage: boolean;
}

export const ClientList: React.FC<ClientListProps> = React.memo(
  ({ clients, onEdit, onRemove, onToggleSelect, isSelectPage }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {clients.map((client) => {
          return (
            <ClientCard
              key={client.id}
              name={client.name}
              salary={client.salary}
              company={client.company}
              isSelected={client.isSelected}
              isSelectPage={isSelectPage}
              onEdit={onEdit ? () => onEdit(client.id) : undefined}
              onRemove={onRemove ? () => onRemove(client.id) : undefined}
              onToggleSelect={
                onToggleSelect ? () => onToggleSelect(client.id) : undefined
              }
            />
          );
        })}
      </div>
    );
  }
);

export default ClientList;
