import { useState } from 'react';
import PageHero from '../../components/PageHero.jsx';
import { RESOURCES_DATA } from './resourcesData';
import ResourceSearchCard from './components/ResourceSearchCard.jsx';
import ResourceResultsView from './components/ResourceResultsView.jsx';
import ResourceCategoryAccordion from './components/ResourceCategoryAccordion.jsx';

// Flat search index, built once.
const ALL_ITEMS = RESOURCES_DATA.flatMap((cat) =>
  cat.groups.flatMap((group) =>
    group.items.map((item) => ({ ...item, categoryTitle: cat.title, subCategoryTitle: group.title })),
  ),
);

function ResourcesPage() {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const toggle = (key) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const query = searchQuery.trim().toLowerCase();
  const results = query
    ? ALL_ITEMS.filter(({ title, description }) =>
        title.toLowerCase().includes(query) || description.toLowerCase().includes(query))
    : null;

  return (
    <>
      <PageHero
        label="Resources"
        kicker="Clinical Library"
        title="Resources for Providers & Partners"
        text="Access local documents, clinical forms, partner-only materials, and trusted external links that support perinatal and paediatric care across the region."
        aside={<ResourceSearchCard searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
      />

      <section id="content">
        <div className="wrap content-grid">
          {results
            ? <ResourceResultsView searchQuery={searchQuery} items={results} onClear={() => setSearchQuery('')} />
            : <ResourceCategoryAccordion openItems={openItems} onToggle={toggle} />}
        </div>
      </section>
    </>
  );
}

export default ResourcesPage;
