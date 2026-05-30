import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AISoftwareServices = () => {
  const targetAudience = [
    "Businesses looking to automate complex processes",
    "Companies with large data sets needing intelligent insights",
    "Enterprises building internal AI tools",
    "Startups developing AI-powered products",
    "Organizations replacing manual or inefficient systems"
  ];

  const problems = [
    { icon: "⏰", text: "Manual workflows consuming time and resources" },
    { icon: "🔌", text: "Disconnected systems and data silos" },
    { icon: "📊", text: "Limited insights from existing data" },
    { icon: "👥", text: "Human-dependent processes that don't scale" },
    { icon: "📈", text: "Software that cannot adapt to growth" }
  ];

  const services = [
    { title: "Custom AI Software Solutions", icon: "💡" },
    { title: "Business Process Automation with AI", icon: "⚙️" },
    { title: "AI-Powered Data Analysis & Insights", icon: "📊" },
    { title: "GPT & LLM-Based Software Systems", icon: "🤖" },
    { title: "Predictive Analytics & Forecasting Tools", icon: "🔮" },
    { title: "AI Decision-Support Systems", icon: "🎯" },
    { title: "Integration with Existing Business Software", icon: "🔗" },
    { title: "Secure APIs & Data Pipelines", icon: "🔐" }
  ];

  const comparison = [
    { traditional: "Manual rules", ai: "Intelligent decision-making" },
    { traditional: "Static workflows", ai: "Adaptive automation" },
    { traditional: "Limited insights", ai: "Predictive analytics" },
    { traditional: "Human-dependent", ai: "Scales with data" }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Business & Data Analysis",
      description: "We identify high-impact AI opportunities based on your workflows and data."
    },
    {
      number: "02",
      title: "Solution Design",
      description: "We design software architecture, AI logic, and integrations aligned with your goals."
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "We build the AI software and integrate it with your existing systems."
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "We test for accuracy, performance, security, and real-world usage."
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "We deploy, monitor, and continuously optimize your AI software."
    }
  ];

  const technologies = [
    "AI & machine learning frameworks",
    "GPT & large language model integrations",
    "Secure backend systems",
    "Cloud-based infrastructure",
    "APIs & data processing pipelines"
  ];

  const whyChoose = [
    "Proven AI-first development approach",
    "Strong engineering & automation expertise",
    "Business-focused problem solving",
    "Secure and scalable software architecture",
    "Transparent communication & long-term support"
  ];

  const faqs = [
    {
      question: "What types of AI software do you develop?",
      answer: "We develop custom AI software including automation systems, analytics platforms, internal tools, and AI-powered business applications."
    },
    {
      question: "Can AI software integrate with existing systems?",
      answer: "Yes. We specialize in integrating AI software with CRMs, ERPs, databases, and third-party platforms."
    },
    {
      question: "Is AI software development secure?",
      answer: "Security is built into every stage — from data handling to access control and deployment."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes. We offer ongoing optimization, monitoring, and enhancements after launch."
    }
  ];

  return (
    <div className="aiss__wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="aiss__hero">
        <div className="aiss__hero_gradient"></div>
        <div className="aiss__hero_container">
          <div className="aiss__hero_label">
            <span className="aiss__label_icon">🤖</span>
            AI Software Development Services
          </div>
          <h1 className="aiss__hero_title">
            Custom AI Software Development That Automates, Scales, and Delivers Results
          </h1>
          <p className="aiss__hero_text">
            We provide AI software development services that help businesses automate operations, 
            improve decision-making, and build intelligent systems tailored to their unique workflows. 
            From internal AI tools to advanced automation platforms, we develop reliable, secure, and 
            scalable AI-powered software solutions.
          </p>
          <a href="#contact" className="aiss__hero_btn">
             Get a Free AI Software Consultation
          </a>
        </div>
      </section>

      {/* What Is Section */}
      <section className="aiss__what_section">
        <div className="aiss__container">
          <h2 className="aiss__heading">What Is AI Software Development?</h2>
          <p className="aiss__description">
            AI software development involves creating custom software solutions powered by artificial 
            intelligence to analyze data, automate processes, and enhance business efficiency. Unlike 
            off-the-shelf tools, custom AI software is designed around your specific data, systems, and goals.
          </p>
          <div className="aiss__highlight_banner">
            Our AI software solutions are built for real-world business use, not experiments.
          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="aiss__audience_section">
        <div className="aiss__container">
          <h2 className="aiss__heading2">Who Needs AI Software Development?</h2>
          <p className="aiss__subtitle">This service is ideal for:</p>
          <div className="aiss__audience_grid">
            {targetAudience.map((item, index) => (
              <div key={index} className="aiss__audience_card">
                <div className="aiss__audience_icon">✓</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <p className="aiss__audience_footer">
            If your business relies on repetitive tasks, disconnected systems, or slow decision-making, 
            AI software development can transform how you operate.
          </p>
        </div>
      </section>

      {/* Problems Section */}
      <section className="aiss__problems_section">
        <div className="aiss__container">
          <h2 className="aiss__heading3">Problems We Solve with AI Software</h2>
          <div className="aiss__problems_grid">
            {problems.map((problem, index) => (
              <div key={index} className="aiss__problem_item">
                <div className="aiss__problem_icon">{problem.icon}</div>
                <p className="aiss__problem_text">{problem.text}</p>
              </div>
            ))}
          </div>
          <p className="aiss__problems_note">
            We build AI-powered software that works quietly in the background to improve efficiency and accuracy.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="aiss__services_section">
        <div className="aiss__container">
          <h2 className="aiss__heading">Our AI Software Development Services</h2>
          <p className="aiss__subtitle">
            We deliver end-to-end AI software development solutions, including:
          </p>
          <div className="aiss__services_grid">
            {services.map((service, index) => (
              <div key={index} className="aiss__service_card">
                <div className="aiss__service_icon">{service.icon}</div>
                <h3 className="aiss__service_title">{service.title}</h3>
              </div>
            ))}
          </div>
          <p className="aiss__services_footer">
            Each solution is engineered for stability, performance, and long-term value.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="aiss__comparison_section">
        <div className="aiss__container">
          <h2 className="aiss__heading">AI Software vs Traditional Software</h2>
          <p className="aiss__comparison_intro">AI-powered software goes beyond fixed rules.</p>
          <div className="aiss__comparison_table">
            <div className="aiss__comparison_col aiss__col_traditional">
              <h3>Traditional Software</h3>
              {comparison.map((item, index) => (
                <div key={index} className="aiss__comparison_row">{item.traditional}</div>
              ))}
            </div>
            <div className="aiss__comparison_arrow">→</div>
            <div className="aiss__comparison_col aiss__col_ai">
              <h3>AI Software</h3>
              {comparison.map((item, index) => (
                <div key={index} className="aiss__comparison_row">{item.ai}</div>
              ))}
            </div>
          </div>
          <p className="aiss__comparison_note">
            This is why businesses are moving toward custom AI software development.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="aiss__process_section">
        <div className="aiss__container">
          <h2 className="aiss__heading">Our AI Software Development Process</h2>
          <div className="aiss__process_grid">
            {processSteps.map((step, index) => (
              <div key={index} className="aiss__process_card">
                <div className="aiss__process_number">{step.number}</div>
                <h3 className="aiss__process_title">{step.title}</h3>
                <p className="aiss__process_desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="aiss__tech_section">
        <div className="aiss__container">
          <h2 className="aiss__heading">Technologies We Use</h2>
          <div className="aiss__tech_list">
            {technologies.map((tech, index) => (
              <div key={index} className="aiss__tech_item">
                <div className="aiss__tech_marker"></div>
                <span>{tech}</span>
              </div>
            ))}
          </div>
          <p className="aiss__tech_note">
            (Technology choices depend on your business needs — not trends.)
          </p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="aiss__why_section">
        <div className="aiss__container">
          <h2 className="aiss__heading">Why Choose ZonzocTech for AI Software Development?</h2>
          <div className="aiss__why_grid">
            {whyChoose.map((reason, index) => (
              <div key={index} className="aiss__why_card">
                <div className="aiss__why_number">{index + 1}</div>
                <p>{reason}</p>
              </div>
            ))}
          </div>
          <div className="aiss__why_statement">
            We build AI software that solves real business problems, not buzzword-driven projects.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="aiss__faq_section">
        <div className="aiss__container">
          <h2 className="aiss__heading">Frequently Asked Questions</h2>
          <div className="aiss__faq_list">
            {faqs.map((faq, index) => (
              <div key={index} className="aiss__faq_item">
                <h4 className="aiss__faq_question">{faq.question}</h4>
                <p className="aiss__faq_answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="aiss__cta_section">
        <div className="aiss__container">
          <div className="aiss__cta_content">
            <h2 className="aiss__cta_title">Ready to Build Intelligent AI Software?</h2>
            <p className="aiss__cta_text">
              If you're planning to build custom AI software or upgrade your existing systems with 
              artificial intelligence, let's discuss your goals.
            </p>
            <a href="#contact" className="aiss__cta_button">
               Get a Free AI Software Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AISoftwareServices;
