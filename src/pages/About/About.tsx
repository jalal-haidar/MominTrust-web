import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import { Hero, Section } from './styled';

function About() {
  return (
    <>
      <Meta title="Momin Trust" />
      <Container sx={{ height: '100%', py: 4 }} component="main">
        <FullSizeCenteredFlexBox flexDirection="column">
          <Hero role="region" aria-labelledby="about-hero-title">
            <Typography id="about-hero-title" variant="h3" component="h1">
              Momin Trust
            </Typography>
            <Typography sx={{ mt: 2 }} variant="h6" component="p">
              We exist to support students and families through targeted educational and
              humanitarian programs that preserve dignity and promote long-term opportunity.
            </Typography>
          </Hero>

          <Section role="region" aria-labelledby="mission-title">
            <Typography id="mission-title" variant="h4" component="h2">
              Our Mission
            </Typography>
            <Typography sx={{ mt: 1 }} variant="body1">
              Momin Trust connects donors with measurable impact projects focused on student
              sponsorship, educational resources, and transparent reporting. We prioritize privacy,
              cultural sensitivity, and stewardship of funds.
            </Typography>
          </Section>

          <Section role="region" aria-labelledby="values-title">
            <Typography id="values-title" variant="h4" component="h2">
              Values & Principles
            </Typography>
            <Box component="ul" sx={{ mt: 1, pl: 3 }}>
              <li>
                <Typography variant="body1">Privacy-first beneficiary presentation</Typography>
              </li>
              <li>
                <Typography variant="body1">Transparent use of funds and reporting</Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Dignified storytelling and cultural sensitivity
                </Typography>
              </li>
            </Box>
          </Section>

          <Divider sx={{ width: '100%', my: 2 }} />

          <Section role="region" aria-labelledby="contact-title">
            <Typography id="contact-title" variant="h5" component="h2">
              Learn More / Get Involved
            </Typography>
            <Typography sx={{ mt: 1 }} variant="body1">
              Visit our Contact page to reach out, explore donation opportunities on the Donors
              page, or read our Impact reports for transparency on outcomes.
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="contained"
              startIcon={<HomeIcon />}
              sx={{ mt: 3 }}
            >
              Back to Home Page
            </Button>
          </Section>
        </FullSizeCenteredFlexBox>
      </Container>
    </>
  );
}

export default About;
