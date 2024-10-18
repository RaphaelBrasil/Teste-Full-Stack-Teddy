// clientService.ts
import axios from "axios";
import { Client } from "../types/clientTypes";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/clients";

export const getClients = async (): Promise<Client[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createClient = async (client: Client): Promise<Client> => {
  const response = await axios.post(API_URL, client);
  return response.data;
};

export const deleteClient = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateClient = async (
  id: string,
  client: Partial<Client>
): Promise<Client> => {
  const response = await axios.put(`${API_URL}/${id}`, client);
  return response.data;
};
