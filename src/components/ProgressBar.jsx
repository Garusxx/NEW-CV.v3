import React from "react";
import "../style/progressbar.css";

const ProgressBar = ({ level, total = 5 }) => {
  const activeCount = Math.round((level / 100) * total);
  return (
    <div className="light-bar">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`light ${index < activeCount ? "active" : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
