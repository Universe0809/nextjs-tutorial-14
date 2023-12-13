import prisma from "../../utils/db";

export const dynamic = "force-dynamic";

const prismaHandler = async () => {
  const data = await prisma.task.findMany({ orderBy: { createdAt: "desc" } });
  return data;
};
const PrismaPage = async () => {
  const data = await prismaHandler();
  return (
    <div>
      {data.map((item) => {
        return <div>{item.content}</div>;
      })}
    </div>
  );
};

export default PrismaPage;
