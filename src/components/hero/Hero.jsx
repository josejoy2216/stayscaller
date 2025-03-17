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
                            Stay Scaler empowers hotels with data-driven insights, cutting-edge technology, and deep industry expertise to maximize revenue. 
                            Our seasoned team is dedicated to transforming your business into a market leader. <strong> Let’s grow together! </strong> 
                        </p>

                        {/* Buttons */}
                        <div className="hero-buttons">
                            {/* <a className="revenue-btn" onClick={() => navigate("/revenue-challenge")}>
                                <FaChartLine /> Revenue Challenge
                            </a> */}
                            

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
