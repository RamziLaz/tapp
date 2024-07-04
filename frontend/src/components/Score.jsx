import React from "react";
import "./Score.css";

const Score = ({ coins }) => (
  <div className="Score">
    <div className="CoinIcon" />
    <div className="CoinText">{coins.toLocaleString()}</div>
  </div>
);

export default Score;
