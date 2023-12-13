import { deleteTask } from "../utils/action";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input value={id} hidden type="text" name="id" readOnly />
      <button type="submit" className="btn btn-accent btn-xs">
        Delete
      </button>
    </form>
  );
};

export default DeleteForm;
