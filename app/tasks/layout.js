const TaskLayout = ({ children }) => {
  return (
    <div className="max-w-xl">
      <div className="mockup-code mb-8">
        <pre data-prefix="$">
          <code>This is task page</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default TaskLayout;
