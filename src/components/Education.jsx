import { GraduationCap, MapPin, Star } from 'lucide-react';
import { education } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const titleRef = useReveal();

  return (
    <section className="section" id="education">
      <div className="container">
        <div ref={titleRef}>
          <div className="section-label">
            <span className="label-line"></span>
            Education
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background and achievements.
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ edu, index }) {
  const ref = useReveal(index * 0.1);

  return (
    <div className="education-card" ref={ref}>
      <h3 className="education-degree">{edu.degree}</h3>
      <p className="education-school">{edu.school}</p>
      <div className="education-meta">
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <MapPin size={13} /> {edu.location}
        </span>
        <span>{edu.period}</span>
      </div>
      {edu.gpa && (
        <div className="education-gpa">
          <Star size={13} /> GPA: {edu.gpa}
        </div>
      )}
      {edu.highlights.length > 0 && (
        <ul className="education-highlights">
          {edu.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
