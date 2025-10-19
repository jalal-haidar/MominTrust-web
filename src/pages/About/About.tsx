import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function About() {
  return (
    <>
      <Meta title="About" />
      <FullSizeCenteredFlexBox>
        <Typography component="h1" variant="h3">
          About Momin Trust
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Momin Trust is a non-profit organization focused on supporting talented underprivileged
          students through scholarships, mentorship, and community programs. This page will contain
          mission, history, and ways to help.
        </Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default About;
