import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./logo.jpg";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error message
    // alert("Logging in...");

    try {
      console.log("In try block!");

      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      const { token, role } = response.data; // Expecting backend to return `token` and `role`

      if (token) {
        console.log("Token received!");

        onLogin(token); // Pass the token to `App.js` for authentication handling
        // alert("Login successful!");

        // Redirect based on role
        if (role === "student") navigate("/studentportal");
        else if (role === "admin") navigate("/adminportal");
        else if (role === "mentor") navigate("/mentorportal");
        else alert("Invalid role. Contact support.");
      }
    } catch (err) {
      // Show error message from backend response or fallback to default
      const error =
        err.response?.data?.error || "Unable to login. Please try again.";
      setErrorMessage(error);
    }
  };

  return (
    <div>
      <style>{`
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            background-color: #f1f2f7;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
          }
          .header {
            text-align: center;
            width: 100%;
          }
          .logo img {
            height: 55px;
            margin-bottom: 20px;
          }
          .container {
            max-width: 350px;
            width: 100%;
            background-color: #ffffff;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          }
          .signin-title {
            font-size: 1.5em;
            font-weight: bold;
            background-color: #1a2229;
            color: white;
            padding: 15px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
          }
          .signin-box {
            padding: 20px;
          }
          input[type="text"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 12px 0;
            border: 1px solid #d9d9d9;
            border-radius: 5px;
            background-color: #f7faff;
            outline: none;
          }
          .recaptcha {
            display: flex;
            align-items: center;
            justify-content: flex-start;
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
            margin-top: 20px;
            margin-bottom: 15px;
          }
            .rememberMe {
              display: flex;
            }

            input[type="checkbox"] {
              width: 15px;
              height: 15px;
              cursor: pointer;
            
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
              padding: 10px;
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
          <img src={logo} alt="Logo" />
        </div>
        <div className="container">
          <div className="signin-title">Sign in</div>
          <form onSubmit={handleSignIn} className="signin-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <div className="options">
              <label className="rememberMe">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            {errorMessage && (
              <div style={{ color: "red", fontSize: "0.9em" }}>
                {errorMessage}
              </div>
            )}
            <button type="submit" className="signin-button">
              SIGN IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
