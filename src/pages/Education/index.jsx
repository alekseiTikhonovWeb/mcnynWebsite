import React, { useState } from 'react';

// Components
import EducationHero from './components/EducationHero.jsx';
import EducationTabs from './components/EducationTabs.jsx';
import PerinatalPanel from './components/PerinatalPanel.jsx';
import PaediatricPanel from './components/PaediatricPanel.jsx';
import ResourcesCTA from './components/ResourcesCTA.jsx';

function EducationPage() {
  const [activeTab, setActiveTab] = useState('perinatal');

  return (
    <>
      <EducationHero />

      <section className="page-content" aria-label="Education by program">
        <div className="wrap">
          <EducationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          
          <PerinatalPanel isActive={activeTab === 'perinatal'} />
          <PaediatricPanel isActive={activeTab === 'paediatric'} />
        </div>
      </section>

      <ResourcesCTA />
    </>
  );
}

export default EducationPage;
