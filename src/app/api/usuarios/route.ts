import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const usuarios = await prisma.usuarios.findMany();
    return NextResponse.json(usuarios);
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
    const { username, email, password, tipo_usuario } = await request.json();

    const newUsuario = await prisma.usuarios.create({
      data: {
        username,
        email,
        password,
        tipo_usuario,
      },
    });

    return NextResponse.json(newUsuario);
  } catch (error) {}
}
