import React from "react";
import coinImage from "../coin.png";
import "./CoinDiv.css";

const CoinDiv = ({ disabled,  }) => {
  return (
    <div className="coin-div" >
      <img
        src={coinImage}
        alt="coin"
        className={`coin ${disabled ? "disabled" : ""}`}
      />
    </div>
  );
};

export default CoinDiv;
