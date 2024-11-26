import React from "react";
import logo from "./logo.jpg"; // Adjust the path as needed

const DocumentApproval = () => {
  const documents = [
    {
      name: "Project Proposal",
      submittedBy: "Alice Johnson",
      submissionDate: "2024-11-20",
    },
    {
      name: "Research Report",
      submittedBy: "Bob Smith",
      submissionDate: "2024-11-19",
    },
  ];

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            font-family: "Roboto", sans-serif;
            background-color: #f9fafc;
            color: #1a1a1a;
            line-height: 1.6;
          }
          .status {
            text-align: center;
            margin: 20px 0;
          }
          .logo {
            width: 55px;
          }
          .form-container {
            max-width: 800px;
            background-color: #ffffff;
            padding: 30px;
            border-radius: 10px;
            margin: 30px auto;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          }
          h1 {
            text-align: center;
            font-size: 2em;
            margin-bottom: 15px;
            color: #333;
          }
          .document-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background-color: #f9f9f9;
            margin-bottom: 15px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            transition: all 0.3s ease;
          }
          .document-row:hover {
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
          .document-info p {
            margin: 5px 0;
            font-size: 1em;
            color: #555;
          }
          .document-actions {
            display: flex;
            gap: 10px;
          }
          .approve-btn,
          .reject-btn {
            padding: 10px 15px;
            font-size: 0.9em;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            color: #fff;
          }
          .approve-btn {
            background-color: #26cfc5;
            transition: background-color 0.3s ease;
          }
          .approve-btn:hover {
            background-color: #1ab8a8;
          }
          .reject-btn {
            background-color: #e74c3c;
            transition: background-color 0.3s ease;
          }
          .reject-btn:hover {
            background-color: #c0392b;
          }
          @media (max-width: 768px) {
            .form-container {
              padding: 20px;
              margin: 20px auto;
            }
            .document-row {
              flex-direction: column;
              align-items: flex-start;
            }
            .document-actions {
              margin-top: 10px;
            }
          }
          @media (max-width: 480px) {
            .form-container {
              width: 95%;
              padding: 15px;
            }
          }
        `}
      </style>

      <div>
        {/* Logo Section */}
        <div className="status">
          <img src={logo} alt="SKIT Logo" className="logo" />
        </div>

        {/* Document Approval Section */}
        <div className="form-container">
          <h1>Document Approval</h1>

          {/* Document List */}
          <div>
            {documents.map((doc, index) => (
              <div key={index} className="document-row">
                <div className="document-info">
                  <p>
                    <strong>Document Name:</strong> {doc.name}
                  </p>
                  <p>
                    <strong>Submitted By:</strong> {doc.submittedBy}
                  </p>
                  <p>
                    <strong>Submission Date:</strong> {doc.submissionDate}
                  </p>
                </div>
                <div className="document-actions">
                  <button className="approve-btn">Approve</button>
                  <button className="reject-btn">Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentApproval;
