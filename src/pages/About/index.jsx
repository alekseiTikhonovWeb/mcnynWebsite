import { useState, useEffect } from 'react';
import PageHero from '../../components/PageHero.jsx';
import { teamData } from './aboutData';
import MissionStatement from './components/MissionStatement.jsx';
import TeamSection from './components/TeamSection.jsx';
import HistoryTimeline from './components/HistoryTimeline.jsx';
import TeamMemberModal from './components/TeamMemberModal.jsx';

function AboutPage() {
  const [activeKey, setActiveKey] = useState(null);
  const closeModal = () => setActiveKey(null);

  useEffect(() => {
    document.body.style.overflow = activeKey ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeKey]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <PageHero
        label="Who We Are"
        kicker="Our Organization"
        title="Who We Are"
        text="MNCYN brings together perinatal and paediatric health care providers from across the region with the shared goal of keeping care as close to home as possible."
      />
      <MissionStatement />
      <TeamSection onOpenBio={setActiveKey} />
      <HistoryTimeline />
      <TeamMemberModal member={activeKey ? teamData[activeKey] : null} onClose={closeModal} />
    </>
  );
}

export default AboutPage;
