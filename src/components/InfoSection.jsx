import React from 'react';
import '../styles/InfoSection.css';
import { NewsCard } from './NewsCard';
import { SpotlightCard } from './SpotlightCard';

export const InfoSection = () => {
  return (
    <div className="bottom-container">
      <NewsCard />
      <SpotlightCard />
    </div>
  );
};