import React from 'react';

// Components
import ContactHero from './components/ContactHero.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import InquiryForm from './components/InquiryForm.jsx';
import NewsletterCard from './components/NewsletterCard.jsx';
import PartnerPortalCard from './components/PartnerPortalCard.jsx';

function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="page-content" aria-label="Contact information and forms">
        <div className="wrap">
          <div className="contact-layout">
            {/* Left Column */}
            <div>
              <ContactInfo />
              <InquiryForm />
            </div>

            {/* Right Column */}
            <div>
              <NewsletterCard />
              <PartnerPortalCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
