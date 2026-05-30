import React from 'react';

// Import all SVG icons with .default for proper webpack handling
const importIcon = (iconName) => {
  try {
    return require(`../assets/icons/${iconName}.svg`).default || require(`../assets/icons/${iconName}.svg`);
  } catch (e) {
    console.error(`Failed to load icon: ${iconName}`);
    return null;
  }
};

const WhoWeAreSection = () => {
  // Organize categories into rows
  const rows = [
    // Row 1
    [
      {
        title: 'Programming Languages',
        items: [
          { name: 'Java', icon: 'java' },
          { name: 'JavaScript', icon: 'javascript' },
          { name: 'TypeScript', icon: 'typescript' },
          { name: 'Python', icon: 'python' },
          { name: 'C#', icon: 'csharp' },
          { name: 'C++', icon: 'cpp' },
          { name: 'Kotlin', icon: 'kotlin' },
          { name: 'Swift', icon: 'swift' },
          { name: 'Go', icon: 'go' },
          { name: 'Ruby', icon: 'ruby' }
        ]
      },
      {
        title: 'Containerization & Deployments',
        items: [
          { name: 'Docker', icon: 'docker' },
          { name: 'Kubernetes', icon: 'kubernetes' },
          { name: 'AWS ECS', icon: 'aws' }
        ]
      },
      {
        title: 'CMS Platforms',
        items: [
          { name: 'WordPress', icon: 'wordpress' },
          { name: 'Joomla', icon: 'joomla' },
          { name: 'Drupal', icon: 'drupal' },
          { name: 'Strapi', icon: 'strapi' },
          { name: 'Typo3', icon: 'typo3' },
          { name: 'Magento', icon: 'magento' },
          { name: 'Grav', icon: 'grav' },
          { name: 'Ghost', icon: 'ghost' }
        ]
      }
    ],
    // Row 2
    [
      {
        title: 'Frameworks & Libraries',
        items: [
          { name: 'Symfony', icon: 'symfony' },
          { name: 'Spring Boot', icon: 'springboot' },
          { name: 'Express.js', icon: 'express' },
          { name: 'Vue.js', icon: 'vue' },
          { name: 'React.js', icon: 'react' },
          { name: 'Next.js', icon: 'next' },
          { name: 'Nuxt.js', icon: 'nuxt' },
          { name: 'Angular', icon: 'angular' },
          { name: 'Bootstrap', icon: 'bootstrap' },
          { name: 'Tailwind CSS', icon: 'tailwind' },
          { name: 'jQuery', icon: 'jquery' },
          { name: 'Django', icon: 'django' }
        ]
      },
      {
        title: 'CI/CD & Automation',
        items: [
          { name: 'Jenkins', icon: 'jenkins' },
          { name: 'GitHub Actions', icon: 'github' },
          { name: 'GitLab CI/CD', icon: 'gitlab' },
          { name: 'CircleCI', icon: 'circleci' }
        ]
      }
    ],
    // Row 3
    [
      {
        title: 'Monitoring & Analytics',
        items: [
          { name: 'Grafana', icon: 'grafana' },
          { name: 'Prometheus', icon: 'prometheus' },
          { name: 'Kibana', icon: 'kibana' },
          { name: 'SQL', icon: 'sql' }
        ]
      },
      {
        title: 'Cloud & Security',
        items: [
          { name: 'Cloudflare', icon: 'cloudflare' },
          { name: 'SSL', icon: 'ruby' },
          { name: 'SEO & Speed', icon: 'seo' },
          { name: 'AWS', icon: 'aws' }
        ]
      },
      {
        title: 'Servers & Web Servers',
        items: [
          { name: 'Apache', icon: 'apache' },
          { name: 'Nginx', icon: 'nginx' },
          { name: 'LiteSpeed', icon: 'lightning' },
          { name: 'Tomcat', icon: 'tomcat' }
        ]
      },
      {
        title: 'Cloud & Security',
        items: [
          { name: 'Cloudflare', icon: 'cloudflare' },
          { name: 'SSL', icon: 'ruby' },
          { name: 'SEO & Speed', icon: 'seo' },
          { name: 'AWS', icon: 'aws' }
        ]
      },
    ],
    // Row 4
    [
      {
        title: 'Hosting Providers',
        items: [
          { name: 'Bluehost', icon: 'bluehost' },
          { name: 'GoDaddy', icon: 'godaddy' },
          { name: 'Hostinger', icon: 'hostinger' },
          { name: 'HostGator', icon: 'hostgator' },
          { name: 'AWS', icon: 'aws' },
          { name: 'Google Cloud', icon: 'googlecloud' },
          { name: 'Azure', icon: 'microsoft-azure' },
          { name: 'DigitalOcean', icon: 'digitalocean' }
        ]
      },
      {
        title: 'E-Commerce Platforms',
        items: [
          { name: 'Shopify', icon: 'shopify' },
          { name: 'WooCommerce', icon: 'woocommerce' },
          { name: 'Magento', icon: 'magento' },
          { name: 'OpenCart', icon: 'opencart' }
        ]
      },
      {
        title: 'Databases',
        items: [
          { name: 'MySQL', icon: 'mysql' },
          { name: 'PostgreSQL', icon: 'postgresql' },
          { name: 'MongoDB', icon: 'mongodb' },
          { name: 'SQLite', icon: 'sqlite' },
          { name: 'Redis', icon: 'redis' },
          { name: 'Elasticsearch', icon: 'elasticsearch' },
          { name: 'Firebase', icon: 'firebase' }
        ]
      }
    ]
  ];

  return (
    <section className="whoweare-section">
      <div className="whoweare-container">
        {/* Header Text */}
        <div className="whoweare-header">
          <h2 className="whoweare-title">
            Who We Are & Why Choose <span className="highlight">Zonzoctech</span>
          </h2>
          <p className="whoweare-description">
            At Zonzoctech, we're more than just a digital agency—we're your growth partner. 
            With over a decade of experience, we specialize in building modern websites, 
            boosting visibility through smart SEO, and integrating cutting-edge AI technologies 
            to future-proof your business.
          </p>
          <h3 className='technologystack'>OUR TECHNOLOGY STACK</h3>
        </div>

        {/* Multiple Rows of Scrolling Cards */}
        <div className="tech-rows-container">
          {rows.map((row, rowIndex) => {
            // Duplicate cards in each row for infinite scroll
            const duplicatedRow = Array(6).fill(row).flat();
            
            return (
              <div key={rowIndex} className="tech-scroll-row">
                <div className={`tech-cards-track tech-cards-track-${rowIndex + 1}`}>
                  {duplicatedRow.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="tech-category-card">
                      <h3 className="category-title">{category.title}</h3>
                      <div className="tech-items-wrapper">
                        {category.items.map((tech, index) => (
                          <div key={index} className="tech-item">
                            <div className="tech-icon-circle">
                              <img 
                                src={importIcon(tech.icon)} 
                                alt={tech.name} 
                                className="tech-svg-icon"
                              />
                            </div>
                            <p className="tech-label">{tech.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
