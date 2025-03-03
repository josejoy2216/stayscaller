import React from "react";
import './hero.css';
import heroGif from "../assets/img/hero.gif"; 

const ComponentName = () => {
    
    return (
        <div >
            {/* Hero Section */}
            <section id="about" className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        {/* Left Section */}
                        <div>
                            <img className="hero-image" src={heroGif} alt="Animated Illustration" />
                           
                            {/* Stats */}
                            {/* <div className="stats">
                                <div className="stat-item">
                                    <p className="stat-number">2943</p>
                                    <p className="stat-label">Cards Delivered</p>
                                </div>
                                <div className="stat-item">
                                    <p className="stat-number">$1M+</p>
                                    <p className="stat-label">Transactions Completed</p>
                                </div>
                            </div> */}
                        </div>

                        {/* Right Section - Illustration */}
                        <div>
                            

                            <h1 className="hero-title">
                                Lead the Game. Grow with Us.
                            </h1>
                            <p className="hero-description">
                            At Stay Scaler, we help hotels thrive with smart data analytics, strategic pricing, and deep industry insights. 
                            Our expert team, with years of experience in OTA, revenue management, and digital marketing, crafts personalized
                             solutions to boost your revenue. Founded by a leader with over a decade in India’s largest OTA, we’re here to turn your 
                             hotel into a market leader. Let’s grow together!

                            </p>

                            {/* Email Signup */}
                            <form action="#" method="POST" className="email-form">
                                <input type="email" placeholder="Enter email address" required className="email-input" />
                                <button type="submit" className="btn-primary">Contact Us</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ComponentName;
