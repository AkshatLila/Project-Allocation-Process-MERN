import React from "react";
import logo from "./logo.jpg"; 
import { Link } from "react-router-dom";

export default function StudentFormSubmission() {
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
            display: flex;
            justify-content: center;
          }
          
          .container {
            min-width: 900px;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin: 30px;
            margin-top: 10px;
          }
          
          .logo {
            width: 55px;
            margin: 20px;
          }
          
          .student-details {
            width: 100%;
            margin-bottom: 20px;
            border-collapse: collapse;
          }
          
          .student-details th {
            padding: 10px;
            border: 1px solid #dddddd;
          }
          
          .project-details {
            width: 100%;
            border-collapse: collapse;
          }
          
          .project-details th {
            padding: 8px;
            background-color: #f3f3f3;
            border: 1px solid #dddddd;
          }
          
          .weekly-status {
            width: 100%;
            border-collapse: collapse;
          }
          
          .weekly-status th,
          .weekly-status td {
            padding: 12px;
            border: 1px solid #dddddd;
          }
          
          .submitted {
            color: green;
            font-weight: bold;
          }
          
          .unsubmitted {
            color: red;
            font-weight: bold;
          }
          
          .upload-btn {
            background-color: #6ec3c7;
            color: #ffffff;
            text-decoration: none;
            padding: 7px 40px;
            border-radius: 5px;
          }
          
          .upload-btn:hover {
            background-color: #5aa9ad;
          }
          
          .form-link {
            width: 75%;
          }
          
          .form-link > a {
            text-decoration: none;
            color: black;
          }
          
          /* Responsive Design Adjustments */
          @media (max-width: 1024px) {
            .container {
              width: 80%;
              padding: 15px;
              margin-left: 120px;
            }
          
            .logo {
              width: 50px;
              margin: 15px;
            }
          
            .student-details th,
            .project-details th,
            .weekly-status th,
            .weekly-status td {
              padding: 8px;
            }
          
            .upload-btn {
              padding: 6px 12px;
            }
          }
          
          @media (max-width: 768px) {
            .container {
              width: 90%;
              margin-left: 35px;
            }
          
            .weekly-status th,
            .weekly-status td {
              padding: 6px;
            }
          
            .upload-btn {
              padding: 5px 10px;
              font-size: 14px;
            }
          }
          
          @media (max-width: 480px) {
            .container {
              width: 95%;
              padding: 10px;
              margin-left: 15px;
            }
          
            .logo {
              width: 40px;
            }
          
            .student-details th,
            .project-details th,
            .weekly-status th,
            .weekly-status td {
              padding: 5px;
              font-size: 14px;
            }
          
            .upload-btn {
              padding: 4px 8px;
              font-size: 12px;
            }
          
            /* Stack table rows vertically on small screens */
            .weekly-status th,
            .weekly-status td {
              display: block;
              text-align: left;
              width: 100%;
            }
          
            .weekly-status tr {
              display: flex;
              flex-direction: column;
              border-bottom: 1px solid #ddd;
              margin-bottom: 10px;
            }
          }
        `}
      </style>

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
