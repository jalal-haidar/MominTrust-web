// Components
import Meta from '@/components/Meta';
import DonorHero from '@/components/DonorHero';
import DonationTiers from '@/components/DonationTiers';
import PaymentMethods from '@/components/PaymentMethods';
import TestimonialsList from '@/components/TestimonialsList';
import FAQAccordion from '@/components/FAQAccordion';
import CallToAction from '@/components/CallToAction';

// Icons
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SchoolIcon from '@mui/icons-material/School';

// Donor levels/tiers
const donorTiers = [
  {
    id: 'monthly',
    title: 'Monthly Supporter',
    amount: '$50',
    period: 'per month',
    description: 'Provide ongoing support to help sustain our educational programs.',
    benefits: [
      'Monthly impact updates',
      'Annual appreciation certificate',
      'Recognition on our website',
    ],
    icon: <CalendarMonthIcon fontSize="large" />,
    color: '#4caf50', // green
    buttonText: 'Become a Monthly Supporter',
  },
  {
    id: 'annual',
    title: 'Annual Donor',
    amount: '$500',
    period: 'per year',
    description: 'Make a significant yearly contribution to our educational initiatives.',
    benefits: [
      'Quarterly impact reports',
      'Recognition in annual report',
      'Exclusive annual donor event invitation',
      'Personalized impact certificate',
    ],
    icon: <AccountBalanceIcon fontSize="large" />,
    color: '#2196f3', // blue
    buttonText: 'Become an Annual Donor',
    featured: true,
  },
  {
    id: 'sponsor',
    title: 'Education Sponsor',
    amount: '$2,500',
    period: 'one-time',
    description: 'Sponsor educational support for multiple students.',
    benefits: [
      'Dedicated relationship manager',
      'Personalized impact reports',
      'Recognition on donor wall',
      'Exclusive events access',
      'Certificate of appreciation',
    ],
    icon: <SchoolIcon fontSize="large" />,
    color: '#9c27b0', // purple
    buttonText: 'Become a Sponsor',
  },
];

// Testimonials from donors
const donorTestimonials = [
  {
    id: 't1',
    quote:
      "Supporting Momin Trust has been incredibly fulfilling. The transparency in how my donations are used gives me confidence that I'm truly making a difference.",
    name: 'Sarah M.',
    role: 'Monthly Supporter since 2023',
  },
  {
    id: 't2',
    quote:
      'As an Annual Donor, I appreciate the detailed impact reports that show exactly how my contribution is helping students achieve their educational goals.',
    name: 'Ahmed K.',
    role: 'Annual Donor',
  },
  {
    id: 't3',
    quote:
      'The Educational Sponsorship program allowed me to make a significant impact. Seeing the progress of the students supported through this initiative has been incredibly rewarding.',
    name: 'Layla T.',
    role: 'Education Sponsor',
  },
];

// FAQs about donation
const donorFaqs = [
  {
    id: 'faq1',
    question: 'How are donations used?',
    answer:
      'Every donation directly supports our educational programs, with 92% of contributions going directly to program costs. This includes educational supplies, tuition support, mentorship program expenses, and technology resources for students.',
  },
  {
    id: 'faq2',
    question: 'Is my donation tax-deductible?',
    answer:
      'Yes, Momin Trust is a registered 501(c)(3) non-profit organization, and all donations are tax-deductible to the extent allowed by law. You will receive a tax receipt for your records.',
  },
  {
    id: 'faq3',
    question: 'Can I specify how my donation is used?',
    answer:
      'Yes, donors can direct their contributions to specific programs or areas of need. Please contact us if you have a specific area of interest for your donation.',
  },
  {
    id: 'faq4',
    question: 'How do I make changes to my recurring donation?',
    answer:
      'You can manage your recurring donations through your donor account or by contacting our donor support team who can assist with any changes or adjustments.',
  },
  {
    id: 'faq5',
    question: 'Can I donate on behalf of someone else?',
    answer:
      'Yes, we offer tribute and memorial giving options. You can make a donation in honor or memory of someone special, and we can send a notification to the person or family you specify.',
  },
];

const Donors = () => {
  return (
    <>
      <Meta title="Donors" />

      {/* Hero Section */}
      <DonorHero
        title="Support Our"
        highlightedText="Mission"
        subtitle="Your contribution empowers the next generation through education and mentorship."
      />

      {/* Donation Tiers Section */}
      <DonationTiers tiers={donorTiers} />

      {/* Payment Methods Section */}
      <PaymentMethods />

      {/* Testimonials Section */}
      <TestimonialsList testimonials={donorTestimonials} />

      {/* FAQs Section */}
      <FAQAccordion faqs={donorFaqs} />

      {/* Call to Action */}
      <CallToAction
        title="Ready to Make an Impact?"
        description="Your support enables us to provide quality education and mentorship to those who need it most."
        buttonText="Donate Today"
      />
    </>
  );
};

export default Donors;
