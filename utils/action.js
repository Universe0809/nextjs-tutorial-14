"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
};
export const createTask = async (prevState, formData) => {
  const check = z.object({
    content: z.string().min(5),
  });
  try {
    const content = formData.get("content");
    check.parse({ content });
    await prisma.task.create({
      data: {
        content: content,
      },
    });

    revalidatePath("/tasks");
    return { msg: "success" };
  } catch (error) {
    console.log(error);
    return { msg: "errro" };
  }
};

export const deleteTask = async (formData) => {
  try {
    const id = formData.get("id");
    await prisma.task.delete({
      where: {
        id,
      },
    });
    revalidatePath("/tasks");
    return { msg: "success" };
  } catch (error) {
    return { msg: "error" };
  }
};

export const getSingleTask = async (id) => {
  return await prisma.task.findUnique({
    where: {
      id,
    },
  });
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");
  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
};
