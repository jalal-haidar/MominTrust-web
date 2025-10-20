import { Box, Grid, Typography, Button, Divider, useTheme, Chip } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Hero from '@/components/Hero/Hero';
import ImpactMetrics from '@/components/ImpactMetrics/ImpactMetrics';
import Meta from '@/components/Meta/Meta';
import BeneficiaryCard, { BeneficiaryPreview } from '@/components/BeneficiaryCard/BeneficiaryCard';
import DonationCard from '@/components/DonationCard/DonationCard';
import {
  PageContainer,
  PageSection,
  ContentCard,
  PageTitle,
  SectionTitle,
} from '@/components/styled';

const sampleBeneficiaries: BeneficiaryPreview[] = [
  { id: 'b1', initials: 'A.B', grade: 7, region: 'Lahore', academicScore: 92 },
  { id: 'b2', initials: 'S.K', grade: 9, region: 'Karachi', academicScore: 88 },
  { id: 'b3', initials: 'M.R', grade: 10, region: 'Peshawar', academicScore: 95 },
  { id: 'b4', initials: 'N.T', grade: 8, region: 'Islamabad', academicScore: 90 },
];

const Landing = () => {
  const theme = useTheme();

  return (
    <Box component="main">
      <Meta title="Momin Trust" />
      <Hero />

      <PageContainer maxWidth="lg">
        {/* Impact Section */}
        <PageSection>
          <PageTitle variant="h4">Our Impact</PageTitle>
          <ImpactMetrics />
        </PageSection>

        <Divider sx={{ my: 5 }} />

        {/* Core Values Section */}
        <PageSection>
          <SectionTitle variant="h4">Our Core Values</SectionTitle>

          <Grid container spacing={4} sx={{ mt: 3 }}>
            <Grid item xs={12} md={4}>
              <ContentCard elevation={2}>
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: theme.palette.primary.main,
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.palette.primary.contrastText,
                        mr: 2,
                      }}
                    >
                      <SchoolIcon />
                    </Box>
                    <Typography variant="h6" fontWeight="600">
                      Education First
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    We believe education is the key to breaking cycles of poverty and creating
                    long-term opportunity.
                  </Typography>
                </Box>
              </ContentCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <ContentCard elevation={2}>
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: theme.palette.secondary.main,
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.palette.secondary.contrastText,
                        mr: 2,
                      }}
                    >
                      <VolunteerActivismIcon />
                    </Box>
                    <Typography variant="h6" fontWeight="600">
                      Dignity & Privacy
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    We present all beneficiaries with respect, maintaining dignity and protecting
                    personal identities.
                  </Typography>
                </Box>
              </ContentCard>
            </Grid>

            <Grid item xs={12} md={4}>
              <ContentCard elevation={2}>
                <Box sx={{ p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: theme.palette.primary.light,
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.palette.primary.contrastText,
                        mr: 2,
                      }}
                    >
                      <TrendingUpIcon />
                    </Box>
                    <Typography variant="h6" fontWeight="600">
                      Transparent Impact
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    We provide clear reporting on how funds are used and the measurable differences
                    they make.
                  </Typography>
                </Box>
              </ContentCard>
            </Grid>
          </Grid>
        </PageSection>

        <Divider sx={{ my: 5 }} />

        {/* Beneficiaries Section */}
        <PageSection>
          <SectionTitle
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2rem' }, // Smaller on mobile
              mb: { xs: 1, sm: 1.5 }, // Less margin on mobile
            }}
          >
            Featured Beneficiaries
          </SectionTitle>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: { xs: 2, sm: 3 }, // Less margin on mobile
              fontSize: { xs: '0.875rem', sm: '1rem' }, // Smaller font on mobile
            }}
          >
            Every student&apos;s privacy is protected while showcasing their academic achievements.
          </Typography>

          {/* Mobile horizontal scroll container for extra small screens */}
          <Box
            sx={{
              display: { xs: 'block', sm: 'none' }, // Only show on xs screens
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
              scrollSnapType: 'x mandatory', // Enable scroll snapping
              pb: 2, // Add padding for scrollbar
              mx: -2, // Negative margin to compensate for parent padding
              px: 2,
              // Hide scrollbar in most browsers but keep functionality
              msOverflowStyle: 'none', // IE and Edge
              scrollbarWidth: 'none', // Firefox
              '&::-webkit-scrollbar': {
                display: 'none', // Chrome, Safari, Opera
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: 'max-content',
                gap: 3, // Increase gap between cards
              }}
            >
              {sampleBeneficiaries.map((b) => (
                <Box
                  key={b.id}
                  sx={{
                    width: '85vw', // Slightly wider cards
                    maxWidth: '300px', // Increased max width
                    scrollSnapAlign: 'center', // Snap to center for better UX
                    pr: 1, // Add some padding on the right
                  }}
                >
                  <BeneficiaryCard b={b} />
                </Box>
              ))}
            </Box>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                textAlign: 'center',
                mt: 2,
                mb: 1,
                color: theme.palette.text.secondary,
                fontStyle: 'italic',
                // Add indicator dots for better UX
                '&::before': {
                  content: '"• • •"',
                  letterSpacing: '5px',
                  display: 'block',
                  mb: 0.5,
                },
              }}
            >
              Swipe to see more
            </Typography>
          </Box>

          {/* Standard grid layout for larger screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Grid container spacing={4} alignItems="stretch" sx={{ mt: 1 }}>
              {sampleBeneficiaries.map((b) => (
                <Grid item xs={12} sm={6} md={3} key={b.id} sx={{ display: 'flex' }}>
                  <Box sx={{ width: '100%', display: 'flex' }}>
                    <BeneficiaryCard b={b} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ mt: { xs: 3, sm: 4 }, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              href="/beneficiaries"
              endIcon={<ArrowForwardIcon />}
              sx={{
                mt: { xs: 1, sm: 2 },
                width: { xs: '100%', sm: 'auto' }, // Full width on mobile
                py: { xs: 1.5, sm: 1 }, // Taller button on mobile
                px: { xs: 2, sm: 3 }, // More horizontal padding
                borderRadius: { xs: 2, sm: 28 }, // Pill shaped on larger screens
                borderWidth: 2, // Thicker border
                fontWeight: 'medium',
                textTransform: 'none', // Don't capitalize text
                '&:hover': {
                  borderWidth: 2,
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              View All Beneficiaries
            </Button>
          </Box>
        </PageSection>

        <Divider sx={{ my: 5 }} />

        {/* Donation Section */}
        <PageSection>
          <SectionTitle variant="h4">Support Our Work</SectionTitle>

          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <DonationCard
                title="General Fund"
                raised={230000}
                target={500000}
                donorCount={142}
                impactItems={[
                  { icon: SchoolIcon, amount: 25, description: 'School supplies for one month' },
                  { icon: MenuBookIcon, amount: 50, description: 'Textbooks for one semester' },
                  {
                    icon: LocalLibraryIcon,
                    amount: 100,
                    description: 'Full scholarship for one month',
                  },
                ]}
                onDonateCheckout={(amount) => alert(`Proceed to checkout: $${amount}`)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Your Contribution Makes a Difference
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Your donation helps cover tuition, school supplies, and mentoring for talented
                students who otherwise could not continue their education.
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                <strong>90% of funds</strong> go directly to student support through:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                <Chip icon={<SchoolIcon />} label="Tuition" color="primary" variant="outlined" />
                <Chip
                  icon={<MenuBookIcon />}
                  label="Textbooks"
                  color="primary"
                  variant="outlined"
                />
                <Chip
                  icon={<AutoStoriesIcon />}
                  label="School Supplies"
                  color="primary"
                  variant="outlined"
                />
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                We ensure dignity and privacy for all beneficiaries.
                <strong> Your support changes lives.</strong>
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  href="/donors"
                  size="large"
                  sx={{
                    mt: 1,
                    px: 3,
                    py: 1,
                    fontWeight: 600,
                  }}
                >
                  Learn More About Donating
                </Button>
              </Box>
            </Grid>
          </Grid>
        </PageSection>
      </PageContainer>
    </Box>
  );
};

export default Landing;
