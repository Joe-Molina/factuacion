import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const usuario = await prisma.usuarios.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!usuario) {
      return NextResponse.json(
        { message: "usuario no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(usuario);
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
    const deleteUsuario = await prisma.usuarios.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deleteUsuario) {
      return NextResponse.json(
        { message: "Usuario no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(deleteUsuario);
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
    const { username, email, password } = await request.json();

    const updateUsuario = await prisma.usuarios.update({
      where: {
        id: Number(params.id),
      },
      data: {
        username,
        email,
        password,
      },
    });

    if (!updateUsuario) {
      return NextResponse.json(
        { message: "Usuario no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(updateUsuario);
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
