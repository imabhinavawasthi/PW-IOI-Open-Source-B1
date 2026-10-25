"use client";

import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "High",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim()) return;

    onAddTask({
      title: formData.title.trim(),
      description: formData.description.trim(),
      priority: formData.priority,
    });

    setFormData({ title: "", description: "", priority: "High" });
  };

  return (
    <section className="task-form">
      <h2>Add New Task</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter task description"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select name="priority" value={formData.priority} onChange={handleChange}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </section>
  );
}