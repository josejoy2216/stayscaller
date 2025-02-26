import React from "react";
import "./FloatingButton.css"; // Import CSS for styling
import { FaWhatsapp } from "react-icons/fa"; // Using React Icons for better rendering

const FloatingButton = () => {
    return (
        <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="floating-button">
            <FaWhatsapp className="whatsapp-icon" />
        </a>
    );
};

export default FloatingButton;
