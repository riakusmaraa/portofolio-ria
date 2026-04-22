import { useState } from 'react';
import { Folder, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

const INITIAL_SHOW = 6;

const categories = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const titleRef = useReveal();

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <div className="projects-header" ref={titleRef}>
          <div>
            <div className="section-label">
              <span className="label-line"></span>
              Projects
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A collection of projects I've worked on — from landing pages to full-stack applications.
            </p>
          </div>
          <div className="projects-filter">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`filter-btn ${activeFilter === cat.key ? 'active' : ''}`}
                onClick={() => { setActiveFilter(cat.key); setShowAll(false); }}
                id={`filter-${cat.key}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {displayed.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filtered.length > INITIAL_SHOW && (
          <div className="projects-show-more">
            <button
              className="btn-secondary"
              onClick={() => setShowAll(!showAll)}
              id="projects-show-more"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>Show All ({filtered.length}) <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const ref = useReveal(index * 0.08);

  return (
    <div
      className="project-card reveal"
      ref={ref}
      onClick={() => project.link && window.open(project.link, '_blank')}
      style={{ cursor: project.link ? 'pointer' : 'default' }}
    >
      <div className="project-card-header">
        <div className="project-icon">
          <Folder size={20} />
        </div>
        {project.link && (
          <ExternalLink size={18} className="project-link-icon" />
        )}
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-period">{project.period}</div>
    </div>
  );
}
