import React from "react";
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";
import "../App.css";

const Header: React.FC = () => {
  return (
    <header>
      <h2>Deep Dive Podcast</h2>
      <nav>
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/podcasts">Podcasts</Link></li>
          <li><Link to="/">Our Team</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>
      <SocialLinks />
    </header>
  );
};

export default Header;