import React from "react";

const StatsCounter = ({ label, value }) => {
  return (
    <div className="stats-counter">
      <h3>{label}</h3>
      <p>{value}</p>
    </div>
  );
};

export default StatsCounter; // Default export