import React, { useState, useEffect } from 'react';
import { PROJECTS, VALUES } from '../data';
import { ProjectItem } from '../types';

interface PawjectsPortalProps {
  onSelectProject: (proj: ProjectItem) => void;
  triggerHaptic: (intensity?: 'light' | 'medium') => void;
}

export const PawjectsPortal: React.FC<PawjectsPortalProps> = ({
  onSelectProject,
  triggerHaptic,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll reveal observer
    const blocks = document.querySelectorAll('.reveal-block');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      blocks.forEach((b) => observer.observe(b));
      return () => observer.disconnect();
    } else {
      blocks.forEach((b) => b.classList.add('revealed'));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const sections = ['home', 'projects', 'about'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    triggerHaptic('light');
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pawjects-portal">
      {/* Navigation */}
      <nav id="siteNav">
        <div className="container nav-inner">
          <a
            href="#home"
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            aria-label="Pawjects home"
          >
            <img src="/paw.png" alt="Pawjects Logo" />
            <span>pawjects.meow</span>
          </a>

          <div className="nav-links">
            <button
              type="button"
              onClick={() => handleNavClick('projects')}
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}
            >
              Projects
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('about')}
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}
            >
              About
            </button>
            <a
              href="https://github.com/pawjects"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn"
              onClick={() => triggerHaptic('light')}
            >
              <i className="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => {
              triggerHaptic('medium');
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
          <button
            type="button"
            className="mobile-link"
            onClick={() => handleNavClick('projects')}
          >
            <span>Projects</span>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.72rem' }}></i>
          </button>
          <button
            type="button"
            className="mobile-link"
            onClick={() => handleNavClick('about')}
          >
            <span>About</span>
            <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.72rem' }}></i>
          </button>
          <a
            href="https://github.com/pawjects"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link"
            onClick={() => triggerHaptic('light')}
          >
            <span>GitHub Organization</span>
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://t.me/pawjects/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link"
            onClick={() => triggerHaptic('light')}
          >
            <span>Telegram Channel</span>
            <i className="fa-brands fa-telegram"></i>
          </a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-badge">
              <span className="dot"></span>
              <span>Open-Source Software Collective</span>
            </div>

            <h1>
              Software built with <span className="accent">curiosity</span> and simplicity.
            </h1>

            <p>
              Pawjects creates lightweight utilities across Android, Web and Telegram with clean design, open-source integrity, and zero telemetry bloat.
            </p>

            <div className="hero-buttons">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleNavClick('projects')}
              >
                <span>Explore Projects</span>
                <i className="fa-solid fa-arrow-down" style={{ fontSize: '0.78rem' }}></i>
              </button>
              <a
                href="https://t.me/pawjects/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                onClick={() => triggerHaptic('light')}
              >
                <i className="fa-brands fa-telegram"></i>
                <span>Telegram Community</span>
              </a>
            </div>

            <div className="scroll-cue">
              <button
                type="button"
                onClick={() => handleNavClick('projects')}
                className="scroll-cue-btn"
              >
                <span>Scroll to explore</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="content-section reveal-block">
          <div className="container">
            <div className="section-header">
              <h2>Featured Projects</h2>
              <p>Focused software and utilities designed for everyday use.</p>
            </div>

            <div className="projects-grid">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="project-card"
                  onClick={() => {
                    triggerHaptic('light');
                    onSelectProject(project);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProject(project);
                    }
                  }}
                >
                  <div className="card-top">
                    <div className="card-icon">
                      <i className={project.icon}></i>
                    </div>
                    <span className="card-tag">{project.category}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="card-action">
                    <span>Explore details & source</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="content-section reveal-block" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="container">
            <div className="section-header">
              <h2>What We Value</h2>
              <p>Three straightforward principles behind everything we release.</p>
            </div>

            <div className="values-grid">
              {VALUES.map((val, idx) => (
                <div key={idx} className="value-card">
                  <h3>
                    <i className={val.icon}></i> {val.title}
                  </h3>
                  <p>{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="container footer-inner">
          <span>&copy; {new Date().getFullYear()} Pawjects. Built with simplicity and curiosity.</span>
          <div className="footer-links">
            <a href="https://github.com/pawjects" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://t.me/pawjects/" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
