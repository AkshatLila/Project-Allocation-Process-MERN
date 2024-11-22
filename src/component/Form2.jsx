import React, { useState } from "react";
import "./Form2.css";
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

        {/* Photo Upload Section */}
        <div className="photo-upload">
  <label htmlFor="photo-upload">Upload Photo:</label>
  <input
    type="file"
    id="photo-upload"
    accept="image/*"
    onChange={handlePhotoUpload}
  />
  <div id="photo-preview-container" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
    {photoPreview && (
      <img
        id="photo-preview"
        src={photoPreview}
        alt="Photo Preview"
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    )}
  </div>
</div>

        {/* Mentor Signature Section */}
        <div className="mentor-signature">
          <hr />
          <label>Mentor’s Name & Signature</label>
        </div>

        {/* Submit Button */}
        <div className="submit-section">
          <button className="submit-btn">Submit</button>
        </div>
      </div>
    </>
  );
};

export default RoleSpecificationForm;
