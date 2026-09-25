import { programs } from '../educationData';

function EducationTabs({ activeTab, onTabChange }) {
  return (
    <>
      <p className="section-eyebrow">Select a program</p>
      <h2 className="page-section-title">Education by Program</h2>
      <p className="page-section-lead">
        Sessions and resources are organized by program. Select the program most relevant to your work.
      </p>

      <div className="edu-tabs" role="tablist">
        {programs.map(({ id, label }) => (
          <button
            key={id}
            className={`edu-tab-btn${activeTab === id ? ' active' : ''}`}
            role="tab"
            aria-selected={activeTab === id}
            onClick={() => onTabChange(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </>
  );
}

export default EducationTabs;
