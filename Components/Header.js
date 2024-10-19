import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Eventloom</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/event">Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/ticket">Ticket</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/registration">Registration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/management">Management</Link>
        </li>
     
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header