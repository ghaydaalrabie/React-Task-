import React from 'react'
import { Outlet, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="navbar fixed-top  navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <img
              className="logo"
              src={require("./imgs/logoo.png")}
              alt="mylogo"
            />

            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link active" to="/projects">
                  projects
                </Link>

                <Link className="nav-item nav-link active"  to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header; 