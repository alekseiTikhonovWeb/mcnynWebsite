import PageHero from '../../components/PageHero.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import InquiryForm from './components/InquiryForm.jsx';
import NewsletterCard from './components/NewsletterCard.jsx';
import PartnerPortalCard from './components/PartnerPortalCard.jsx';

function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        kicker="Get in Touch"
        title="Contact Us"
        text="Reach out to the MNCYN team with questions about our programs, education, resources, or partnerships. We're here to help."
      />

      <section className="page-content" aria-label="Contact information and forms">
        <div className="wrap">
          <div className="contact-layout">
            <div>
              <ContactInfo />
              <InquiryForm />
            </div>
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
