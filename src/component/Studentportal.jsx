import React from 'react';
import './Studentportal.css';
import logo from './logo.jpg'
import { Link } from 'react-router-dom';

function StudentPortal() {
  return (
    <>
  <div className="student">
    <img src={logo} alt="logo" className="logo" />
  </div>
  <div className="tag">
    <h2>Student Portal</h2>
  </div>
  <div className="button">
      <Link to="/teamjoin" className="btn">My Team</Link>
      {/* This will route to team_view page once a student is in the team */}
      {/*  */}
      <Link to="/studentprojectstatus" className="btn">My Progress</Link>
    {/* Only to be shown to leaders of the team */}

      <Link to="/studentformsubmission" className="btn">Form Submissions</Link>

      <Link to="/HTML/project_details_filling.html" className="btn">Fill Project Details</Link>
  </div>
</>
  );
}

export default StudentPortal;