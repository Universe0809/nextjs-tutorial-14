import { NextResponse } from "next/server.js";
import prisma from "../../../utils/db.ts";

export const GET = async (request) => {
  const res = await prisma.task.findMany({});
  return Response.json({ data: res });
};

export const POST = async (request) => {
  const data = await request.json();
  console.log(data);
  const task = await prisma.task.create({
    data: {
      content: data.content,
    },
  });
  return NextResponse.json({ data: task });
};
