// src/components/Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand text-warning" href="/">Divya Mote</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link text-light px-4 fw-bold" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-4 fw-bold" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-4 fw-bold" href="/projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-4 fw-bold" href="/skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-4 fw-bold" href="/contact">Contact</a>
            </li>
            <form className="d-flex ms-3 px-5">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
