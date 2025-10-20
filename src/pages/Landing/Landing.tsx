import { Box, Container, Grid, Typography } from '@mui/material';
import Hero from '@/components/Hero/Hero';
import ImpactMetrics from '@/components/ImpactMetrics/ImpactMetrics';
import Meta from '@/components/Meta/Meta';
import BeneficiaryCard, { BeneficiaryPreview } from '@/components/BeneficiaryCard/BeneficiaryCard';
import DonationCard from '@/components/DonationCard/DonationCard';

const sampleBeneficiaries: BeneficiaryPreview[] = [
  { id: 'b1', initials: 'A.B', grade: 7, region: 'Lahore', academicScore: 92 },
  { id: 'b2', initials: 'S.K', grade: 9, region: 'Karachi', academicScore: 88 },
  { id: 'b3', initials: 'M.R', grade: 10, region: 'Peshawar', academicScore: 95 },
  { id: 'b4', initials: 'N.T', grade: 8, region: 'Islamabad', academicScore: 90 },
];

const Landing = () => {
  return (
    <Box component="main">
      <Meta title="Momin Trust" />
      <Hero />

      <Container maxWidth="lg">
        <ImpactMetrics />

        <Typography component="h3" variant="h6" sx={{ mt: 6, mb: 2 }}>
          Beneficiary previews
        </Typography>

        <Grid container spacing={3}>
          {sampleBeneficiaries.map((b) => (
            <Grid item xs={12} sm={6} md={3} key={b.id}>
              <BeneficiaryCard b={b} />
            </Grid>
          ))}
        </Grid>

        <Typography component="h3" variant="h6" sx={{ mt: 6, mb: 2 }}>
          Support our work
        </Typography>

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
            <Typography variant="body1" color="text.secondary">
              Your donation helps cover tuition, school supplies, and mentoring for talented
              students who otherwise could not continue their education. We ensure dignity and
              privacy for all beneficiaries.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;
