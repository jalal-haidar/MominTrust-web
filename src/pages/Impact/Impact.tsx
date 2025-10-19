import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Impact() {
  return (
    <>
      <Meta title="Impact" />
      <FullSizeCenteredFlexBox>
        <Typography component="h1" variant="h3">
          Impact Metrics
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This dashboard will surface statistics and success stories while protecting beneficiary
          privacy.
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Impact;
