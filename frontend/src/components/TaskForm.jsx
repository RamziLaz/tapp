import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";
import "./TaskForm.css";

const TaskForm = () => {
  const dispatch = useDispatch();
  const [taskDescription, setTaskDescription] = useState("");
  const [taskReward, setTaskReward] = useState("");
  const [taskIcon, setTaskIcon] = useState("");
  const [taskLink, setTaskLink] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      description: taskDescription,
      reward: parseInt(taskReward, 10),
      icon: taskIcon,
      link: taskLink,
      completed: false,
    };
    dispatch(addTask(newTask));
    setTaskDescription("");
    setTaskReward("");
    setTaskIcon("");
    setTaskLink("");
  };

  return (
    <div className="task-form">
      <h3>Add New Task</h3>
      <form onSubmit={handleAddTask}>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Reward</label>
          <input
            type="number"
            value={taskReward}
            onChange={(e) => setTaskReward(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Icon</label>
          <select
            value={taskIcon}
            onChange={(e) => setTaskIcon(e.target.value)}
            required
          >
            <option value="">Select Icon</option>
            <option value="youtube">YouTube</option>
            <option value="telegram">Telegram</option>
            <option value="twitter">Twitter</option>
            <option value="calendar">Calendar</option>
            <option value="hamster">Hamster</option>
          </select>
        </div>
        <div className="form-group">
          <label>Link</label>
          <input
            type="text"
            value={taskLink}
            onChange={(e) => setTaskLink(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
