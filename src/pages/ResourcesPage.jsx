import React, { useState } from 'react';

const RESOURCES_DATA = [
  {
    id: 'partner',
    title: 'Partner Resources',
    pill: 'Partner Resources',
    pillClass: 'pill-gold',
    description: 'Some resources remain restricted to MNCYN partner access.',
    items: [
      {
        title: 'Partner Resource Portal',
        description: 'Available only to authorized partners',
        type: 'Portal',
        locked: true
      }
    ]
  },
  {
    id: 'measles',
    title: 'Measles Resources',
    pill: 'Updated March 27, 2025',
    pillClass: 'pill-teal',
    items: [
      { title: 'Measles Post-Exposure Guidance Sheet for patients', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Measles-Guidance-for-Patients.pdf' },
      { title: 'LHSC – Emergency Department Screening Flow Map', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Outpatient-Care-Flow-Map.pdf' },
      { title: 'LHSC – Inpatient Unit Measles Flow Map', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Inpatient-Unit-Flow-Map.pdf' },
      { title: 'LHSC – Outpatient Care Measles Flow Map', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Outpatient-Care-Flow-Map.pdf' },
      { title: 'LHSC – IVIg Clinic Measles Flow Map', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/IVIG-Clinic-Process-Map.pdf' },
      { title: 'LHSC Women’s Care – Measles Screening Tool', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Womens-measles-screening.pdf' },
      { title: 'LHSC OBCU Triage for Measles Slides – Feb 2025', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Feb-2025-OBCU-Womens-Measles-Screening.pdf' },
      { title: 'LHSC OBCU Measles Process Map – Feb 2025', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/OBCU-Measles-Flow-Feb2025.pdf' },
      { title: 'LHSC Measles Q&A', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Measles-QA-Mar2025.pdf' },
      { title: 'LHSC Patient Fact Sheet – Measles', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Measles-Guidance-for-Patients.pdf' },
      { title: 'LHSC Management of Mother and Newborn – Measles', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Management-MotherBaby-Measles-Mar2025.pdf' },
      { title: 'Low German/English OB Clinic Poster – 11×17 (STEGH)', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Low-GermanEnglish-OB-Clinic-Poster-11-x-17.pdf' },
      { title: 'St. Thomas Elgin Hospital Low German/English Measles Clinic Flyer – 8.5×11', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Low-GermanEnglish-Measles-Prenatal-Pkg-Clinic-8.5-x-11.pdf' },
      { title: 'Hamilton Health Sciences – Measles Materials', description: 'Local PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Measles-materials-shared-by-Hamilton-Health-Sciences-March-2025.pdf' },
      { title: 'Public Health Ontario – Measles Information', description: 'External website', type: 'Web', link: 'https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vaccine-Preventable-Diseases/Measles' },
      { title: 'PCMCH Measles Fact Sheet – IPHCC', description: 'PDF', type: 'PDF', link: 'content/resources/Measles-Resources/Measles-Fact-Sheet.pdf' }
    ],
    note: "Ontario Health – First Five: Access to preventative and health promotion care and services for children aged 0 to 5 years in Ontario, specifically for those without access to primary care and/or without a health card."
  },
  {
    id: 'competency',
    title: 'Nurse Competency Tools',
    pill: 'Nurse Competency Tools',
    pillClass: 'pill-brand',
    description: 'This section remains visible for structure and content continuity, but the actual downloads are still limited to the secure partner portal.',
    subcategories: [
      {
        id: 'perinatal',
        title: 'Perinatal Competency Indicator Tools',
        description: 'These tools were designed to support orientation, education, feedback, and skill development for nurses caring for mothers and newborns during the perinatal period.',
        items: [
          { title: 'Download – Perinatal Competency Tool', description: 'This resource is only for MNCYN partners in the Resource Portal', type: 'Portal', locked: true },
          { title: 'Download – Supporting Materials', description: 'This resource is only for MNCYN partners in the Resource Portal', type: 'Portal', locked: true }
        ]
      },
      {
        id: 'paediatric',
        title: 'Core Paediatric Competency Indicator Tool',
        description: 'Designed to help nurses build the knowledge and confidence needed to safely care for paediatric patients in urgent and emergent situations across the region.',
        items: [
          { title: 'Download – Paediatric Competency Tool', description: 'This resource is only for MNCYN partners in the Resource Portal', type: 'Portal', locked: true }
        ]
      }
    ]
  },
  {
    id: 'forms',
    title: 'Forms & Guidelines',
    pill: 'Forms & Guidelines',
    pillClass: 'pill-teal',
    items: [
      { title: 'Ill Newborn Record 2022', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Ill-Newborn-Record_2022.pdf' },
      { title: 'Maternal Transfer Record', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/PCMCH-Provincial-Maternal-Transfer-Record.pdf' },
      { title: 'Ill Newborn Record Guidelines 2022', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Ill-Newborn-Record_Guidelines_2022.pdf' },
      { title: 'Neonatal Resuscitation Record and Documentation Key 2016', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/2016_Neonatal-Resuscitation-Record-and-Documentation-Key_combined.pdf' },
      { title: 'Guidelines for Birth Summary 2012', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Guidelines-for-Birth-Summary-2012.pdf' },
      { title: 'Newborn Admission Discharge Record 2012', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Newborn-Admission-Discharge-Record-2012.pdf' },
      { title: 'Guidelines for Obstetric Pre-Admission Assessment Record 2', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Guidelines-for-Obstetric-Pre-Admission-Assessment-Record-2.pdf' },
      { title: 'Obstetrical Pain Management Monitoring Record', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Obstetrical-Pain-Management-Monitoring-Record.pdf' },
      { title: 'Guidelines for the Completion of the Obstetrical Pain Management Monitoring Record 2', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Guidelines-for-the-Completion-of-the-Obstetrical-Pain-Management-Monitoring-Record-2.pdf' },
      { title: 'Obstetrical Pre-Admission Assessment', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Obstetrical-Pre-Admission-Assessment.pdf' },
      { title: 'MNCYN Suggested List of Perinatal Policies, Guidelines, Standards of Nursing Care', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/MNCYN-Suggested-List-of-Perinatal-Policies-Guidelines-Standards-of-Nursing-Care.pdf' },
      { title: 'PCMCH Acute Neonatal Transfer Record', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/PCMCH_Acute_Neonatal_Transfer_Record-Feb_2014.pdf' },
      { title: 'Suggested List of Paediatric Policies, Guidelines, Standards of Nursing Care', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Suggested-List-of-Paediatric-Policies-2020.pdf' },
      { title: 'Summary of Birth 2012', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Summary-of-Birth-2012.pdf' },
      { title: 'Lung Health Foundation and PCMCH Updated Clinical Handbook for Paediatric Asthma (Clinical Handbook) November 2021', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Clinical_Handbook_Paediatric_Asthma_Updated_November_2021_May_2022_FINAL.pdf' },
      { title: 'The Provincial Neonatal Retro-transfer Record', description: 'Local PDF', type: 'PDF', link: 'content/resources/Forms-Guidelines/Appendix_10_Provincial_Neonatal_Retro-transfer_Record-Sept_30_2013.pdf' }
    ]
  },
  {
    id: 'resource-links',
    title: 'Resource Links',
    pill: 'Resource Links',
    pillClass: 'pill-brand',
    description: 'External links pulled from trusted sources and partner networks.',
    items: [
      { title: 'MNCYN Education Video: Management of Imminent Birth 2021', description: 'External link', type: 'Web', link: 'https://www.youtube.com/watch?v=odD4aMBV37w' },
      { title: 'Acute Care of at-Risk Newborns (ACoRN) Program', description: 'External link', type: 'Web', link: 'http://www.acornprogram.net/' },
      { title: 'Best Start Resources', description: 'External link', type: 'Web', link: 'http://www.beststart.org/resources/index.html' },
      { title: 'BORN Ontario', description: 'External link', type: 'Web', link: 'http://www.bornontario.ca/' },
      { title: 'Champlain Maternal Newborn Regional Program', description: 'External link', type: 'Web', link: 'http://www.cmnrp.ca/en/cmnrp/Home_p2974.html' },
      { title: 'London Health Sciences Centre Online NICU Medication Manual', description: 'External link', type: 'Web', link: 'https://www.lhsc.on.ca/nicu/nicu-medication-manual' },
      { title: 'National Center on Shaken Baby Syndrome (Period of Purple Crying)', description: 'External link', type: 'Web', link: 'http://www.dontshake.org/purple-crying' },
      { title: 'Neonatal Resuscitation Program (NRP)', description: 'External link', type: 'Web', link: 'http://www.cps.ca/nrp-prn' },
      { title: 'OMama Project (BORN Ontario)', description: 'External link', type: 'Web', link: 'http://www.omama.com/en/index.asp' },
      { title: 'Ontario Human Milk Bank', description: 'External link', type: 'Web', link: 'http://www.milkbankontario.ca/' },
      { title: 'Ontario Midwives', description: 'External link', type: 'Web', link: 'http://www.ontariomidwives.ca/' },
      { title: 'Ontario Perinatal Record Users Guide', description: 'External PDF', type: 'PDF', link: 'https://www.pcmch.on.ca/wp-content/uploads/OPR_UserGuide_2018Update_Final_18-08-22.pdf' },
      { title: 'Ontario Directory of Prenatal Education', description: 'External link', type: 'Web', link: 'https://ontariodirectoryprenataleducation.ca/' },
      { title: 'Perinatal Services BC (PSBC)', description: 'External link', type: 'Web', link: 'http://www.perinatalservicesbc.ca/' },
      { title: 'Pregnancy and Infant Loss Network (PAIL Network)', description: 'External link', type: 'Web', link: 'http://pailnetwork.ca/' },
      { title: 'Provincial Council for Maternal and Child Health (PCMCH)', description: 'External link', type: 'Web', link: 'http://www.pcmch.on.ca/' },
      { title: 'Registered Nurses Association of Ontario (RNAO) – Maternal Child Nurses Interest Group (MCNIG)', description: 'External link', type: 'Web', link: 'http://rnao.ca/connect/interest-groups/mcnig' },
      { title: 'The Canadian Association of Perinatal and Women’s Health Nurses (CAPWHN)', description: 'External link', type: 'Web', link: 'http://www.capwhn.ca/' },
      { title: 'The MotHERS Program (Mothers Health Education, Research and Screening)', description: 'External link', type: 'Web', link: 'http://www.themothersprogram.ca/' },
      { title: 'The Reproductive Care Program of Nova Scotia', description: 'External link', type: 'Web', link: 'https://rcp.nshealth.ca/' },
      { title: 'The Society of Obstetricians and Gynaecologists of Canada', description: 'External link', type: 'Web', link: 'http://sogc.org/' },
      { title: 'OHW High Flow Algorithm Webinar', description: 'External video', type: 'Web', link: 'https://youtu.be/OPKFF3fjRqM' },
      { title: 'MNCYN Education Videos: Paediatric Respiratory Therapy Simulation Video Series 2021', description: 'External video', type: 'Web', link: 'https://www.youtube.com/watch?v=5xVmqr9akO8&list=PL6ImavgHs-2KBwW2_QmZNG5hWLWD59ymy' },
      { title: 'Ontario West Region: High Flow Working Group Algorithm for HHFNCO2', description: 'External PDF', type: 'PDF', link: 'https://mncyn.ca/wp-content/uploads/2023/10/West-Region-HHFNCO2-Algorithm.pdf' },
      { title: 'HHFNCO2 Webinar Slides', description: 'External PDF', type: 'PDF', link: 'https://mncyn.ca/wp-content/uploads/2023/10/Heated-High-Flow-Webinar-Slides.pdf' },
      { title: 'MNCYN Paediatric QR QuickPics', description: 'External PDF', type: 'PDF', link: 'https://mncyn.ca/wp-content/uploads/2023/11/Paediatric-QR-QuickPics.pdf' },
      { title: 'Children’s Healthcare Canada', description: 'External link', type: 'Web', link: 'http://www.childrenshealthcarecanada.ca/' },
      { title: 'American Academy of Pediatrics (AAP)', description: 'External link', type: 'Web', link: 'http://www.aap.org/en-us/Pages/Default.aspx' },
      { title: 'Canadian Association of Critical Care Nurses (CACCN)', description: 'External link', type: 'Web', link: 'http://www.caccn.ca/' },
      { title: 'Canadian Association of Emergency Physicians (CAEP)', description: 'External link', type: 'Web', link: 'http://caep.ca/' },
      { title: 'Canadian Association of Paediatric Health Centres (CAPHC)', description: 'External link', type: 'Web', link: 'http://www.caphc.org/' },
      { title: 'Canadian Diabetes Association', description: 'External link', type: 'Web', link: 'http://www.diabetes.ca/' },
      { title: 'Canadian Mental Health Association', description: 'External link', type: 'Web', link: 'http://www.cmha.ca/' },
      { title: 'Canadian Paediatric Society (CPS)', description: 'External link', type: 'Web', link: 'http://www.cps.ca/' },
      { title: 'Canadian Vascular Access Association', description: 'External link', type: 'Web', link: 'http://www.cvaa.info/HOME/tabid/203/Default.aspx' },
      { title: 'CritiCall Ontario', description: 'External link', type: 'Web', link: 'https://www.criticall.org/' },
      { title: 'Emergency Nurses Association (ENA)', description: 'External link', type: 'Web', link: 'http://www.ena.org/Pages/default.aspx' },
      { title: 'Heart & Stroke Foundation of Canada – PALS course information', description: 'External link', type: 'Web', link: 'https://resuscitation.heartandstroke.ca/courses/pals/description' },
      { title: 'National Eating Disorder Information Centre (Canada)', description: 'External link', type: 'Web', link: 'http://www.nedic.ca/' },
      { title: 'National Emergency Nurses’ Affiliation (NENA)', description: 'External link', type: 'Web', link: 'http://nena.ca/' },
      { title: 'Provincial Council for Maternal and Child Health (PCMCH)', description: 'External link', type: 'Web', link: 'http://www.pcmch.on.ca/' },
      { title: 'Chatham-Kent Health Unit', description: 'External link', type: 'Web', link: 'http://www.chatham-kent.ca/' },
      { title: 'Grey Bruce Health Unit', description: 'External link', type: 'Web', link: 'https://www.publichealthgreybruce.on.ca/' },
      { title: 'Huron Perth Public Health', description: 'External link', type: 'Web', link: 'https://www.hpph.ca/en/index.aspx' },
      { title: 'Lambton Health Unit', description: 'External link', type: 'Web', link: 'http://www.lambtonhealth.on.ca/' },
      { title: 'Middlesex London Health Unit', description: 'External link', type: 'Web', link: 'https://www.healthunit.com/' },
      { title: 'Perth District Health Unit', description: 'External link', type: 'Web', link: 'http://www.pdhu.on.ca/' },
      { title: 'Public Health Ontario', description: 'External link', type: 'Web', link: 'https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vaccine-Preventable-Diseases/Measles' },
      { title: 'Southwestern Public Health (formerly Elgin-St. Thomas Health Unit & Oxford County Public Health)', description: 'External link', type: 'Web', link: 'https://www.swpublichealth.ca/' },
      { title: 'Windsor-Essex County Health Unit', description: 'External link', type: 'Web', link: 'http://www.wechealthunit.org/' },
      { title: 'SOGC: Indigenous Women’s Health', description: 'External link', type: 'Web', link: 'https://www.sogc.org/en/about/what-we-do/indigenous-womens-health/en/content/about/indigenous-womens-health.aspx?hkey=e85746d2-eb7f-444b-a1c9-34748a448779' },
      { title: 'IMPACT: Impaired Minds Produce Actions Causing Trauma', description: 'External link', type: 'Web', link: 'http://www.lhsc.on.ca/About_Us/Trauma/Trauma_Prevention_Programs/IMPACT/index.htm' },
      { title: 'Ontario Child Care and Early Years Information', description: 'External link', type: 'Web', link: 'http://www.edu.gov.on.ca/childcare/' },
      { title: 'Rural Response for Healthy Children', description: 'External link', type: 'Web', link: 'http://www.rrhc.on.ca/' },
      { title: 'Smoking Cessation in Pregnancy Programs', description: 'External link', type: 'Web', link: 'http://www.smokershelpline.ca/' },
      { title: 'The Huron-Perth Centre for Children and Youth', description: 'External link', type: 'Web', link: 'http://www.hpcentre.on.ca/all-services' },
      { title: 'About Kids Health-Trusted Answers From SickKids', description: 'External link', type: 'Web', link: 'http://www.aboutkidshealth.ca/En/Pages/default.aspx' },
      { title: 'National Eating Disorder Information Centre (NEDIC)', description: 'External link', type: 'Web', link: 'https://nedic.ca/' },
      { title: 'VEGA (Violence, Evidence, Guidance, and Action) Project', description: 'External link', type: 'Web', link: 'https://vegaeducation.mcmaster.ca/' },
    ]
  }
];

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
    // User requested "Download" label
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
      {/* HERO */}
      <section className="page-hero" aria-label="Resources">
        <div className="wrap page-hero-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2.5rem', alignItems: 'center' }}>
          <div>
            <span className="page-hero-kicker">Clinical Library</span>
            <h1>Resources for Providers &amp; Partners</h1>
            <p>
              Access local documents, clinical forms, partner-only materials, and trusted external links that support perinatal and paediatric care across the region.
            </p>
          </div>

          <div className="hero-search-card">
            <div className="search-title">Search the library</div>
            <div className="hero-search-row">
              <span className="search-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </span>
              <input 
                id="globalSearch" 
                type="search" 
                placeholder="Search measles, forms, links..." 
                aria-label="Search resources" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="hero-jump-grid">
              <a className="hero-jump-link" href="#partner" onClick={() => setSearchQuery('')}>
                <strong>Partner Resources</strong>
                <span>Secure portal materials</span>
              </a>
              <a className="hero-jump-link" href="#measles" onClick={() => setSearchQuery('')}>
                <strong>Measles Resources</strong>
                <span>Local PDFs and updates</span>
              </a>
              <a className="hero-jump-link" href="#competency" onClick={() => setSearchQuery('')}>
                <strong>Competency Tools</strong>
                <span>Partner-only downloads</span>
              </a>
              <a className="hero-jump-link" href="#forms" onClick={() => setSearchQuery('')}>
                <strong>Forms &amp; Guidelines</strong>
                <span>Local clinical PDFs</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section id="content" className="section-flow-linen">
        <div className="wrap content-grid">
          
          {searchQuery.trim() !== '' ? (
            /* SEARCH RESULTS VIEW */
            <div className="search-results-list" style={{ width: '100%' }}>
              <div className="section-head" style={{ marginBottom: '2.5rem' }}>
                <span className="pill pill-brand">Search results</span>
                <h2>Showing results for "{searchQuery}"</h2>
                <p>{filteredItems.length} materials matching your criteria.</p>
              </div>

              {filteredItems.length > 0 ? (
                Object.keys(groupedResults).map(categoryTitle => (
                  <div key={categoryTitle} className="search-category-group" style={{ marginBottom: '3rem' }}>
                    <h3 style={{ 
                      fontSize: '1rem', 
                      color: 'var(--brand)', 
                      opacity: 0.6, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.1em',
                      marginBottom: '1rem',
                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                      paddingBottom: '0.5rem'
                    }}>
                      {categoryTitle}
                    </h3>
                    <div className="linklist">
                      {groupedResults[categoryTitle].map((item, idx) => (
                        <div key={idx} style={{ marginBottom: '0.5rem' }}>
                          {renderResourceItem(item, idx)}
                          {item.subCategoryTitle && (
                            <div style={{ fontSize: '0.7rem', color: 'var(--brand)', opacity: 0.5, marginTop: '-0.3rem', marginLeft: '1rem', marginBottom: '0.8rem' }}>
                              Sub-category: {item.subCategoryTitle}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="note-box" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                  <strong>No materials found</strong><br />
                  <span style={{ opacity: 0.7 }}>Try using different keywords or check your spelling.</span>
                </div>
              )}
              
              <div style={{ marginTop: '2rem', textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2rem' }}>
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ background: 'var(--brand)', border: 'none', color: 'var(--white)', padding: '0.7rem 1.8rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
                >
                  Clear search
                </button>
              </div>
            </div>
          ) : (
            /* DEFAULT CATEGORIES VIEW */
            RESOURCES_DATA.map((cat) => (
              <section className="section-card" id={cat.id} key={cat.id}>
                <div className="section-head">
                  <span className={`pill ${cat.pillClass}`}>{cat.pill}</span>
                  <h2>{cat.title}</h2>
                  {cat.description && <p>{cat.description}</p>}
                </div>

                <div className="section-body">
                  <div className="accordion">
                    {cat.subcategories ? (
                      cat.subcategories.map(sub => (
                        <div className={`accordion-item ${openItems[sub.id] ? 'open' : ''}`} key={sub.id}>
                          <button className="accordion-toggle" type="button" onClick={() => toggle(sub.id)}>
                            <span className="accordion-label">
                              <span className="accordion-dot brand"></span>
                              <span>{sub.title}</span>
                            </span>
                            <span className="accordion-arrow">›</span>
                          </button>
                          <div className="accordion-content">
                            {sub.description && <p className="muted" style={{ marginBottom: ".8rem" }}>{sub.description}</p>}
                            <div className="linklist">
                              {sub.items.map((item, idx) => renderResourceItem(item, idx))}
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className={`accordion-item ${openItems[cat.id] ? 'open' : ''}`}>
                        <button className="accordion-toggle" type="button" onClick={() => toggle(cat.id)}>
                          <span className="accordion-label">
                            <span className="accordion-dot brand"></span>
                            <span>Open {cat.title}</span>
                          </span>
                          <span className="accordion-arrow">›</span>
                        </button>
                        <div className="accordion-content">
                          <div className={cat.id === 'forms' ? 'split-list' : 'linklist'}>
                            {cat.items.map((item, idx) => renderResourceItem(item, idx))}
                          </div>
                          {cat.note && (
                            <div className="note-box" style={{ marginTop: '1.5rem' }}>
                              {cat.note}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

export default ResourcesPage;