import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import "../App.css";

const Header: React.FC = () => {
    return (
        <header>
            <h2>Deep Dive Podcast</h2>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <div className="navbar-link-content">
                                <span className="navbar-text">Home</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/podcasts"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <div className="navbar-link-content">
                                <span className="navbar-text">Podcasts</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/team"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <div className="navbar-link-content">
                                <span className="navbar-text">Our Team</span>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            <div className="navbar-link-content">
                                <span className="navbar-text">Contact</span>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <SocialLinks />
        </header>
    );
};

export default Header;
