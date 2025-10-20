import { Box, Container, Grid, Typography, Button, Paper, Divider, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Link as RouterLink } from 'react-router-dom';

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
          <PageTitle variant="h4" component="h2">
            Our Impact
          </PageTitle>
          <ImpactMetrics />
        </PageSection>

        <Divider sx={{ my: 5 }} />

        {/* Core Values Section */}
        <PageSection>
          <SectionTitle variant="h4" component="h2">
            Our Core Values
          </SectionTitle>

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
          <SectionTitle variant="h4" component="h2">
            Featured Beneficiaries
          </SectionTitle>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Every student's privacy is protected while showcasing their academic achievements.
          </Typography>

          <Grid container spacing={3} alignItems="stretch">
            {sampleBeneficiaries.map((b) => (
              <Grid item xs={12} sm={6} md={3} key={b.id} sx={{ display: 'flex' }}>
                <BeneficiaryCard b={b} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="outlined"
              color="primary"
              component={RouterLink}
              to="/beneficiaries"
              sx={{ mt: 2 }}
            >
              View All Beneficiaries
            </Button>
          </Box>
        </PageSection>

        <Divider sx={{ my: 5 }} />

        {/* Donation Section */}
        <PageSection>
          <SectionTitle variant="h4" component="h2">
            Support Our Work
          </SectionTitle>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <DonationCard
                title="General Fund"
                raised={230000}
                target={500000}
                onDonateCheckout={(amount) => alert(`Proceed to checkout: $${amount}`)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Your donation helps cover tuition, school supplies, and mentoring for talented
                students who otherwise could not continue their education.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We ensure dignity and privacy for all beneficiaries, with 90% of funds directly
                supporting students.
                <strong> Your support changes lives.</strong>
              </Typography>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  color="secondary"
                  component={RouterLink}
                  to="/donors"
                  sx={{ mt: 1 }}
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
