import React from 'react';
import './Studentportal.css';
import logo from './logo.jpg'
import { Link } from 'react-router-dom';

function StudentPortal() {
  return (
    <div className='header'>
      <div className="student">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="tag">
        <h2>Student Portal</h2>
      </div>
      <div className="button">
        <button className="btn">
          <Link to="/studentstatus">Project Status</Link>
        </button>
        <button className="btn">
          <a href="">Form Submission</a>
        </button>
      </div>
    </div>
  );
}

export default StudentPortal;