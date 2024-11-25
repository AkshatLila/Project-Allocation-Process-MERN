import React from "react";
import "./StudentFormSubmission.css";
import logo from "./logo.jpg"; 
import { Link } from "react-router-dom";

export default function StudentFormSubmission() {
  return (
    <div>
      {/* Header Section */}
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      {/* Main Container */}
      <div className="container">
        {/* Weekly Submission Table */}
        <table className="weekly-status">
          <thead>
            <tr>
              <th className="form-link">Form</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="form-link">
                <a>Project Abstract Form [Form 1]</a>
              </td>
              <td>
                <Link to="/projectabstractform" className="upload-btn">Fill</Link>
              </td>
            </tr>
            <tr>
              <td className="form-link">
                Role Specification of Team Members [Form 2]
              </td>
              <td>
              <Link to="/rolespecificationform" className="upload-btn">Fill</Link>
              </td>
            </tr>
            {/* Add more rows dynamically or statically as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
