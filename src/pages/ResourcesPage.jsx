import React, { useState } from 'react';

function ResourcesPage() {
  const [openItems, setOpenItems] = useState({});
  const toggle = (key) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <main>
      

    {/* HERO */}
    <section className="resources-hero">
      <div className="wrap hero-card">
        <div className="hero-copy">
          <p className="section-eyebrow">Resource library</p>
          <h1 className="page-title">Resources for providers and partners</h1>
          <p>
            Access local documents, clinical forms, partner-only materials, and trusted external links that support
            perinatal and paediatric care across the region.
          </p>
        </div>

        <div className="hero-side">
          <div className="search-title">Search the library</div>
          <div className="search-row">
            <span className="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input id="globalSearch" type="search" placeholder="Search measles, forms, links..." aria-label="Search resources" />
          </div>

          <div className="jump-grid">
            <a className="jump-link" href="#partner">
              <strong>Partner Resources</strong>
              <span>Secure portal materials</span>
            </a>
            <a className="jump-link" href="#measles">
              <strong>Measles Resources</strong>
              <span>Local PDFs and updates</span>
            </a>
            <a className="jump-link" href="#competency">
              <strong>Competency Tools</strong>
              <span>Partner-only downloads</span>
            </a>
            <a className="jump-link" href="#forms">
              <strong>Forms &amp; Guidelines</strong>
              <span>Local clinical PDFs</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* CONTENT */}
    <section id="content">
      <div className="wrap content-grid">

        {/* PARTNER RESOURCES */}
        <section className="section-card" id="partner" data-search>
          <div className="section-head">
            <span className="pill pill-clay">Partner Resources</span>
            <h2>Partner Resources</h2>
            <p>
              Some resources remain restricted to MNCYN partner access.
            </p>
          </div>

          <div className="section-body">
            <div className="accordion">
              <div className={`accordion-item ${openItems['partner'] ? 'open' : ''}`}>
                <button className="accordion-toggle" type="button" onClick={() => toggle('partner')}>
                  <span className="accordion-label">
                    <span className="accordion-dot clay"></span>
                    <span>Open Partner Resources</span>
                  </span>
                  <span className="accordion-arrow">›</span>
                </button>
                <div className="accordion-content">
                  <div className="linklist">
                    <div className="locked-item" data-search>
                      <div className="linkmeta">
                        <strong>Partner Resource Portal</strong>
                        <span>Available only to authorized partners</span>
                      </div>
                      <span className="taglock">Portal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEASLES RESOURCES */}
        <section className="section-card" id="measles" data-search>
          <div className="section-head">
            <span className="pill pill-teal">Updated March 27, 2025</span>
            <h2>Measles Resources</h2>
          </div>

          <div className="section-body">
            <div className="accordion">
              <div className={`accordion-item ${openItems['measles'] ? 'open' : ''}`}>
                <button className="accordion-toggle" type="button" onClick={() => toggle('measles')}>
                  <span className="accordion-label">
                    <span className="accordion-dot"></span>
                    <span>Open Measles Resources</span>
                  </span>
                  <span className="accordion-arrow">›</span>
                </button>
                <div className="accordion-content">
                  <div className="linklist">
                    <a className="linkitem" href="content/resources/Measles-Resources/Measles-Guidance-for-Patients.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Measles Post-Exposure Guidance Sheet for patients</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Outpatient-Care-Flow-Map.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                          <strong>LHSC – Emergency Department Screening Flow Map</strong>
                          <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Inpatient-Unit-Flow-Map.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC – Inpatient Unit Measles Flow Map</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Outpatient-Care-Flow-Map.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC – Outpatient Care Measles Flow Map</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/IVIG-Clinic-Process-Map.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC – IVIg Clinic Measles Flow Map</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Womens-measles-screening.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC Women’s Care – Measles Screening Tool</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Feb-2025-OBCU-Womens-Measles-Screening.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC OBCU Triage for Measles Slides – Feb 2025</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/OBCU-Measles-Flow-Feb2025.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC OBCU Measles Process Map – Feb 2025</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Measles-QA-Mar2025.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC Measles Q&amp;A</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Measles-Guidance-for-Patients.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC Patient Fact Sheet – Measles</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Management-MotherBaby-Measles-Mar2025.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>LHSC Management of Mother and Newborn – Measles</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Low-GermanEnglish-OB-Clinic-Poster-11-x-17.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Low German/English OB Clinic Poster – 11×17 (STEGH)</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Low-GermanEnglish-Measles-Prenatal-Pkg-Clinic-8.5-x-11.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>St. Thomas Elgin Hospital Low German/English Measles Clinic Flyer – 8.5×11</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Measles-materials-shared-by-Hamilton-Health-Sciences-March-2025.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Hamilton Health Sciences – Measles Materials</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vaccine-Preventable-Diseases/Measles" target="_blank" rel="noopener noreferrer" data-search>
                      <div className="linkmeta">
                        <strong>Public Health Ontario – Measles Information</strong>
                        <span>External website</span>
                      </div>
                      <span className="tagweb">Web</span>
                    </a>

                    <a className="linkitem" href="content/resources/Measles-Resources/Measles-Fact-Sheet.pdf" target="_blank" rel="noopener noreferrer" data-search>
                        <div className="linkmeta">
                          <strong>PCMCH Measles Fact Sheet – IPHCC</strong>
                          <span>PDF</span>
                        </div>
                        <span className="tagpdf">PDF</span>
                      
                    </a>
                  </div>

                  <div className="note-box">
                    <strong>Ontario Health – First Five</strong><br />
                    Access to preventative and health promotion care and services for children aged 0 to 5 years in Ontario,
                    specifically for those without access to primary care and/or without a health card.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NURSE COMPETENCY TOOLS */}
        <section className="section-card" id="competency" data-search>
          <div className="section-head">
            <span className="pill pill-navy">Nurse Competency Tools</span>
            <h2>Nurse Competency Tools</h2>
            <p>
              This section remains visible for structure and content continuity, but the actual downloads are still limited to
              the secure partner portal.
            </p>
          </div>

          <div className="section-body">
            <div className="accordion">
              <div className={`accordion-item ${openItems['perinatal'] ? 'open' : ''}`}>
                <button className="accordion-toggle" type="button" onClick={() => toggle('perinatal')}>
                  <span className="accordion-label">
                    <span className="accordion-dot"></span>
                    <span>Perinatal Competency Indicator Tools</span>
                  </span>
                  <span className="accordion-arrow">›</span>
                </button>
                <div className="accordion-content">
                  <p className="muted" style={{marginBottom: ".8rem", }}>
                    These tools were designed to support orientation, education, feedback, and skill development for nurses caring
                    for mothers and newborns during the perinatal period.
                  </p>
                  <div className="linklist">
                    <div className="locked-item" data-search>
                      <div className="linkmeta">
                        <strong>Download – Perinatal Competency Tool</strong>
                        <span>This resource is only for MNCYN partners in the Resource Portal</span>
                      </div>
                      <span className="taglock">Portal</span>
                    </div>
                    <div className="locked-item" data-search>
                      <div className="linkmeta">
                        <strong>Download – Supporting Materials</strong>
                        <span>This resource is only for MNCYN partners in the Resource Portal</span>
                      </div>
                      <span className="taglock">Portal</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`accordion-item ${openItems['paediatric'] ? 'open' : ''}`}>
                <button className="accordion-toggle" type="button" onClick={() => toggle('paediatric')}>
                  <span className="accordion-label">
                    <span className="accordion-dot clay"></span>
                    <span>Core Paediatric Competency Indicator Tool</span>
                  </span>
                  <span className="accordion-arrow">›</span>
                </button>
                <div className="accordion-content">
                  <p className="muted" style={{marginBottom: ".8rem", }}>
                    Designed to help nurses build the knowledge and confidence needed to safely care for paediatric patients in urgent
                    and emergent situations across the region.
                  </p>
                  <div className="linklist">
                    <div className="locked-item" data-search>
                      <div className="linkmeta">
                        <strong>Download – Paediatric Competency Tool</strong>
                        <span>This resource is only for MNCYN partners in the Resource Portal</span>
                      </div>
                      <span className="taglock">Portal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FORMS & GUIDELINES */}
        <section className="section-card" id="forms" data-search>
          <div className="section-head">
            <span className="pill pill-teal">Forms &amp; Guidelines</span>
            <h2>Forms &amp; Guidelines</h2>
          </div>

          <div className="section-body">
            <div className="accordion">
              <div className={`accordion-item ${openItems['forms'] ? 'open' : ''}`}>
                <button className="accordion-toggle" type="button" onClick={() => toggle('forms')}>
                  <span className="accordion-label">
                    <span className="accordion-dot navy"></span>
                    <span>Open Forms &amp; Guidelines</span>
                  </span>
                  <span className="accordion-arrow">›</span>
                </button>
                <div className="accordion-content">
                  <div className="split-list">

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Ill-Newborn-Record_2022.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Ill Newborn Record 2022</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/PCMCH-Provincial-Maternal-Transfer-Record.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Maternal Transfer Record</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Ill-Newborn-Record_Guidelines_2022.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Ill Newborn Record Guidelines 2022</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/2016_Neonatal-Resuscitation-Record-and-Documentation-Key_combined.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Neonatal Resuscitation Record and Documentation Key 2016</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Guidelines-for-Birth-Summary-2012.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Guidelines for Birth Summary 2012</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Newborn-Admission-Discharge-Record-2012.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Newborn Admission Discharge Record 2012</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Guidelines-for-Obstetric-Pre-Admission-Assessment-Record-2.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Guidelines for Obstetric Pre-Admission Assessment Record 2</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Obstetrical-Pain-Management-Monitoring-Record.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Obstetrical Pain Management Monitoring Record</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Guidelines-for-the-Completion-of-the-Obstetrical-Pain-Management-Monitoring-Record-2.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Guidelines for the Completion of the Obstetrical Pain Management Monitoring Record 2</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Obstetrical-Pre-Admission-Assessment.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Obstetrical Pre-Admission Assessment</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/MNCYN-Suggested-List-of-Perinatal-Policies-Guidelines-Standards-of-Nursing-Care.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>MNCYN Suggested List of Perinatal Policies, Guidelines, Standards of Nursing Care</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/PCMCH_Acute_Neonatal_Transfer_Record-Feb_2014.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>PCMCH Acute Neonatal Transfer Record</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Suggested-List-of-Paediatric-Policies-2020.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Suggested List of Paediatric Policies, Guidelines, Standards of Nursing Care</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Summary-of-Birth-2012.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Summary of Birth 2012</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Clinical_Handbook_Paediatric_Asthma_Updated_November_2021_May_2022_FINAL.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>Lung Health Foundation and PCMCH Updated Clinical Handbook for Paediatric Asthma (Clinical Handbook) November 2021</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                    <a className="linkitem" href="content/resources/Forms-Guidelines/Appendix_10_Provincial_Neonatal_Retro-transfer_Record-Sept_30_2013.pdf" target="_blank" data-search>
                      <div className="linkmeta">
                        <strong>The Provincial Neonatal Retro-transfer Record</strong>
                        <span>Local PDF</span>
                      </div>
                      <span className="tagpdf">PDF</span>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESOURCE LINKS */}
        <section className="section-card" id="resource-links" data-search>
          <div className="section-head">
            <span className="pill pill-navy">Resource Links</span>
            <h2>Resource Links</h2>
            <p>
              External links below were pulled from the uploaded spreadsheet of hyperlinks and added directly into the page.
            </p>
          </div>

          <div className="section-body">
            <div className="accordion">
              <div className={`accordion-item ${openItems['links'] ? 'open' : ''}`}>
                <button className="accordion-toggle" type="button" onClick={() => toggle('links')}>
                  <span className="accordion-label">
                    <span className="accordion-dot navy"></span>
                    <span>Open Resource Links</span>
                  </span>
                  <span className="accordion-arrow">›</span>
                </button>
                <div className="accordion-content">
                  <div className="linklist">

                    <a className="linkitem" href="https://www.youtube.com/watch?v=odD4aMBV37w" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>MNCYN Education Video: Management of Imminent Birth 2021</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.acornprogram.net/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Acute Care of at-Risk Newborns (ACoRN) Program</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.beststart.org/resources/index.html" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Best Start Resources</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.bornontario.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>BORN Ontario</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.cmnrp.ca/en/cmnrp/Home_p2974.html" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Champlain Maternal Newborn Regional Program</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.lhsc.on.ca/nicu/nicu-medication-manual" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>London Health Sciences Centre Online NICU Medication Manual</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.dontshake.org/purple-crying" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>National Center on Shaken Baby Syndrome (Period of Purple Crying)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.cps.ca/nrp-prn" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Neonatal Resuscitation Program (NRP)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.omama.com/en/index.asp" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>OMama Project (BORN Ontario)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.milkbankontario.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Ontario Human Milk Bank</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.ontariomidwives.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Ontario Midwives</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.pcmch.on.ca/wp-content/uploads/OPR_UserGuide_2018Update_Final_18-08-22.pdf" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Ontario Perinatal Record Users Guide</strong><span>External PDF</span></div><span className="tagpdf">PDF</span></a>
                    <a className="linkitem" href="https://ontariodirectoryprenataleducation.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Ontario Directory of Prenatal Education</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.perinatalservicesbc.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Perinatal Services BC (PSBC)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://pailnetwork.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Pregnancy and Infant Loss Network (PAIL Network)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.pcmch.on.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Provincial Council for Maternal and Child Health (PCMCH)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://rnao.ca/connect/interest-groups/mcnig" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Registered Nurses Association of Ontario (RNAO) – Maternal Child Nurses Interest Group (MCNIG)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.capwhn.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>The Canadian Association of Perinatal and Women’s Health Nurses (CAPWHN)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.themothersprogram.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>The MotHERS Program (Mothers Health Education, Research and Screening)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://rcp.nshealth.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>The Reproductive Care Program of Nova Scotia</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://sogc.org/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>The Society of Obstetricians and Gynaecologists of Canada</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://youtu.be/OPKFF3fjRqM" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>OHW High Flow Algorithm Webinar</strong><span>External video</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.youtube.com/watch?v=5xVmqr9akO8&list=PL6ImavgHs-2KBwW2_QmZNG5hWLWD59ymy" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>MNCYN Education Videos: Paediatric Respiratory Therapy Simulation Video Series 2021</strong><span>External video</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://mncyn.ca/wp-content/uploads/2023/10/West-Region-HHFNCO2-Algorithm.pdf" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Ontario West Region: High Flow Working Group Algorithm for HHFNCO2</strong><span>External PDF</span></div><span className="tagpdf">PDF</span></a>
                    <a className="linkitem" href="https://mncyn.ca/wp-content/uploads/2023/10/Heated-High-Flow-Webinar-Slides.pdf" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>HHFNCO2 Webinar Slides</strong><span>External PDF</span></div><span className="tagpdf">PDF</span></a>
                    <a className="linkitem" href="https://mncyn.ca/wp-content/uploads/2023/11/Paediatric-QR-QuickPics.pdf" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>MNCYN Paediatric QR QuickPics</strong><span>External PDF</span></div><span className="tagpdf">PDF</span></a>
                    <a className="linkitem" href="http://www.childrenshealthcarecanada.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Children’s Healthcare Canada</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.aap.org/en-us/Pages/Default.aspx" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>American Academy of Pediatrics (AAP)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.caccn.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Canadian Association of Critical Care Nurses (CACCN)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://caep.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Canadian Association of Emergency Physicians (CAEP)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.caphc.org/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Canadian Association of Paediatric Health Centres (CAPHC)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.diabetes.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Canadian Diabetes Association</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.cmha.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Canadian Mental Health Association</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.cps.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Canadian Paediatric Society (CPS)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.cvaa.info/HOME/tabid/203/Default.aspx" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Canadian Vascular Access Association</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.criticall.org/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>CritiCall Ontario</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.ena.org/Pages/default.aspx" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Emergency Nurses Association (ENA)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://resuscitation.heartandstroke.ca/courses/pals/description" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Heart &amp; Stroke Foundation of Canada – PALS course information</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.nedic.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>National Eating Disorder Information Centre (Canada)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://nena.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>National Emergency Nurses’ Affiliation (NENA)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.pcmch.on.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Provincial Council for Maternal and Child Health (PCMCH)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.chatham-kent.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Chatham-Kent Health Unit</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.publichealthgreybruce.on.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Grey Bruce Health Unit</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.hpph.ca/en/index.aspx" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Huron Perth Public Health</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.lambtonhealth.on.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Lambton Health Unit</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.healthunit.com/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Middlesex London Health Unit</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.pdhu.on.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Perth District Health Unit</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.publichealthontario.ca/en/Diseases-and-Conditions/Infectious-Diseases/Vaccine-Preventable-Diseases/Measles" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Public Health Ontario</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.swpublichealth.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Southwestern Public Health (formerly Elgin-St. Thomas Health Unit &amp; Oxford County Public Health)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.wechealthunit.org/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Windsor-Essex County Health Unit</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://www.sogc.org/en/about/what-we-do/indigenous-womens-health/en/content/about/indigenous-womens-health.aspx?hkey=e85746d2-eb7f-444b-a1c9-34748a448779" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>SOGC: Indigenous Women’s Health</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.lhsc.on.ca/About_Us/Trauma/Trauma_Prevention_Programs/IMPACT/index.htm" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>IMPACT: Impaired Minds Produce Actions Causing Trauma</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.edu.gov.on.ca/childcare/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Ontario Child Care and Early Years Information</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.rrhc.on.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Rural Response for Healthy Children</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.smokershelpline.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>Smoking Cessation in Pregnancy Programs</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.hpcentre.on.ca/all-services" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>The Huron-Perth Centre for Children and Youth</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="http://www.aboutkidshealth.ca/En/Pages/default.aspx" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>About Kids Health-Trusted Answers From SickKids</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://nedic.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>National Eating Disorder Information Centre (NEDIC)</strong><span>External link</span></div><span className="tagweb">Web</span></a>
                    <a className="linkitem" href="https://vegaeducation.mcmaster.ca/" target="_blank" rel="noopener noreferrer" data-search><div className="linkmeta"><strong>VEGA (Violence, Evidence, Guidance, and Action) Project</strong><span>External link</span></div><span className="tagweb">Web</span></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  
    </main>
  );
}

export default ResourcesPage;