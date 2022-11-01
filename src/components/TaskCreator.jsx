import { useState } from "react";
export const TaskCreator = () => {
  const [newTaskName, setNewTaskName] = useState();

  const handleSubit = (e) => {
    e.preventDefault();
    localStorage.setItem("tasks", newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>Save Task</button>
    </form>
  );
};
