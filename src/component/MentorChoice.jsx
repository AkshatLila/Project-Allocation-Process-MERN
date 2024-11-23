import React, { useState } from "react";
import Select from "react-select";
import "./MentorChoice.css";
import logo from './logo.jpg';

const MentorChoiceForm = () => {
  const [formData, setFormData] = useState({
    project1: { title: "", technology: "", description: "" },
    project2: { title: "", technology: "", description: "" },
    mentorChoices: [],
  });

  const mentorOptions = [
    { value: "mentor1", label: "Mentor 1" },
    { value: "mentor2", label: "Mentor 2" },
    { value: "mentor3", label: "Mentor 3" },
    { value: "mentor4", label: "Mentor 4" },
    { value: "mentor5", label: "Mentor 5" },
  ];

  const handleChange = (e, field, project) => {
    if (project) {
      setFormData({
        ...formData,
        [project]: { ...formData[project], [field]: e.target.value },
      });
    } else {
      setFormData({ ...formData, [field]: e });
    }
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
  };

  return (
    <div>
      {/* Logo Section */}
      <div className="status">
        <img src={logo} alt="SKIT Logo" className="logo" />
      </div>

      {/* Form Container */}
      <div className="form-container">
        <h1>Project Submission Form</h1>

        {/* Project 1 Details */}
        <div className="form-group">
          <label htmlFor="project1-title">Project-1 Title:</label>
          <input
            type="text"
            id="project1-title"
            placeholder="Enter Project-1 Title"
            value={formData.project1.title}
            onChange={(e) => handleChange(e, "title", "project1")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="project1-tech">Project-1 Technology:</label>
          <input
            type="text"
            id="project1-tech"
            placeholder="Enter Technology Used"
            value={formData.project1.technology}
            onChange={(e) => handleChange(e, "technology", "project1")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="project1-desc">Project-1 Description:</label>
          <textarea
            id="project1-desc"
            rows="3"
            placeholder="Enter Description"
            value={formData.project1.description}
            onChange={(e) => handleChange(e, "description", "project1")}
          ></textarea>
        </div>

        {/* Project 2 Details */}
        <div className="form-group">
          <label htmlFor="project2-title">Project-2 Title:</label>
          <input
            type="text"
            id="project2-title"
            placeholder="Enter Project-2 Title"
            value={formData.project2.title}
            onChange={(e) => handleChange(e, "title", "project2")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="project2-tech">Project-2 Technology:</label>
          <input
            type="text"
            id="project2-tech"
            placeholder="Enter Technology Used"
            value={formData.project2.technology}
            onChange={(e) => handleChange(e, "technology", "project2")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="project2-desc">Project-2 Description:</label>
          <textarea
            id="project2-desc"
            rows="3"
            placeholder="Enter Description"
            value={formData.project2.description}
            onChange={(e) => handleChange(e, "description", "project2")}
          ></textarea>
        </div>

        {/* Mentor Selection */}
        <div className="form-group">
          <h3>Choose Mentor</h3>
          <div className="choice-list">
            {[1, 2, 3].map((choice) => (
              <div key={choice} className="mentor-choice">
                <label htmlFor={`mentor-choice${choice}`}>Choice {choice}:</label>
                <Select
                  id={`mentor-choice${choice}`}
                  options={mentorOptions}
                  isClearable
                  placeholder="Select a mentor"
                  onChange={(selectedOption) =>
                    handleChange(selectedOption, `choice${choice}`, "mentorChoices")
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default MentorChoiceForm;
