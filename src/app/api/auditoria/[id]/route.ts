import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const sesion = await prisma.iniciosDeSesion.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!sesion) {
      return NextResponse.json(
        { message: "sesion no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(sesion);
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
  try {
    const deleteSesion = await prisma.iniciosDeSesion.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deleteSesion) {
      return NextResponse.json(
        { message: "sesion no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(deleteSesion);
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
    const { id_usuario } = await request.json();

    const updateSesion = await prisma.iniciosDeSesion.update({
      where: {
        id: Number(params.id),
      },
      data: {
        id_usuario,
      },
    });

    if (!updateSesion) {
      return NextResponse.json(
        { message: "sesion no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(updateSesion);
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
