import React, { useState } from 'react';
import './Login.css';
import logo from "./logo.jpg"

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
    // Implement sign-in logic here (e.g., API calls or validation)
    alert(`Sign in with:\nUsername: ${username}\nPassword: ${password}\nRemember Me: ${rememberMe}\nNot a robot: ${notRobot}`);
  };

  return (
    <div className='header'>
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
  );
}
