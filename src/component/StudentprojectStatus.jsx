import React from 'react';
import logo from './logo.jpg';

export default function StudentprojectStatus() {
  const weeks = [1, 2, 3, 4, 5];

  return (
    <div>
      <style>
        {`
          /* General Reset */
          body {
            font-family: Arial, sans-serif;
            background-color: #f1f2f7;
            margin: 0;
            padding: 0;
          }

          /* Container Styles */
          .container {
            width: 60rem;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin: 50px auto;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
          }

          /* Header Section */
          .status {
            position: absolute;
            left: 0;
            top: 0;
          }

          .logo {
            width: 55px;
            margin: 20px;
          }

          /* Table Styles */
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            text-align: left;
          }

          th, td {
            padding: 10px;
            border: 1px solid #dddddd;
          }

          th {
            background-color: #f3f3f3;
            font-weight: bold;
          }

          .student-details {
            margin-top: 30px;
          }

          .project-details {
            margin-top: 0;
          }

          .weekly-status {
            margin: 30px 0;
          }

          /* Status Colors */
          .unsubmitted {
            color: #d9534f; /* Bootstrap red shade */
            font-weight: bold;
          }

          .submitted {
            color: #5cb85c; /* Bootstrap green shade */
            font-weight: bold;
          }

          /* Button Styles */
          .uploadBtn {
            padding: 8px 16px;
            background-color: #6ec3c7;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .uploadBtn:hover {
            background-color: #5aa9ad;
          }

          /* Responsive Design */
          @media (max-width: 1024px) {
            .container {
              width: 85%;
            }

            .logo {
              width: 50px;
            }
          }

          @media (max-width: 768px) {
            .container {
              width: 95%;
            }

            .upload-btn {
              padding: 6px 12px;
            }
          }

          @media (max-width: 480px) {
            .container {
              width: 100%;
              padding: 10px;
            }

            .logo {
              width: 40px;
            }

            th, td {
              font-size: 14px;
              padding: 6px;
            }

            .upload-btn {
              padding: 4px 8px;
              font-size: 12px;
            }

            /* Stack table rows for small screens */
            .weekly-status th,
            .weekly-status td {
              display: block;
              width: 100%;
              text-align: left;
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

      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      <div className="container">
        {/* Student Details Table */}
        <table className="studentDetails">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>123456</td>
            </tr>
          </tbody>
        </table>

        {/* Project Details Table */}
        <table className="projectDetails">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Project Code</th>
              <th>Mentor Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Chatbot</td>
              <td>AI123</td>
              <td>Dr. Alan Turing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container">
        <table className="weeklyStatus">
          <thead>
            <tr>
              <th>Week</th>
              <th>Status</th>
              <th>Marks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week) => (
              <tr key={week}>
                <td>Week {week}</td>
                <td className="unsubmitted">Unsubmitted</td>
                <td>Marks</td>
                <td>
                  <button className="uploadBtn">Upload</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
