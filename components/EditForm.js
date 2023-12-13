import { editTask } from "../utils/action";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form
      action={editTask}
      className="border border-base-300 max-w-sm rounded-lg p-12 mt-6"
    >
      <input value={id} hidden readOnly name="id" />
      <input
        defaultValue={content}
        name="content"
        required
        type="text"
        className="input input-bordered"
      />
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-success"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Update
      </button>
    </form>
  );
};

export default EditForm;
