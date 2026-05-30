import React from "react";
import heroImg from "../assets/icons/hero.png";   

const Hero = () => {
  return (
    <section className="hero-section" role="region" aria-label="Hero">
      <div className="hero-inner">
        <div className="hero-copy">

          <div className="hero-sub">
            <p>Outdated website? No online visibility? Struggling to keep up with AI trends?</p>
          </div>

          <div className="hero-sub2">
            <p>
              In today’s digital-first world, a slow website, poor SEO, or missing automation can stall
              your growth. Businesses are losing leads and conversions due to poor design and unoptimized
              experiences.
            </p>
          </div>

          {/* Website Input Search Bar */}
          <form
            className="hero-search-form"
            onSubmit={(e) => {
              e.preventDefault();
              const website = e.target.elements.website.value;

              console.log("Website submitted:", website);
              alert(`Proposal request sent for: ${website}`);
            }}
          >
            <input
              type="url"
              name="website"
              className="hero-search-input"
              placeholder="Enter your website"
              required
            />
            <button type="submit" className="hero-search-btn">
              Send me a Proposal!
            </button>
          </form>
        </div>

        <div className="hero-media" aria-hidden="false">
          <img src={heroImg} alt="Digital solutions illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
