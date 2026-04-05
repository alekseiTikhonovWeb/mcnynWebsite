import React from 'react';

// Components
import HomeHero from './components/HomeHero.jsx';
import AboutBand from './components/AboutBand.jsx';
import ProgramsOverview from './components/ProgramsOverview.jsx';
import ResourcesQuickAccess from './components/ResourcesQuickAccess.jsx';
import HomeNewsletter from './components/HomeNewsletter.jsx';

function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutBand />
      <ProgramsOverview />
      <ResourcesQuickAccess />
      <HomeNewsletter />
    </>
  );
}

export default HomePage;
