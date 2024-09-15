import React from "react";
import "../App.css"

const SocialLinks: React.FC = () => {
    return (
        <div className="socials">
            <a href="https://github.com/kamal-stark-dev/Chandigarh_University_Podcast" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="ri-twitter-x-fill"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="ri-linkedin-fill"></i>
            </a>
        </div>
    );
};

export default SocialLinks;
