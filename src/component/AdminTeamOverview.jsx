import React, { useState } from "react";
import "./AdminTeamOverview.css";
import logo from "./logo.jpg";

export default function AdminTeamOverview() {
  // Initial team data (static example)
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "AI Chatbot",
      technology: "Python, TensorFlow",
      mentor: "Dr. John Smith",
      members: [
        {
          name: "Alice Johnson (L)",
          rollNo: "12345678",
          role: "Developer",
          group: "A1",
        },
        {
          name: "Bob Smith",
          rollNo: "87654321",
          role: "Tester",
          group: "A1",
        },
        {
          name: "Charlie Brown",
          rollNo: "56781234",
          role: "Designer",
          group: "A1",
        },
      ],
      isOpen: false, // Tracks if the details are open
    },
    {
      id: 2,
      name: "E-Commerce Website",
      technology: "React, Node.js",
      mentor: "Prof. Jane Doe",
      members: [
        {
          name: "John Doe (L)",
          rollNo: "22334455",
          role: "Frontend",
          group: "B2",
        },
        {
          name: "Jane Smith",
          rollNo: "33445566",
          role: "Backend",
          group: "B2",
        },
        {
          name: "Peter Parker",
          rollNo: "55667788",
          role: "UI/UX",
          group: "B2",
        },
      ],
      isOpen: false, // Tracks if the details are open
    },
  ]);

  // Toggle details for a specific team
  const toggleDetails = (teamId) => {
    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === teamId ? { ...team, isOpen: !team.isOpen } : team
      )
    );
  };

  return (
    <div>
      {/* Logo Section */}
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      {/* Team Overview Section */}
      <div className="form-container">
        <h1>Admin Team Overview</h1>
        <p className="description">
          View detailed information for all teams and their members below.
        </p>

        {/* Teams List */}
        <div id="teams-list">
          {teams.map((team) => (
            <div
              className="team-row"
              key={team.id}
              onClick={() => toggleDetails(team.id)}
            >
              <div className="team-info">
                <h4>{team.name}</h4>
                <p>
                  <strong>Technology:</strong> {team.technology}
                </p>
                <p>
                  <strong>Mentor:</strong> {team.mentor}
                </p>
              </div>
              <div
                className="team-details"
                style={{
                  maxHeight: team.isOpen ? `${team.members.length * 70}px` : "0", // Adjust row height to fit
                  opacity: team.isOpen ? "1" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease, opacity 0.3s ease",
                }}
              >

                <h4>Team Members</h4>
                <ul>
                  {team.members.map((member, index) => (
                    <li key={index}>
                      <strong>{member.name}</strong> - RTU Roll No:{" "}
                      {member.rollNo} - Role: {member.role} - Group:{" "}
                      {member.group}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
