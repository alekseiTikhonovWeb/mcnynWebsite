import React, { useState, useEffect } from 'react';
import { teamData } from './aboutData';

// Components
import AboutHero from './components/AboutHero.jsx';
import MissionStatement from './components/MissionStatement.jsx';
import TeamSection from './components/TeamSection.jsx';
import HistoryTimeline from './components/HistoryTimeline.jsx';
import TeamMemberModal from './components/TeamMemberModal.jsx';

function AboutPage() {
  const [activeKey, setActiveKey] = useState(null);

  const openModal = (key) => { 
    setActiveKey(key); 
    document.body.style.overflow = 'hidden'; 
  };
  
  const closeModal = () => { 
    setActiveKey(null); 
    document.body.style.overflow = ''; 
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const member = activeKey ? teamData[activeKey] : null;

  return (
    <>
      <AboutHero />
      <MissionStatement />
      <TeamSection onOpenBio={openModal} />
      <HistoryTimeline />
      <TeamMemberModal member={member} onClose={closeModal} />
    </>
  );
}

export default AboutPage;
