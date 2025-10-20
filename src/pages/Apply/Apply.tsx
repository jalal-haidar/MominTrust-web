import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Apply() {
  return (
    <>
      <Meta title="Apply" />
      <FullSizeCenteredFlexBox>
        <Typography id="apply-heading" component="h1" variant="h3">
          Apply to be a Beneficiary
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Applications will be accepted through a privacy-preserving form. If you are interested,
          please contact us or start an application below.
        </Typography>
        <Button sx={{ mt: 3 }} variant="contained" color="primary" aria-labelledby="apply-heading">
          Start Application
        </Button>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Apply;
