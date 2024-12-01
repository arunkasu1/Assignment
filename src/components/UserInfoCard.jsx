import React, { useState } from "react";
import "./../styles/UserInfoCard.css";
import { BsThreeDots } from "react-icons/bs";

const UserInfoCard = () => {
  const [fields, setFields] = useState([""]);
  const [loyaltyFields, setLoyaltyFields] = useState([]);
  const [lifetimeFields, setLifetimeFields] = useState([]);
  const [engagementFields, setEngagementFields] = useState([]);

  const handleAddField = (setFieldFunction) => {
    setFieldFunction(prevFields => [...prevFields, ""]);
  };

  const handleInputChange = (index, event) => {
    const newFields = [...fields];
    newFields[index] = event.target.value;
    setFields(newFields);
  };

  return (
    <div className="user-info-card-container">
      <div className="profile-section">
        <div className="profile-avatar">CB</div>
        <div className="profile-info">
          <h2 className="profile-name">Hannibal Smith</h2>
          <p className="profile-address">1 Market Street San Francisco, CA 94105</p>
        </div>
      </div>

      <div className="user-info">
        <div className="info-row">
          <div className="info-label">Customer ID</div>
          <div className="info-value">12345</div>
          <BsThreeDots className="info-action" />
        </div>
        <div className="info-row">
          <div className="info-label">Email Address</div>
          <div className="info-value">rachel@sample.com</div>
          <BsThreeDots className="info-action" />
        </div>
        <div className="info-row">
          <div className="info-label">Phone Number</div>
          <div className="info-value">8051298905</div>
          <BsThreeDots className="info-action" />
        </div>
        {fields.map((field, index) => (
          <div key={index} className="info-row">
            {field ? (
              <div className="info-value">
                <p>{field}</p>
              </div>
            ) : (
              <textarea
                className="info-value"
                placeholder="Enter your text here"
                value={field}
                onChange={(event) => handleInputChange(index, event)}
                onBlur={() => {
                  if (!field) {
                    const newFields = [...fields];
                    newFields[index] = "Unnamed Field";
                    setFields(newFields);
                  }
                }}
              />
            )}
          </div>
        ))}
        <button className="add-button" onClick={() => handleAddField(setFields)}>+ Add</button>
      </div>

      <div className="user-info">
        <div className="info-row">
          <div className="info-label">Loyalty Tier</div>
          <div className="info-value">Silver</div>
        </div>
        <div className="info-row">
          <div className="info-label">Segment</div>
          <div className="info-value">Sleepy Customer</div>
        </div>
        {loyaltyFields.map((field, index) => (
          <div key={index} className="info-row">
            <input type="text" className="info-value" placeholder="New Field" />
          </div>
        ))}
        <button className="add-button" onClick={() => handleAddField(setLoyaltyFields)}>+ Add</button>
      </div>

      <div className="user-info">
        <div className="info-row">
          <div className="info-label">Lifetime Value</div>
          <div className="info-value">$1M</div>
        </div>
        <div className="info-row">
          <div className="info-label">Propensity to Purchase</div>
          <div className="info-value">
            <span className="highlight yellow">75%</span>
          </div>
        </div>
        {lifetimeFields.map((field, index) => (
          <div key={index} className="info-row">
            <input type="text" className="info-value" placeholder="New Field" />
          </div>
        ))}
        <button className="add-button" onClick={() => handleAddField(setLifetimeFields)}>+ Add</button>
      </div>

      <div className="user-info">
        <div className="info-row">
          <div className="info-label">Engagement Score</div>
          <div className="info-value">
            <span className="highlight green">80%</span>
          </div>
        </div>
        {engagementFields.map((field, index) => (
          <div key={index} className="info-row">
            <input type="text" className="info-value" placeholder="New Field" />
          </div>
        ))}
        <button className="add-button" onClick={() => handleAddField(setEngagementFields)}>+ Add</button>
      </div>

      <button className="primary-button">Assign other Agent</button>
      <button className="secondary-button">Add New Widget</button>
    </div>
  );
};

export default UserInfoCard;
