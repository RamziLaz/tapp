import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onTaskClick }) => (
  <div>
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        icon={task.icon}
        description={task.description}
        reward={task.reward}
        completed={task.completed}
        onClick={() => onTaskClick(task)}
      />
    ))}
  </div>
);

export default TaskList;
