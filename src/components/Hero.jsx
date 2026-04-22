import { ArrowRight, Download, Code, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Available for new opportunities
          </div>

          <h1 className="hero-name">
            Hi, I'm <span className="accent">Ria</span>
            <br />Kusmara
          </h1>

          <p className="hero-title">{personalInfo.title}</p>

          <p className="hero-description">
            {personalInfo.bio}
          </p>

          <div className="hero-cta">
            <a href="#contact" className="btn-primary" id="hero-cta-contact">
              Get In Touch <ArrowRight size={16} />
            </a>
            <a href="#projects" className="btn-secondary" id="hero-cta-projects">
              View Projects
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">2<span className="accent">+</span></div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12<span className="accent">+</span></div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">6<span className="accent">+</span></div>
              <div className="stat-label">Companies Worked</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-avatar-wrapper">
            <div className="hero-avatar-pattern">
              <div className="hero-code-block">
                <span className="keyword">const</span> <span className="property">developer</span> <span className="punctuation">= {'{'}</span>
                <br />
                &nbsp;&nbsp;<span className="property">name</span><span className="punctuation">:</span> <span className="string">"Ria Kusmara"</span><span className="punctuation">,</span>
                <br />
                &nbsp;&nbsp;<span className="property">role</span><span className="punctuation">:</span> <span className="string">"Web Developer"</span><span className="punctuation">,</span>
                <br />
                &nbsp;&nbsp;<span className="property">passion</span><span className="punctuation">:</span> <span className="string">"Building the web"</span>
                <br />
                <span className="punctuation">{'}'}</span><span className="punctuation">;</span>
              </div>
            </div>
          </div>

          <div className="hero-floating-badge top-right">
            <div className="badge-icon pink">
              <Code size={16} />
            </div>
            React & Laravel
          </div>

          <div className="hero-floating-badge bottom-left">
            <div className="badge-icon green">
              <Sparkles size={16} />
            </div>
            Problem Solver
          </div>
        </div>
      </div>
    </section>
  );
}
