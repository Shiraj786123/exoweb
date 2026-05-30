import React from 'react';

const importIcon = (iconName) => {
  try {
    return require(`../assets/icons/${iconName}.svg`).default || require(`../assets/icons/${iconName}.svg`);
  } catch (e) {
    console.error(`Failed to load icon: ${iconName}`);
    return null;
  }
};

const WhoWeAreSection = () => {
  const rows = [
    // Row 1
    [
      { name: 'Java', icon: 'java' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' },
      { name: 'C#', icon: 'csharp' },
      { name: 'C++', icon: 'cpp' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'AWS ECS', icon: 'aws' }
    ],
    // Row 2
    [
      { name: 'Symfony', icon: 'symfony' },
      { name: 'Spring Boot', icon: 'springboot' },
      { name: 'Express.js', icon: 'express' },
      { name: 'Vue.js', icon: 'vue' },
      { name: 'React.js', icon: 'react' },
      { name: 'Next.js', icon: 'next' },
      { name: 'Nuxt.js', icon: 'nuxt' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Tailwind CSS', icon: 'tailwind' }
    ],
    // Row 3
    [
      { name: 'WordPress', icon: 'wordpress' },
      { name: 'Strapi', icon: 'strapi' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
      { name: 'Redis', icon: 'redis' },
      { name: 'Grafana', icon: 'grafana' },
      { name: 'Prometheus', icon: 'prometheus' }
    ],
    // Row 4
    [
      { name: 'AWS', icon: 'aws' },
      { name: 'Google Cloud', icon: 'googlecloud' },
      { name: 'Azure', icon: 'microsoft-azure' },
      { name: 'DigitalOcean', icon: 'digitalocean' },
      { name: 'Cloudflare', icon: 'cloudflare' },
      { name: 'Nginx', icon: 'nginx' },
      { name: 'Apache', icon: 'apache' },
      { name: 'Shopify', icon: 'shopify' }
    ]
  ];

  const handleDragScroll = (e) => {
    const slider = e.currentTarget;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleDragStop = (e) => { e.currentTarget.isDown = false; };

  const handleDragMove = (e) => {
    const slider = e.currentTarget;
    if (!slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  return (
    <section className="whoweare-section">
      {/* Container wraps everything to prevent screen edge overflow */}
      <div className="whoweare-container">
        
        <div className="whoweare-header-block">
          <h2 className="whoweare-main-title">
            Who We Are & Why Choose <span className="highlight-text-gradient">Zonzoctech</span>
          </h2>
          <p className="whoweare-sub-description">
            At Zonzoctech, we're more than just a digital agency—we're your growth partner. 
            With over a decade of experience, we specialize in building modern websites, 
            boosting visibility through smart SEO, and integrating cutting-edge AI technologies 
            to future-proof your business.
          </p>
          <h3 className="whoweare-tech-stack-label">Our Technology Stack</h3>
        </div>

        <div className="tech-rows-container">
          {rows.map((rowItems, rowIndex) => {
            // FIX: Cloned items increased to 8x to eliminate the blank scrolling tail gap permanently
            const infiniteRowItems = [
              ...rowItems, ...rowItems, ...rowItems, ...rowItems,
              ...rowItems, ...rowItems, ...rowItems, ...rowItems
            ];
            
            return (
              <div 
                key={rowIndex} 
                className="tech-scroll-row"
                onMouseDown={handleDragScroll}
                onMouseLeave={handleDragStop}
                onMouseUp={handleDragStop}
                onMouseMove={handleDragMove}
              >
                <div className={`tech-cards-track tech-cards-track-${rowIndex + 1}`}>
                  {infiniteRowItems.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-row-item-card">
                      <div className="tech-icon-wrapper">
                        <img 
                          src={importIcon(tech.icon)} 
                          alt={tech.name} 
                          className="tech-svg-icon"
                        />
                      </div>
                      <span className="tech-label">{tech.name}</span>
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