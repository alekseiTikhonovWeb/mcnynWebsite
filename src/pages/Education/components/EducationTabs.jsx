import React from 'react';

function EducationTabs({ activeTab, onTabChange }) {
  return (
    <>
      <p className="section-eyebrow">Select a program</p>
      <h2 className="page-section-title">Education by Program</h2>
      <p className="page-section-lead">
        Sessions and resources are organized by program. Select the program most relevant to your work.
      </p>

      <div className="edu-tabs" role="tablist">
        <button
          className={`edu-tab-btn${activeTab === 'perinatal' ? ' active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'perinatal'}
          onClick={() => onTabChange('perinatal')}
        >
          Perinatal Education
        </button>
        <button
          className={`edu-tab-btn${activeTab === 'paediatric' ? ' active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'paediatric'}
          onClick={() => onTabChange('paediatric')}
        >
          Paediatric Education
        </button>
      </div>
    </>
  );
}

export default EducationTabs;
