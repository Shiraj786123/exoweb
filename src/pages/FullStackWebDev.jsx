import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FullStackWebDev = () => {
  const services = [
    {
      title: "Custom Website & Web Application Development",
      icon: "🌐"
    },
    {
      title: "Frontend UI/UX Development",
      icon: "🎨"
    },
    {
      title: "Backend & API Development",
      icon: "⚙️"
    },
    {
      title: "Database Design & Optimization",
      icon: "💾"
    },
    {
      title: "Third-Party & System Integrations",
      icon: "🔗"
    },
    {
      title: "E-commerce Functionality",
      icon: "🛒"
    },
    {
      title: "Authentication & User Management",
      icon: "🔐"
    },
    {
      title: "Performance Optimization & Security",
      icon: "🚀"
    }
  ];

  const whoNeeds = [
    "Startups building MVPs or SaaS platforms",
    "Businesses needing custom web applications",
    "Companies replacing outdated or slow websites",
    "E-commerce brands requiring advanced functionality",
    "Organizations needing scalable backend systems"
  ];

  const problems = [
    "Slow or unstable websites",
    "Poor frontend user experience",
    "Inefficient backend systems",
    "Data and integration issues",
    "Applications that can't scale"
  ];

  const techStack = [
    "Frontend frameworks (React, Next.js, etc.)",
    "Backend systems and APIs",
    "Databases and cloud infrastructure",
    "Secure authentication & authorization",
    "DevOps & deployment pipelines"
  ];

  const aiFeatures = [
    "AI-powered features",
    "GPT integrations",
    "Automation workflows",
    "Intelligent dashboards"
  ];

  const processSteps = [
    {
      number: "01",
      title: "Requirements & Planning",
      description: "We define features, architecture, and timelines clearly."
    },
    {
      number: "02",
      title: "Design & Architecture",
      description: "We design UI, backend structure, and data flow."
    },
    {
      number: "03",
      title: "Development",
      description: "Frontend and backend are built together for efficiency."
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description: "We test performance, security, and real-world usage."
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "We launch, monitor, and support your application long-term."
    }
  ];

  const whyChoose = [
    "Strong engineering foundations",
    "Experience across frontend & backend",
    "Clean, maintainable codebases",
    "Security-first development",
    "Long-term scalability mindset"
  ];

  const faqs = [
    {
      question: "What types of projects do you handle?",
      answer: "We build websites, web applications, internal tools, SaaS platforms, and e-commerce systems."
    },
    {
      question: "Can you work with existing systems?",
      answer: "Yes. We can improve, refactor, or extend existing full-stack applications."
    },
    {
      question: "Is full-stack development scalable?",
      answer: "Yes. Our systems are designed to scale as traffic, data, and features grow."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. We offer maintenance, optimization, and feature enhancements."
    }
  ];

  return (
    <div className="fswd__page_wrapper">
      <Navbar />

      {/* Hero Section */}
     <section className="fswd__hero_section">
  <div className="fswd__hero_overlay"></div>
  <div className="fswd__hero_content">
    <div className="fswd__hero_badge">Full-Stack Development</div>
    <h1 className="fswd__hero_title">
      Scalable, Secure <span className="fswd__highlight">Full-Stack Web Development</span> Built for Growth
    </h1>
    <p className="fswd__hero_description">
      We provide full-stack web development services that cover everything from frontend user 
      experience to backend logic, databases, APIs, and integrations. Whether you need a business 
      website, web application, or SaaS platform, we build reliable, high-performance solutions 
      that scale with your business.
    </p>
    <a href="#contact" className="fswd__cta_primary">
      Get a Free Full-Stack Development Consultation
    </a>
  </div>
</section>

      {/* Main Content */}
      <div className="fswd__content_wrapper">
        
        {/* What Is Section */}
        <section className="fswd__what_section">
          <div className="fswd__container">
            <h2 className="fswd__section_heading">What Is Full-Stack Web Development?</h2>
            <p className="fswd__section_description">
              Full-stack web development involves building both the frontend and backend of a website 
              or web application. It ensures seamless communication between user interfaces, servers, 
              databases, and third-party systems — resulting in faster, more secure, and easier-to-maintain 
              products.
            </p>
            <div className="fswd__callout_box">
              <strong>Instead of managing multiple vendors, you get one integrated development solution.</strong>
            </div>
          </div>
        </section>

        {/* Who Needs & Problems Split Section */}
        <section className="fswd__split_section">
          <div className="fswd__container">
            <div className="fswd__split_grid">
              <div className="fswd__split_card">
                <h3 className="fswd__split_title">Who Needs Full-Stack Web Development?</h3>
                <p className="fswd__split_intro">This service is ideal for:</p>
                <ul className="fswd__check_list">
                  {whoNeeds.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="fswd__split_footer">
                  If your project requires more than a basic website, full-stack development is essential.
                </p>
              </div>

              <div className="fswd__split_card fswd__split_card_accent">
                <h3 className="fswd__split_title">Problems We Solve</h3>
                <ul className="fswd__problem_list">
                  {problems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <p className="fswd__split_footer">
                  We build systems that are fast, reliable, and future-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="fswd__services_section">
          <div className="fswd__container">
            <h2 className="fswd__section_heading">Our Full-Stack Web Development Services</h2>
            <p className="fswd__section_description">
              We deliver complete end-to-end full-stack web development, including:
            </p>
            <div className="fswd__services_grid">
              {services.map((service, index) => (
                <div key={index} className="fswd__service_item">
                  <div className="fswd__service_icon">{service.icon}</div>
                  <h4 className="fswd__service_name">{service.title}</h4>
                </div>
              ))}
            </div>
            <p className="fswd__services_note">
              Every project is engineered for performance, scalability, and maintainability.
            </p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="fswd__tech_section">
          <div className="fswd__container">
            <h2 className="fswd__section_heading">Our Technology Stack</h2>
            <p className="fswd__section_description">
              We work with modern, proven technologies including:
            </p>
            <div className="fswd__tech_grid">
              {techStack.map((tech, index) => (
                <div key={index} className="fswd__tech_badge">{tech}</div>
              ))}
            </div>
            <p className="fswd__tech_note">
              We select the stack based on your goals, scale, and budget.
            </p>
          </div>
        </section>

        {/* AI Enhancement Section */}
        <section className="fswd__ai_section">
          <div className="fswd__container">
            <div className="fswd__ai_content">
              <h2 className="fswd__ai_heading">Full-Stack Development + AI</h2>
              <p className="fswd__ai_subtitle">(Optional but Powerful)</p>
              <p className="fswd__ai_description">
                When required, we enhance full-stack applications with:
              </p>
              <div className="fswd__ai_features">
                {aiFeatures.map((feature, index) => (
                  <div key={index} className="fswd__ai_feature">{feature}</div>
                ))}
              </div>
              <p className="fswd__ai_footer">
                This allows you to upgrade to AI gradually, without rebuilding from scratch.
              </p>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="fswd__process_section">
          <div className="fswd__container">
            <h2 className="fswd__section_heading">Our Full-Stack Development Process</h2>
            <div className="fswd__timeline">
              {processSteps.map((step, index) => (
                <div key={index} className="fswd__timeline_item">
                  <div className="fswd__timeline_marker">{step.number}</div>
                  <div className="fswd__timeline_content">
                    <h3 className="fswd__timeline_title">{step.title}</h3>
                    <p className="fswd__timeline_text">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="fswd__why_section">
          <div className="fswd__container">
            <h2 className="fswd__section_heading">
              Why Choose ZonzocTech for Full-Stack Web Development?
            </h2>
            <div className="fswd__why_grid">
              {whyChoose.map((reason, index) => (
                <div key={index} className="fswd__why_card">{reason}</div>
              ))}
            </div>
            <div className="fswd__why_callout">
              We don't just build websites — we build reliable digital systems.
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="fswd__faq_section">
          <div className="fswd__container">
            <h2 className="fswd__section_heading">Frequently Asked Questions</h2>
            <div className="fswd__faq_list">
              {faqs.map((faq, index) => (
                <div key={index} className="fswd__faq_card">
                  <h4 className="fswd__faq_q">{faq.question}</h4>
                  <p className="fswd__faq_a">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="fswd__cta_section">
          <div className="fswd__container">
            <div className="fswd__cta_content">
              <h2 className="fswd__cta_heading">Ready to Build a Scalable Web Solution?</h2>
              <p className="fswd__cta_text">
                If you're planning a new web project or want to upgrade an existing system, 
                let's discuss your requirements.
              </p>
              <a href="#contact" className="fswd__cta_button">
                Get a Free Full-Stack Development Consultation
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default FullStackWebDev;