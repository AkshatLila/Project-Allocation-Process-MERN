import React from 'react';
import logo from './logo.jpg';
import styles from './studentPStatus.module.css'; // Import as a module

export default function StudentprojectStatus() {
  const weeks = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className={styles.status}>
        <img src={logo} alt="SKIT Logo" className={styles.logo} />
      </div>

      <div className={styles.container}>
        {/* Student Details Table */}
        <table className={styles.studentDetails}>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>123456</td>
            </tr>
          </tbody>
        </table>

        {/* Project Details Table */}
        <table className={styles.projectDetails}>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Project Code</th>
              <th>Mentor Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Chatbot</td>
              <td>AI123</td>
              <td>Dr. Alan Turing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.container}>
        <table className={styles.weeklyStatus}>
          <thead>
            <tr>
              <th>Week</th>
              <th>Status</th>
              <th>Marks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {weeks.map((week) => (
              <tr key={week}>
                <td>Week {week}</td>
                <td className={styles.unsubmitted}>Unsubmitted</td>
                <td>Marks</td>
                <td>
                  <button className={styles.uploadBtn}>Upload</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
