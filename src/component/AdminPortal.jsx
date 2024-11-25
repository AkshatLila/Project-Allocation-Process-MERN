import React from 'react'
import "./AdminPortal.css";
import logo from "./logo.jpg"
import link, { Link } from 'react-router-dom'

export default function AdminPortal() {
  return (
    <>
  <div className="admin">
    <img src={logo} alt="logo" className="logo" />
  </div>
  <div className="tag">
    <h2>Admin Portal</h2>
  </div>
  <div className="button">
    <button className="btn">
      <Link to="../HTML/mentor_status_admin.html">Mentor Status</Link>
    </button>
    <button className="btn">
      <Link to="../HTML/admin_team_overview.html">Team Status</Link>
    </button>
    <button className="btn">
      <Link to="../HTML/approve_docs.html">Approve Docs</Link>
    </button>
    <button className="btn">
      <Link to="../HTML/admin_upload.html">Upload docs</Link>
    </button>
  </div>
</>
  )
}

