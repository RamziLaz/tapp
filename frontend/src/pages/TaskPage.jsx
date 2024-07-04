import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../components/TaskList";
import "./TaskPage.css";
import coin from "../coin.png";
import IconBar from "../components/IconBar";
import TaskModal from "../components/TaskModal";
import { completeTask } from "../actions/taskActions";

const TaskPage = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const score = useSelector((state) => state.tasks.score);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskComplete = (id, reward) => {
    dispatch(completeTask(id, reward));
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="task-page">
      <div className="title">
        <img className="coin" src={coin} alt="" />
        <h2>Earn more token</h2>
        <div className="score">Score: {score}</div>
      </div>

      <TaskList tasks={tasks} onTaskClick={handleTaskClick} />

      {selectedTask && (
        <TaskModal
          isOpen={!!selectedTask}
          onRequestClose={closeModal}
          task={selectedTask}
          onTaskComplete={() =>
            handleTaskComplete(selectedTask.id, selectedTask.reward)
          }
        />
      )}
      <IconBar />
    </div>
  );
};

export default TaskPage;
