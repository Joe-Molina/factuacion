import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { id_factura_referenciada, id_producto, cantidad } =
      await request.json();

    const newDetalle = await prisma.detallesFactura.create({
      data: {
        id_factura_referenciada,
        id_producto,
        cantidad,
      },
    });

    return NextResponse.json(newDetalle);
  } catch (error) {}
}
