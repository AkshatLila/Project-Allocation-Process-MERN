import React, { useState } from "react";
import logo from './logo.jpg';

const AdminUploadSection = () => {
  const [studentFile, setStudentFile] = useState(null);
  const [mentorFile, setMentorFile] = useState(null);

  const handleFileUpload = (type) => {
    if (type === "student") {
      if (studentFile) {
        alert("Student file uploaded successfully!");
        setStudentFile(null); // Reset the file input after upload
      } else {
        alert("Please select a file to upload.");
      }
    } else if (type === "mentor") {
      if (mentorFile) {
        alert("Mentor file uploaded successfully!");
        setMentorFile(null); // Reset the file input after upload
      } else {
        alert("Please select a file to upload.");
      }
    }
  };

  return (
    <div>
      <style>
        {`
          /* Base Styling */
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: Arial, sans-serif;
            background-color: #f1f2f7;
            color: #1a1a1a;
          }

          /* Logo Styling */
          .status {
            text-align: center;
            margin: 20px 0;
          }

          .logo {
            width: 55px;
          }

          /* Page Container */
          .form-container {
            width: 50%;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin: 30px auto;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          h1 {
            font-size: 1.8em;
            color: #1a1a1a; 
            margin-bottom: 10px;
          }

          .description {
            font-size: 1em;
            color: #666;
            margin-bottom: 20px;
          }

          /* Upload Form */
          .upload-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          /* Upload Section */
          .upload-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }

          label {
            font-size: 1em;
            font-weight: bold;
            color: #333;
          }

          .upload-input {
            padding: 10px;
            border: 1px solid #a6dfdb; 
            border-radius: 4px;
            background-color: #f9f9f9;
            width: 100%;
            max-width: 300px;
            font-size: 0.9em;
            color: #333;
          }

          .upload-input:hover {
            border-color: #26cfc5; 
          }

          .upload-btn {
            padding: 10px 15px;
            background-color: #66d7d0;
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1em;
          }

          .upload-btn:hover {
            background-color: #26cfc5; 
            transition: 0.3s ease;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .form-container {
              width: 80%;
            }
          }

          @media (max-width: 480px) {
            .form-container {
              width: 95%;
            }
          }
        `}
      </style>

      {/* Logo Section */}
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      {/* Upload Section */}
      <div className="form-container">
        <h1>Admin Upload Section</h1>
        <p className="description">
          Upload the details of students and mentors in the respective sections
          below. Supported formats: <strong>.csv</strong>
        </p>

        {/* Upload Form */}
        <form className="upload-form">
          {/* Upload for Students */}
          <div className="upload-section">
            <label htmlFor="students-file">Upload Student Details</label>
            <input
              type="file"
              id="students-file"
              accept=".csv"
              className="upload-input"
              onChange={(e) => setStudentFile(e.target.files[0])}
            />
            <button
              type="button"
              className="upload-btn"
              onClick={() => handleFileUpload("student")}
            >
              Upload
            </button>
          </div>

          {/* Upload for Mentors */}
          <div className="upload-section">
            <label htmlFor="mentors-file">Upload Mentor Details</label>
            <input
              type="file"
              id="mentors-file"
              accept=".csv"
              className="upload-input"
              onChange={(e) => setMentorFile(e.target.files[0])}
            />
            <button
              type="button"
              className="upload-btn"
              onClick={() => handleFileUpload("mentor")}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminUploadSection;
