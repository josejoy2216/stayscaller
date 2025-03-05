import React from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import heroGif from "../assets/img/hero.gif";

const ComponentName = () => {
    const navigate = useNavigate();

    return (
        <section id="about" className="hero-section">
            <div className="container">
                <div className="hero-content">
                    {/* Left Section */}
                    <div className="hero-left">
                        <img className="hero-image" src={heroGif} alt="Animated Illustration" />
                    </div>

                    {/* Right Section */}
                    <div className="hero-right">
                        <h1 className="hero-title">Lead the Game. Grow with Us.</h1>
                        <p className="hero-description">
                            At Stay Scaler, we help hotels thrive with smart data analytics, strategic pricing, and deep industry insights. 
                            Our expert team, with years of experience in OTA, revenue management, and digital marketing, crafts personalized 
                            solutions to boost your revenue. Founded by a leader with over a decade in India’s largest OTA, we’re here to turn 
                            your hotel into a market leader. Let’s grow together!
                        </p>

                        {/* Buttons */}
                        <div className="hero-buttons">
                            <a className="revenue-btn" href="#revenue">
                                <FaChartLine /> Revenue Challenge
                            </a>
                            <button className="analysis-btn" onClick={() => navigate("/hotel-gap-analysis")}>
                                Free Hotel GAP Analysis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComponentName;
