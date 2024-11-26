import React, { useState } from "react";
import logo from "./logo.jpg";

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
            color: #1a1a1a;
          }

          .status {
            text-align: center;
            margin-top: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
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
            color: #1a1a1a;
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
            color: #1a1a1a;
            font-weight: bold;
          }

          .team-details {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            margin-top: 10px;
            transition: max-height 0.5s ease, opacity 0.3s ease;
          }

          .team-details p {
            margin: 8px 0;
            color: #333;
          }

          .update-btn {
            display: inline-block;
            padding: 8px 8px;
            background-color: #6ec3c7;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            margin-top: 10px;
          }

          .update-btn:hover {
            background-color: #5aa9ad;
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
        <h1>Mentor Dashboard</h1>
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
