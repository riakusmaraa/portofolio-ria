import { MapPin } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Experience() {
  const titleRef = useReveal();

  return (
    <section className="section" id="experience">
      <div className="container">
        <div ref={titleRef}>
          <div className="section-label">
            <span className="label-line"></span>
            Experience
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey — from internships to full-time roles and freelance work.
          </p>
        </div>

        <div className="experience-timeline" style={{ marginTop: '48px' }}>
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ experience, index }) {
  const ref = useReveal(index * 0.1);

  return (
    <div className="timeline-item" ref={ref}>
      <div className={`timeline-dot ${experience.isCurrent ? 'current' : ''}`}></div>
      <div className="timeline-card">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-company">{experience.company}</h3>
            <p className="timeline-role">{experience.role}</p>
          </div>
          <span className="timeline-period">{experience.period}</span>
        </div>
        <div className="timeline-location">
          <MapPin size={14} />
          {experience.location}
        </div>
        <ul className="timeline-points">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
