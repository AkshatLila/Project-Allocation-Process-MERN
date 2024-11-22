import React from 'react'
import "./AdminPortal.css";
import logo from "./logo.jpg"
import link, { Link } from 'react-router-dom'

export default function AdminPortal() {
  return (
    <div className="admin-portal">
    <div className="admin">
        <img src={logo} alt="logo" className="logo" />
    </div>
    <div className="tag">
        <h2>Admin Portal</h2>
    </div>
    <div className="button-group">
        <button className="btn">Mentor Status</button>
        <Link className='btn' to={'/teamstatus'}>Team Status</Link>
        <button className="btn">Approve Docs.</button>
    </div>
</div>
  )
}

