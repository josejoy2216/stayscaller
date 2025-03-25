import React, { useState } from "react";
import "./faq.css"; // Ensure you have the styles in a separate CSS file

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Rupee Cost Averaging?",
      answer:
        "Rupee cost averaging means buying more units when prices are low and fewer units when prices are high. This averages out the overall cost of investment over time.",
    },
    {
      question: "What is the frequency of SIP investment?",
      answer:
        "An investor may start SIP on Daily, Weekly, Monthly, and Quarterly mode.",
    },
    {
      question: "Will I need to pay the SIP amount every time?",
      answer:
        "No, you can simply set up an eMandate. An eMandate is a digital authorization that will automatically debit your bank account for recurring SIP payments, removing the need for you to remember each SIP payment or accidentally miss instalments.",
    },
    {
      question: "Can I start SIP online?",
      answer: (
        <>
          Yes, you can easily start an SIP online. To start a SIP online using PPFAS SelfInvest, follow
          the simple instructions in our{" "}
          <a
            href="https://amc.ppfas.com/downloads/ppfas-selfinvest-emandate-and-sip-registration-guide.pdf?31072024"
            target="_blank"
            rel="noopener noreferrer"
          >
            SIP Registration Guide
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
