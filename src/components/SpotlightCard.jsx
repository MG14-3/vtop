import React from 'react';
import '../styles/InfoSection.css';

export const SpotlightCard = () => {
  return (
    <div className="info-box spotlight-box">
      <div className="box-header spotlight-header">
        <span>Spotlight</span>
        <a href="#" className="more-link">More ...</a>
      </div>
      <div className="box-content">
        <div className="list-item">
          <span className="bolt-icon">⚡</span>
          <a href="#" className="spotlight-link">TRANSCRIPTS FOR VIT-AP ALUMNI STUDENTS - REG</a>
        </div>
      </div>
    </div>
  );
};