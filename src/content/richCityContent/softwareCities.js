import { SOFTWARE_CITY_PROCESS } from './processStepContent';

const SOFTWARE_SERVICES = [
  { title: 'Custom Business Software', description: 'Software developed specifically for your business operations, eliminating unnecessary features and improving efficiency.' },
  { title: 'ERP Software Development', description: 'Manage finance, inventory, purchasing, sales and business operations through a single integrated ERP platform.' },
  { title: 'Inventory Management Systems', description: 'Track stock levels, suppliers, warehouses and product movement with real-time inventory management.' },
  { title: 'POS Software Development', description: 'Powerful Point of Sale systems for retail stores, supermarkets, restaurants and wholesale businesses.' },
  { title: 'Booking & Reservation Systems', description: 'Online booking systems for hotels, clinics, salons, educational institutions and service-based businesses.' },
  { title: 'CRM Development', description: 'Manage customer relationships, sales opportunities and communication through a custom CRM solution.' },
  { title: 'HR & Employee Management Systems', description: 'Automate attendance, payroll, leave management and employee records with secure HR software.' },
  { title: 'Custom Web Applications', description: 'Develop secure cloud-based applications that can be accessed anytime, anywhere.' },
];

const SOFTWARE_FAQ = [
  { q: 'How much does custom software development cost?', a: 'The cost depends on the project\'s complexity, required features and integrations. Contact us for a free consultation and customised quotation.' },
  { q: 'How long does software development take?', a: 'Most software projects are completed within 6 to 16 weeks depending on functionality and project scope.' },
  { q: 'Can you integrate software with our existing systems?', a: 'Yes. We develop integrations with accounting software, payment gateways, CRMs, inventory systems and third-party APIs.' },
  { q: 'Will my software be secure?', a: 'Absolutely. We follow secure development practices and implement authentication, encryption and data protection measures where required.' },
  { q: 'Do you provide maintenance after launch?', a: 'Yes. We offer ongoing software maintenance, feature updates, performance improvements and technical support.' },
];

export const SOFTWARE_RICH = {
  'software-development-batticaloa': [
    {
      type: 'intro',
      title: 'Custom Software Development Services for Businesses in Batticaloa',
      paragraphs: [
        'Looking for professional software development in Batticaloa? Vexoweb develops custom software solutions that help local businesses automate operations, improve productivity and achieve sustainable growth.',
        'Whether you need an ERP system, inventory management software, POS solution, booking platform or a fully customised business application, our experienced development team creates software tailored to your unique business requirements.',
        'Every solution is designed to streamline your daily operations, reduce manual work and improve overall business efficiency.',
      ],
      cta: 'Request a Free Consultation',
    },
    {
      type: 'why',
      title: 'Why Choose Vexoweb for Software Development in Batticaloa?',
      subtitle: "Every business operates differently. That's why we don't believe in one-size-fits-all software. We build custom software that matches your workflow, helping your team work smarter while giving you complete control over your business processes.",
      listLabel: 'Benefits of Custom Software',
      bullets: [
        'Tailor-Made Business Solutions',
        'Secure & Scalable Development',
        'Modern User Interface',
        'Cloud-Based Access',
        'Fast & Reliable Performance',
        'Easy System Integration',
        'Future-Ready Architecture',
        'Ongoing Technical Support',
      ],
    },
    {
      type: 'services',
      title: 'Our Software Development Services',
      items: SOFTWARE_SERVICES,
    },
    {
      type: 'benefits',
      title: 'Helping Businesses Across Batticaloa Digitally Transform',
      subtitle: 'Modern software can simplify complex business operations and improve productivity. Our custom software helps businesses:',
      bullets: [
        'Automate repetitive tasks',
        'Reduce paperwork',
        'Improve operational efficiency',
        'Minimise human error',
        'Generate accurate business reports',
        'Improve customer service',
      ],
    },
    {
      type: 'industries',
      title: 'Industries We Serve in Batticaloa',
      items: [
        { title: 'Retail & Wholesale', description: 'Inventory management, POS systems and billing software.' },
        { title: 'Healthcare', description: 'Clinic management systems, patient records and appointment scheduling software.' },
        { title: 'Hotels & Hospitality', description: 'Hotel management systems, online reservations and guest management software.' },
        { title: 'Education', description: 'Student information systems, school management software and online learning platforms.' },
        { title: 'Construction & Engineering', description: 'Project management, employee tracking and document management solutions.' },
        { title: 'Professional Services', description: 'Custom business management software for consultants, accounting firms and service providers.' },
      ],
    },
    {
      type: 'process',
      variant: 'web',
      title: 'Our Software Development Process',
      steps: SOFTWARE_CITY_PROCESS,
    },
    {
      type: 'trust',
      title: 'Why Businesses Trust Vexoweb',
      subtitle: 'Businesses choose Vexoweb because we focus on delivering practical software solutions that solve real business challenges.',
      listLabel: 'Why Partner With Us?',
      bullets: [
        'Experienced Software Developers',
        'Custom Business Solutions',
        'Modern Technology Stack',
        'Secure Software Development',
        'Scalable Architecture',
        'Transparent Project Management',
        'Affordable Development Services',
        'Reliable Long-Term Support',
      ],
    },
    {
      type: 'tech',
      title: 'Technologies We Use',
      subtitle: 'Our development team works with modern technologies to build reliable and scalable software solutions.',
      items: ['PHP & Laravel', 'React', 'Next.js', 'Node.js', 'MySQL', 'PostgreSQL', 'REST APIs', 'Cloud Hosting'],
    },
    {
      type: 'serving',
      title: 'Serving Businesses Throughout Batticaloa',
      paragraphs: [
        'Vexoweb proudly provides software development services to businesses throughout Batticaloa and nearby areas.',
        "Whether you're launching a new business, replacing outdated software or automating manual processes, we can develop a solution that fits your business perfectly.",
      ],
    },
    { type: 'faq', items: SOFTWARE_FAQ },
    {
      type: 'cta',
      title: "Let's Build Software That Works for Your Business",
      paragraphs: [
        "If you're looking for reliable software development in Batticaloa, Vexoweb is ready to help. From ERP systems and inventory management software to POS solutions and custom business applications, we build software that improves efficiency, reduces costs and supports long-term business growth.",
        'Contact us today for a free consultation and discover how custom software can transform your business.',
      ],
      cta: 'Request a Free Consultation',
    },
  ],
};
