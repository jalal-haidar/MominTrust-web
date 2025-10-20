import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import TimelineIcon from '@mui/icons-material/Timeline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

import Meta from '@/components/Meta';
import { PageContainer, PageSection, PageTitle, SectionTitle } from '@/components/styled';
import { Hero, Section } from './styled';

function About() {
  const theme = useTheme();

  return (
    <>
      <Meta title="Momin Trust" />
      <PageContainer>
        <Box sx={{ mb: 5 }} component="main">
          <Hero role="region" aria-labelledby="about-hero-title">
            <PageTitle id="about-hero-title" variant="h3">
              About Momin Trust
            </PageTitle>
            <Typography sx={{ mt: 2 }} variant="h6">
              We exist to support students and families through targeted educational and
              humanitarian programs that preserve dignity and promote long-term opportunity.
            </Typography>
          </Hero>
        </Box>

        <PageSection>
          <SectionTitle id="mission-title" variant="h4">
            Our Mission
          </SectionTitle>
          <Typography sx={{ mt: 2 }} variant="body1">
            Momin Trust connects donors with measurable impact projects focused on student
            sponsorship, educational resources, and transparent reporting. We prioritize privacy,
            cultural sensitivity, and stewardship of funds.
          </Typography>
        </PageSection>

        <PageSection sx={{ my: 5 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  borderLeft: `4px solid ${theme.palette.primary.main}`,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <VerifiedIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Transparency</Typography>
                  </Box>
                  <Typography variant="body2">
                    We believe in full transparency about how donations are used, with detailed
                    reporting on outcomes and impact metrics available to all stakeholders.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PeopleIcon color="secondary" sx={{ mr: 1 }} />
                    <Typography variant="h6">Dignity</Typography>
                  </Box>
                  <Typography variant="body2">
                    We present all beneficiaries with dignity and respect, protecting their privacy
                    while highlighting their achievements and potential.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                elevation={1}
                sx={{
                  height: '100%',
                  borderLeft: `4px solid ${theme.palette.primary.light}`,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <TimelineIcon color="info" sx={{ mr: 1 }} />
                    <Typography variant="h6">Long-term Impact</Typography>
                  </Box>
                  <Typography variant="body2">
                    We focus on sustainable solutions that create lasting change through education,
                    mentoring, and community support systems.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </PageSection>

        <PageSection>
          <SectionTitle id="history-title" variant="h4">
            Our History
          </SectionTitle>
          <Typography sx={{ mt: 2, mb: 4 }} variant="body1">
            Founded in 2019, Momin Trust began with a mission to identify brilliant students from
            underprivileged backgrounds and provide the financial support they need to continue
            their education. What started with supporting 5 students has now grown to a program that
            supports over 50 talented individuals across multiple regions.
          </Typography>

          <Box
            sx={{
              p: 3,
              borderRadius: 2,
              bgcolor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              mb: 4,
            }}
          >
            <Typography variant="h6" gutterBottom>
              &ldquo;Education is the most powerful weapon which you can use to change the
              world.&rdquo;
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
              — Nelson Mandela
            </Typography>
          </Box>
        </PageSection>

        <Divider sx={{ my: 4 }} />

        <Section role="region" aria-labelledby="contact-title">
          <SectionTitle id="contact-title" variant="h5">
            Learn More / Get Involved
          </SectionTitle>
          <Typography sx={{ mt: 1 }} variant="body1">
            Visit our Contact page to reach out, explore donation opportunities on the Donors page,
            or read our Impact reports for transparency on outcomes.
          </Typography>

          <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
            <Button
              href="/"
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/';
              }}
            >
              Back to Home
            </Button>

            <Button
              href="/contact"
              variant="outlined"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/contact';
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Section>
      </PageContainer>
    </>
  );
}

export default About;
