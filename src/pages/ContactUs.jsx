import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancel = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const name = [formData.firstName, formData.lastName]
      .map((part) => part.trim())
      .filter(Boolean)
      .join(" ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: formData.email,
          phone: formData.phone,
          company: "",
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="contactus-page">
      <Navbar />

      <div className="cu-glow cu-glow-1" aria-hidden="true" />
      <div className="cu-glow cu-glow-2" aria-hidden="true" />
      <div className="cu-glow cu-glow-3" aria-hidden="true" />

      <div className="contactus-container">
        <div className="contactus-heading">
          <h1>
            Get in <span>touch</span>
          </h1>
          <p>
            Reach out, and let&apos;s create a universe of possibilities together!
          </p>
        </div>

        <div className="contactus-card">
          <div className="cu-form-area">
            <h3>Let&apos;s connect constellations</h3>
            <p>
              Let&apos;s align our constellations! Reach out and let the magic of
              collaboration illuminate our skies.
            </p>

            {submitStatus === "success" && (
              <div className="cu-alert cu-alert--success">
                Thank you! We&apos;ll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="cu-alert cu-alert--error">
                Something went wrong. Please try again or email info@vexoweb.lk
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="cu-input-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />

              <div className="cu-form-actions">
                <button
                  type="button"
                  className="cu-btn cu-cancel-btn"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="cu-btn cu-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending…" : "Send it to Vexoweb 🚀"}
                </button>
              </div>
            </form>
          </div>

          <div className="cu-astronaut-box">
            <div className="cu-astronaut-img-wrap">
              <Image
                src="/images/contact-astronaut.png"
                alt="Astronaut testimonial from Irinel Traista"
                width={520}
                height={680}
                className="cu-astronaut-img"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
