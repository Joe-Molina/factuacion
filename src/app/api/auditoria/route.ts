import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auditoria = await prisma.iniciosDeSesion.findMany();
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
    const { id_usuario } = await request.json();

    const newInicioDeSesion = await prisma.iniciosDeSesion.create({
      data: {
        id_usuario,
      },
    });

    return NextResponse.json(newInicioDeSesion);
  } catch (error) {}
}
