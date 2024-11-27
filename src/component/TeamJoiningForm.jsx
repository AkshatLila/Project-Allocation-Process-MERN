import React, { useState } from "react";
import logo from "./logo.jpg";

const TeamJoin = () => {
  const [teamCode, setTeamCode] = useState(""); // State to hold the generated team code
  const [enteredCode, setEnteredCode] = useState(""); // State for user-entered team code
  const [isCodeGenerated, setIsCodeGenerated] = useState(false); // State to track if the code is generated
  const [showPopup, setShowPopup] = useState(false); // State to show/hide the "Copied to clipboard" pop-up

  // Function to generate a random team code
  const generateTeamCode = () => {
    if (!teamCode) {
      const newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
      setTeamCode(newCode);
      setIsCodeGenerated(true);
    }
  };

  // Function to handle team code usage
  const useTeamCode = () => {
    if (enteredCode.trim() === "") {
      alert("Please enter a valid team code.");
    } else {
      alert(`Team Code "${enteredCode}" used successfully.`);
    }
  };

  // Function to copy the team code to clipboard
  const copyToClipboard = () => {
    if (teamCode) {
      navigator.clipboard.writeText(teamCode).then(() => {
        setShowPopup(true); // Show the pop-up
        setTimeout(() => setShowPopup(false), 2000); // Hide the pop-up after 2 seconds
      });
    }
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
          }

          .status {
            text-align: center;
            margin: 20px 0;
          }

          .logo {
            width: 55px;
          }

          .container {
            width: 90%;
            max-width: 600px;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin: 30px auto;
          }

          .team-options {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 20px;
            margin-top: 20px;
          }

          .team-options > div {
            flex: 1 1 calc(48% - 20px);
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            min-width: 200px;
          }

          .create-team > h3,
          .join-team > h3 {
            margin: 20px 0;
            color: #000;
          }

          .create-team > input,
          .join-team > input {
            width: 90%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-bottom: 10px;
          }

          .create-team > .clipboard-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            margin: 10px 0;
          }

          .clipboard-container > button {
            margin-left: 10px;
            background-color: #3498db;
            color: #ffffff;
            border: none;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
          }

          .clipboard-container > button:hover {
            background-color: #2980b9;
          }

          .clipboard-container > .popup {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #2ecc71;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: opacity 0.3s;
          }

          .clipboard-container > .popup.show {
            opacity: 1;
          }

          .create-team > button,
          .join-team > button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
          }

          .create-team > button {
            background-color: #6ec3c7;
            color: #ffffff;
          }

          .create-team > button:hover {
            background-color: #5aa9ad;
          }

          .create-team > button.generated {
            background-color: #6ec3c7;
            color: #ffffff;
            cursor: default;
          }

          .create-team > button.generated:hover {
            background-color: #6ec3c7;
          }

          .join-team > button {
            background-color: #e74c3c;
            color: #ffffff;
          }

          .join-team > button:hover {
            background-color: #c0392b;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .team-options {
              flex-direction: column;
              gap: 15px;
            }

            .team-options > div {
              flex: 1 1 100%;
            }

            .logo {
              width: 45px;
            }

            .container {
              width: 95%;
            }
          }
        `}
      </style>

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
            <div className="clipboard-container">
              <input
                type="text"
                placeholder="Team Code"
                value={teamCode}
                disabled
              />
              {teamCode && (
                <>
                  <div className={`popup ${showPopup ? "show" : ""}`}>
                    Copied to clipboard!
                  </div>
                  <button type="button" onClick={copyToClipboard}>
                    Copy
                  </button>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={generateTeamCode}
              className={isCodeGenerated ? "generated" : ""}
            >
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
