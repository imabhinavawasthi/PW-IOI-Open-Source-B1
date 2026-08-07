export default function TaskCard({ task, deleteTask, toggleTaskCompletion }) {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>

      <p>{task.description}</p>

      <p>
        <strong>Priority:</strong> {task.priority}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {task.completed ? "Completed ✓" : "Pending"}
      </p>

      <div className="task-actions">
        <button type="button" onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? "Mark Pending" : "Mark Completed"}
        </button>

        <button type="button" onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}