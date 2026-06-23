import React, { useEffect, useState } from "react";

const CONTACT_EMAIL = "info@vexoweb.lk";
const WHATSAPP_URL =
  "https://wa.me/94740309534?text=Hi%20Vexoweb%20Team,%20I%20would%20like%20to%20discuss%20a%20project.";
const BUDGET_MIN = 500;
const BUDGET_MAX = 65000;
const BUDGET_STEP = 500;

const ExpertPopup = ({ open, onClose, preSelectedService }) => {
  const [budget, setBudget] = useState(BUDGET_MIN);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    project: ""
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (preSelectedService) {
        setSelectedService(preSelectedService);
      }
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open, preSelectedService]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

  const data = {
    ...formData,
    message: formData.project,   // 🔥 FIX HERE
    service: selectedService,
    budget: budget
  };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSubmitStatus("success");
      
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          project: ""
        });
        setSelectedService("");
        setBudget(BUDGET_MIN);
          // ✅ ADD HERE
        setTimeout(() => {
        onClose();
        setSubmitStatus("");
        }, 2500);
      } else {
        setSubmitStatus("error");
      }
    }catch (error) {
        setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  if (!open) return null;

  const percentage =
    ((Number(budget) - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;
  const sliderBackground = `linear-gradient(to right, #00448f 0%, #00448f ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>×</button>

        <div className="popup-left">
          <div className="popup-left-glow" aria-hidden="true" />
          <div className="popup-left-top">
            <span className="popup-eyebrow">Vexoweb Experts</span>
            <h3>Speak to Our Experts</h3>
            <p>Let's create your vision together.</p>

            <div className="popup-review">
              <div className="popup-review-stars" aria-hidden="true">
                ★★★★★
              </div>
              <strong>Vexoweb</strong>
              <p>
                "Excellent IT resource outsourcing service. They provided highly
                skilled developers who integrated seamlessly with our team."
              </p>
            </div>

            <div className="contactmedia">
              <a
                href="https://www.linkedin.com"
                className="contactmedia-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com"
                className="contactmedia-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="popup-contact">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="popup-contact-link popup-contact-email"
            >
              <span className="popup-contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span className="popup-contact-text">
                <small>Email us</small>
                <strong>{CONTACT_EMAIL}</strong>
              </span>
            </a>
            <a
              href={WHATSAPP_URL}
              className="popup-contact-link popup-contact-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="popup-contact-icon">
                <i className="fa-brands fa-whatsapp"></i>
              </span>
              <span className="popup-contact-text">
                <small>Chat on WhatsApp</small>
                <strong>+94 74 030 9534</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="popup-right">
          <h2>Let's Build Something Incredible Together</h2>
          <p className="popup-subtext">
            Tell us what you're looking for and our experts will get back to you.
          </p>

            {/* Success / Error Messages */}
            {submitStatus === "success" && (
              <div className="alert alert-success">
                ✓ Message sent successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="alert alert-error">
                ✗ Failed to send message. Please try again.
              </div>
            )}

          <form className="popup-form" onSubmit={handleSubmit}>

            <div className="form-grid">
              <input
                type="text"
                name="name"
                placeholder="Your Name*"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                value={formData.company}
                onChange={handleInputChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              required
            >
              <option value="">You are interested in</option>
              <option value="Website Development">Website Development</option>
              <option value="SEO">SEO</option>
              <option value="Website Growth Audit">Website Growth Audit</option>
              <option value="AI Solutions">AI Solutions</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>

            <label className="budget-label">
              Estimated Budget (USD): <span>${Number(budget).toLocaleString()}</span>
            </label>

            <div className="budget-slider-wrap">
              <input
                type="range"
                className="budget-slider"
                min={BUDGET_MIN}
                max={BUDGET_MAX}
                step={BUDGET_STEP}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                style={{ background: sliderBackground }}
              />
            </div>

            <textarea
              name="project"
              placeholder="Tell us about the project"
              value={formData.project}
              onChange={handleInputChange}
              required
            />

            <div className="popup-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>

              <button type="submit" className="submit-btn">
                {isSubmitting ? "SENDING..." : "Submit"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ExpertPopup;
