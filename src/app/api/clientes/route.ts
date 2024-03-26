import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auditoria = await prisma.clientes.findMany();
    return NextResponse.json(auditoria);
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
    const { id_admin_creador, nombre, apellido, Domicilio, Cedula, createdAt } =
      await request.json();

    const newInicioDeSesion = await prisma.clientes.create({
      data: {
        id_admin_creador,
        nombre,
        apellido,
        Domicilio,
        Cedula,
        createdAt,
      },
    });

    return NextResponse.json(newInicioDeSesion);
  } catch (error) {}
}
