import TaskCard from "./TaskCard";

export default function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  if (tasks.length === 0) {
    return <p>No tasks found for this filter.</p>;
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </>
  );
}