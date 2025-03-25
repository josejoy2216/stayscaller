import React, { useState } from "react";
import "./faq.css"; // Ensure you have the styles in a separate CSS file
import { FaWhatsapp } from "react-icons/fa";



const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What services does StayScaler offer?",
            answer:
                "StayScaler provides comprehensive revenue management solutions, including pricing strategy optimization, online reputation management, and distribution channel management to maximize your hotel's profitability.",
        },
        {
            question: "How can StayScaler improve my hotel's online reputation?",
            answer:
                "We monitor and manage online reviews, respond to guest feedback promptly, and implement strategies to enhance your hotel's online presence, leading to improved guest satisfaction and increased bookings.",
        },
        {
            question: "Is StayScaler suitable for small boutique hotels?",
            answer:
                "Absolutely! Our tailored solutions cater to hotels of all sizes, ensuring that boutique hotels receive personalized strategies to compete effectively in the market.",
        },
        {
            question: "How do I get started with StayScaler?",
            answer: (
              <>
                Getting started is simple! Visit our{" "}
                <a
                  href="https://josejoy2216.github.io/stayscaller/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  website
                </a>, fill out the contact form.
          
                You can also reach us on WhatsApp for quick assistance:{" "}
                <a
                  href="https://wa.me/8433762608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Chat with us on WhatsApp
                </a>.
              </>
            ),
          },
          
    ];

    return (
        <div className="faq-section col-md-12 mt-5">
            <h2 className="faq-title">FAQs</h2>
            <div className="faq-container">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}>
                        <button className="faq-question" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className="icon">{activeIndex === index ? "−" : "+"}</span>
                        </button>
                        <div className="faq-answer">
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
