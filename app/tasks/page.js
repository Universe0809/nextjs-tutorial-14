import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";

// export const dynamic = "force-dynamic";
const TasksPage = () => {
  return (
    <div className="mt-8">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TasksPage;
