import React from 'react';

// Components
import ProgramsHero from './components/ProgramsHero.jsx';
import ProgramDetailCards from './components/ProgramDetailCards.jsx';
import DeliverablesGrid from './components/DeliverablesGrid.jsx';
import ProgramsCTA from './components/ProgramsCTA.jsx';

function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramDetailCards />
      <DeliverablesGrid />
      <ProgramsCTA />
    </>
  );
}

export default ProgramsPage;
