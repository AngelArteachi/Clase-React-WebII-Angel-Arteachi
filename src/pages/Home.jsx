import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/HomePage.css";

const portalImage = new URL(
  "../assets/RickAndMortyPortal.png",
  import.meta.url
);

const portalAnimated = new URL(
  "../assets/RickAndMorty_Portal_Animated.gif",
  import.meta.url
);

const portalAnimated2 = new URL(
  "../assets/RickAndMorty_Portal_Animated_2.gif",
  import.meta.url
);

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              Dive in the Multiverse
            </h1>
            <p className="hero-description">
              Vote for your favorite episodes and learn more from your favorite characters.
            </p>
            <div className="hero-buttons">
              <Link to="/episodes" className="btn btn-primary">
                See Episodes
                <svg
                  className="btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link to="/characters" className="btn btn-secondary">
                Vote for Characters
              </Link>
            </div>
          </div>
          <div className="hero-image">
          </div>
        </div>
      </section>
    </div>
  );
}
