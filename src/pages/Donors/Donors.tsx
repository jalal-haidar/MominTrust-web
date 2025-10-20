import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentsIcon from '@mui/icons-material/Payments';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

import Meta from '@/components/Meta';

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

function Donors() {
  const theme = useTheme();
  const [donationAmount, setDonationAmount] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState<string | false>('faq1');

  const handleDonationAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove non-numeric characters except decimal point
    const value = event.target.value.replace(/[^0-9.]/g, '');
    setDonationAmount(value);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleFaqChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFaq(isExpanded ? panel : false);
    };

  return (
    <>
      <Meta title="Donors" />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          py: { xs: 8, md: 10 },
          background: `linear-gradient(180deg, rgba(240,248,248,1) 0%, rgba(220,237,237,1) 100%)`,
          overflow: 'hidden',
          mb: 10,
          height: '300px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Content Container */}
        <Grid container spacing={2} sx={{ width: '100%' }}>
          <Grid item xs={12} md={6} sx={{ pl: { xs: 3, md: 8 }, pr: { xs: 3, md: 0 } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: '#556',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Support Our{' '}
              <Box component="span" sx={{ color: '#c97c5d', fontWeight: 900 }}>
                Mission
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 400,
                mb: { xs: 3, md: 0 },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Your contribution empowers the next generation through education and mentorship.
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Quick Donate Input */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
                pr: { xs: 2, md: 4 },
                pl: { xs: 2, md: 0 },
              }}
            >
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '220px' }}>
                <Typography variant="caption" sx={{ mb: 0.5, fontWeight: 500 }}>
                  Donation Amount
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {['50', '100', '250', '500'].map((amount) => (
                    <Button
                      key={amount}
                      variant={donationAmount === amount ? 'contained' : 'outlined'}
                      color="primary"
                      size="small"
                      onClick={() => setDonationAmount(amount)}
                      sx={{
                        borderRadius: 1,
                        minWidth: 60,
                        height: 32,
                        fontSize: '0.8rem',
                      }}
                    >
                      ${amount}
                    </Button>
                  ))}
                </Box>
                <TextField
                  variant="outlined"
                  size="small"
                  value={donationAmount ? `$${donationAmount}` : ''}
                  onChange={handleDonationAmountChange}
                  placeholder="$100"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      height: 40,
                    },
                  }}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<VolunteerActivismIcon />}
                sx={{
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  backgroundColor: '#006064',
                  '&:hover': {
                    backgroundColor: '#004446',
                  },
                }}
              >
                Donate Now
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Donation Tiers Section */}
      <Box sx={{ mb: 10 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 700,
            mb: 6,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 60,
              height: 3,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 2,
            },
          }}
        >
          Ways to Give
        </Typography>

        <Grid container spacing={2} justifyContent="center" sx={{ px: { xs: 2, md: 4 } }}>
          {donorTiers.map((tier) => (
            <Grid item xs={12} md={4} key={tier.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  borderRadius: 1,
                  overflow: 'hidden',
                  boxShadow: tier.featured
                    ? '0 3px 10px rgba(0,0,0,0.12)'
                    : '0 1px 4px rgba(0,0,0,0.08)',
                  transform: tier.featured ? 'scale(1.01)' : 'none',
                  border: tier.featured ? `1px solid ${theme.palette.primary.main}` : 'none',
                }}
              >
                {tier.featured && (
                  <Chip
                    label="Most Popular"
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      backgroundColor: '#1976d2',
                      color: '#fff',
                      fontSize: '0.7rem',
                      height: 24,
                    }}
                    size="small"
                  />
                )}

                <CardContent sx={{ p: 3, flex: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 3,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor:
                          tier.id === 'monthly'
                            ? '#e8f5e9'
                            : tier.id === 'annual'
                              ? '#e3f2fd'
                              : '#f3e5f5',
                        color:
                          tier.id === 'monthly'
                            ? '#4caf50'
                            : tier.id === 'annual'
                              ? '#1976d2'
                              : '#9c27b0',
                        width: 50,
                        height: 50,
                      }}
                    >
                      {tier.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {tier.title}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color:
                        tier.id === 'monthly'
                          ? '#4caf50'
                          : tier.id === 'annual'
                            ? '#1976d2'
                            : '#9c27b0',
                      mb: 0.5,
                    }}
                  >
                    {tier.amount}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{ color: theme.palette.text.secondary, mb: 3 }}
                  >
                    {tier.period}
                  </Typography>

                  {/* We'll skip the description and benefits to match the screenshot */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Payment Methods Section */}
      <Box sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Payment Methods
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="payment methods"
            variant="fullWidth"
            sx={{ mb: 3 }}
          >
            <Tab
              label="Credit Card"
              icon={<CreditCardIcon />}
              iconPosition="start"
              sx={{ fontWeight: 600 }}
            />
            <Tab
              label="Bank Transfer"
              icon={<PaymentsIcon />}
              iconPosition="start"
              sx={{ fontWeight: 600 }}
            />
            <Tab
              label="Corporate Giving"
              icon={<HandshakeIcon />}
              iconPosition="start"
              sx={{ fontWeight: 600 }}
            />
          </Tabs>
        </Box>

        <Box sx={{ p: 3 }}>
          {activeTab === 0 && (
            <Box>
              <Typography variant="body1" paragraph>
                Make a secure donation using your credit or debit card. Our payment processing is
                secure and encrypted to ensure your information is protected.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {/* Credit Card Form would go here */}
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" gutterBottom>
                    Credit card donations are processed immediately, and you&apos;ll receive a
                    confirmation email with your tax receipt.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 3,
                      background: alpha(theme.palette.primary.main, 0.05),
                      borderRadius: 2,
                    }}
                  >
                    <CreditCardIcon
                      sx={{ fontSize: 60, color: theme.palette.primary.main, opacity: 0.7 }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}

          {activeTab === 1 && (
            <Box>
              <Typography variant="body1" paragraph>
                Direct bank transfers are available for those who prefer this method. Please use the
                following information to make your contribution.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                      Bank Name:
                    </Typography>
                    <Typography>First Community Bank</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                      Account Name:
                    </Typography>
                    <Typography>Momin Trust Educational Fund</Typography>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                      Account Number:
                    </Typography>
                    <Typography>XXXX-XXXX-7890</Typography>
                  </Box>
                  <Box>
                    <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                      Reference:
                    </Typography>
                    <Typography>Please include your name in the reference</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 3,
                      height: '100%',
                      background: alpha(theme.palette.primary.main, 0.05),
                      borderRadius: 2,
                    }}
                  >
                    <AccountBalanceIcon
                      sx={{ fontSize: 60, color: theme.palette.primary.main, opacity: 0.7 }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}

          {activeTab === 2 && (
            <Box>
              <Typography variant="body1" paragraph>
                Corporate partnerships and matching gift programs make a significant impact on our
                educational initiatives.
              </Typography>
              <Grid container spacing={2} sx={{ mt: 1 }}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle2" paragraph>
                    We work with corporations of all sizes to create meaningful partnerships that
                    align with your corporate social responsibility goals.
                  </Typography>
                  <Typography variant="body2" paragraph>
                    Benefits of corporate partnerships include:
                  </Typography>
                  <ul>
                    <li>
                      <Typography variant="body2">Employee engagement opportunities</Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Recognition in annual reports and events
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">
                        Custom impact reporting for your company
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2">Matched giving programs for employees</Typography>
                    </li>
                  </ul>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    Contact us at <strong>partners@momintrust.org</strong> to discuss opportunities.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      p: 3,
                      height: '100%',
                      background: alpha(theme.palette.primary.main, 0.05),
                      borderRadius: 2,
                    }}
                  >
                    <HandshakeIcon
                      sx={{ fontSize: 60, color: theme.palette.primary.main, opacity: 0.7 }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box
        sx={{
          mb: 10,
          py: 6,
          px: 2,
          background: `linear-gradient(135deg, ${alpha(
            theme.palette.secondary.main,
            0.05,
          )} 0%, ${alpha(theme.palette.secondary.main, 0.15)} 100%)`,
          borderRadius: { xs: 0, md: 2 },
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 600, mb: 6 }}>
          Donor Testimonials
        </Typography>

        <Grid container spacing={4} sx={{ px: { xs: 1, md: 4 } }}>
          {donorTestimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  p: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent sx={{ flex: 1, position: 'relative', pt: 4 }}>
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: -10,
                      left: -5,
                      color: alpha(theme.palette.secondary.main, 0.2),
                      fontSize: 60,
                      transform: 'rotate(180deg)',
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontStyle: 'italic', position: 'relative', zIndex: 1, mb: 4 }}
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQs Section */}
      <Box sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 600, mb: 5 }}>
          Frequently Asked Questions
        </Typography>

        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          {donorFaqs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expandedFaq === faq.id}
              onChange={handleFaqChange(faq.id)}
              sx={{
                mb: 2,
                boxShadow: 'none',
                borderRadius: '8px !important',
                border: '1px solid',
                borderColor: 'divider',
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${faq.id}-content`}
                id={`${faq.id}-header`}
                sx={{
                  backgroundColor:
                    expandedFaq === faq.id
                      ? alpha(theme.palette.primary.main, 0.08)
                      : alpha(theme.palette.background.paper, 0.8),
                  borderRadius: '8px',
                  '&.Mui-expanded': {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderTop: '1px solid', borderColor: 'divider', py: 2 }}>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>

      {/* Call to Action */}
      <Box
        sx={{
          mb: 8,
          py: 6,
          px: 3,
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
          Ready to Make an Impact?
        </Typography>
        <Typography
          variant="h6"
          paragraph
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4, fontWeight: 400 }}
        >
          Your support enables us to provide quality education and mentorship to those who need it
          most.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.primary.main,
            fontWeight: 700,
            '&:hover': {
              backgroundColor: theme.palette.background.default,
            },
          }}
        >
          Donate Today
        </Button>
      </Box>
    </>
  );
}

export default Donors;
