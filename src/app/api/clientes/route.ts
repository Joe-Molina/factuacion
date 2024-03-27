import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const clientes = await prisma.clientes.findMany();
    return NextResponse.json(clientes);
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

export async function POST(request: Request) {
  try {
    const { id_admin_creador, nombre, apellido, Domicilio, Cedula } =
      await request.json();

    const newInicioDeSesion = await prisma.clientes.create({
      data: {
        id_admin_creador,
        nombre,
        apellido,
        Domicilio,
        Cedula,
      },
    });

    return NextResponse.json(newInicioDeSesion);
  } catch (error) {}
}
