import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import ChatPanel from "./components/ChatPanel";
import ActionLauncher from "./components/ActionLauncher";
import "./styles/App.css";
import UserInfoCard from "./components/UserInfoCard";
import AskCatura from "./components/AskCatura";
import ActionLauncherAndFavorites from "./components/ActionLauncherAndFavorites";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      {/* Sidebar Component */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className={`content ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        <SearchBar />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <UserInfoCard />
          <div>
          <ActionLauncher />
          <ChatPanel />
          </div>
          <div>
            <AskCatura />
            <ActionLauncherAndFavorites />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default App;
