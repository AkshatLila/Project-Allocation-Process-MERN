import React, { useState } from "react";
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
      <style>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: Arial, sans-serif;
            background-color: #f1f2f7;
            color: #333;
          }

          .status {
            text-align: center;
            margin: 20px 0;
          }

          .logo {
            width: 55px;
          }

          .form-container {
            width: 60%;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin: 30px auto;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
            font-size: 1.8em;
            color: #333;
            margin-bottom: 20px;
          }

          .team-row {
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
            cursor: pointer;
            background-color: #f9f9f9;
            transition: background-color 0.3s ease;
          }

          .team-row:hover {
            background-color: #f1f1f1;
          }

          .team-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .team-details {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition: max-height 0.5s ease, opacity 0.5s ease;
          }

          .team-details.active {
            max-height: 200px;
            opacity: 1;
          }

          .team-details > p {
            margin-top: 10px;
          }

          .approve-btn,
          .reject-btn {
            padding: 8px 12px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            margin-left: 10px;
          }

          .approve-btn {
            background-color: #6ec3c7;
            color: #fff;
          }

          .reject-btn {
            background-color: #e57373;
            color: #fff;
          }

          .approve-btn:hover {
            background-color: #5aa9ad;
          }

          .reject-btn:hover {
            background-color: #d45a5a;
          }

          @media (max-width: 768px) {
            .form-container {
              width: 90%;
            }
          }

          @media (max-width: 480px) {
            .form-container {
              width: 95%;
            }
          }
        `}
      </style>
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>
      <div className="form-container">
        <h1>Team Selection</h1>
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
                className={`team-details ${
                  openTeamIndex === index ? "active" : ""
                }`}
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
