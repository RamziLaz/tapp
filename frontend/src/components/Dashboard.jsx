import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../actions/taskActions";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const Dashboard = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleTaskClick = (task) => {
    // Implement what happens when a task is clicked
  };

  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
    </div>
  );
};

export default Dashboard;
