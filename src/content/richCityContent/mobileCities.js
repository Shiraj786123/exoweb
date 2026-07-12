import { MOBILE_CITY_PROCESS } from './processStepContent';

const MOBILE_FAQ = [
  { q: 'How much does mobile app development cost?', a: 'The cost depends on your application\'s features, functionality, integrations and overall complexity. We provide customised quotations after understanding your project requirements.' },
  { q: 'How long does it take to develop a mobile app?', a: 'Most business mobile applications are completed within 8 to 20 weeks, depending on project size and functionality.' },
  { q: 'Do you develop both Android and iPhone applications?', a: 'Yes. We develop native Android applications, native iOS applications and cross-platform mobile apps that work on both operating systems.' },
  { q: 'Which is better—Native or Flutter?', a: 'Both have advantages. Native apps provide maximum platform performance, while Flutter allows faster development for both Android and iOS using a single codebase. We recommend the best option based on your project goals and budget.' },
  { q: 'Can you publish my app on Google Play and the Apple App Store?', a: 'Yes. We handle the complete publishing process, ensuring your application meets all Google Play Store and Apple App Store requirements.' },
  { q: 'Do you provide maintenance after launch?', a: 'Yes. We offer ongoing maintenance, bug fixes, feature updates, security improvements and technical support to ensure your application remains reliable and up to date.' },
];

export const MOBILE_RICH = {
  'mobile-app-development-batticaloa': [
    {
      type: 'intro',
      title: 'Custom Android & iOS Mobile App Development Services in Batticaloa',
      paragraphs: [
        'Looking for professional mobile app development in Batticaloa? Vexoweb develops high-quality Android and iOS mobile applications that help businesses improve customer engagement, automate operations and create new opportunities for growth.',
        "Today's customers expect businesses to be accessible anytime and anywhere. A professionally developed mobile application allows your business to connect with customers directly, provide better services and create a seamless digital experience.",
        "At Vexoweb, every mobile application is designed specifically around your business objectives. We build custom applications that deliver excellent performance, intuitive user experiences and long-term scalability.",
      ],
      cta: 'Free Consultation',
    },
    {
      type: 'benefits',
      title: 'Why Your Business Needs a Mobile Application',
      subtitle: 'Mobile technology has completely changed the way people interact with businesses. A professionally developed mobile app helps your business:',
      bullets: [
        'Improve customer engagement',
        'Increase brand awareness',
        'Generate additional sales',
        'Provide faster customer support',
        'Improve operational efficiency',
        'Automate repetitive tasks',
      ],
    },
    {
      type: 'services',
      title: 'Our Mobile App Development Services',
      subtitle: 'Every business has different goals, customers and operational requirements. That\'s why we develop customised mobile applications designed specifically around your needs.',
      items: [
        { title: 'Android App Development', description: 'Secure, scalable and high-performance Android applications for business management, retail, healthcare, education, hotels and logistics.' },
        { title: 'iOS App Development', description: 'Elegant, secure and high-performing iPhone and iPad applications for premium business apps, booking platforms and enterprise solutions.' },
        { title: 'Cross-Platform Development', description: 'Launch applications for both Android and iPhone using a single codebase—faster development and easier maintenance with Flutter.' },
        { title: 'eCommerce Mobile Apps', description: 'Custom shopping applications with secure payments, order tracking, push notifications and admin dashboards.' },
        { title: 'Booking & Reservation Apps', description: 'Appointment and reservation systems for hotels, clinics, salons, tuition centres and professional service providers.' },
        { title: 'Enterprise Mobile Applications', description: 'Employee management, inventory control, CRM, delivery tracking and field service management solutions.' },
      ],
    },
    {
      type: 'industries',
      title: 'Industries We Develop Mobile Apps For',
      items: [
        { title: 'Healthcare & Medical', description: 'Appointment booking, patient management, telemedicine and pharmacy applications.' },
        { title: 'Hotels & Tourism', description: 'Reservations, guest services, digital check-in, travel packages and loyalty programs.' },
        { title: 'Retail & eCommerce', description: 'Product browsing, mobile payments, order tracking, promotions and loyalty rewards.' },
        { title: 'Education', description: 'Student portals, attendance tracking, online learning, fee payment and parent communication.' },
        { title: 'Restaurants & Food Delivery', description: 'Digital menus, online ordering, table reservations, delivery tracking and loyalty rewards.' },
        { title: 'Logistics & Transportation', description: 'Fleet tracking, driver management, GPS navigation, delivery scheduling and route optimisation.' },
      ],
    },
    {
      type: 'process',
      variant: 'web',
      title: 'Our Mobile App Development Process',
      steps: MOBILE_CITY_PROCESS,
    },
    {
      type: 'trust',
      title: 'Why Choose Vexoweb for Mobile App Development?',
      subtitle: 'We combine technical expertise, creative design and business understanding to build mobile applications that deliver measurable results.',
      listLabel: 'Why Work With Us',
      bullets: [
        'Experienced Mobile App Developers',
        'Custom Solutions for Every Business',
        'Modern UI & UX Design',
        'Scalable Architecture',
        'Transparent Communication',
        'Long-Term Support',
      ],
    },
    {
      type: 'tech',
      title: 'Technologies We Use',
      items: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Laravel', 'Node.js', 'Firebase', 'MySQL', 'PostgreSQL', 'REST APIs', 'Google Maps API'],
    },
    {
      type: 'areas',
      title: 'Related Services',
      subtitle: 'Looking for complete digital solutions? Explore our related services:',
      links: [
        { label: 'Website Development in Batticaloa', href: '/website-development-batticaloa' },
        { label: 'Software Development in Batticaloa', href: '/software-development-batticaloa' },
        { label: 'SEO Services in Batticaloa', href: '/seo-batticaloa' },
        { label: 'AI Software Development', href: '/ai-software-development' },
        { label: 'eCommerce Website Development', href: '/ecommerce-development' },
      ],
    },
    { type: 'faq', items: MOBILE_FAQ },
    {
      type: 'cta',
      title: 'Ready to Build Your Mobile App?',
      paragraphs: [
        "Whether you're planning a startup application, an eCommerce platform, an internal business solution or a customer-focused mobile app, Vexoweb is ready to turn your ideas into reality.",
        'Contact Vexoweb today for a free consultation and discover how our custom mobile app development services in Batticaloa can transform your business.',
      ],
      cta: 'Start Your Mobile App Project Today',
    },
  ],
};
