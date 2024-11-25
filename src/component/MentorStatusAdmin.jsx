import React, { useState } from "react";
import logo from "./logo.jpg";

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
    <div>
      <style>
        {`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
          body {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f1f2f7;
          }
          .logo {
            width: 55px;
            height: auto;
            margin-top: 50px;
            margin-right: 50px;
          }
          h2 {
            font-weight: 200;
            font-size: 35px;
            color: #000;
          }
          .head {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
          }
          .header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 30px;
            width: 100%;
          }
          .container {
            width: 100%;
            min-width: 1000px;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-top: 35px;
          }
          #searchInput {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
            outline: none;
          }
          .search-table {
            width: 100%;
            border-collapse: collapse;
          }
          .search-table th,
          .search-table td {
            padding: 10px;
            border: 1px solid #eee;
            text-align: left;
          }
          .search-table th {
            background-color: #f0f0f0;
          }
          .search-table tr:hover {
            background-color: #f9f9f9;
          }
          @media (max-width: 1024px) {
            .container {
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
            .table-container {
              overflow-x: auto;
            }
          }
          @media (max-width: 768px) {
            .container {
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
            th {
              font-size: 13px;
            }
            td {
              font-size: 12px;
            }
            .table-container {
              overflow-x: auto;
            }
          }
          @media (max-width: 480px) {
            .container {
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
            .table-container {
              overflow-x: auto;
            }
            table {
              width: 100%;
              display: block;
            }
          }
        `}
      </style>
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
    </div>
  );
};

export default MentorStatusAdmin;
