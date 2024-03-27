import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const productos = await prisma.productos.findMany();
    return NextResponse.json(productos);
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
    const { id_admin_creador, nombre, descripcion, precio } =
      await request.json();

    const newProducto = await prisma.productos.create({
      data: {
        id_admin_creador,
        nombre,
        descripcion,
        precio,
      },
    });

    return NextResponse.json(newProducto);
  } catch (error) {}
}
