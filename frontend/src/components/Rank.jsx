import React from "react";
import "./Rank.css";

const Rank = ({ rank, onClick }) => (
  <div className="Rank" onClick={onClick}>
    {rank}
  </div>
);

export default Rank;
