import React from 'react';
import '../style/progressbar.css'; 

const ProgressBar = ({ level }) => {
  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${level}%` }} />
    </div>
  );
};

export default ProgressBar;
