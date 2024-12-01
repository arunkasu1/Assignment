import React from "react";
import "./../styles/ActionLauncherAndFavorites.css";

const ActionLauncherAndFavorites = () => {
  return (
    <div className="action-launcher-container">
      {/* Action Launcher */}
      <div className="action-launcher-section">
        <h2>Action Launcher</h2>
        <input
          type="text"
          placeholder="Search actions..."
          className="action-search"
        />
        <div className="action-buttons">
          <button className="action-button primary">Add Action</button>
          <button className="action-button">Fee Reversal</button>
          <button className="action-button">Retail Onboarding</button>
          <button className="action-button">Address Update</button>
        </div>
      </div>

      {/* Case Favorites */}
      <div className="case-favorites-section">
        <h2>Case Favorite</h2>
        <div className="case-item">Lorem ipsum dolor sit amet consectetur. Et tincidunt</div>
        <div className="case-item">
          <span>📷</span> Photo
        </div>
        <div className="case-item">Lorem ipsum dolor sit amet consectetur. Et tincidunt</div>
      </div>
    </div>
  );
};

export default ActionLauncherAndFavorites;
