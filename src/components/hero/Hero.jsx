import React, { useEffect } from "react";
import "./hero.css";
import { useNavigate } from "react-router-dom";
import heroGif from "../assets/img/hero.gif";

const ComponentName = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure YouTube API is loaded
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    document.body.appendChild(script);

    window.onYouTubeIframeAPIReady = function () {
      new window.YT.Player("hero-video", {
        events: {
          onStateChange: function (event) {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.seekTo(0); // Restart video
              event.target.playVideo();
            }
          },
        },
      });
    };
  }, []);

  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="hero-content">
          {/* Left Section */}
          <div className="hero-left">
            <iframe
              id="hero-video"
              className="hero-video"
              src="https://www.youtube.com/embed/vzzttnJEAJo?autoplay=1&mute=1&enablejsapi=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
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
