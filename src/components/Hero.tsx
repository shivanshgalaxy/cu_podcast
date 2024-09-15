import React from "react";
import "../App.css"

const Hero: React.FC = () => {
    return (
            <div className="hero">
                <div className="left">
                    <h1>Deep Dive Podcast</h1>
                    <span>An initiative by us to help students learn and get useful insights from experts.</span>
                    <a href="./podcasts.html">View Podcasts&nbsp;<i className="ri-arrow-right-line"></i></a>
                </div>
                <img
                    src="https://static.vecteezy.com/system/resources/previews/017/179/119/non_2x/podcast-logo-radio-logo-design-studio-mic-icons-illustration-vector.jpg"
                    alt="banner image"
                />
            </div>
    );
};

export default Hero;
