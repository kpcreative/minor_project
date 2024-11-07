import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // For custom styling if needed

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://www.practo.com/nav/logo.png" alt="Practo" style={{ height: '30px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Find Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Video Consult</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Surgeries</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">For Corporates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">For Providers</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login / Signup</Link> {/* Updated link */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
