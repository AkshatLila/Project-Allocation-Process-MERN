import React, { useState } from "react";
import "./TeamJoiningForm.css";
import logo from './logo.jpg';

const TeamJoin = () => {
  const [teamCode, setTeamCode] = useState(""); // State to hold the generated team code
  const [enteredCode, setEnteredCode] = useState(""); // State for user-entered team code

  // Function to generate a random team code
  const generateTeamCode = () => {
    const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    setTeamCode(newCode);
    alert(`Team Code Generated: ${newCode}`);
  };

  // Function to handle team code usage
  const useTeamCode = () => {
    if (enteredCode.trim() === "") {
      alert("Please enter a valid team code.");
    } else {
      alert(`Team Code "${enteredCode}" used successfully.`);
    }
  };

  return (
    <div>
      {/* Logo Section */}
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      {/* Team Selection Container */}
      <div className="container">
        <h1>Team Selection</h1>
        <div className="team-options">

          {/* Create Team Section */}
          <div className="create-team">
            <h3>Create Team</h3>
            <input
              type="text"
              placeholder="Team Code"
              value={teamCode}
              disabled
            />
            <br />
            <button type="button" onClick={generateTeamCode}>
              Generate Team Code
            </button>
          </div>

          {/* Join Team Section */}
          <div className="join-team">
            <h3>Join Team</h3>
            <input
              type="text"
              placeholder="Enter Team Code"
              value={enteredCode}
              onChange={(e) => setEnteredCode(e.target.value)}
              required
            />
            <br />
            <button type="button" onClick={useTeamCode}>
              Use Team Code
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamJoin;
