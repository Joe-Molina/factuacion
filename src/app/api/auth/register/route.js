import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { prisma } from "../../../libs/prisma";

export async function POST(request) {
  try {

    const data = await request.json();

    console.log(data)

    const userFound = await prisma.usuarios.findFirst({
      where: {
        email: data.email,
      },
    });


    if (userFound) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    const usernameFound = await prisma.usuarios.findFirst({
      where: {
        username: data.username,
      },
    });

    if (usernameFound) {
      return NextResponse.json(
        {
          message: "username already exists",
        },
        {
          status: 400,
        }
      );
    }



    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = await prisma.usuarios.create({
      data: {
        id: data.id,
        username: data.username,
        tipo_usuario: data.tipo_usuario,
        email: data.email,
        password: hashedPassword,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(user);
  } catch (error) {
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
