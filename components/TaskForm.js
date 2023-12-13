"use client";

import { useEffect } from "react";
import { createTask } from "../utils/action";

import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="join-item btn btn-primary"
      type="submit"
      disabled={pending}
    >
      {pending ? "Wait a min..." : "Add Task"}
    </button>
  );
};
const initialState = {
  msg: null,
};
const TaskForm = () => {
  const [state, formAction] = useFormState(createTask, initialState);

  useEffect(() => {
    if (state.msg === "success") {
      toast.success("Task created successfully");
    } else if (state.msg) {
      toast.error("Task creation error");
    }
  }, [state]);
  return (
    <form action={formAction}>
      <div className="join w-full mb-8">
        <input
          className="join-item input input-bordered w-full"
          placeholder="Type Here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskForm;
