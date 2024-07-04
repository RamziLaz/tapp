import React from "react";
import "./IconBar.css";
import { Link } from "react-router-dom";
import {
  Pets,
  CheckCircle,
  TouchApp,
  Whatshot,
  BarChart,
} from "@mui/icons-material";

const IconBar = () => {
  return (
    <div className="IconBarContainer">
      <Link to="/ref" className="IconWrapper">
        <Pets />
        <div className="IconLabel">Ref</div>
      </Link>
      <Link to="/task" className="IconWrapper">
        <CheckCircle />
        <div className="IconLabel">Task</div>
      </Link>
      <Link to="/" className="IconWrapper">
        <TouchApp />
        <div className="IconLabel">Tap</div>
      </Link>
      <Link to="/boost" className="IconWrapper">
        <Whatshot />
        <div className="IconLabel">Boost</div>
      </Link>
      <Link to="/stats" className="IconWrapper">
        <BarChart />
        <div className="IconLabel">Stats</div>
      </Link>
    </div>
  );
};

export default IconBar;
