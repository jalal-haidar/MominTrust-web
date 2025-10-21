import React from 'react';
import Grid from '@mui/material/Grid';

import Meta from '@/components/Meta';
import { PageContainer, PageSection } from '@/components/styled';

// Import our new components
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import SocialLinks from '@/components/SocialLinks';
import LocationMap from '@/components/LocationMap';
import ContactFAQ from '@/components/ContactFAQ';

function Contact() {
  // Define the FAQs for the contact page
  const faqs = [
    {
      question: 'How can I donate to Momin Trust?',
      answer:
        'You can donate online through our secure payment portal on the Donations page, send a check to our mailing address, or contact us for wire transfer instructions.',
    },
    {
      question: 'Are donations tax-deductible?',
      answer:
        'Yes, Momin Trust is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law.',
    },
    {
      question: 'How can I volunteer with Momin Trust?',
      answer:
        'We welcome volunteers who are passionate about education! Please contact us through this form with "Volunteer Opportunities" selected as your reason, and we\'ll get back to you with current openings.',
    },
  ];

  // Define contact information
  const contactInfo = {
    address: {
      street1: '123 Education Drive',
      street2: 'Suite 456',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
    email: {
      primary: 'info@momintrust.org',
      support: 'support@momintrust.org',
    },
    phone: {
      number: '+1 (555) 123-4567',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM EST',
    },
  };

  // Define social media links
  const socialLinks = [
    { platform: 'facebook' as const, url: 'https://facebook.com/momintrust' },
    { platform: 'twitter' as const, url: 'https://twitter.com/momintrust' },
    { platform: 'instagram' as const, url: 'https://instagram.com/momintrust' },
    { platform: 'linkedin' as const, url: 'https://linkedin.com/company/momintrust' },
  ];

  return (
    <>
      <Meta
        title="Contact Us | Momin Trust"
        description="Get in touch with Momin Trust for inquiries, donations, or volunteer opportunities."
      />
      <PageContainer>
        {/* Hero Section */}
        <ContactHero
          title="Contact Us"
          subtitle="We'd love to hear from you. Reach out to discuss educational support, donations, or collaboration opportunities."
        />

        <PageSection>
          <Grid container spacing={4}>
            {/* Contact Form Section */}
            <Grid item xs={12} md={7}>
              <ContactForm />
            </Grid>

            {/* Contact Information & Social Links Section */}
            <Grid item xs={12} md={5}>
              <ContactInfo
                address={contactInfo.address}
                email={contactInfo.email}
                phone={contactInfo.phone}
              />

              <SocialLinks links={socialLinks} />
            </Grid>
          </Grid>

          {/* Map Section */}
          <LocationMap />

          {/* FAQ Section */}
          <ContactFAQ faqs={faqs} />
        </PageSection>
      </PageContainer>
    </>
  );
}

export default Contact;
