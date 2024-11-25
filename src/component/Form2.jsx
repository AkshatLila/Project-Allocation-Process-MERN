import React, { useState } from "react";
import logo from "./logo.jpg";

const RoleSpecificationForm = () => {
  const [members, setMembers] = useState([
    { name: "", module: "", activities: [{ name: "", softDeadline: "", hardDeadline: "", details: "" }] },
    { name: "", module: "", activities: [{ name: "", softDeadline: "", hardDeadline: "", details: "" }] },
    { name: "", module: "", activities: [{ name: "", softDeadline: "", hardDeadline: "", details: "" }] },
    { name: "", module: "", activities: [{ name: "", softDeadline: "", hardDeadline: "", details: "" }] },
  ]);

  const [photoPreview, setPhotoPreview] = useState(null);

  // Handling member inputs
  const handleInputChange = (index, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[index][field] = value;
    setMembers(updatedMembers);
  };

  const handleActivityChange = (memberIndex, activityIndex, field, value) => {
    const updatedMembers = [...members];
    updatedMembers[memberIndex].activities[activityIndex][field] = value;
    setMembers(updatedMembers);
  };

  const addActivity = (memberIndex) => {
    const updatedMembers = [...members];
    updatedMembers[memberIndex].activities.push({
      name: "",
      softDeadline: "",
      hardDeadline: "",
      details: "",
    });
    setMembers(updatedMembers);
  };

  const deleteActivity = (memberIndex, activityIndex) => {
    const updatedMembers = [...members];
    updatedMembers[memberIndex].activities.splice(activityIndex, 1);
    setMembers(updatedMembers);
  };

  // Handling photo upload
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPhotoPreview(null);
    }
  };

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
            font-family: Arial, sans-serif;
            background-color: #f1f2f7;
            color: #333;
          }

          .status {
            text-align: center;
            margin: 20px 0;
          }

          .logo {
            width: 55px;
          }

          .form-container {
            min-width: 900px;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin: 30px auto;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          h1 {
            text-align: center;
            font-size: 1.8em;
            color: #333;
            margin-bottom: 10px;
          }

          h2 {
            text-align: center;
            font-size: 1.2em;
            color: #007bff;
            margin-bottom: 20px;
          }

          h3 {
            font-size: 1.1em;
            color: #333;
            margin-bottom: 10px;
            text-align: left;
          }

          label {
            font-weight: bold;
            margin-top: 10px;
            display: block;
            color: #333;
          }

          input[type="text"],
          input[type="date"],
          textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: 1px solid #ddd;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            margin-bottom: 20px;
          }

          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
          }

          .photo-upload {
            margin-top: 40px;
            text-align: right;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

          #photo-upload {
            position: relative;
            right: 0;
            width: 23%;
          }

          .submit-btn {
            width: 100%;
            padding: 12px;
            background-color: #6ec3c7;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 20px;
          }

          .submit-btn:hover {
            background-color: #5aa9ad;
          }
        `}
      </style>

      <div className="status">
        <img src={logo} alt="logo" />
      </div>

      <div className="form-container">
        <h1>Role Specification of Team Members [Form - 2]</h1>
        <h2>Project ID: <span className="project-id">ATG1-001</span></h2>

        {members.map((member, memberIndex) => (
          <div className="member-details" key={memberIndex}>
            <h3>
              Member {memberIndex + 1}: 
              <input
                type="text"
                value={member.name}
                onChange={(e) => handleInputChange(memberIndex, "name", e.target.value)}
                placeholder="Enter Member Name"
              />
            </h3>
            <label>Handling Module:</label>
            <input
              type="text"
              value={member.module}
              onChange={(e) => handleInputChange(memberIndex, "module", e.target.value)}
              placeholder="Enter Module Name"
            />

            <table>
              <thead>
                <tr>
                  <th>Name of Activity</th>
                  <th>Soft Deadline</th>
                  <th>Hard Deadline</th>
                  <th>Details</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {member.activities.map((activity, activityIndex) => (
                  <tr key={activityIndex}>
                    <td>
                      <input
                        type="text"
                        value={activity.name}
                        onChange={(e) =>
                          handleActivityChange(memberIndex, activityIndex, "name", e.target.value)
                        }
                        placeholder="Activity Name"
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={activity.softDeadline}
                        onChange={(e) =>
                          handleActivityChange(memberIndex, activityIndex, "softDeadline", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        value={activity.hardDeadline}
                        onChange={(e) =>
                          handleActivityChange(memberIndex, activityIndex, "hardDeadline", e.target.value)
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={activity.details}
                        onChange={(e) =>
                          handleActivityChange(memberIndex, activityIndex, "details", e.target.value)
                        }
                        placeholder="Activity Details"
                      />
                    </td>
                    <td>
                      <button onClick={() => deleteActivity(memberIndex, activityIndex)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => addActivity(memberIndex)}>Add Activity</button>
          </div>
        ))}

        <div className="photo-upload">
          <label htmlFor="photo-upload">Upload Photo:</label>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Photo Preview"
              style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />
          )}
        </div>

        <div className="submit-section">
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default RoleSpecificationForm;
