import { useState } from "react";

export const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState(" ");

  const handleSubit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubit} className='my-2 row'>
      <div className="col-9">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        className='form-control'
      />
      </div>
      <div className="col-3">
      <button className="btn btn-primary">Save Task</button>
      </div>
    </form>
  );
};
