import React, { useState } from "react";
import "./../styles/ChatPanel.css";
import { FiSend } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Rachel Adams",
      time: "9:08 PM",
      platform: "WhatsApp",
      type: "received",
      content:
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.",
    },
    {
      id: 2,
      sender: "You",
      time: "27 Jul, 2024",
      platform: "WhatsApp",
      type: "sent",
      content:
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.",
    },
  ]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      sender: "You",
      time: new Date().toLocaleTimeString(),
      platform: "WhatsApp",
      type: "sent",
      content: message,
    };
    setMessages([...messages, newMessage]);
    setMessage(""); // Clear the input field
  };

  return (
    <div className="chat-interface">
      <div className="tabs">
        <button className="active-tab">Conversation</button>
        <button>Attachment</button>
      </div>

      <div className="chat-window">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-bubble ${msg.type === "sent" ? "sent" : "received"}`}
          >
            <div className="chat-details">
              <span className="sender">{msg.sender}</span>
              <span className="time">
                {msg.time} - {msg.platform}
              </span>
            </div>
            <div className="chat-content">{msg.content}</div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <div className="input-options">
          <label>
            <input type="radio" name="platform" value="SMS" />
            SMS
          </label>
          <label>
            <input type="radio" name="platform" value="WhatsApp" />
            WhatsApp
          </label>
          <label>
            <input type="radio" name="platform" value="Email" />
            Email
          </label>
        </div>
        <div className="input-area">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
