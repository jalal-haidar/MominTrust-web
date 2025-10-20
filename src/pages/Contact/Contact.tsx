import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-alert
    alert('Thanks — your message was received (demo).');
  };

  return (
    <>
      <Meta title="Contact" />
      <FullSizeCenteredFlexBox>
        <Box
          component="form"
          onSubmit={handleSubmit}
          aria-labelledby="contact-heading"
          sx={{ width: '100%' }}
        >
          <Typography id="contact-heading" component="h1" variant="h3">
            Contact Us
          </Typography>
          <Typography sx={{ mt: 2 }}>
            You can reach us via email or by submitting the form below.
          </Typography>

          <TextField
            name="email"
            aria-label="email"
            required
            label="Your email"
            sx={{ mt: 2, width: '100%' }}
          />

          <TextField
            name="message"
            aria-label="message"
            required
            label="Message"
            multiline
            rows={4}
            sx={{ mt: 2, width: '100%' }}
          />

          <Button type="submit" sx={{ mt: 2 }} variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Contact;
