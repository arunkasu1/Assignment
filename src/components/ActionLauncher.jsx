import React from "react";
import "./../styles/ActionLauncher.css";

const ActionLauncher = () => {
  return (
    <div className="action-launcher">
      <button>Conservation</button>
      
      <button className="action-button">Add Action</button>
      <button className="action-button">Fee Reversal</button>
      <button className="action-button">Address Update</button>
      <button className="escalate-button" style={{ backgroundColor: 'red' }}>Escalate</button>
    </div>
  );
};

export default ActionLauncher;
