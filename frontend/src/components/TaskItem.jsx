import React from "react";
import "./TaskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faCoins } from "@fortawesome/free-solid-svg-icons";

const icons = {
  youtube: <FontAwesomeIcon icon={faYoutube} style={{ color: "red" }} />,
  telegram: <FontAwesomeIcon icon={faTelegram} style={{ color: "#0088cc" }} />,
  twitter: <FontAwesomeIcon icon={faTwitter} style={{ color: "#1DA1F2" }} />,
  calendar: <FontAwesomeIcon icon={faCalendarAlt} style={{ color: "white" }} />,
  hamster: <FontAwesomeIcon icon={faCoins} style={{ color: "orange" }} />,
};

const TaskItem = ({ icon, description, reward, completed, onClick }) => (
  <div className="task-item" onClick={onClick}>
    <div className="task-icon">{icons[icon]}</div>
    <div className="task-details">
      <div className="task-description">{description}</div>
      <div className="task-reward">
        <FontAwesomeIcon icon={faCoins} style={{ color: "gold" }} /> {reward}
      </div>
    </div>
    <div className="task-status">
      {completed ? (
        <span className="completed">✔️</span>
      ) : (
        <span className="not-completed">❌</span>
      )}
    </div>
  </div>
);

export default TaskItem;
