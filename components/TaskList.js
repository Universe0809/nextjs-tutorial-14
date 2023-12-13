import Link from "next/link";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "../utils/action";

const TaskList = async () => {
  const data = await getAllTasks();
  if (data.length === 0) return <div>No task</div>;
  return (
    <div>
      <ul>
        {data.map((item) => {
          return (
            <li
              className="flex justify-between px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
              key={item.id}
            >
              <h2
                className={`text-lg capitalize ${
                  item.completed ? "line-through" : null
                }`}
              >
                {item.content}
              </h2>
              <div className="flex items-center gap-6">
                <Link
                  href={`/tasks/${item.id}`}
                  className="btn btn-accent btn-xs"
                >
                  edit
                </Link>
                <DeleteForm id={item.id} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
