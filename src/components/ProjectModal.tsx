import React from 'react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="card-icon">
              <i className={project.icon}></i>
            </div>
            <div>
              <h3>{project.name}</h3>
              <span className="card-tag">{project.category}</span>
            </div>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close dialog">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{project.description}</p>

          {project.details && (
            <div className="modal-section">
              <h4>Architecture & Purpose</h4>
              <p className="modal-text">{project.details}</p>
            </div>
          )}

          {project.features && project.features.length > 0 && (
            <div className="modal-section">
              <h4>Key Capabilities</h4>
              <ul className="modal-feature-list">
                {project.features.map((feat, idx) => (
                  <li key={idx}>
                    <i className="fa-solid fa-check"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-tags">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="modal-chip">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <span>{project.linkText}</span>
            <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.8rem' }}></i>
          </a>
        </div>
      </div>
    </div>
  );
};
