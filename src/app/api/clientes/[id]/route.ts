import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const cliente = await prisma.clientes.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!cliente) {
      return NextResponse.json(
        { message: "cliente no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(cliente);
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

export async function DELETE(request: Request, { params }: Params) {

  const idCliente = Number(params.id)

  try {

       const deleteCliente = await prisma.clientes.delete({
          where: {
           id: idCliente
          },
      });
      
      
      if (!deleteCliente) {
        return NextResponse.json(
          { message: "Cliente no encontrada" },
          { status: 404 }
        );
      }
      
    return NextResponse.json(deleteCliente);
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

export async function PUT(request: Request, { params }: Params) {
  try {
    const { nombre, apellido, Domicilio, Cedula } = await request.json();

    const updateCliente = await prisma.clientes.update({
      where: {
        id: Number(params.id),
      },
      data: {
        nombre,
        apellido,
        Domicilio,
        Cedula,
      },
    });

    if (!updateCliente) {
      return NextResponse.json(
        { message: "Cliente no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(updateCliente);
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
