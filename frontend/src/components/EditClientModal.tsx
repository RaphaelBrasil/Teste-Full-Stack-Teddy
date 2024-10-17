import React from "react";
import { useForm } from "react-hook-form";
import { IconX } from "@tabler/icons-react";

interface EditClientModalProps {
  client: { name: string; salary: string; company: string };
  onClose: () => void;
  onSave: (client: { name: string; salary: string; company: string }) => void;
}

interface ClientFormInputs {
  name: string;
  salary: string;
  company: string;
}

export const EditClientModal: React.FC<EditClientModalProps> = ({
  client,
  onClose,
  onSave,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormInputs>({
    defaultValues: {
      name: client.name,
      salary: client.salary,
      company: client.company,
    },
  });

  const onSubmit = (data: ClientFormInputs) => {
    onSave(data);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <IconX />
        </button>
        <h2 className="text-lg font-bold mb-4">
          {client.name ? "Editar cliente:" : "Criar cliente:"}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Digite o nome:"
            {...register("name", { required: "Nome é obrigatório" })}
            className={`border w-full p-2 rounded mt-1 ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="text"
            placeholder="Digite o salário:"
            {...register("salary", { required: "Salário é obrigatório" })}
            className={`border w-full p-2 rounded mt-1 ${
              errors.salary ? "border-red-500" : ""
            }`}
          />
          {errors.salary && (
            <p className="text-red-500 text-sm">{errors.salary.message}</p>
          )}

          <input
            type="text"
            placeholder="Digite o valor da empresa:"
            {...register("company", { required: "Empresa é obrigatória" })}
            className={`border w-full p-2 rounded mt-1 ${
              errors.company ? "border-red-500" : ""
            }`}
          />
          {errors.company && (
            <p className="text-red-500 text-sm">{errors.company.message}</p>
          )}

          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="submit"
              className="w-full border bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-400"
            >
              {client.name ? "Editar cliente" : "Criar cliente"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditClientModal;
