import { useState } from 'react';
import PageHero from '../../components/PageHero.jsx';
import { programs } from './educationData';
import EducationTabs from './components/EducationTabs.jsx';
import CoursePanel from './components/CoursePanel.jsx';
import ResourcesCTA from './components/ResourcesCTA.jsx';

function EducationPage() {
  const [activeTab, setActiveTab] = useState(programs[0].id);

  return (
    <>
      <PageHero
        label="Education"
        kicker="Learning & Development"
        title="Education"
        text="MNCYN provides continuing education designed around the realities of clinical practice — for both perinatal and paediatric care providers across South West Ontario."
      />

      <section className="page-content" aria-label="Education by program">
        <div className="wrap">
          <EducationTabs activeTab={activeTab} onTabChange={setActiveTab} />
          {programs.map((program) => (
            <CoursePanel key={program.id} program={program} isActive={activeTab === program.id} />
          ))}
        </div>
      </section>

      <ResourcesCTA />
    </>
  );
}

export default EducationPage;
