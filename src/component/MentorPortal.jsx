import React from "react";
import "./MentorPortal.css";
import logo from "./logo.jpg"
import { Link } from "react-router-dom";

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
      <Link to="/HTML/mentor_team_selection.html">Team Selection</Link>
    </button>
    <button className="btn">
      <Link to="/HTML/mentor_dashboard.html">Dashboard</Link>
    </button>
    <button className="btn">
      <Link to="/HTML/approve_docs.html">Approve Docs</Link>
    </button>
  </div>
</>
  );
};

export default MentorPortal;
