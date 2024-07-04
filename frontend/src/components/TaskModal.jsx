import React from "react";
import Modal from "react-modal";
import "./TaskModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Example for Twitter

const TaskModal = ({ isOpen, onRequestClose, task, onTaskComplete }) => {
  const handleRedirect = () => {
    window.open(task.link, "_blank", "noopener,noreferrer");
    onTaskComplete();
    onRequestClose();
  };

  if (!task) {
    return null;
  }

  const getIcon = (icon) => {
    switch (icon) {
      case "twitter":
        return <FontAwesomeIcon icon={faTwitter} className="task-icon-modal" />;
      case "telegram":
        return (
          <FontAwesomeIcon icon={faTelegram} className="task-icon-modal" />
        );
      // Add cases for other icons as needed
      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="task-modal"
      overlayClassName="task-modal-overlay"
      closeTimeoutMS={300}
    >
      <div className="task-modal-content">
        <button className="close-button" onClick={onRequestClose}>
          ✖️
        </button>
        {getIcon(task.icon)}
        <h2 className="task-modal-title">{task.description}</h2>
        <p className="task-modal-reward">
          <FontAwesomeIcon icon={faCoins} style={{ color: "gold" }} />{" "}
          {task.reward}
        </p>
        <button onClick={handleRedirect} className="join-button">
          Join
        </button>
      </div>
    </Modal>
  );
};

export default TaskModal;
