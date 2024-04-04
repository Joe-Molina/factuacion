import { createCliente } from "./createCliente";

export const enviarDatosCliente = async (e: any, data: any) => {
  e.preventDefault();

  const { id_admin_creador, nombre, apellido, Domicilio, Cedula } = data;

  await createCliente({
    id_admin_creador,
    nombre,
    apellido,
    Domicilio,
    Cedula,
  });

  location.reload();
};
