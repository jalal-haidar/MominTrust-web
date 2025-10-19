import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Donors() {
  return (
    <>
      <Meta title="Donors" />
      <FullSizeCenteredFlexBox>
        <Typography component="h1" variant="h3">
          Donors
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Thank you to our donors. This page will provide information on giving opportunities,
          campaigns, and impact of contributions.
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Donors;
