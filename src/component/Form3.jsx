import React, { useState } from "react";
import "./Form3.css";
import logo from './logo.jpg';

const WeeklyStatusMatrix = () => {
  const [rows, setRows] = useState([]);
  const [formData, setFormData] = useState({
    studentName: "",
    projectName: "",
    teamMembers: ["", "", ""],
    totalWeeks: "",
    moduleCompleted: "",
    overallProgress: "",
    overallComment: "",
    percentageMarks: "",
    mentorRemarks: "",
  });

  // Handler to add a new row
  const addRow = () => {
    setRows([
      ...rows,
      {
        week: "",
        module: "",
        progress: "",
        comments: "",
        marks: "",
      },
    ]);
  };

  // Handler to delete a row
  const deleteRow = (index) => {
    setRows(rows.filter((_, rowIndex) => rowIndex !== index));
  };

  // Handler for input changes in the rows
  const handleRowChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  // Handler for input changes in the summary fields
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <div className="status">
        <img src={logo} alt="SKIT Logo"/>
      </div>

    <div className="form-container">
      <h1>Project Weekly Status Matrix</h1>

      {/* Student Name */}
      <div className="form-group">
        <label htmlFor="student-name">Name of Student - 1:</label>
        <input
          type="text"
          id="student-name"
          placeholder="Enter Student Name"
          value={formData.studentName}
          onChange={(e) => handleInputChange("studentName", e.target.value)}
        />
      </div>

      {/* Project Name */}
      <div className="form-group">
        <label htmlFor="project-name">Name of Project:</label>
        <input
          type="text"
          id="project-name"
          placeholder="Enter Project Name"
          value={formData.projectName}
          onChange={(e) => handleInputChange("projectName", e.target.value)}
        />
      </div>

      {/* Team Members */}
      <div className="form-group">
        <label>Other Team Members:</label>
        {formData.teamMembers.map((member, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Team Member ${index + 2}`}
            value={member}
            onChange={(e) => {
              const updatedMembers = [...formData.teamMembers];
              updatedMembers[index] = e.target.value;
              setFormData({ ...formData, teamMembers: updatedMembers });
            }}
          />
        ))}
      </div>

      {/* Status Table */}
      <table id="status-table">
        <thead>
          <tr>
            <th>Week (To-From)</th>
            <th>Working on Module</th>
            <th>Progress Achieved</th>
            <th>Comments & Signature of Mentor</th>
            <th>Marks (out of 10)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  placeholder="Week (To-From)"
                  value={row.week}
                  onChange={(e) =>
                    handleRowChange(index, "week", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Working on Module"
                  value={row.module}
                  onChange={(e) =>
                    handleRowChange(index, "module", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Progress Achieved"
                  value={row.progress}
                  onChange={(e) =>
                    handleRowChange(index, "progress", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Comments & Signature"
                  value={row.comments}
                  onChange={(e) =>
                    handleRowChange(index, "comments", e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder="Marks (out of 10)"
                  value={row.marks}
                  onChange={(e) =>
                    handleRowChange(index, "marks", e.target.value)
                  }
                />
              </td>
              <td>
                <button
                  className="delete-row-btn"
                  onClick={() => deleteRow(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="btns">
        <button
          id="add-row-btn"
          className="add-row-btn"
          onClick={addRow}
        >
          Add New Row
        </button>
      </div>

      {/* Summary Section */}
      <div className="summary-section">
        <h3>Summary</h3>
        <div className="form-group">
          <label htmlFor="total-weeks">Total Weeks:</label>
          <input
            type="text"
            id="total-weeks"
            placeholder="Enter Total Weeks"
            value={formData.totalWeeks}
            onChange={(e) => handleInputChange("totalWeeks", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="module-completed">Module Completed (Y/N):</label>
          <input
            type="text"
            id="module-completed"
            placeholder="Y or N"
            value={formData.moduleCompleted}
            onChange={(e) => handleInputChange("moduleCompleted", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="overall-progress">
            Overall Progress (Poor/Avg/Good):
          </label>
          <input
            type="text"
            id="overall-progress"
            placeholder="Enter Progress"
            value={formData.overallProgress}
            onChange={(e) => handleInputChange("overallProgress", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="overall-comment">
            Overall Comment (Poor/Avg/Good):
          </label>
          <input
            type="text"
            id="overall-comment"
            placeholder="Enter Comment"
            value={formData.overallComment}
            onChange={(e) => handleInputChange("overallComment", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="percentage-marks">
            Percentage Marks Estimate (By Mentor):
          </label>
          <input
            type="text"
            id="percentage-marks"
            placeholder="Enter Percentage"
            value={formData.percentageMarks}
            onChange={(e) => handleInputChange("percentageMarks", e.target.value)}
          />
        </div>
      </div>

      {/* Mentor Remarks */}
      <div className="mentor-remarks">
        <label htmlFor="mentor-remarks">Mentor's Remarks:</label>
        <textarea
          id="mentor-remarks"
          rows="4"
          placeholder="Enter Remarks"
          value={formData.mentorRemarks}
          onChange={(e) => handleInputChange("mentorRemarks", e.target.value)}
        ></textarea>
      </div>

      <button className="submit-btn">Submit</button>
    </div>
    </>
  );
};

export default WeeklyStatusMatrix;
