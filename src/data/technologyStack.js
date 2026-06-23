export const ROW_THEMES = ['lang', 'framework', 'cloud'];

export const TECH_STACK_ROWS = [
  [
    { name: 'Java', icon: 'java' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Python', icon: 'python' },
    { name: 'C#', icon: 'csharp' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Kubernetes', icon: 'kubernetes' },
    { name: 'AWS ECS', icon: 'aws' },
    { name: 'React.js', icon: 'react' },
    { name: 'Next.js', icon: 'next' },
    { name: 'Vue.js', icon: 'vue' },
  ],
  [
    { name: 'Symfony', icon: 'symfony' },
    { name: 'Spring Boot', icon: 'springboot' },
    { name: 'Express.js', icon: 'express' },
    { name: 'Nuxt.js', icon: 'nuxt' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'WordPress', icon: 'wordpress' },
    { name: 'Strapi', icon: 'strapi' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'Redis', icon: 'redis' },
  ],
  [
    { name: 'Grafana', icon: 'grafana' },
    { name: 'Prometheus', icon: 'prometheus' },
    { name: 'AWS', icon: 'aws' },
    { name: 'Google Cloud', icon: 'googlecloud' },
    { name: 'Azure', icon: 'microsoft-azure' },
    { name: 'DigitalOcean', icon: 'digitalocean' },
    { name: 'Cloudflare', icon: 'cloudflare' },
    { name: 'Nginx', icon: 'nginx' },
    { name: 'Apache', icon: 'apache' },
    { name: 'Shopify', icon: 'shopify' },
  ],
];

export const importTechIcon = (iconName) => {
  try {
    return require(`../assets/icons/${iconName}.svg`).default || require(`../assets/icons/${iconName}.svg`);
  } catch (e) {
    console.error(`Failed to load icon: ${iconName}`);
    return null;
  }
};
