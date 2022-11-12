import React from "react";
import navIcon from "./navIcon.png";
import "./navStyle.css";
export default function Navbar() {
  return (
    <nav>
      <img src={navIcon} />
      <h3>PGo - Weaknesses</h3>
      <h4>Win the gym!</h4>
    </nav>
  );
}
