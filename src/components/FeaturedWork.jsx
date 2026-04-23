import { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Sparkles, Globe, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const featuredProjects = [
  {
    id: 1,
    title: 'AI Content Generator',
    subtitle: 'AI Solution — Workflow Automation',
    description:
      'Designed and built AI-driven workflows for automated content generation, improving content creation efficiency and scalability across multiple Tradeasia websites.',
    image: '/images/AI generation.png',
    tags: ['AI / ML', 'Laravel', 'SEO', 'Automation'],
    icon: <Sparkles size={18} />,
    color: '#a855f7',
    link: null,
  },
  {
    id: 2,
    title: 'Bogojaya Farm',
    subtitle: 'Business Website — bogojayafarm.id',
    description:
      'Developed a complete business website for Bogojaya Farm with modern design, product catalog, and integrated contact form connected to Google Sheets.',
    image: '/images/bogojaya.png',
    tags: ['React', 'Vite', 'Vercel', 'Google Sheets API'],
    icon: <Globe size={18} />,
    color: '#22c55e',
    link: 'https://bogojayafarm.id',
  },
  {
    id: 3,
    title: 'Laundry Transaction System',
    subtitle: 'Information System — Full Stack App',
    description:
      'Built an integrated monitoring and transaction system for a laundry business using Laravel 10. Features order tracking, customer management, and revenue dashboard.',
    image: '/images/laundrysaee.png',
    tags: ['Laravel 10', 'MySQL', 'Dashboard', 'CRUD'],
    icon: <BarChart3 size={18} />,
    color: '#3b82f6',
    link: null,
  },
];

export default function FeaturedWork() {
  const titleRef = useReveal();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = featuredProjects.length;

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const project = featuredProjects[current];

  return (
    <section className="section featured-work" id="featured-work">
      <div className="container">
        <div className="slider-top-row" ref={titleRef}>
          <div>
            <div className="section-label">
              <span className="label-line"></span>
              Latest Work
            </div>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="slider-controls">
            <button className="slider-btn" onClick={prev} aria-label="Previous" id="slider-prev">
              <ChevronLeft size={20} />
            </button>
            <div className="slider-dots">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot ${i === current ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={next} aria-label="Next" id="slider-next">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="slider-card" key={project.id}>
          <div className="slider-card-image">
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="slider-image-overlay"></div>
          </div>

          <div className="slider-card-body">
            <div className="slider-card-icon" style={{ background: `${project.color}18`, color: project.color }}>
              {project.icon}
            </div>
            <span className="slider-card-subtitle">{project.subtitle}</span>
            <h3 className="slider-card-title">{project.title}</h3>
            <p className="slider-card-desc">{project.description}</p>
            <div className="slider-card-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="featured-tag">{tag}</span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="slider-card-link"
                style={{ color: project.color }}
              >
                Visit Website <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <div className="slider-counter">
          <span className="slider-counter-current">{String(current + 1).padStart(2, '0')}</span>
          <span className="slider-counter-sep">/</span>
          <span className="slider-counter-total">{String(total).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}
