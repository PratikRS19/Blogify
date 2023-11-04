import { signOut, getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/1024.png";

const NavBar = () => {
  const nav = useNavigate();
  const Logout = (event) => {
    event.preventDefault();
    const auth = getAuth();
    localStorage.clear();
    signOut(auth)
      .then((res) => nav("/"))
      .catch((err) => console.log(err));
  };

  // const handleLinkClick = () => {
  //   // Perform any necessary logic before the page refresh

  //   window.location.href = "/blogs"; // Redirect to the target page with full page refresh
  // };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to={"/blogs"} className="navbar-brand" >
            {/* Blogify */}
            <div className="text-center">
        <img
          src={logo}
          className="rounded"
          alt="..."
          style={{ height: "52px", width:"52px" }}
        />
      </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={"/cr"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Create
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/ab"}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Added Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={Logout} className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
