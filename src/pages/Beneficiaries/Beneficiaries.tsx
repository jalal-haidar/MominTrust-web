import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import BeneficiaryCard, { BeneficiaryPreview } from '@/components/BeneficiaryCard/BeneficiaryCard';
import Loading from '@/components/Loading/Loading';
import { useRecoilValueLoadable } from 'recoil';
import { beneficiariesSelector } from '@/store/beneficiaries';

const Beneficiaries: React.FC = () => {
  const listLoadable = useRecoilValueLoadable(beneficiariesSelector);

  if (listLoadable.state === 'loading') {
    return <Loading />;
  }

  if (listLoadable.state === 'hasError') {
    // Backend not available — show demo/mock data (privacy-first)
    const demoData: BeneficiaryPreview[] = [
      { id: 'demo-1', initials: 'AR', grade: 6, region: 'Kabul', academicScore: 88 },
      { id: 'demo-2', initials: 'ZM', grade: 8, region: 'Herat', academicScore: 92 },
      { id: 'demo-3', initials: 'SK', grade: 5, region: 'Balkh', academicScore: 80 },
    ];

    return (
      <Container sx={{ py: 3 }}>
        <Alert severity="warning">
          Failed to load beneficiaries from the server — showing demo data.
        </Alert>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          {demoData.map((b) => (
            <Grid key={b.id} item xs={12} sm={6} md={4}>
              <BeneficiaryCard b={b} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  const data = listLoadable.contents as BeneficiaryPreview[];

  // Privacy-first: we only render initials and non-sensitive fields.
  return (
    <Container sx={{ py: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Beneficiaries
      </Typography>

      <Grid container spacing={2}>
        {data.map((b) => (
          <Grid key={b.id} item xs={12} sm={6} md={4}>
            <BeneficiaryCard b={b} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Beneficiaries;
