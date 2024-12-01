import React from "react";
import "./../styles/AskCatura.css";

const AskCatura = () => {
  return (
    <div className="ask-catura-container">
      <div className="ask-catura-header">
        <h2>Ask Catura</h2>
        <div className="ask-catura-options">
          <span>WhatsApp</span>
          <span>Greetings ▼</span>
        </div>
      </div>
      <div className="ask-catura-content">
        <div className="greeting-template">
          <div className="template-header">Greeting Template</div>
          <div className="template-actions">
            <button className="template-button">Copy to Send</button>
            <button className="template-button secondary">Preview</button>
          </div>
        </div>
        <textarea
          className="message-input"
          placeholder="Type a message..."
        ></textarea>
        <button className="send-button">➤</button>
      </div>
    </div>
  );
};

export default AskCatura;
