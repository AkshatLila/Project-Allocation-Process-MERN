import React, { useState } from "react";
import "./AdminUpload.css";
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
