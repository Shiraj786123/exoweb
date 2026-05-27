import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsConditions = () => {
  const lastUpdated = "December 20, 2025";

  const sections = [
    {
      number: "1",
      title: "Definitions",
      items: [
        '"Company," "we," "us," "our" refers to ZonzocTech',
        '"Client," "you" refers to any user, visitor, or customer',
        '"Services" refers to all AI, web development, SEO, automation, consulting, and related services provided by ZonzocTech'
      ]
    },
    {
      number: "2",
      title: "Use of Website",
      text: "You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use of the website.",
      subtitle: "You must not:",
      restrictions: [
        "Attempt to gain unauthorized access",
        "Introduce malicious code or viruses",
        "Copy or misuse website content without permission"
      ]
    },
    {
      number: "3",
      title: "Services & Engagement",
      description: "All services provided by ZonzocTech are subject to:",
      items: [
        "Project scope and agreement",
        "Timelines and deliverables agreed upon in writing",
        "Client cooperation and timely communication"
      ],
      note: "Any estimates, audits, or consultations are provided based on information available at the time."
    },
    {
      number: "4",
      title: "No Guaranteed Results",
      text: "While we apply industry best practices, we do not guarantee specific rankings, traffic levels, sales, or business outcomes, especially for SEO, AI search optimization, or digital marketing services.",
      important: "Results depend on multiple external factors beyond our control."
    },
    {
      number: "5",
      title: "Payments & Billing",
      items: [
        "Fees and payment terms will be clearly outlined in proposals or contracts",
        "Payments must be made according to agreed schedules",
        "Late payments may result in paused or terminated services"
      ],
      important: "All fees are non-refundable unless otherwise stated in writing."
    },
    {
      number: "6",
      title: "Intellectual Property",
      description: "Unless otherwise agreed in writing:",
      items: [
        "ZonzocTech retains ownership of proprietary tools, frameworks, and methodologies",
        "Upon full payment, clients receive rights to deliverables created specifically for them",
        "Clients may not resell, redistribute, or reuse our work without permission"
      ]
    },
    {
      number: "7",
      title: "Client Responsibilities",
      description: "Clients agree to:",
      items: [
        "Provide accurate information",
        "Supply required content and access on time",
        "Review and approve deliverables promptly"
      ],
      note: "Delays caused by the client may affect timelines and costs."
    },
    {
      number: "8",
      title: "Third-Party Tools & Platforms",
      text: "We may integrate or recommend third-party platforms such as hosting providers, AI tools, analytics platforms, or APIs. ZonzocTech is not responsible for changes, outages, or policies of third-party services."
    },
    {
      number: "9",
      title: "Limitation of Liability",
      description: "To the fullest extent permitted by law, ZonzocTech shall not be liable for:",
      items: [
        "Indirect or consequential damages",
        "Loss of profits, data, or business",
        "Website downtime caused by external factors"
      ],
      important: "Our liability is limited to the amount paid for the specific service in question."
    },
    {
      number: "10",
      title: "Confidentiality",
      text: "Both parties agree to keep confidential information private unless disclosure is required by law or agreed in writing."
    },
    {
      number: "11",
      title: "Termination",
      description: "We reserve the right to suspend or terminate services if:",
      items: [
        "These Terms are violated",
        "Payments are not made",
        "Unlawful or abusive behavior occurs"
      ],
      note: "Clients may terminate services according to the terms outlined in their service agreement."
    },
    {
      number: "12",
      title: "Changes to Terms",
      text: "ZonzocTech may update these Terms & Conditions at any time. Continued use of the website or services constitutes acceptance of the updated terms."
    },
    {
      number: "13",
      title: "Governing Law",
      text: "These Terms & Conditions shall be governed by and interpreted in accordance with the laws of Sri Lanka, without regard to conflict of law principles."
    },
    {
      number: "14",
      title: "Contact Information",
      text: "For any questions regarding these Terms & Conditions, please contact:",
      contact: true
    }
  ];

  return (
    <div className="tc__wrapper">
      <Navbar />

      {/* Header */}
      <section className="tc__header">
        <div className="tc__container">
          <h1 className="tc__title">Terms & Conditions</h1>
          <p className="tc__updated">Last updated: {lastUpdated}</p>
          <p className="tc__intro">
            Welcome to ZonzocTech. By accessing or using our website zonzoctech.com and our services, 
            you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.
          </p>
          <div className="tc__warning">
            <span className="tc__warning_icon">⚠️</span>
            <p>If you do not agree with these terms, please do not use our website or services.</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="tc__content">
        <div className="tc__container">
          <div className="tc__sections">
            
            {sections.map((section, index) => (
              <div key={index} className="tc__section">
                <div className="tc__section_header">
                  <span className="tc__section_number">{section.number}</span>
                  <h2 className="tc__section_title">{section.title}</h2>
                </div>

                <div className="tc__section_content">
                  
                  {/* Text only */}
                  {section.text && (
                    <p className="tc__text">{section.text}</p>
                  )}

                  {/* Description */}
                  {section.description && (
                    <p className="tc__description">{section.description}</p>
                  )}

                  {/* Items list */}
                  {section.items && (
                    <ul className="tc__list">
                      {section.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Subtitle with restrictions */}
                  {section.subtitle && (
                    <>
                      <p className="tc__subtitle">{section.subtitle}</p>
                      <ul className="tc__restrictions">
                        {section.restrictions.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Important note */}
                  {section.important && (
                    <div className="tc__important">
                      <span className="tc__important_icon">⚠️</span>
                      <p>{section.important}</p>
                    </div>
                  )}

                  {/* Regular note */}
                  {section.note && (
                    <p className="tc__note">{section.note}</p>
                  )}

                  {/* Contact info */}
                  {section.contact && (
                    <div className="tc__contact_box">
                      <div className="tc__contact_item">
                        <span className="tc__contact_icon">📧</span>
                        <div>
                          <strong>Email:</strong>
                          <a href="mailto:info@zonzoctech.com">info@zonzoctech.com</a>
                        </div>
                      </div>
                      <div className="tc__contact_item">
                        <span className="tc__contact_icon">🌐</span>
                        <div>
                          <strong>Website:</strong>
                          <a href="https://zonzoctech.com">zonzoctech.com</a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

          </div>

          {/* Agreement Box */}
          <div className="tc__agreement">
            <h3>Your Agreement</h3>
            <p>
              By using ZonzocTech's website and services, you acknowledge that you have read, understood, 
              and agree to be bound by these Terms & Conditions. If you have any questions or concerns, 
              please contact us before proceeding.
            </p>
            <a href="/contact-us" className="tc__agreement_btn">Contact Us</a>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;
