import React, { useState, useEffect } from 'react';

// ─── Team data (bios rendered in modal) ───────────────────────────────────────
const teamData = {
  claire: {
    name: 'Claire Martin',
    title: 'Director, MNCYN',
    photo: 'https://mncyn.ca/wp-content/uploads/2020/09/MNCYN-Team_Claire-Martin-200x300.jpg',
    bio: '<p>Claire Martin is the Director of the Maternal, Newborn, Child &amp; Youth Network (MNCYN).</p>',
  },
  kristine: {
    name: 'Kristine Fraser, RN, MN, BN, CNCCP(C)',
    title: 'Paediatric Professional Practice Consultant',
    photo: '/images/mncyn-kristine-fraser.jpg',
    bio: `<p>Kristine is a Paediatric Professional Practice Consultant with the MNCYN – Regional Paediatric Program. She received her Nursing Diploma from Mohawk College in 2001 and her Bachelor of Nursing Degree in 2012, followed by her Master of Nursing in 2018. Kristine has spent her nursing career caring for children, specializing in paediatric critical care.</p>
    <p>In June of 2018, Kristine joined the MNCYN team and shortly thereafter, created the Regional Paediatric Orientation© (RPO) Program, an online paediatric nursing course for our regional partners. Kristine also writes the <em>Paediatric Review</em>, a monthly informative newsletter focused on paediatric topics of interest following current best-practice guidelines.</p>
    <p>Kristine is a member of the TREKK Knowledge Mobilization Advisory Committee and the Provincial Council for Maternal-Child Health (PCMCH) Asthma Expert Panel. She has maintained her Paediatric Critical Care Nursing certification with the Canadian Nurses Association since 2009.</p>`,
  },
  gwen: {
    name: 'Gwen Peterek, RN, BScN, PNC(C)',
    title: 'Perinatal Professional Practice Consultant',
    photo: '/images/mncyn-gwen-peterek.jpg',
    bio: `<p>Gwen is a Perinatal Professional Practice Consultant with the MNCYN – Regional Perinatal Program. She received her BScN from the University of Western Ontario in 1980. Gwen has dedicated her career to perinatal nursing and has been a nurse consultant with the Regional Perinatal Program since 1987.</p>
    <p>Gwen is an associate member of the Society of Obstetricians and Gynecologists of Canada (SOGC) and the Canadian Paediatric Society (CPS), and a member of the Canadian Association of Perinatal and Women's Health (CAPWHN). She sits on the Canadian Perinatal Partnership Coalition (CPPC) and has maintained her Perinatal Nursing certification with the Canadian Nurses Association since 2001.</p>`,
  },
  stacy: {
    name: 'Stacy Laureano-Steele',
    title: 'Manager, MNCYN',
    photo: 'https://mncyn.ca/wp-content/uploads/2020/12/20200915_Stacy-200x300.jpg',
    bio: '<p>Stacy Laureano-Steele is the Manager of the Maternal, Newborn, Child &amp; Youth Network.</p>',
  },
  kendra: {
    name: 'Kendra Savage',
    title: 'Program Assistant, MNCYN',
    photo: '/images/mncyn-kendra-savage.jpg',
    bio: '<p>Kendra Savage is the Program Assistant for the Maternal, Newborn, Child &amp; Youth Network.</p>',
  },
  kevin: {
    name: 'Dr. Kevin Coughlin, BScH, MD, MHSc, FRCPC',
    title: 'Neonatal Medical Director',
    photo: '/images/mncyn-dr-kevin-coughlin.jpg',
    bio: `<p>Dr. Coughlin is a Neonatologist and Associate Professor at the University of Western Ontario, Schulich School of Medicine and Dentistry. He serves as the Neonatal Medical Director of the MNCYN and Medical Director of the Neonatal Developmental Follow-up Clinic at Children's Hospital, LHSC.</p>
    <p>Dr. Coughlin has a Master's Degree in Bioethics and has contributed to the dissemination of Neonatal-Perinatal knowledge provincially and nationally through his involvement on MNCYN, CPS and Ontario NRP Steering Committees and ACoRN Executive. He is currently the Chair of the Ontario Nunavut Provincial NRP Committee and a member of the National NRP Steering Committee.</p>`,
  },
  jordan: {
    name: 'Dr. Jordan Schmidt, MD, FRCSC',
    title: 'Obstetrics Medical Director',
    photo: '/images/mncyn-dr-jordan-name.jpg',
    bio: `<p>Dr. Schmidt is a Maternal-Fetal Medicine specialist who joined the MFM team at London Health Sciences Centre in 2007. He became a member of the MNCYN consulting staff in the summer of 2007 and is currently the Obstetrics Medical Director and a member of the MNCYN Executive.</p>
    <p>Dr. Schmidt became the Chief of Obstetrics at LHSC in April 2018 and continues to be highly involved in both clinical and academic aspects of the residency and undergraduate education programs at the Schulich School of Medicine and Dentistry.</p>`,
  },
  henry: {
    name: 'Dr. Henry Roukema, MD, MSc, FRCPC',
    title: 'Neonatologist, Executive Committee',
    photo: '/images/20200915_Henry-200x300.jpg',
    bio: `<p>Dr. Roukema received his medical degree from the University of Western Ontario in 1987. He has been a staff Neonatologist at LHSC since 1997 and is an Associate Professor in the Dept. of Paediatrics at the Schulich School of Medicine and Dentistry.</p>
    <p>Dr. Roukema is clinically active in the NICU at LHSC and is the Director of Nurseries and the Neonatal Director of the Paediatric and Neonatal Transport Team. He actively participates in the MNCYN as an Executive Committee member.</p>`,
  },
  paige: {
    name: 'Dr. Paige Burgess',
    title: 'Paediatric Critical Care Medical Consultant',
    photo: 'https://mncyn.ca/wp-content/uploads/2020/12/20200915_Paige-200x300.jpg',
    bio: '<p>Dr. Paige Burgess serves as the Paediatric Critical Care Medical Consultant for the MNCYN.</p>',
  },
  rahul: {
    name: 'Dr. Rahul Ojha, MBBS, DCH, MD, FRACP',
    title: 'Paediatric Academic Program',
    photo: '/images/mncyn-dr-raul-name.jpg',
    bio: `<p>Dr. Ojha is an Assistant Professor in the Department of Paediatrics at Western University and an Academic Paediatrician at Children's Hospital, LHSC. He became a member of the MNCYN Regional Paediatric Program consulting staff in 2019.</p>
    <p>Dr. Ojha has a strong research interest in Medical Education, with a focus on Continuing Medical Education and Simulation and its role in paediatric education. He was awarded a gold medal for his outstanding efforts toward improving child health care.</p>`,
  },
  roderick: {
    name: 'Dr. Rodrick Lim, MD, FRCPC, FAAP',
    title: 'Paediatric Emergency Medicine',
    photo: '/images/mncyn-dr-rod-lim.jpg',
    bio: `<p>Dr. Lim is a Professor and Medical Director/Section Head of the Paediatric Emergency Department at Children's Hospital, LHSC. He is a founding member of the Wellness Emergency Medicine Committee at the Canadian Association of Emergency Physicians (CAEP) and has received multiple teaching excellence awards.</p>
    <p>Dr. Lim is an Associate Scientist at the Child and Health Institute with research interests in paediatric emergency clinical trials, physician wellness, and educational research.</p>`,
  },
  meagan: {
    name: 'Meagan Furnivall, RM',
    title: 'Midwife Medical Consultant',
    photo: 'https://mncyn.ca/wp-content/uploads/2020/12/20200915_Meagan-200x300.jpg',
    bio: '<p>Meagan Furnivall, RM, serves as the Midwife Medical Consultant for the MNCYN.</p>',
  },
};

const coreTeam = ['claire', 'stacy', 'kristine', 'gwen', 'kendra'];
const medicalTeam = ['kevin', 'jordan', 'henry', 'paige', 'rahul', 'roderick', 'meagan'];

const pillars = [
  { title: 'Improve Health Outcomes', desc: 'Systematic improvements in health promotion, illness prevention, acute and follow-up care and patient safety across the region.' },
  { title: 'Seamless Systems Integration', desc: 'Improved communication, program planning, and support resulting in greater coordination across partner organizations.' },
  { title: 'Better Operational Management', desc: 'Improved asset management within the organization and across the region resulting in greater return on investment.' },
  { title: 'Enhanced Learning & Growth', desc: 'Promoting and advocating for a consistent standard of care throughout the region.' },
];

const history = [
  { decade: '1970s', label: 'Birth', body: 'Established in 1979 at St. Joseph\'s Hospital, London, Ontario, the Program was the vision of Dr. Graham W. Chance, a Neonatologist. A collaborative and multidisciplinary approach was undertaken to provide perinatal education and support to 33 regional hospitals in the southwest catchment area.' },
  { decade: '1980s', label: 'Beginnings', body: 'The program focused on building relationships with regional hospitals and promoting collaboration through the organization of district perinatal nurse leaders, standardized chart forms, maternal newborn education, and a regional obstetrics database. The Canadian Perinatal Programs Coalition (CPPC) was created in 1989.' },
  { decade: '1990s', label: 'Challenges', body: 'Despite economic recession and hospital amalgamations, the Perinatal Outreach Program maintained ongoing support and was identified by the Ministry of Health as an exemplary model for perinatal education. A Regional Perinatal Care Steering Committee was established in 1998.' },
  { decade: '2000s', label: 'Transitions', body: 'The Southwestern Ontario Perinatal Partnership (SWOPP) was reorganized to become the Maternal, Newborn, Child & Youth Network (MNCYN), which included a new paediatric education component known as the Paediatric Advancement Program (2009).' },
  { decade: '2010s', label: 'Rebirth & Renewal', body: 'In 2011, the city-wide merger of Perinatal and Women\'s Health Programs was completed with the Program moved to LHSC. MNCYN celebrated its 40th anniversary in 2019.' },
  { decade: '2020s', label: 'Expansion', body: 'Ministry of Health LHINs\' boundaries changed and expanded geographically. A unified proposal was made by PCMCH and key stakeholders including MNCYN to develop a "Network of Networks" across Ontario. A rebranding project launched a new logo and website.' },
];

// ─── Component ────────────────────────────────────────────────────────────────
function AboutPage() {
  const [activeKey, setActiveKey] = useState(null);

  const openModal = (key) => { setActiveKey(key); document.body.style.overflow = 'hidden'; };
  const closeModal = () => { setActiveKey(null); document.body.style.overflow = ''; };

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const member = activeKey ? teamData[activeKey] : null;

  return (
    <>
      {/* ══════════════════════════════════════════
           PAGE HERO
      ══════════════════════════════════════════ */}
      <section className="page-hero" aria-label="Who We Are">
        <div className="wrap page-hero-inner">
          <span className="page-hero-kicker">Our Organization</span>
          <h1>Who We Are</h1>
          <p>
            MNCYN brings together perinatal and paediatric health care providers from across the region with the shared goal of keeping care as close to home as possible.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
           MISSION
      ══════════════════════════════════════════ */}
      <section className="about-mission" aria-label="Our mission">
        <div className="wrap">
          <div className="about-mission-inner">
            <p className="section-eyebrow">Our Mission</p>
            <blockquote className="mission-pull">
              "We collaborate to share resources, deliver education and consultation, support networking across organizations, and promote quality improvement initiatives aimed at strengthening care for families."
            </blockquote>
            <p style={{ color: 'var(--smoke)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '72ch' }}>
              MNCYN fulfills its mission by supporting consistent, safe, quality maternal, newborn, child, and youth care across our region — through partnerships, shared governance, and a commitment to improving outcomes for patients and families.
            </p>
          </div>

          <div className="about-pillars" style={{ marginTop: '3rem' }}>
            {pillars.map(({ title, desc }) => (
              <div className="pillar-item" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
           CORE TEAM
      ══════════════════════════════════════════ */}
      <section className="about-team-section" aria-label="MNCYN Team">
        <div className="wrap">
          <p className="section-eyebrow">Our People</p>
          <h2 className="section-h2">MNCYN Team</h2>
          <p style={{ color: 'var(--smoke)', fontSize: '.95rem', marginTop: '.5rem', maxWidth: '60ch' }}>
            Click any team member to read their full bio.
          </p>

          <div className="team-grid-clean" style={{ marginTop: '2rem' }}>
            {coreTeam.map((key) => {
              const m = teamData[key];
              return (
                <button
                  key={key}
                  className="team-card-clean"
                  onClick={() => openModal(key)}
                  aria-label={`Read bio for ${m.name}`}
                  style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                >
                  <div className="team-card-clean" style={{ pointerEvents: 'none' }}>
                    {m.photo
                      ? <img src={m.photo} alt={m.name} className="team-card-photo" />
                      : <div className="team-card-photo-placeholder" aria-hidden="true" />
                    }
                    <div className="team-card-body">
                      <h3>{m.name}</h3>
                      <p>{m.title}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Medical Consultants */}
          <p className="section-eyebrow" style={{ marginTop: '3.5rem' }}>Medical Consultants</p>
          <h2 className="section-h2">Physician &amp; Medical Team</h2>
          <div className="team-grid-clean" style={{ marginTop: '2rem' }}>
            {medicalTeam.map((key) => {
              const m = teamData[key];
              return (
                <button
                  key={key}
                  className="team-card-clean"
                  onClick={() => openModal(key)}
                  aria-label={`Read bio for ${m.name}`}
                  style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left' }}
                >
                  <div className="team-card-clean team-card-clean--medical" style={{ pointerEvents: 'none' }}>
                    {m.photo
                      ? <img src={m.photo} alt={m.name} className="team-card-photo" />
                      : <div className="team-card-photo-placeholder" aria-hidden="true" />
                    }
                    <div className="team-card-body">
                      <h3>{m.name}</h3>
                      <p>{m.title}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
           HISTORY TIMELINE
      ══════════════════════════════════════════ */}
      <section className="about-history" aria-label="Our history">
        <div className="wrap">
          <p className="section-eyebrow">Our Journey</p>
          <h2 className="section-h2">History</h2>
          <p style={{ color: 'var(--smoke)', fontSize: '.95rem', marginTop: '.5rem', marginBottom: '1rem', maxWidth: '60ch' }}>
            From a single perinatal outreach program in 1979 to a regional network serving all of South West Ontario.
          </p>

          <div className="timeline-clean">
            {history.map(({ decade, label, body }) => (
              <div className="tl-item" key={decade}>
                <span className="tl-decade">{decade}</span>
                <h3 className="tl-title">{label}</h3>
                <p className="tl-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
           MODAL
      ══════════════════════════════════════════ */}
      {member && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true" aria-label={member.name}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close">&times;</button>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {member.photo && (
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: 90, height: 110, objectFit: 'cover', objectPosition: 'top', borderRadius: 'var(--r-sm)', flexShrink: 0, background: 'var(--linen)' }}
                />
              )}
              <div>
                <h3>{member.name}</h3>
                <strong>{member.title}</strong>
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: member.bio }} />
          </div>
        </div>
      )}
    </>
  );
}

export default AboutPage;
