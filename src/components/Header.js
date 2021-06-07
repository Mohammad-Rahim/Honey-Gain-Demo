import React from "react";
import "../styles/components/Header.css";

function Header() {
  return (
    <div>
      <div className="navbar">Dashboard</div>
      <ul className="nav-items">
        <li>Get Windows app</li>
        <li>Get MacOs app</li>
        <li>Get Android app</li>
      </ul>
    </div>
  );
}

export default Header;
