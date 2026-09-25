import { RESOURCES_DATA } from '../resourcesData';
import ResourceItem from './ResourceItem.jsx';

function ResourceCategoryAccordion({ openItems, onToggle }) {
  return RESOURCES_DATA.map((cat) => (
    <section className="section-card" id={cat.id} key={cat.id}>
      <div className="section-head">
        {cat.pill && <span className={`pill ${cat.pillClass}`}>{cat.pill}</span>}
        <h2>{cat.title}</h2>
        {cat.description && <p>{cat.description}</p>}
      </div>

      <div className="section-body">
        <div className="accordion">
          {cat.groups.map((group) => {
            const key = group.id ?? cat.id;
            return (
              <div className={`accordion-item${openItems[key] ? ' open' : ''}`} key={key}>
                <button className="accordion-toggle" type="button" onClick={() => onToggle(key)}>
                  <span className="accordion-label">
                    <span className="accordion-dot gold"></span>
                    <span>{group.title ?? `Open ${cat.title}`}</span>
                  </span>
                  <span className="accordion-arrow">›</span>
                </button>
                <div className="accordion-content">
                  {group.description && <p className="muted accordion-desc">{group.description}</p>}
                  <div className={group.layout === 'split' ? 'split-list' : 'linklist'}>
                    {group.items.map((item, i) => <ResourceItem key={i} item={item} />)}
                  </div>
                  {group.note && <div className="note-box">{group.note}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  ));
}

export default ResourceCategoryAccordion;
