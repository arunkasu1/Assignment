import React from 'react';
import './../styles/SearchBar.css';

function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Chat/Feed" className="search-input" />
            <div className="icons">
                <i className="home-icon">🏠</i>
                <button className="process-owner-btn">Process Owner</button>
                <button className="admin-btn">Admin</button>
                <div className="profile">
                    <i className="profile-pic">👤</i>
                    <span className="profile-name">Your Name</span>
                </div>
                <i className="settings-icon">⚙️</i>
                <i className="logout-icon">🚪</i>
            </div>
        </div>
    );
}

export default SearchBar;
