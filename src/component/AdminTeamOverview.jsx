import React, { useState } from "react";
import WeeklyStatusMatrix from "./Form3"; // Import the WeeklyStatusMatrix component
import logo from './logo.jpg';

const AdminTeamOverview = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedTeams, setExpandedTeams] = useState({});
  const [showProgress, setShowProgress] = useState(false); // State to toggle WeeklyStatusMatrix
  const [currentTeam, setCurrentTeam] = useState(null); // To track the selected team

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

  const viewProgress = (event, team) => {
    event.stopPropagation(); // Prevent triggering toggleDetails.
    setCurrentTeam(team); // Set the selected team
    setShowProgress(true); // Show the WeeklyStatusMatrix
  };

  const closeProgress = () => {
    setShowProgress(false); // Hide the WeeklyStatusMatrix
    setCurrentTeam(null); // Clear the selected team
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
            font-family: "Roboto", sans-serif;
            background-color: #f1f2f7;
            color: #1a1a1a;
            line-height: 1.6;
          }

          .status {
            text-align: center;
            margin: 20px 0;
          }

          .logo {
            width: 55px;
          }

          .search-bar-container {
            text-align: center;
            margin-bottom: 20px;
          }

          #search-bar {
            width: 90%;
            max-width: 500px;
            padding: 10px 15px;
            border: 1px solid #e0e0e0;
            border-radius: 25px;
            font-size: 1em;
            color: #333;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          #search-bar:focus {
            outline: none;
            border-color: #26cfc5;
            box-shadow: 0 0 10px rgba(38, 207, 197, 0.5);
          }

          .form-container {
            max-width: 800px;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            margin: 30px auto;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
            font-size: 2em;
            margin-bottom: 15px;
            color: #333;
          }

          .description {
            text-align: center;
            margin-bottom: 30px;
            color: #555;
          }

          .team-row {
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            margin-bottom: 20px;
            transition: all 0.3s ease;
            overflow: hidden;
            background-color: #fff;
          }

          .team-row:hover {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }

          .team-info {
            padding: 15px 20px;
            background-color: #f1f1f1;
            border-bottom: 1px solid #e0e0e0;
            cursor: pointer;
          }

          .team-info h4 {
            font-size: 1.4em;
            margin-bottom: 5px;
          }

          .team-info p {
            font-size: 1em;
            color: #555;
          }

          .team-details {
            background-color: #ffffff;
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, opacity 0.3s ease;
            padding: 0 20px;
          }

          .team-details h4 {
            margin-top: 15px;
            font-size: 1.2em;
            color: #333;
          }

          .team-details ul {
            list-style: none;
            margin: 15px 0;
            padding: 0;
          }

          .team-details ul li {
            font-size: 1em;
            margin: 8px 0;
            padding: 8px 12px;
            background-color: #f9fafc;
            border-radius: 6px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          }

          .progress-btn {
            display: flex;
            width: 140px;
            margin: 15px;
            padding: 7px 5px;
            font-size: 1em;
            color: #fff;
            background-color: #26cfc5;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .progress-btn:hover {
            background-color: #1aa8a1;
          }

          .progress-btn:focus {
            outline: none;
            box-shadow: 0 0 10px rgba(38, 207, 197, 0.5);
          }

          @media (max-width: 768px) {
            .form-container {
              padding: 20px;
              margin: 20px auto;
            }

            .team-info h4 {
              font-size: 1.2em;
            }
          }

          @media (max-width: 480px) {
            .form-container {
              width: 95%;
              padding: 15px;
            }
          }
        `}
      </style>

      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      <div className="search-bar-container">
        <input
          type="text"
          id="search-bar"
          placeholder="Search teams or technologies..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {showProgress ? (
        <div className="overlay">
          <button className="close-btn" onClick={closeProgress}>
            Close
          </button>
          <WeeklyStatusMatrix />
        </div>
      ) : (
        <div className="form-container">
          <h1>Admin Team Overview</h1>
          <p className="description">
            View detailed information for all teams and their members below.
          </p>

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
                      onClick={(event) => viewProgress(event, team)}
                    >
                      View Progress
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTeamOverview;
