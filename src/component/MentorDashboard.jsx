import React, { useState } from "react";
import "./MentorDashboard.css";
import logo from "./logo.jpg"

const MentorDashboard = () => {
  const teams = [
    {
      title: "AI Chatbot",
      studentName: "Alice Johnson",
      role: "Team Leader",
      progress: "80%",
      contact: "alice.johnson@example.com",
    },
    {
      title: "E-Commerce Website",
      studentName: "John Doe",
      role: "Developer",
      progress: "65%",
      contact: "john.doe@example.com",
    },
    {
      title: "Weather Forecast App",
      studentName: "Emily Davis",
      role: "Designer",
      progress: "50%",
      contact: "emily.davis@example.com",
    },
  ];

  return (
    <div>
      {/* Logo Section */}
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      {/* Page Container */}
      <div className="form-container">
        <h1>Mentor Dashboard</h1>

        {/* Team List */}
        <div id="team-list">
          {teams.map((team, index) => (
            <TeamRow key={index} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamRow = ({ team }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="team-row" onClick={toggleDetails}>
      <div className="team-info">
        <span>
          <strong>Project Title:</strong> {team.title}
        </span>
      </div>
      <div
        className="team-details"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? "1" : "0",
          transition: "max-height 0.5s ease, opacity 0.3s ease",
        }}
      >
        <p>
          <strong>Student Name:</strong> {team.studentName}
        </p>
        <p>
          <strong>Role:</strong> {team.role}
        </p>
        <p>
          <strong>Work Progress:</strong> {team.progress}
        </p>
        <p>
          <strong>Contact:</strong> {team.contact}
        </p>
        <button className="update-btn">Update Status</button>
      </div>
    </div>
  );
};

export default MentorDashboard;
