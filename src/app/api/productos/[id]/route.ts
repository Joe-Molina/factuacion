import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const producto = await prisma.productos.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!producto) {
      return NextResponse.json(
        { message: "producto no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(producto);
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
    const deleteProduto = await prisma.productos.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deleteProduto) {
      return NextResponse.json(
        { message: "Produto no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(deleteProduto);
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
    const { nombre, descripcion, precio } = await request.json();

    const updateProducto = await prisma.productos.update({
      where: {
        id: Number(params.id),
      },
      data: {
        nombre,
        descripcion,
        precio,
      },
    });

    if (!updateProducto) {
      return NextResponse.json(
        { message: "Producto no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(updateProducto);
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
