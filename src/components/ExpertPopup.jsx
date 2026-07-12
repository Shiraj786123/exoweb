import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const CONTACT_EMAIL = "info@vexoweb.lk";
const WHATSAPP_URL =
  "https://wa.me/94740309534?text=Hi%20Vexoweb%20Team,%20I%20would%20like%20to%20discuss%20a%20project.";
const BUDGET_MIN = 20000;
const BUDGET_MAX = 2000000;
const BUDGET_STEP = 5000;

const SERVICE_OPTIONS = [
  "Website Development",
  "Ecommerce Development",
  "Software Development",
  "Mobile App Development",
  "SEO",
  "Website Growth Audit",
  "AI Solutions",
  "UI/UX Design",
];

const ExpertPopup = ({ open, onClose, preSelectedService }) => {
  const [budget, setBudget] = useState(BUDGET_MIN);
  const [selectedService, setSelectedService] = useState("");
  const [serviceOpen, setServiceOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const serviceSelectRef = useRef(null);
  const closeBtnRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    project: "",
  });

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    closeBtnRef.current?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      if (preSelectedService) {
        setSelectedService(preSelectedService);
      }
    } else {
      document.body.style.overflow = "auto";
      setServiceOpen(false);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open, preSelectedService]);

  useEffect(() => {
    if (!serviceOpen) return undefined;

    const handlePointerDown = (event) => {
      if (serviceSelectRef.current && !serviceSelectRef.current.contains(event.target)) {
        setServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [serviceOpen]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedService) {
      setServiceOpen(true);
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus("");

    const data = {
      ...formData,
      message: formData.project,
      service: selectedService,
      budget: budget,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          project: "",
        });
        setSelectedService("");
        setBudget(BUDGET_MIN);
        setTimeout(() => {
          onClose();
          setSubmitStatus("");
        }, 2500);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  const percentage =
    ((Number(budget) - BUDGET_MIN) / (BUDGET_MAX - BUDGET_MIN)) * 100;
  const sliderBackground = `linear-gradient(to right, #00448f 0%, #00448f ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`;

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div className="popup-overlay" onClick={onClose} role="presentation">
      <div
        className={`popup-container${serviceOpen ? " popup-container--service-open" : ""}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="expert-popup-title"
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="popup-close"
          onClick={onClose}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="popup-left">
          <div className="popup-left-glow" aria-hidden="true" />

          <div className="popup-left-scroll">
            <div className="popup-left-top">
              <span className="popup-eyebrow">Vexoweb Experts</span>
              <h3>Speak to Our Experts</h3>
              <p className="popup-left-lead">Let's create your vision together.</p>

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
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com"
                  className="contactmedia-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          <div className="popup-contact">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="popup-contact-link popup-contact-email"
            >
              <span className="popup-contact-icon" aria-hidden="true">
                <FaEnvelope />
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
              <span className="popup-contact-icon" aria-hidden="true">
                <FaWhatsapp />
              </span>
              <span className="popup-contact-text">
                <small>Chat on WhatsApp</small>
                <strong>+94 74 030 9534</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="popup-right">
          <div className="popup-right-header">
            <h2 id="expert-popup-title">Let's Build Something Incredible Together</h2>
            <p className="popup-subtext">
              Tell us what you're looking for and our experts will get back to you.
            </p>

            {submitStatus === "success" && (
              <div className="alert alert-success" role="status">
                ✓ Message sent successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="alert alert-error" role="alert">
                ✗ Failed to send message. Please try again.
              </div>
            )}
          </div>

          <form id="expert-popup-form" className="popup-form" onSubmit={handleSubmit}>
            <div className="popup-form-body">
              <div
                className={`popup-service-select${serviceOpen ? " is-open" : ""}`}
                ref={serviceSelectRef}
              >
                <button
                  type="button"
                  className={`popup-service-select__trigger${serviceOpen ? " is-open" : ""}${selectedService ? " has-value" : ""}`}
                  onClick={() => {
                    setServiceOpen((prev) => {
                      const next = !prev;
                      if (next) {
                        requestAnimationFrame(() => {
                          serviceSelectRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          });
                        });
                      }
                      return next;
                    });
                  }}
                  aria-haspopup="listbox"
                  aria-expanded={serviceOpen}
                  aria-label="Select a service"
                >
                  <span>{selectedService || "You are interested in"}</span>
                  <span className="popup-service-select__chevron" aria-hidden="true" />
                </button>
                {serviceOpen ? (
                  <ul
                    className="popup-service-select__menu"
                    role="listbox"
                    aria-label="Select a service"
                  >
                    {SERVICE_OPTIONS.map((service) => (
                      <li key={service}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={selectedService === service}
                          className={selectedService === service ? "is-selected" : ""}
                          onClick={() => {
                            setSelectedService(service);
                            setServiceOpen(false);
                          }}
                        >
                          {service}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <input type="hidden" name="service" value={selectedService} required />
              </div>

              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  aria-label="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  autoComplete="name"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Company / Organization"
                  aria-label="Company or Organization"
                  value={formData.company}
                  onChange={handleInputChange}
                  autoComplete="organization"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  aria-label="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  autoComplete="tel"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  aria-label="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="budget-block">
                <label className="budget-label" htmlFor="expert-budget-slider">
                  Estimated Budget (LKR):{" "}
                  <span>Rs. {Number(budget).toLocaleString("en-LK")}</span>
                </label>

                <div className="budget-slider-wrap">
                  <input
                    id="expert-budget-slider"
                    type="range"
                    className="budget-slider"
                    min={BUDGET_MIN}
                    max={BUDGET_MAX}
                    step={BUDGET_STEP}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    style={{ background: sliderBackground }}
                    aria-valuemin={BUDGET_MIN}
                    aria-valuemax={BUDGET_MAX}
                    aria-valuenow={budget}
                    aria-valuetext={`Rs. ${Number(budget).toLocaleString("en-LK")}`}
                  />
                </div>

                <div className="budget-range" aria-hidden="true">
                  <span>Rs. 20,000</span>
                  <span>Rs. 2,000,000</span>
                </div>
              </div>

              <textarea
                name="project"
                className="popup-form-message"
                placeholder="Tell us about the project"
                aria-label="Tell us about the project"
                value={formData.project}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="popup-actions">
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ExpertPopup;
