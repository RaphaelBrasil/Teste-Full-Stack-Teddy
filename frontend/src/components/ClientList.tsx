import React from "react";
import { ClientCard } from "./ClientCard";
import { Client } from "../types/clientTypes";

interface ClientListProps {
  clients: Client[];
  onEdit?: (index: number) => void;
  onRemove?: (index: number) => void;
  onToggleSelect?: (client: Client) => void;
  isSelectPage: boolean;
}

export const ClientList: React.FC<ClientListProps> = React.memo(
  ({ clients, onEdit, onRemove, onToggleSelect, isSelectPage }) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {clients.map((client, index) => {
          return (
            <ClientCard
              key={client.id || index}
              name={client.name}
              salary={client.salary}
              company={client.company}
              isSelected={client.isSelected}
              isSelectPage={isSelectPage}
              onEdit={onEdit ? () => onEdit(index) : undefined}
              onRemove={onRemove ? () => onRemove(index) : undefined}
              onToggleSelect={
                onToggleSelect ? () => onToggleSelect(client) : undefined
              }
            />
          );
        })}
      </div>
    );
  }
);

export default ClientList;
