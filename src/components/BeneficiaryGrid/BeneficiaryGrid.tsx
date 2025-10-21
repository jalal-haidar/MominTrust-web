import React from 'react';
import { Grid, Box, Typography, Alert } from '@mui/material';
import BeneficiaryCard, { BeneficiaryPreview } from '@/components/BeneficiaryCard/BeneficiaryCard';

interface BeneficiaryGridProps {
  beneficiaries: BeneficiaryPreview[];
  totalCount: number;
}

const BeneficiaryGrid: React.FC<BeneficiaryGridProps> = ({ beneficiaries, totalCount }) => {
  return (
    <>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="subtitle1">
          Showing {beneficiaries.length} of {totalCount} beneficiaries
        </Typography>
      </Box>

      {beneficiaries.length === 0 ? (
        <Alert severity="info" sx={{ mt: 2 }}>
          No beneficiaries match the selected filters. Try adjusting your search criteria.
        </Alert>
      ) : (
        <Grid container spacing={2} alignItems="stretch">
          {beneficiaries.map((b) => (
            <Grid key={b.id} item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
              <BeneficiaryCard b={b} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default BeneficiaryGrid;
