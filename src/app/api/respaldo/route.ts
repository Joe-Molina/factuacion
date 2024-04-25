import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";
import fs from 'fs';

export async function GET() {

    //equipos, iniciosdesesion, jugadores,

    const clientes = await prisma.clientes.findMany()
    const inicios = await prisma.iniciosDeSesion.findMany()
    const facturas = await prisma.factura.findMany()
    const usuarios = await prisma.usuarios.findMany()

  try {


    const sqlStatements = `
    CREATE TABLE clientes (
      id int(11) NOT NULL COMMENT 'id del cliente\r\n',
      id_admin_creador int(11) NOT NULL COMMENT 'id del admin que lo creo',
      nombre varchar(191) NOT NULL COMMENT 'nombre del cliente',
      apellido varchar(191) NOT NULL COMMENT 'apellido del cliente',
      Domicilio varchar(191) NOT NULL COMMENT 'lugar donde vive',
      Cedul varchar(191) NOT NULL COMMENT 'cedula del cliente',
      createdAt datetime(3) NOT NULL DEFAULT current_timestamp(3),
      updatedAt datetime(3) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

      INSERT INTO clientes (id, id_admin_creador, nombre, apellido, Domicilio, Cedula, createdAt, updatedAt) VALUES

      ${
        clientes.map(equipo => (
            `(${equipo.id},${equipo.id_admin_creador},'${equipo.nombre}','${equipo.apellido}','${equipo.Domicilio}','${equipo.Cedula}','${equipo.createdAt}','${equipo.createdAt}')
     `
        ))
      }

      CREATE TABLE iniciosdesesion (
        id int(11) NOT NULL,
        id_usuario int(11) NOT NULL,
        createAt datetime(3) NOT NULL DEFAULT current_timestamp(3)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    
    INSERT INTO iniciosdesesion (id, id_usuario, createdAt, updatedAt) VALUES
    ${
        inicios.map(data => (
            `(${data.id},${data.id_usuario},'${data.createdAt}','${data.createdAt}')
   `
        ))
    }
      
    CREATE TABLE factura (
      id int(11) NOT NULL COMMENT 'id de la factura',
      id_admin_creador int(11) NOT NULL COMMENT 'id del admin que loc reo',
      id_cliente int(11) NOT NULL COMMENT 'id del cliente',
      DescripcionFactura varchar(191) NOT NULL COMMENT 'descripcion de la factura',
      createdAtdatetime(3) NOT NULL DEFAULT current_timestamp(3),
      updatedAt datetime(3) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        INSERT INTO factura (id, id_admin_creador, id_cliente, DescripcionFactura, createdAt, updatedAt) VALUES
    ${
            facturas.map(data => (
            `(${data.id},${data.id_admin_creador},${data.id_cliente},'${data.DescripcionFactura}','${data.createdAt}','${data.createdAt}')
   `
        ))
    }
        
    CREATE TABLE usuarios (
        id int(11) NOT NULL,
        username varchar(191) NOT NULL,
        email varchar(191) NOT NULL,
        password varchar(191) NOT NULL,
        tipo_usuario varchar(191) NOT NULL,
        created_at datetime(3) NOT NULL DEFAULT current_timestamp(3)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci; 

      INSERT INTO usuarios (id, username, email, password, tipo_usuario, created_at) VALUES
      ${
        usuarios.map(data => (
        `(${data.id},'${data.username}','${data.email}','${data.password}','${data.tipo_usuario}','${data.createdAt}')
     `
    ))
}



`;

const respaldo = fs.writeFile('respaldoFacturas.sql', sqlStatements, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('create_users.sql file created successfully!');
});

    
    return NextResponse.json(respaldo);




  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}




