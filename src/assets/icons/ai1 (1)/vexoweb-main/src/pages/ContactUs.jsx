import React from "react";
import astronaut from "../assets/icons/astronaut.png";

const ContactUs = () => {
  return (
    <div className="contactus-page">
      {/* Background glow circles */}
      <div className="cu-glow cu-glow-1"></div>
      <div className="cu-glow cu-glow-2"></div>
      <div className="cu-glow cu-glow-3"></div>

      <div className="contactus-container">
        {/* Heading */}
        <div className="contactus-heading">
          <h1>
            Get in <span>touch</span>
          </h1>
          <p>Reach out, and let's create a universe ofpossibilities together!</p>
        </div>

        <div className="contactus-card">
          {/* Form Section */}
          <div className="cu-form-area">
            <h3>Let's connect constellations</h3>
            <p>
              Let's align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>

            <form>
              <div className="cu-input-row">
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="First Name" />
              </div>

              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />

              <textarea placeholder="Message"></textarea>

              <button type="submit">Send it to the zonzoctech 🚀</button>
            </form>
          </div>

          {/* Astronaut Section */}
          <div className="cu-astronaut-box">
            <img src={astronaut} alt="Astronaut" />
            <p className="cu-astro-quote">
              “Two lunar months revealed Earth’s fragile beauty against vast
              silence, transforming my view of our place in the universe.”
              <br />— Iriinei Trata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
