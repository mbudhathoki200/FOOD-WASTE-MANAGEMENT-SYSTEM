import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/src/videos/video-2.mp3" autoPlay loop muted />
      <h1>
        Donation Awaits<i class="fa fa-spinner" aria-hidden="true"></i>
      </h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Donate <i class="fa fa-hand-pointer-o" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
