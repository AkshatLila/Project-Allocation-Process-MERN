import React from "react";
import "./MentorPortal.css";
import logo from "./logo.jpg"

const MentorPortal = () => {
  return (
    <>
  <div className="mentor">
    <img src={logo} alt="logo" className="logo" />
  </div>
  <div className="tag">
    <h2>Mentor Portal</h2>
  </div>
  <div className="button">
    <button className="btn">
      <a href="/HTML/mentor_team_selection.html">Team Selection</a>
    </button>
    <button className="btn">
      <a href="/HTML/mentor_dashboard.html">Dashboard</a>
    </button>
    <button className="btn">
      <a href="/HTML/approve_docs.html">Approve Docs</a>
    </button>
  </div>
</>
  );
};

export default MentorPortal;
