import React, { useState } from 'react';
import { RESOURCES_DATA } from './resourcesData';

// Components
import ResourcesHero from './components/ResourcesHero.jsx';
import ResourceResultsView from './components/ResourceResultsView.jsx';
import ResourceCategoryAccordion from './components/ResourceCategoryAccordion.jsx';

function ResourcesPage() {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggle = (key) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

  // Helper to get all items across categories for searching
  const allItems = RESOURCES_DATA.flatMap(cat => {
    const processItems = (items, subTitle) => items.map(item => ({ 
      ...item, 
      categoryTitle: cat.title, 
      subCategoryTitle: subTitle,
      categoryId: cat.id
    }));

    if (cat.items) return processItems(cat.items);
    if (cat.subcategories) return cat.subcategories.flatMap(sub => processItems(sub.items, sub.title));
    return [];
  });

  const filteredItems = searchQuery.trim() === '' 
    ? [] 
    : allItems.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  // Group filtered items by category
  const groupedResults = filteredItems.reduce((acc, item) => {
    if (!acc[item.categoryTitle]) acc[item.categoryTitle] = [];
    acc[item.categoryTitle].push(item);
    return acc;
  }, {});

  const renderResourceItem = (item, index) => {
    if (item.locked) {
      return (
        <div className="locked-item" key={index}>
          <div className="linkmeta">
            <strong>{item.title}</strong>
            <span>{item.description}</span>
          </div>
          <span className="taglock">Portal</span>
        </div>
      );
    }

    const tagClass = item.type === 'PDF' ? 'tagpdf' : 'tagweb';
    const tagLabel = "Download";

    return (
      <div className="linkitem" key={item.link || index} style={{ cursor: 'default' }}>
        <div className="linkmeta">
          <strong>{item.title}</strong>
          <span>{item.description}</span>
        </div>
        <a 
          className={tagClass} 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {tagLabel}
        </a>
      </div>
    );
  };

  return (
    <main>
      <ResourcesHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <section id="content" className="section-flow-linen">
        <div className="wrap content-grid">
          
          {searchQuery.trim() !== '' ? (
            <ResourceResultsView 
              searchQuery={searchQuery}
              filteredItems={filteredItems}
              groupedResults={groupedResults}
              onClear={() => setSearchQuery('')}
              renderResourceItem={renderResourceItem}
            />
          ) : (
            <ResourceCategoryAccordion 
              resourcesData={RESOURCES_DATA}
              openItems={openItems}
              onToggle={toggle}
              renderResourceItem={renderResourceItem}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default ResourcesPage;