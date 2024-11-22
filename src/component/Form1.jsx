import React, { useState } from 'react';
import './Form1.css';
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
    <div className='status'>
    <img src={logo} alt="logo"/>
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
                <th>Purpose of Use</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool, index) => (
                <tr key={index}>
                  <td><input type="text" name="name" value={tool.name} onChange={(e) => handleInputChange(e, index, 'tools')} required /></td>
                  <td><input type="text" name="version" value={tool.version} onChange={(e) => handleInputChange(e, index, 'tools')} required /></td>
                  <td><input type="text" name="type" value={tool.type} onChange={(e) => handleInputChange(e, index, 'tools')} required /></td>
                  <td><input type="text" name="purpose" value={tool.purpose} onChange={(e) => handleInputChange(e, index, 'tools')} required /></td>
                  <td><button type="button" onClick={() => deleteRow(index, 'tools')}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={addToolRow}>Add Tool</button>
        </div>

        <div>
          <label>Proposed Project Modules:</label>
          <table id="modules-table" border="1" width="100%">
            <thead>
              <tr>
                <th>Module Name</th>
                <th>Functionality</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {modules.map((module, index) => (
                <tr key={index}>
                  <td><input type="text" name="name" value={module.name} onChange={(e) => handleInputChange(e, index, 'modules')} required /></td>
                  <td><input type="text" name="functionality" value={module.functionality} onChange={(e) => handleInputChange(e, index, 'modules')} required /></td>
                  <td><button type="button" onClick={() => deleteRow(index, 'modules')}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={addModuleRow}>Add Module</button>
        </div>

        <div>
          <label>Team Member Details:</label>
          <table id="team-members-table" border="1" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Class & Group</th>
                <th>Mobile No.</th>
                <th>Expertise Area</th>
                <th>Role in Project</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member, index) => (
                <tr key={index}>
                  <td><input type="text" name="name" value={member.name} onChange={(e) => handleInputChange(e, index, 'teamMembers')} required /></td>
                  <td><input type="text" name="classGroup" value={member.classGroup} onChange={(e) => handleInputChange(e, index, 'teamMembers')} required /></td>
                  <td><input type="text" name="mobile" value={member.mobile} onChange={(e) => handleInputChange(e, index, 'teamMembers')} required /></td>
                  <td><input type="text" name="expertise" value={member.expertise} onChange={(e) => handleInputChange(e, index, 'teamMembers')} required /></td>
                  <td><input type="text" name="role" value={member.role} onChange={(e) => handleInputChange(e, index, 'teamMembers')} required /></td>
                  <td><button type="button" onClick={() => deleteRow(index, 'teamMembers')}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={addTeamMemberRow}>Add Member</button>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </>
  );
}

export default ProjectAbstractForm;
