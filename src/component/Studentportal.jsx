import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.jpg";

function StudentPortal() {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            background-color: #f1f2f7;
            display: flex;
            justify-content: center;
          }

          .student {
            position: relative;
            display: flex;
            justify-content: center;
          }

          .header {
            display: flex;
            align-items: center;
          }

          .logo {
            width: 55px;
            height: auto;
            margin-top: 50px;
          }

          .tag h2 {
            font-size: 30px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 300;
            margin-top: 20px;
            color: #000;
          }

          .button {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
          }

          .btn {
            width: 155px;
            height: 40px;
            color: #FFFFFF;
            background-color: #00acac;
            border-radius: 5px;
            border: none;
            font-size: 18px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
          }

          .btn:hover {
            background-color: #008a8a;
            transition: 0.3s ease;
          }

          /* Responsive Styles */
          @media (max-width: 768px) {
            .logo {
              width: 50px;
              margin-top: 80px;
            }

            .tag h2 {
              font-size: 24px;
              margin-top: 20px;
            }

            .button {
              gap: 10px;
            }

            .btn {
              width: 120px;
              height: 35px;
              font-size: 16px;
              margin-top: 30px;
            }
          }

          @media (max-width: 480px) {
            .logo {
              width: 50px;
            }

            .tag h2 {
              margin-top: 25px;
              font-size: 22px;
            }

            .button {
              gap: 10px;
            }

            .btn {
              width: 100%;
              height: 45px;
              font-size: 18px;
            }
          }
        `}
      </style>
      <div className="student">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="tag">
        <h2>Student Portal</h2>
      </div>
      <div className="button">
        <Link to="/teamjoin" className="btn">
          My Team
        </Link>
        <Link to="/studentprojectstatus" className="btn">
          My Progress
        </Link>
        <Link to="/studentformsubmission" className="btn">
          Form Submissions
        </Link>
        <Link to="/mentorchoiceform" className="btn">
          Fill Project Details
        </Link>
      </div>
    </>
  );
}

export default StudentPortal;
