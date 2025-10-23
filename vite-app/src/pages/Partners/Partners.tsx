import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Avatar,
} from '@mui/material';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SchoolIcon from '@mui/icons-material/School';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

// Components
import Meta from '@/components/Meta';
import SectionTitle from '@/components/SectionTitle';
import MultiButtonCTA from '@/components/MultiButtonCTA';
import FeaturedPartner from '../../components/FeaturedPartner';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import ImpactStats from '../../components/ImpactStats';
import PartnerFilter from '../../components/PartnerFilter';
import PartnerGrid from '../../components/PartnerGrid';
import PartnershipDialog from '../../components/PartnershipDialog';
import ContactPartnerDialog from '../../components/ContactPartnerDialog';

// Impact statistics for partner contributions
const impactStats = [
  {
    id: 'stat1',
    value: '150+',
    label: 'Educational Partners',
    icon: <HandshakeIcon color="primary" fontSize="large" />,
  },
  {
    id: 'stat2',
    value: '$1.2M',
    label: 'Annual Scholarship Value',
    icon: <SchoolIcon color="primary" fontSize="large" />,
  },
  {
    id: 'stat3',
    value: '45%',
    label: 'Student Fee Discounts',
    icon: <LocalLibraryIcon color="primary" fontSize="large" />,
  },
  {
    id: 'stat4',
    value: '2,500+',
    label: 'Students Benefited',
    icon: <VolunteerActivismIcon color="primary" fontSize="large" />,
  },
];

// Define interfaces for our data types
interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  organization: string;
  avatar: string;
}

interface PartnerData {
  id: string;
  name: string;
  type: string;
  location: string;
  logo: string;
  description: string;
  contribution: string;
  website: string;
  featured?: boolean;
  yearsSince?: number;
}

interface FeaturedPartnerData extends PartnerData {
  impact: string;
  image: string;
}

// Partner testimonials
const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      "Partnering with Momin Trust has been incredibly fulfilling. We've seen remarkable growth in the students we support, and it aligns perfectly with our mission of accessible education.",
    name: 'Sarah Ahmed',
    title: 'Principal',
    organization: 'Horizon Academy',
    avatar: 'https://placehold.co/100x100/eef/123?text=HA',
  },
  {
    id: 't2',
    quote:
      "Our bookstore has seen increased community engagement since partnering with Momin Trust. It's rewarding to know our educational materials reach students who truly need them.",
    name: 'Ali Hassan',
    title: 'Owner',
    organization: 'Readers Corner',
    avatar: 'https://placehold.co/100x100/fee/321?text=RC',
  },
  {
    id: 't3',
    quote:
      "The partnership model is straightforward and impactful. We're able to track exactly how our contributions are making a difference in students' educational journeys.",
    name: 'Fatima Malik',
    title: 'Director',
    organization: 'Future Tech Institute',
    avatar: 'https://placehold.co/100x100/efe/231?text=FT',
  },
];

// Featured partner (highlighted at the top)
const featuredPartner: FeaturedPartnerData = {
  id: 'fp1',
  name: 'Horizon Academy',
  type: 'school',
  location: 'Karachi',
  logo: 'https://placehold.co/500x300/eef/123?text=Horizon+Academy',
  image: 'https://placehold.co/500x300/eef/123?text=Horizon+Academy', // Same as logo for now
  description:
    'A premier educational institution offering scholarships to talented underprivileged students, with a focus on STEM fields and holistic development.',
  contribution:
    'Provides 25% tuition discount and full scholarships to 5 students annually. Additionally, offers mentorship programs, career counseling, and access to their state-of-the-art laboratories.',
  impact:
    'Has supported 45 Momin Trust students over the past 5 years, with 92% graduation rate and 78% advancing to higher education.',
  website: 'https://example.com/horizon',
};

// Sample partner data - this would come from an API or CMS in a real application
const partners: PartnerData[] = [
  {
    id: 'p1',
    name: 'Horizon Academy',
    type: 'school',
    location: 'Karachi',
    logo: 'https://placehold.co/400x200/eef/123?text=Horizon+Academy',
    description:
      'A premier educational institution offering scholarships to talented underprivileged students.',
    contribution: 'Provides 25% tuition discount and full scholarships to 5 students annually.',
    website: 'https://example.com/horizon',
    featured: true,
    yearsSince: 2020,
  },
  {
    id: 'p2',
    name: 'Readers Corner',
    type: 'bookstore',
    location: 'Lahore',
    logo: 'https://placehold.co/400x200/fee/321?text=Readers+Corner',
    description: 'An educational bookstore supporting literacy initiatives across the country.',
    contribution: 'Offers 30% discount on all educational materials for sponsored students.',
    website: 'https://example.com/readers',
    yearsSince: 2021,
  },
  {
    id: 'p3',
    name: 'Future Tech Institute',
    type: 'organization',
    location: 'Islamabad',
    logo: 'https://placehold.co/400x200/efe/231?text=Future+Tech',
    description:
      'Focused on technology education and digital literacy for underserved communities.',
    contribution: 'Provides free coding workshops and technology training programs.',
    website: 'https://example.com/futuretech',
    featured: true,
    yearsSince: 2019,
  },
  {
    id: 'p4',
    name: 'Knowledge Academy',
    type: 'school',
    location: 'Multan',
    logo: 'https://placehold.co/400x200/ffe/213?text=Knowledge+Academy',
    description: 'A comprehensive school focused on holistic education for all backgrounds.',
    contribution: 'Offers 50% scholarship to 10 students from Momin Trust annually.',
    website: 'https://example.com/knowledge',
    yearsSince: 2022,
  },
  {
    id: 'p5',
    name: 'Science Explorers',
    type: 'organization',
    location: 'Karachi',
    logo: 'https://placehold.co/400x200/eff/312?text=Science+Explorers',
    description: 'Making STEM education accessible to underprivileged students.',
    contribution: 'Provides free science kits and learning materials to students.',
    website: 'https://example.com/science',
    yearsSince: 2023,
  },
  {
    id: 'p6',
    name: 'Books for All',
    type: 'bookstore',
    location: 'Islamabad',
    logo: 'https://placehold.co/400x200/fef/132?text=Books+for+All',
    description: 'A social enterprise dedicated to making books accessible to everyone.',
    contribution: 'Donates one book for every five books purchased for sponsored students.',
    website: 'https://example.com/booksforall',
    yearsSince: 2021,
  },
  {
    id: 'p7',
    name: 'Bright Future School',
    type: 'school',
    location: 'Lahore',
    logo: 'https://placehold.co/400x200/efe/432?text=Bright+Future',
    description:
      'An innovative school focused on modern teaching methods and personalized learning.',
    contribution:
      'Provides full scholarships to 3 students and 35% discount to all Momin Trust students.',
    website: 'https://example.com/brightfuture',
    yearsSince: 2020,
  },
  {
    id: 'p8',
    name: 'Tech Skills Now',
    type: 'organization',
    location: 'Karachi',
    logo: 'https://placehold.co/400x200/fee/543?text=Tech+Skills',
    description:
      'Professional skills training organization focused on technology career development.',
    contribution:
      'Offers free certification courses and internship placements for qualifying students.',
    website: 'https://example.com/techskills',
    yearsSince: 2022,
  },
];

function Partners() {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [partnerDialogOpen, setPartnerDialogOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [animationVisible, setAnimationVisible] = useState(false);

  // Animation effect when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Change testimonial every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePartnerDialogOpen = () => {
    setPartnerDialogOpen(true);
  };

  const handlePartnerDialogClose = () => {
    setPartnerDialogOpen(false);
  };

  const handleContactDialogOpen = () => {
    setContactDialogOpen(true);
  };

  const handleContactDialogClose = () => {
    setContactDialogOpen(false);
  }; // Filter partners by type and search query
  const filteredPartners = partners.filter((partner) => {
    const matchesType = filter === 'all' || partner.type === filter;
    const matchesSearch =
      partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  // Get partner type label for display
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'school':
        return 'Educational Institution';
      case 'bookstore':
        return 'Educational Supplies';
      case 'organization':
        return 'Supporting Organization';
      default:
        return type.charAt(0).toUpperCase() + type.slice(1);
    }
  };

  // Get color for partner type chip
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'school':
        return '#2196f3'; // blue
      case 'bookstore':
        return '#4caf50'; // green
      case 'organization':
        return '#ff9800'; // orange
      default:
        return '#9e9e9e'; // grey
    }
  };

  return (
    <>
      <Meta title="Educational Partners" />

      <Box sx={{ py: 4 }}>
        {/* Featured Partner */}
        <Box
          sx={{
            mb: 6,
            p: 4,
            borderRadius: 2,
            backgroundColor: 'primary.light',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: 2,
            opacity: animationVisible ? 1 : 0,
            transform: animationVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                color="primary.dark"
                fontWeight="bold"
              >
                Featured Partner
              </Typography>

              <Typography variant="h5" gutterBottom>
                {featuredPartner.name}
              </Typography>

              <Typography variant="body1" paragraph>
                {featuredPartner.description}
              </Typography>

              <Typography variant="body1" paragraph fontWeight="medium">
                <Box component="span" fontWeight="bold">
                  Impact:{' '}
                </Box>
                {featuredPartner.impact}
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <Button
                  variant="contained"
                  href={featuredPartner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<OpenInNewIcon />}
                >
                  Visit Website
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleContactDialogOpen}
                  startIcon={<ContactSupportIcon />}
                >
                  Contact Partner
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={featuredPartner.image}
                alt={featuredPartner.name}
                sx={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 300,
                  objectFit: 'contain',
                  borderRadius: 2,
                  boxShadow: 1,
                }}
              />
            </Grid>
          </Grid>

          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 100,
              height: 100,
              borderRadius: '50%',
              backgroundColor: 'primary.main',
              opacity: 0.1,
              zIndex: 0,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -30,
              left: 40,
              width: 80,
              height: 80,
              borderRadius: '50%',
              backgroundColor: 'secondary.main',
              opacity: 0.1,
              zIndex: 0,
            }}
          />
        </Box>

        {/* Partner Impact Stats */}
        <Box
          sx={{
            mb: 6,
            opacity: animationVisible ? 1 : 0,
            transform: animationVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
          }}
        >
          <Grid container spacing={3}>
            {impactStats.map((stat) => (
              <Grid item xs={6} md={3} key={stat.id}>
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? 'background.paper' : '#fff',
                    boxShadow: 2,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 1.5,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h4"
                    component="div"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Testimonials */}
        <Box
          sx={{
            mb: 6,
            px: 2,
            py: 4,
            borderRadius: 2,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? 'background.paper' : '#f5f5f5',
            opacity: animationVisible ? 1 : 0,
            transform: animationVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            What Our Partners Say
          </Typography>

          <Box sx={{ position: 'relative', minHeight: 200, px: { xs: 0, md: 6 } }}>
            {testimonials.map((testimonial) => (
              <Box
                key={testimonial.id}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  opacity: testimonials.indexOf(testimonial) === activeTestimonial ? 1 : 0,
                  transition: 'opacity 0.8s ease',
                  zIndex: testimonials.indexOf(testimonial) === activeTestimonial ? 1 : 0,
                }}
              >
                <Typography
                  variant="body1"
                  align="center"
                  paragraph
                  sx={{
                    fontStyle: 'italic',
                    mb: 3,
                    fontSize: '1.1rem',
                    px: { xs: 2, sm: 4, md: 6 },
                  }}
                >
                  <FormatQuoteIcon
                    fontSize="small"
                    sx={{ mr: 1, opacity: 0.6, transform: 'rotate(180deg)' }}
                  />
                  {testimonial.quote}
                  <FormatQuoteIcon fontSize="small" sx={{ ml: 1, opacity: 0.6 }} />
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.title}, {testimonial.organization}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            {testimonials.map((testimonial, index) => (
              <Box
                key={`dot-${testimonial.id}`}
                onClick={() => setActiveTestimonial(index)}
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: activeTestimonial === index ? 'primary.main' : 'grey.300',
                  mx: 0.5,
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        <SectionTitle
          title="Our Educational Partners"
          subtitle="Organizations, schools, and businesses that support our mission of providing quality education to underprivileged talented students."
        />

        {/* Filters */}
        <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'center' }}>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="partner-type-label">Partner Type</InputLabel>
            <Select
              labelId="partner-type-label"
              id="partner-type-select"
              value={filter}
              label="Partner Type"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="all">All Partners</MenuItem>
              <MenuItem value="school">Educational Institutions</MenuItem>
              <MenuItem value="bookstore">Educational Supplies</MenuItem>
              <MenuItem value="organization">Supporting Organizations</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Search Partners"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ flexGrow: 1, maxWidth: 500 }}
          />
        </Box>

        {/* Partners Grid */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {filteredPartners.map((partner) => (
            <Grid item xs={12} sm={6} md={4} key={partner.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 4,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={partner.logo}
                  alt={`${partner.name} logo`}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      mb: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      {partner.name}
                    </Typography>
                    <Chip
                      label={getTypeLabel(partner.type)}
                      size="small"
                      sx={{
                        backgroundColor: `${getTypeColor(partner.type)}20`,
                        color: getTypeColor(partner.type),
                        fontWeight: 500,
                      }}
                    />
                  </Box>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Location: {partner.location}
                  </Typography>

                  <Typography variant="body2" paragraph>
                    {partner.description}
                  </Typography>

                  <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 'auto' }}>
                    Contribution:
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {partner.contribution}
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 'auto' }}
                  >
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Become a Partner CTA */}
        <MultiButtonCTA
          title="Become an Educational Partner"
          description="Join our network of educational partners and make a difference in the lives of talented students. Partner with us to provide discounts, scholarships, or resources."
          buttons={[
            {
              text: 'Learn About Partnership',
              link: '#',
              primary: true,
              onClick: handlePartnerDialogOpen,
            },
            {
              text: 'Contact Us',
              link: '/contact',
            },
          ]}
          bgColor="secondary.light"
        />

        {/* Partnership Information Dialog */}
        <Dialog open={partnerDialogOpen} onClose={handlePartnerDialogClose} maxWidth="md">
          <DialogTitle>Partner With Momin Trust</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Partnering with Momin Trust offers numerous benefits while supporting education for
              underprivileged talented students:
            </DialogContentText>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Partnership Benefits</Typography>
              <ul>
                <li>Recognition on our website and promotional materials</li>
                <li>Increased visibility in the community</li>
                <li>Corporate social responsibility fulfillment</li>
                <li>Networking opportunities with other educational partners</li>
                <li>Direct impact on students&apos; educational outcomes</li>
              </ul>

              <Typography variant="h6" sx={{ mt: 2 }}>
                Ways to Partner
              </Typography>
              <ul>
                <li>
                  <strong>Educational Institutions:</strong> Offer scholarships, tuition discounts,
                  or special admission considerations
                </li>
                <li>
                  <strong>Bookstores & Suppliers:</strong> Provide discounts on educational
                  materials or donate resources
                </li>
                <li>
                  <strong>Organizations:</strong> Sponsor programs, provide mentorship, or offer
                  specialized training
                </li>
              </ul>

              <Typography variant="h6" sx={{ mt: 2 }}>
                Partnership Process
              </Typography>
              <ol>
                <li>Fill out our partnership inquiry form</li>
                <li>Meet with our partnership coordinator</li>
                <li>Define the scope and terms of partnership</li>
                <li>Sign a simple memorandum of understanding</li>
                <li>Begin making an impact together!</li>
              </ol>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePartnerDialogClose}>Close</Button>
            <Button
              variant="contained"
              onClick={handlePartnerDialogClose}
              component="a"
              href="/contact"
            >
              Contact Us to Partner
            </Button>
          </DialogActions>
        </Dialog>

        {/* Contact Partner Dialog */}
        <Dialog open={contactDialogOpen} onClose={handleContactDialogClose} maxWidth="sm">
          <DialogTitle>Contact {featuredPartner.name}</DialogTitle>
          <DialogContent>
            <DialogContentText sx={{ mb: 2 }}>
              Fill out this form to get in touch with {featuredPartner.name}. Our partnership
              coordinator will facilitate the introduction.
            </DialogContentText>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField label="Your Name" variant="outlined" fullWidth required />
              <TextField label="Email Address" type="email" variant="outlined" fullWidth required />
              <TextField label="Phone (Optional)" variant="outlined" fullWidth />
              <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleContactDialogClose}>Cancel</Button>
            <Button variant="contained" onClick={handleContactDialogClose}>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
}

export default Partners;
