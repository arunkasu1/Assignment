import React, { useState } from "react";
import "./../styles/Sidebar.css";
import { AiOutlineAudit, AiOutlineProject, AiOutlineUser } from "react-icons/ai";
import { BiTestTube, BiLinkAlt, BiCircle } from "react-icons/bi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaUserShield, FaBoxOpen, FaPaintRoller } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { MdOutlinePresentToAll } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>Risk Hawk</h2>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? "←" : <GiHamburgerMenu />}
        </button>
      </div>
      {isOpen && (
        <ul className="menu">
          <li>
            <AiOutlineAudit /> <span>Internal Audit</span>
          </li>
          <li>
            <BiTestTube /> <span>UAT Testing</span>
          </li>
          <li>
            <BiLinkAlt /> <span>Intract</span>
          </li>
          <li>
            <HiOutlineUserGroup /> <span>Queue</span>
          </li>
          <li>
            <AiOutlineProject /> <span>Workflow</span>
          </li>
          <li>
            <FaUserShield /> <span>Admin</span>
          </li>
          <li>
            <FaBoxOpen /> <span>Asset</span>
          </li>
          <li>
            <AiOutlineUser /> <span>Parent</span>
          </li>
          <li>
            <BiCircle /> <span>Option One</span>
          </li>
          <li>
            <BiCircle /> <span>Option Two</span>
          </li>
          <li>
            <FiPackage /> <span>All Accessories</span>
          </li>
          <li>
            <FaPaintRoller /> <span>Decorating</span>
          </li>
          <li>
            <MdOutlinePresentToAll /> <span>Presenting</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
