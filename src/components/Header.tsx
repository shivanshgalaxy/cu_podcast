import React from "react";
import SocialLinks from "./SocialLinks.tsx";
import "../App.css"

const Header: React.FC = () => {
    return (
        <header>
            <h2>Deep Dive Podcast</h2>
            <nav>
                <ul>
                    <li><a href="./index.html" className="active">Home</a></li>
                    <li><a href="./podcasts.html">Podcasts</a></li>
                    <li><a href="./our-team.html">Our Team</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </nav>
            <SocialLinks />
        </header>
    );
};

export default Header;
