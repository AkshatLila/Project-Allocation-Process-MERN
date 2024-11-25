import React, { useState } from 'react';
import logo from './logo.jpg';

function ProjectAbstractForm() {
  const [tools, setTools] = useState([{ name: '', version: '', type: '', purpose: '' }]);
  const [modules, setModules] = useState([{ name: '', functionality: '' }]);
  const [teamMembers, setTeamMembers] = useState([{ name: '', classGroup: '', mobile: '', expertise: '', role: '' }]);

  // Handle changes in tools, modules, and team members
  const handleInputChange = (e, index, type) => {
    const { name, value } = e.target;
    const updatedArray = [...(type === 'tools' ? tools : type === 'modules' ? modules : teamMembers)];
    updatedArray[index][name] = value;
    if (type === 'tools') setTools(updatedArray);
    if (type === 'modules') setModules(updatedArray);
    if (type === 'teamMembers') setTeamMembers(updatedArray);
  };

  // Add a new row for tools
  const addToolRow = () => {
    setTools([...tools, { name: '', version: '', type: '', purpose: '' }]);
  };

  // Add a new row for modules
  const addModuleRow = () => {
    setModules([...modules, { name: '', functionality: '' }]);
  };

  // Add a new row for team members
  const addTeamMemberRow = () => {
    setTeamMembers([...teamMembers, { name: '', classGroup: '', mobile: '', expertise: '', role: '' }]);
  };

  // Delete a row
  const deleteRow = (index, type) => {
    const updatedArray = [...(type === 'tools' ? tools : type === 'modules' ? modules : teamMembers)];
    updatedArray.splice(index, 1);
    if (type === 'tools') setTools(updatedArray);
    if (type === 'modules') setModules(updatedArray);
    if (type === 'teamMembers') setTeamMembers(updatedArray);
  };

  return (
    <>
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
            color: #333;
          }

          .head {
            width: 100%;
            flex-direction: column;
          }

          /* Logo Styling */
          .status {
            text-align: center;
            margin: 20px 0;
          }

          .logo {
            width: 55px;
          }

          /* Container for the Form */
          .form-container {
            width: 100%;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            margin: 30px auto;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          /* Form Header */
          h1 {
            text-align: center;
            font-size: 1.8em;
            color: #333;
            margin-bottom: 20px;
          }

          /* Form Labels */
          label {
            font-weight: bold;
            margin-top: 10px;
            display: block;
            color: #333;
          }

          /* Form Inputs */
          input,
          select,
          textarea {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: 1px solid #ddd;
          }

          /* Checkbox Group */
          .checkbox-group {
            margin-top: 7px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 50%;
            position: relative;
            left: 20%;
          }

          .checkbox-item {
            margin-bottom: 10px;
          }

          .checkbox-item > span {
            color: #333;
            margin-top: 5px;
            width: auto;
          }

          .checkbox-item > input {
            margin: 1px;
            padding: 0%;
            width: 5%;
          }

          /* Tables */
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            margin-bottom: 20px;
          }

          table,
          th,
          td {
            border: 1px solid #ddd;
          }

          th,
          td {
            padding: 8px;
            text-align: center;
          }

          th {
            background-color: #f3f3f3;
          }

          button {
            padding: 7px;
            background-color: #6ec3c7;
            color: #ffffff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 10rem;
          }

          /* Submit Button */
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

          /* Responsive Design Adjustments */
          @media (max-width: 1024px) {
            .form-container {
              width: 80%;
              padding: 15px;
            }

            .logo {
              width: 50px;
            }

            th,
            td {
              padding: 6px;
            }

            .submit-btn {
              padding: 10px;
            }
          }

          @media (max-width: 768px) {
            .form-container {
              width: 90%;
              padding: 10px;
            }

            .logo {
              width: 45px;
            }

            th,
            td {
              padding: 5px;
            }

            .submit-btn {
              padding: 8px;
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .form-container {
              width: 95%;
              padding: 10px;
            }

            .logo {
              width: 40px;
            }

            th,
            td {
              padding: 4px;
              font-size: 12px;
            }

            .submit-btn {
              padding: 6px;
              font-size: 12px;
            }
          }
        `}
      </style>
      <div className='status'>
        <img src={logo} alt="logo" />
      </div>
      <div className="form-container">
        <h1>Project Abstract Form</h1>
        <form action="/submit-form" method="post">
          <div>
            <label htmlFor="lab-coordinator">Name of Lab Coordinator:</label>
            <input type="text" id="lab-coordinator" name="lab-coordinator" required />
            <label htmlFor="project-id">Project ID:</label>
            <input type="text" id="project-id" name="project-id" required />
            <label htmlFor="project-title">Title of Project:</label>
            <input type="text" id="project-title" name="project-title" required />
          </div>

          <div>
            <label>Project Track:</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <span>R&D (Innovation)</span>
                <input type="checkbox" name="project-track" value="R&D" style={{ float: 'right' }} />
              </div>
              <div className="checkbox-item">
                <span>Consultancy (Industry)</span>
                <input type="checkbox" name="project-track" value="Consultancy" style={{ float: 'right' }} />
              </div>
              <div className="checkbox-item">
                <span>Startup (Self-Business)</span>
                <input type="checkbox" name="project-track" value="Startup" style={{ float: 'right' }} />
              </div>
              <div className="checkbox-item">
                <span>Project Pool (IBM/Infosys)</span>
                <input type="checkbox" name="project-track" value="Project Pool" style={{ float: 'right' }} />
              </div>
              <div className="checkbox-item">
                <span>Hardware/Embedded</span>
                <input type="checkbox" name="project-track" value="Hardware" style={{ float: 'right' }} />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="introduction">Brief Introduction of Project:</label>
            <textarea id="introduction" name="introduction" rows="4" required></textarea>
          </div>

          <div>
            <label>Tools / Technologies to be used:</label>
            <table id="tools-table" border="1" width="100%">
              <thead>
                <tr>
                  <th>Name of Tool / Technology</th>
                  <th>Version</th>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((tool, index) => (
                  <tr key={index}>
                    <td><input type="text" name="name" value={tool.name} onChange={(e) => handleInputChange(e, index, 'tools')} /></td>
                    <td><input type="text" name="version" value={tool.version} onChange={(e) => handleInputChange(e, index, 'tools')} /></td>
                    <td><input type="text" name="type" value={tool.type} onChange={(e) => handleInputChange(e, index, 'tools')} /></td>
                    <td><input type="text" name="purpose" value={tool.purpose} onChange={(e) => handleInputChange(e, index, 'tools')} /></td>
                    <td><button type="button" onClick={() => deleteRow(index, 'tools')}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={addToolRow}>Add Tool</button>
          </div>

          <div>
            <label>Modules of the Project:</label>
            <table id="modules-table" border="1" width="100%">
              <thead>
                <tr>
                  <th>Name of Module</th>
                  <th>Functionality</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module, index) => (
                  <tr key={index}>
                    <td><input type="text" name="name" value={module.name} onChange={(e) => handleInputChange(e, index, 'modules')} /></td>
                    <td><input type="text" name="functionality" value={module.functionality} onChange={(e) => handleInputChange(e, index, 'modules')} /></td>
                    <td><button type="button" onClick={() => deleteRow(index, 'modules')}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={addModuleRow}>Add Module</button>
          </div>

          <div>
            <label>Team Members:</label>
            <table id="team-table" border="1" width="100%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class/Group</th>
                  <th>Mobile</th>
                  <th>Expertise</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, index) => (
                  <tr key={index}>
                    <td><input type="text" name="name" value={member.name} onChange={(e) => handleInputChange(e, index, 'teamMembers')} /></td>
                    <td><input type="text" name="classGroup" value={member.classGroup} onChange={(e) => handleInputChange(e, index, 'teamMembers')} /></td>
                    <td><input type="text" name="mobile" value={member.mobile} onChange={(e) => handleInputChange(e, index, 'teamMembers')} /></td>
                    <td><input type="text" name="expertise" value={member.expertise} onChange={(e) => handleInputChange(e, index, 'teamMembers')} /></td>
                    <td><input type="text" name="role" value={member.role} onChange={(e) => handleInputChange(e, index, 'teamMembers')} /></td>
                    <td><button type="button" onClick={() => deleteRow(index, 'teamMembers')}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={addTeamMemberRow}>Add Team Member</button>
          </div>

          <div>
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ProjectAbstractForm;
