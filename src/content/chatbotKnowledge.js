export const WELCOME_MESSAGE =
  "Hi! I'm the Vexoweb assistant. I can help with our services, areas we serve across the Eastern Province, pricing guidance, timelines, and how to get started. What would you like to know?";

export const QUICK_REPLIES = [
  { id: 'services', label: 'Our services' },
  { id: 'areas', label: 'Areas we serve' },
  { id: 'website', label: 'Website development' },
  { id: 'seo', label: 'SEO services' },
  { id: 'quote', label: 'Get a quote' },
  { id: 'contact', label: 'Talk to the team' },
];

const SERVICE_LINKS = [
  { label: 'Website Development', href: '/website-development' },
  { label: 'Software Development', href: '/software-development' },
  { label: 'SEO Services', href: '/seo-services' },
  { label: 'E-Commerce Development', href: '/ecommerce-development' },
  { label: 'AI Software', href: '/ai-software-development' },
  { label: 'Mobile App Development', href: '/mobile-app-development' },
];

export const AREAS_SERVED = [
  {
    label: 'Batticaloa',
    href: '/website-development-batticaloa',
    tag: 'East coast hub',
  },
  {
    label: 'Kattankudy',
    href: '/website-development-kattankudy',
    tag: 'Local businesses',
  },
  {
    label: 'Kalmunai',
    href: '/website-development-kalmunai',
    tag: 'Retail & services',
  },
  {
    label: 'Ampara',
    href: '/website-development-ampara',
    tag: 'Growing market',
  },
  {
    label: 'Trincomalee',
    href: '/website-development-trincomalee',
    tag: 'Tourism & trade',
  },
];

const AREAS_SERVED_LINKS = [
  ...AREAS_SERVED.map((area) => ({
    label: `Website development in ${area.label}`,
    href: area.href,
  })),
  { label: 'SEO across Eastern Province', href: '/seo-services' },
];

const AREAS_SERVED_REPLY =
  'Vexoweb is based in Batticaloa and serves businesses across the Eastern Province. We offer on-site support along the east coast, with websites, custom software, mobile apps, and SEO from one local team. Choose your town for area-specific services, or ask about province-wide SEO.';

const INTENTS = [
  {
    id: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'help'],
    reply:
      "Hello! Welcome to Vexoweb. We're a web design and software agency serving businesses across Eastern Province, Sri Lanka. How can I help you today?",
    quickReplies: ['services', 'website', 'quote'],
  },
  {
    id: 'services',
    keywords: ['service', 'services', 'what do you do', 'offer', 'capabilities'],
    reply:
      'Vexoweb offers website development, custom software, e-commerce, SEO, and AI-powered solutions. Pick a service below or tell me what you need.',
    links: SERVICE_LINKS,
    quickReplies: ['website', 'seo', 'quote'],
  },
  {
    id: 'website',
    keywords: [
      'website',
      'web design',
      'web development',
      'web dev',
      'full stack',
      'full-stack',
      'landing page',
      'corporate site',
    ],
    reply:
      'We build fast, mobile-friendly websites for shops, clinics, schools, and businesses — from landing pages to full custom web apps. Projects are tailored for Eastern Province businesses with local pricing.',
    links: [{ label: 'View Web Development', href: '/website-development' }],
    quickReplies: ['quote', 'contact'],
  },
  {
    id: 'software',
    keywords: [
      'software',
      'app',
      'application',
      'pos',
      'billing',
      'inventory',
      'custom system',
      'saas',
    ],
    reply:
      'We develop custom software including POS, billing apps, inventory tools, and business management systems built for real operational needs.',
    links: [{ label: 'Software Development', href: '/software-development' }],
    quickReplies: ['quote', 'contact'],
  },
  {
    id: 'ecommerce',
    keywords: ['ecommerce', 'e-commerce', 'online store', 'shopify', 'woocommerce', 'store'],
    reply:
      'We build and optimize e-commerce stores focused on speed, conversions, payments, and SEO — from setup to ongoing performance improvements.',
    links: [{ label: 'E-commerce Services', href: '/ecommerce-development' }],
    quickReplies: ['quote', 'contact'],
  },
  {
    id: 'seo',
    keywords: ['seo', 'google', 'ranking', 'search', 'traffic', 'local seo', 'audit'],
    reply:
      'Our SEO services cover technical audits, on-page optimization, local SEO, and content strategy so customers in Eastern Province can find you on Google.',
    links: [{ label: 'SEO Services', href: '/seo-services' }],
    quickReplies: ['quote', 'contact'],
  },
  {
    id: 'ai',
    keywords: ['ai', 'artificial intelligence', 'chatbot', 'automation', 'gpt', 'machine learning'],
    reply:
      'We build AI-powered software and automation — custom integrations, intelligent workflows, and enterprise-ready systems (not off-the-shelf wrappers).',
    links: [{ label: 'AI Software Development', href: '/ai-software-development' }],
    quickReplies: ['quote', 'contact'],
  },
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'quote', 'estimate', 'rate'],
    reply:
      'Pricing depends on scope — a simple business website, e-commerce store, and custom software all differ. Projects typically start from LKR 20,000. Share your goals and we will provide a clear quote. You can also request a free consultation.',
    links: [{ label: 'Contact Us', href: '/contact' }],
    quickReplies: ['contact'],
    whatsapp: true,
  },
  {
    id: 'timeline',
    keywords: ['how long', 'timeline', 'duration', 'time', 'weeks', 'delivery', 'when'],
    reply:
      'Timelines vary by project: basic websites often take a few weeks, while custom software or e-commerce builds may take longer. We will give you a realistic schedule after understanding your requirements.',
    quickReplies: ['quote', 'contact'],
  },
  {
    id: 'areas',
    keywords: [
      'areas we serve',
      'areas served',
      'area served',
      'towns',
      'town',
      'cities',
      'city',
      'near me',
      'local area',
      'eastern province towns',
      'batticaloa',
      'kattankudy',
      'kalmunai',
      'ampara',
      'trincomalee',
      'trinco',
    ],
    reply: AREAS_SERVED_REPLY,
    links: AREAS_SERVED_LINKS,
    quickReplies: ['website', 'seo', 'contact'],
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'eastern province', 'sri lanka', 'local', 'based'],
    reply:
      'Vexoweb is based in Batticaloa, Eastern Province, Sri Lanka. We work with local businesses on-site across the east coast and also support clients remotely across the region.',
    links: AREAS_SERVED_LINKS,
    quickReplies: ['areas', 'contact'],
  },
  {
    id: 'contact',
    keywords: [
      'contact',
      'email',
      'phone',
      'call',
      'whatsapp',
      'reach',
      'talk',
      'human',
      'agent',
      'consultation',
    ],
    reply:
      'You can reach our team by email, phone, or WhatsApp. We typically reply within 24 hours.',
    contact: true,
    quickReplies: ['services'],
  },
  {
    id: 'about',
    keywords: ['about', 'who are you', 'vexoweb', 'company', 'team'],
    reply:
      'Vexoweb is a technology-driven digital agency specializing in websites, software, SEO, and AI solutions for growing businesses.',
    links: [{ label: 'About Vexoweb', href: '/about' }],
    quickReplies: ['services', 'contact'],
  },
];

const QUICK_REPLY_RESPONSES = {
  services: INTENTS.find((i) => i.id === 'services'),
  areas: INTENTS.find((i) => i.id === 'areas'),
  website: INTENTS.find((i) => i.id === 'website'),
  seo: INTENTS.find((i) => i.id === 'seo'),
  quote: INTENTS.find((i) => i.id === 'pricing'),
  contact: INTENTS.find((i) => i.id === 'contact'),
};

function normalize(text) {
  return text.toLowerCase().trim().replace(/[^\w\s-]/g, ' ');
}

function scoreIntent(intent, normalized) {
  return intent.keywords.reduce((score, keyword) => {
    if (normalized.includes(keyword)) {
      return score + keyword.split(' ').length;
    }
    return score;
  }, 0);
}

export function getChatbotReply(input) {
  const normalized = normalize(input);

  if (!normalized) {
    return {
      reply: 'Please type a message or choose one of the quick options below.',
      quickReplies: QUICK_REPLIES.map((q) => q.id),
    };
  }

  let bestIntent = null;
  let bestScore = 0;

  for (const intent of INTENTS) {
    const score = scoreIntent(intent, normalized);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  if (bestIntent && bestScore > 0) {
    return {
      reply: bestIntent.reply,
      links: bestIntent.links || [],
      contact: bestIntent.contact || false,
      whatsapp: bestIntent.whatsapp || false,
      quickReplies: bestIntent.quickReplies || [],
    };
  }

  return {
    reply:
      "I'm not sure I understood that. Try asking about our services, areas we serve (Batticaloa, Kattankudy, Kalmunai, Ampara, Trincomalee), SEO, pricing, or how to contact us — or tap a quick option below.",
    quickReplies: QUICK_REPLIES.map((q) => q.id),
    whatsapp: true,
  };
}

export function getQuickReplyResponse(quickId) {
  const intent = QUICK_REPLY_RESPONSES[quickId];
  if (!intent) {
    return getChatbotReply(quickId);
  }

  return {
    reply: intent.reply,
    links: intent.links || [],
    contact: intent.contact || false,
    whatsapp: intent.whatsapp || false,
    quickReplies: intent.quickReplies || [],
  };
}

export function getQuickReplyLabel(quickId) {
  return QUICK_REPLIES.find((q) => q.id === quickId)?.label || quickId;
}
