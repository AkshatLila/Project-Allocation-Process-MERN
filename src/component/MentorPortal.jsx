import React from "react";
import "./MentorPortal.css";
import logo from "./logo.jpg"

const MentorPortal = () => {
  return (
    <div>
      <div className="mentor">
        <img src={logo} alt="logo"/>
      </div>
      <div className="tag">
        <h2>Mentor Portal</h2>
      </div>
      <div className="button">
        <button className="btn">
          <a href="/HTML/team_selection_page.html">Selection</a>
        </button>
        <button className="btn">
          <a href="/HTML/team_management_page.html">Management</a>
        </button>
        <button className="btn">
          <a href="">Approve Docs.</a>
        </button>
      </div>
    </div>
  );
};

export default MentorPortal;
