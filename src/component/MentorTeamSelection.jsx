import React, { useState } from "react";
import "./MentorTeamSelection.css"; 
import logo from "./logo.jpg";

const MentorTeamSelection = () => {
  // State to track which team's details are open
  const [openTeamIndex, setOpenTeamIndex] = useState(null);

  // Teams data
  const teams = [
    {
      leader: "Alice Johnson",
      projectTitle: "AI Chatbot",
      members: "Bob Smith, Charlie Brown",
      technology: "Python, TensorFlow",
      description: "A chatbot powered by AI to assist users with common queries.",
    },
    {
      leader: "John Doe",
      projectTitle: "E-Commerce Website",
      members: "Jane Smith, Peter Parker",
      technology: "React, Node.js, MongoDB",
      description:
        "An e-commerce platform for small businesses with secure payment integration.",
    },
    {
      leader: "Emily Davis",
      projectTitle: "Weather Forecast App",
      members: "Chris Evans, Mark Ruffalo",
      technology: "JavaScript, OpenWeather API",
      description:
        "A web application that provides real-time weather updates and forecasts.",
    },
    {
      leader: "Michael Scott",
      projectTitle: "Inventory Management System",
      members: "Dwight Schrute, Jim Halpert",
      technology: "Java, MySQL",
      description:
        "A desktop application to manage inventory and generate sales reports.",
    },
    {
      leader: "Sarah Connor",
      projectTitle: "Smart Home Automation",
      members: "John Connor, Kyle Reese",
      technology: "Arduino, IoT",
      description:
        "A system to automate home appliances using sensors and a mobile app.",
    },
  ];

  // Toggle details for a team
  const toggleDetails = (index) => {
    setOpenTeamIndex(openTeamIndex === index ? null : index);
  };

  return (
    <div>
      {/* Logo Section */}
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      {/* Team Selection Container */}
      <div className="form-container">
        <h1>Team Selection</h1>

        {/* Team List */}
        <div id="team-list">
          {teams.map((team, index) => (
            <div
              className="team-row"
              key={index}
              onClick={() => toggleDetails(index)}
            >
              <div className="team-info">
                <span>
                  <strong>Team Leader:</strong> {team.leader}
                </span>
                <span>
                  <strong>Project Title:</strong> {team.projectTitle}
                </span>
                <div>
                  <button className="approve-btn">Approve</button>
                  <button className="reject-btn">Reject</button>
                </div>
              </div>
              <div
                className={`team-details ${openTeamIndex === index ? "active" : ""}`}
                style={{
                  maxHeight: openTeamIndex === index ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p>
                  <strong>Team Members:</strong> {team.members}
                </p>
                <p>
                  <strong>Technology:</strong> {team.technology}
                </p>
                <p>
                  <strong>Description:</strong> {team.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorTeamSelection;
