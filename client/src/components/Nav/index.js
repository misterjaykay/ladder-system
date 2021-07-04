import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav(props) {
    return(
    <nav className="navbar navbar-expand-sm navbar-light bg-light justify-content-center">
        {/* <Link className="navbar-brand" to="/">
            Google Books
        </Link> */}
        <div>
        <ul className="navbar-nav margin-left">
            <li className="nav-item">
            <Link to="/rank"
                className={
                window.location.pathname === "/" ||
                window.location.pathname === "/rank" ? "nav-link active" : "nav-link"}
            >
                Rank
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/submit"
                className={
                window.location.pathname === "/submit"  ? "nav-link active"  : "nav-link"}
            >
                Submit
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/admin"
                className={
                window.location.pathname === "/admin"  ? "nav-link active"  : "nav-link"}
            >
                Admin
            </Link>
            </li>
        </ul>
        </div>
    </nav>
    );
}

export default Nav;
