import React, { useState } from 'react';
import logo from "./logo.jpg";

export default function Login() {
  // State for inputs and checkboxes
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [notRobot, setNotRobot] = useState(false);

  // Handler functions for form inputs
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);
  const handleNotRobotChange = () => setNotRobot(!notRobot);

  const handleSignIn = (e) => {
    e.preventDefault();
    alert(`Sign in with:\nUsername: ${username}\nPassword: ${password}\nRemember Me: ${rememberMe}\nNot a robot: ${notRobot}`);
  };

  return (
    <div>
      <style>{`
        body {
          background-color: #f1f2f7;
        }
        .header {
          display: flex;
          justify-content: start;
        }
        .container {
          text-align: center;
          min-width: 200px;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .logo {
          width: 350px;
          padding: 5px;
          display: flex;
          justify-content: center;
        }
        .logo img {
          height: 60px;
        }
        .signin-box {
          background-color: #ffffff;
          padding: 20px;
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
          border: 1px solid rgb(204, 200, 200);
        }
        .signin-title {
          width: 100%;
          font-size: 1.5em;
          font-weight: bold;
          background-color: #1a2229;
          color: white;
          padding: 10px;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        input[type="text"], input[type="password"] {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          background-color: #f7faff;
          outline: none;
        }
        .recaptcha {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 15px 0;
          padding: 10px;
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          background-color: #f7faff;
        }
        .recaptcha input[type="checkbox"] {
          width: 20px;
          height: 20px;
          accent-color: #2abf9e;
        }
        .recaptcha label {
          font-size: 0.9em;
          color: #555;
        }
        .options {
          display: flex;
          justify-content: space-between;
          font-size: 0.9em;
          color: #888;
          margin-bottom: 15px;
        }
        .signin-button {
          background-color: #2abf9e;
          color: #ffffff;
          padding: 12px;
          width: 100%;
          border: none;
          border-radius: 5px;
          font-size: 1em;
          font-weight: bold;
          cursor: pointer;
        }
        @media (max-width: 480px) {
          .signin-title {
            font-size: 1.2em;
            padding: 15px;
          }
          .signin-button {
            padding: 10px;
            font-size: 0.9em;
          }
          .options {
            flex-direction: column;
            align-items: center;
            font-size: 0.8em;
          }
        }
      `}</style>
      <div className="header">
        <div className="logo">
          <img src={logo} alt="SKIT Logo" />
        </div>
        <div className="container">
          <div className="signin-title">Sign in</div>
          <form onSubmit={handleSignIn} className="signin-box">
            <input
              type="text"
              placeholder="B230941"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="recaptcha">
              <input
                type="checkbox"
                checked={notRobot}
                onChange={handleNotRobotChange}
              />
              I'm not a robot
            </div>
            <div className="options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="signin-button">SIGN IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}
