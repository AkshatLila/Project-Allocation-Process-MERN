import React, { useState } from 'react';
import './TeamStatusAdmin.css';
import logo from "./logo.jpg"

function TeamStatus() {
  // Sample data with only Project Code and Project Name
  const initialProjects = [
    { code: 'P1001', name: 'Project Alpha' },
    { code: 'P1002', name: 'Project Beta' },
    { code: 'P1003', name: 'Project Gamma' },
    { code: 'P1004', name: 'Project Delta' },
    { code: 'P1005', name: 'Project Epsilon' },
    { code: 'P1006', name: 'Project Zeta' },
    { code: 'P1007', name: 'Project Eta' },
    { code: 'P1008', name: 'Project Theta' },
    { code: 'P1009', name: 'Project Iota' },
    { code: 'P1010', name: 'Project Kappa' }
  ];

  const [projects] = useState(initialProjects);  // Original project list
  const [query, setQuery] = useState('');        // Search query state

  // Function to filter projects based on search query
  const filteredProjects = projects.filter(project =>
    project.code.toLowerCase().includes(query.toLowerCase()) ||
    project.name.toLowerCase().includes(query.toLowerCase())
  );

  // Function to handle input change
  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="head">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h2>Team Status</h2>
      </div>

      <div className="container">
        <input
          type="text"
          placeholder="Search"
          id = 'searchInput'
          value={query}
          onChange={handleSearchInputChange}
        />
        <table className="search-table">
          <thead>
            <tr>
              <th>Project Code</th>
              <th>Project Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.code}>
                <td>{project.code}</td>
                <td>{project.name}</td>
                <td>
                  <button
                    className="view-button"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamStatus;
