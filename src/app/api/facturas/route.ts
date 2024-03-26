import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const auditoria = await prisma.factura.findMany();
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
    const { id_admin_creador, id_cliente, DescripcionFactura, createdAt } =
      await request.json();

    const newFactura = await prisma.factura.create({
      data: {
        id_admin_creador,
        id_cliente,
        DescripcionFactura,
        createdAt,
      },
    });

    return NextResponse.json(newFactura);
  } catch (error) {}
}
