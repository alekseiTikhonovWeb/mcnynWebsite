import PageHero from '../../components/PageHero.jsx';
import ProgramDetailCards from './components/ProgramDetailCards.jsx';
import DeliverablesGrid from './components/DeliverablesGrid.jsx';
import ProgramsCTA from './components/ProgramsCTA.jsx';

function ProgramsPage() {
  return (
    <>
      <PageHero
        label="Programs"
        kicker="What We Offer"
        title="Our Programs"
        text="MNCYN supports health care providers across South West Ontario through two core regional programs — Perinatal and Paediatric — each focused on strengthening care for families."
      />
      <ProgramDetailCards />
      <DeliverablesGrid />
      <ProgramsCTA />
    </>
  );
}

export default ProgramsPage;
