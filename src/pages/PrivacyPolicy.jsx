import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import HomeTechStackSection from '../components/HomeTechStackSection';
import Breadcrumb from '../components/Breadcrumb';
import { PAGE_BREADCRUMBS } from '../content/pageBreadcrumbs';

const PrivacyPolicy = () => {
  const lastUpdated = "December 20, 2025";

  const sections = [
    {
      number: "1",
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          items: [
            "Name",
            "Email address",
            "Phone number",
            "Website URL",
            "Business information",
            "Any details you submit via contact or audit forms"
          ]
        },
        {
          subtitle: "Technical & Usage Data",
          items: [
            "IP address",
            "Browser type and version",
            "Pages visited",
            "Time spent on pages",
            "Referring URLs"
          ],
          note: "This data helps us improve our website and services."
        }
      ]
    },
    {
      number: "2",
      title: "How We Use Your Information",
      description: "We use your information to:",
      items: [
        "Respond to inquiries and contact requests",
        "Provide free audits and service proposals",
        "Improve website performance and user experience",
        "Deliver requested services",
        "Communicate updates or relevant information",
        "Analyze traffic and usage trends"
      ],
      important: "We do not sell or rent your personal data to third parties."
    },
    {
      number: "3",
      title: "Cookies & Tracking Technologies",
      description: "Vexoweb uses cookies and similar technologies to:",
      items: [
        "Understand website usage",
        "Improve performance and functionality",
        "Track analytics data"
      ],
      note: "You can control cookies through your browser settings. Disabling cookies may affect website functionality."
    },
    {
      number: "4",
      title: "Third-Party Services",
      description: "We may use trusted third-party tools such as:",
      items: [
        "Google Analytics",
        "Google Search Console",
        "Email communication tools",
        "Hosting and security providers"
      ],
      note: "These services may collect data in accordance with their own privacy policies."
    },
    {
      number: "5",
      title: "Data Security",
      text: "We implement appropriate technical and organizational measures to protect your information against unauthorized access, loss, or misuse.",
      important: "However, no online transmission or storage system is 100% secure. We cannot guarantee absolute security."
    },
    {
      number: "6",
      title: "Data Retention",
      text: "We retain personal data only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law."
    },
    {
      number: "7",
      title: "Your Rights",
      description: "Depending on your location, you may have the right to:",
      items: [
        "Request access to your personal data",
        "Request correction or deletion",
        "Withdraw consent",
        "Object to data processing"
      ],
      note: "To exercise your rights, contact us using the details below."
    },
    {
      number: "8",
      title: "Children's Information",
      text: "Vexoweb does not knowingly collect personal information from children under the age of 13. If you believe we have collected such data, please contact us and we will remove it promptly."
    },
    {
      number: "9",
      title: "Changes to This Privacy Policy",
      text: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date."
    },
    {
      number: "10",
      title: "Contact Us",
      text: "If you have any questions about this Privacy Policy or how we handle your data, please contact us:",
      contact: true
    }
  ];

  return (
    <div className="pp__wrapper">
      <Navbar />

      {/* Header */}
      <section className="pp__header">
        <div className="pp__container">
          <Breadcrumb items={PAGE_BREADCRUMBS.privacyPolicy} className="breadcrumb--light" />
          <h1 className="pp__title">Privacy Policy</h1>
          <p className="pp__updated">Last updated: {lastUpdated}</p>
          <p className="pp__intro">
            Vexoweb ("we", "our", "us") respects your privacy and is committed to protecting your 
            personal information. This Privacy Policy explains how we collect, use, and protect your 
            data when you visit vexoweb.lk or use our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pp__content">
        <div className="pp__container">
          <div className="pp__sections">
            
            {sections.map((section, index) => (
              <div key={index} className="pp__section">
                <div className="pp__section_header">
                  <span className="pp__section_number">{section.number}</span>
                  <h2 className="pp__section_title">{section.title}</h2>
                </div>

                <div className="pp__section_content">
                  
                  {/* Text only */}
                  {section.text && (
                    <p className="pp__text">{section.text}</p>
                  )}

                  {/* Description */}
                  {section.description && (
                    <p className="pp__description">{section.description}</p>
                  )}

                  {/* Items list */}
                  {section.items && (
                    <ul className="pp__list">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Nested content (for section 1) */}
                  {section.content && section.content.map((subsection, idx) => (
                    <div key={idx} className="pp__subsection">
                      <h3 className="pp__subsection_title">{subsection.subtitle}</h3>
                      <ul className="pp__list">
                        {subsection.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                      {subsection.note && (
                        <p className="pp__note">{subsection.note}</p>
                      )}
                    </div>
                  ))}

                  {/* Important note */}
                  {section.important && (
                    <div className="pp__important">
                      <span className="pp__important_icon">⚠️</span>
                      <p>{section.important}</p>
                    </div>
                  )}

                  {/* Regular note */}
                  {section.note && (
                    <p className="pp__note">{section.note}</p>
                  )}

                  {/* Contact info */}
                  {section.contact && (
                    <div className="pp__contact_box">
                      <div className="pp__contact_item">
                        <span className="pp__contact_icon">📧</span>
                        <div>
                          <strong>Email:</strong>
                          <a href="mailto:info@vexoweb.lk">info@vexoweb.lk</a>
                        </div>
                      </div>
                      <div className="pp__contact_item">
                        <span className="pp__contact_icon">🌐</span>
                        <div>
                          <strong>Website:</strong>
                          <a href="https://vexoweb.lk">vexoweb.lk</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>

          {/* Summary Box */}
          <div className="pp__summary">
            <h3>Your Privacy Matters</h3>
            <p>
              We are committed to transparency and protecting your data. If you have any concerns 
              or questions about how we handle your information, please don't hesitate to contact us.
            </p>
            <a href="/contact" className="pp__summary_btn">Contact Us</a>
          </div>

        </div>
      </section>

      <HomeTechStackSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
