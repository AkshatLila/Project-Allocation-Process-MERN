import React from "react";
import "./StudentFormSubmission.css";
import logo from "./logo.jpg"; 

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
                <a href="#link-of-form1">Project Abstract Form [Form 1]</a>
              </td>
              <td>
                <button className="upload-btn">Upload</button>
              </td>
            </tr>
            <tr>
              <td className="form-link">
                Role Specification of Team Members [Form 2]
              </td>
              <td>
                <button className="upload-btn">Upload</button>
              </td>
            </tr>
            {/* Add more rows dynamically or statically as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
