import Link from "next/link";
import EditForm from "../../../components/EditForm";
import { getSingleTask } from "../../../utils/action";

const SingleTaskPage = async ({ params }) => {
  const task = await getSingleTask(params.id);
  return (
    <div className="mb-16">
      <Link href="/tasks" className="btn btn-accent capitalize">
        Back to tasks
      </Link>
      <EditForm task={task} />
    </div>
  );
};

export default SingleTaskPage;
