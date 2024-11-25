import React, { useState } from "react";
import "./AdminTeamOverview.css";
import logo from './logo.jpg'

const AdminTeamOverview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTeams, setExpandedTeams] = useState({});

  const teams = [
    {
      projectName: "AI Chatbot",
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
    },
    {
      projectName: "E-Commerce Website",
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
    },
  ];

  const toggleDetails = (index) => {
    setExpandedTeams((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase().trim());
  };

  const viewProgress = (event, teamName) => {
    event.stopPropagation(); // Prevent triggering toggleDetails.
    window.location.href = "form3.html";
  };

  return (
    <div>
      {/* Logo Section */}
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      {/* Search Bar */}
      <div className="search-bar-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Search teams or technologies..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Team Overview Section */}
      <div className="form-container">
        <h1>Admin Team Overview</h1>
        <p className="description">
          View detailed information for all teams and their members below.
        </p>

        {/* Teams List */}
        <div id="teams-list">
          {teams
            .filter(
              (team) =>
                team.projectName.toLowerCase().includes(searchQuery) ||
                team.technology.toLowerCase().includes(searchQuery)
            )
            .map((team, index) => (
              <div
                className="team-row"
                key={index}
                onClick={() => toggleDetails(index)}
              >
                <div className="team-info">
                  <h4>{team.projectName}</h4>
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
                    maxHeight: expandedTeams[index] ? "500px" : "0",
                    opacity: expandedTeams[index] ? "1" : "0",
                  }}
                >
                  <h4>Team Members</h4>
                  <ul>
                    {team.members.map((member, idx) => (
                      <li key={idx}>
                        <strong>{member.name}</strong> - RTU Roll No:{" "}
                        {member.rollNo} - Role: {member.role} - Group:{" "}
                        {member.group}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="progress-btn"
                    onClick={(event) => viewProgress(event, team.projectName)}
                  >
                    View Progress
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTeamOverview;
