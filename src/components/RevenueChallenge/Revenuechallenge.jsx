import React, { useState } from "react";
import "./QuizForm.css";

const QuizForm = () => {
  const [formData, setFormData] = useState({
    demandForecasting: "",
    pricingStrategy: "",
    distributionStrategy: "",
    promotionEvaluation: "",
    email: "",
  });

  const [result, setResult] = useState("");
  const [emailValid, setEmailValid] = useState(true);

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(regex.test(email));
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    if (!emailValid || !formData.email) {
      setResult("Please enter a valid email.");
      return;
    }

    setResult("Submitting...");

    const formPayload = new FormData();
    formPayload.append("access_key", "9014c775-b760-49d7-bfe2-4d9bfe13e9a0"); // Replace with your Web3Forms key
    formPayload.append(
      "How do you forecast your demand?",
      formData.demandForecasting
    );
    formPayload.append(
      "What is your approach to pricing during high demand?",
      formData.pricingStrategy
    );
    formPayload.append(
      "How do you optimize your distribution strategy?",
      formData.distributionStrategy
    );
    formPayload.append(
      "How do you evaluate the success of a promotion?",
      formData.promotionEvaluation
    );
    formPayload.append("Email", formData.email);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Quiz submitted successfully!");
        
        // Reset all form fields, including selected radio options
        setFormData({
          demandForecasting: "",
          pricingStrategy: "",
          distributionStrategy: "",
          promotionEvaluation: "",
          email: "",
        });

        // Reset radio inputs manually
        document.querySelectorAll('input[type="radio"]').forEach((input) => {
          input.checked = false;
        });
      } else {
        setResult("Error submitting the quiz. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="quiz-container">
      <h2>Revenue Challenge Quiz</h2>
      <form onSubmit={onSubmit}>
        <div className="question">
          <p><strong>1. How do you forecast your demand?</strong></p>
          <label>
            <input type="radio" name="demandForecasting" value="Analyze historical data" onChange={handleChange} required /> 
            A) Analyze historical data
          </label>
          <label>
            <input type="radio" name="demandForecasting" value="Rely on intuition" onChange={handleChange} required /> 
            B) Rely on intuition
          </label>
          <label>
            <input type="radio" name="demandForecasting" value="React to market changes" onChange={handleChange} required /> 
            C) React to market changes
          </label>
        </div>

        <div className="question">
          <p><strong>2. What is your approach to pricing during high demand?</strong></p>
          <label>
            <input type="radio" name="pricingStrategy" value="Dynamic pricing" onChange={handleChange} required /> 
            A) Dynamic pricing
          </label>
          <label>
            <input type="radio" name="pricingStrategy" value="Fixed rates" onChange={handleChange} required /> 
            B) Fixed rates
          </label>
          <label>
            <input type="radio" name="pricingStrategy" value="Offer discounts" onChange={handleChange} required /> 
            C) Offer discounts
          </label>
        </div>

        <div className="question">
          <p><strong>3. How do you optimize your distribution strategy?</strong></p>
          <label>
            <input type="radio" name="distributionStrategy" value="Balance direct bookings & OTAs" onChange={handleChange} required /> 
            A) Balance direct bookings & OTAs
          </label>
          <label>
            <input type="radio" name="distributionStrategy" value="Focus only on OTAs" onChange={handleChange} required /> 
            B) Focus only on OTAs
          </label>
          <label>
            <input type="radio" name="distributionStrategy" value="No clear strategy" onChange={handleChange} required /> 
            C) No clear strategy
          </label>
        </div>

        <div className="question">
          <p><strong>4. How do you evaluate the success of a promotion?</strong></p>
          <label>
            <input type="radio" name="promotionEvaluation" value="ROI & guest feedback" onChange={handleChange} required /> 
            A) ROI & guest feedback
          </label>
          <label>
            <input type="radio" name="promotionEvaluation" value="Number of guests used it" onChange={handleChange} required /> 
            B) Number of guests used it
          </label>
          <label>
            <input type="radio" name="promotionEvaluation" value="No systematic analysis" onChange={handleChange} required /> 
            C) No systematic analysis
          </label>
        </div>

        <div className="email-input">
          <p><strong>Enter your Email:</strong></p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e);
              validateEmail(e.target.value);
            }}
            required
          />
          {!emailValid && <p className="error-text">Please enter a valid email.</p>}
        </div>

        <button type="submit" className="submit-btn">Submit your Quiz</button>
      </form>

      <div className="submission-result">{result}</div>
    </div>
  );
};

export default QuizForm;
