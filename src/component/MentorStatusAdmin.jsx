import React, { useState } from "react";
import "./MentorStatusAdmin.css";
import logo from './logo.jpg';

const MentorStatusAdmin = () => {
  const employeesData = [
    { sNo: 1, name: "Alice", department: "HR", designation: "Manager" },
    { sNo: 2, name: "Bob", department: "Finance", designation: "Analyst" },
    { sNo: 3, name: "Charlie", department: "IT", designation: "Developer" },
    { sNo: 4, name: "David", department: "Sales", designation: "Executive" },
    { sNo: 5, name: "Eva", department: "Marketing", designation: "Specialist" },
    { sNo: 6, name: "Frank", department: "IT", designation: "Support" },
    { sNo: 7, name: "Grace", department: "Finance", designation: "Accountant" },
    { sNo: 8, name: "Hannah", department: "Sales", designation: "Manager" },
    { sNo: 9, name: "Ivan", department: "HR", designation: "Recruiter" },
    { sNo: 10, name: "Julia", department: "Marketing", designation: "Coordinator" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employeesData);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = employeesData.filter(
      (employee) =>
        employee.name.toLowerCase().includes(query) ||
        employee.department.toLowerCase().includes(query) ||
        employee.designation.toLowerCase().includes(query)
    );

    setFilteredEmployees(filtered);
  };

  return (
    <div className="head">
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <h2>Mentor Status</h2>
      </div>

      <div className="container">
        <input
          type="text"
          id="searchInput"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="table-container">
          <table id="resultsTable" className="search-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Name</th>
                <th>Department</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody id="resultsBody">
              {filteredEmployees.map((employee) => (
                <tr key={employee.sNo}>
                  <td>{employee.sNo}</td>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.designation}</td>
                </tr>
              ))}
              {filteredEmployees.length === 0 && (
                <tr>
                  <td colSpan="4">No results found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MentorStatusAdmin;
