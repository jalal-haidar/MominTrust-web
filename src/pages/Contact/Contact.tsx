import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Contact() {
  return (
    <>
      <Meta title="Contact" />
      <FullSizeCenteredFlexBox>
        <Typography component="h1" variant="h3">
          Contact Us
        </Typography>
        <Typography sx={{ mt: 2 }}>
          You can reach us via email or by submitting the form below.
        </Typography>
        <TextField label="Your email" sx={{ mt: 2, width: '100%' }} />
        <TextField label="Message" multiline rows={4} sx={{ mt: 2, width: '100%' }} />
        <Button sx={{ mt: 2 }} variant="contained" color="primary">
          Send
        </Button>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Contact;
