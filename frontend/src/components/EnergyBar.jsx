import React from "react";
import "./EnergyBar.css";

const EnergyBar = ({ energy }) => {
  return (
    <div className="EnergyBarContainer">
      <div className="EnergyText">{energy} / 4500</div>
      <br />
      <div
        className="EnergyBarFill"
        style={{ width: `${(energy / 4500) * 100}%` }}
      />
    </div>
  );
};

export default EnergyBar;
