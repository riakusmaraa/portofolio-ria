import { Monitor, Server, Palette, Users } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';

const iconMap = {
  frontend: <Monitor size={22} />,
  backend: <Server size={22} />,
  tools: <Palette size={22} />,
  soft: <Users size={22} />,
};

export default function Skills() {
  const titleRef = useReveal();

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div ref={titleRef}>
          <div className="section-label">
            <span className="label-line"></span>
            Skills
          </div>
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Technologies, frameworks, and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([key, category], index) => (
            <SkillCategory key={key} categoryKey={key} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ categoryKey, category, index }) {
  const ref = useReveal(index * 0.1);

  return (
    <div className="skill-category" ref={ref}>
      <div className="skill-category-icon">
        {iconMap[categoryKey]}
      </div>
      <h3 className="skill-category-title">{category.title}</h3>
      <div className="skills-list">
        {category.items.map((skill) => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    </div>
  );
}
