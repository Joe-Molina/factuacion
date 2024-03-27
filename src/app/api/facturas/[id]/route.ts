import { prisma } from "@/app/libs/prisma";
import { NextResponse } from "next/server";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const factura = await prisma.factura.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!factura) {
      return NextResponse.json(
        { message: "factura no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(factura);
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
    const deleteFactura = await prisma.factura.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!deleteFactura) {
      return NextResponse.json(
        { message: "Factura no encontrada" },
        { status: 404 }
      );
    }

    return NextResponse.json(deleteFactura);
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
  // las facturas no se modificaran.
}
