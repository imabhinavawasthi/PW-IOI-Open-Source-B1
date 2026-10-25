"use client";
import { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import FilterButtons from "../components/FilterButtons";
import TaskStats from "../components/TaskStats";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Finish React basics.",
      completed: false,
      priority: "High",
    },
    {
      id: 2,
      title: "Learn Next.js",
      description: "Build Task Tracker.",
      completed: true,
      priority: "Medium",
    },
  ]);
  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    setTasks((prevTasks) => [
      {
        id: Date.now(),
        completed: false,
        ...task,
      },
      ...prevTasks,
    ]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const visibleTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <main>
      <Header />
      <section>
        <TaskStats
          total={tasks.length}
          completed={completedCount}
          pending={pendingCount}
        />

        <FilterButtons currentFilter={filter} onFilterChange={setFilter} />

        <TaskList
          tasks={visibleTasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />

        <TaskForm onAddTask={addTask} />
      </section>
    </main>
  );
}