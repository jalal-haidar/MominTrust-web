import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useTheme } from '@mui/material/styles';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Meta from '@/components/Meta';
import { PageContainer, PageSection, PageTitle, SectionTitle } from '@/components/styled';

function Contact() {
  const theme = useTheme();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setSnackbarOpen(true);
    // In a real application, you would send the form data to a server
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Meta
        title="Contact Us | Momin Trust"
        description="Get in touch with Momin Trust for inquiries, donations, or volunteer opportunities."
      />
      <PageContainer>
        <Box sx={{ mb: 5, textAlign: 'center' }}>
          <Box
            sx={{
              py: 4,
              px: 2,
              background:
                theme.palette.mode === 'light'
                  ? `linear-gradient(45deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
                  : `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
              color: 'white',
              borderRadius: 2,
              boxShadow: 2,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                zIndex: 1,
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <PageTitle id="contact-hero-title" variant="h3">
                Contact Us
              </PageTitle>
              <Typography variant="h6" component="p" sx={{ mt: 2, maxWidth: 800, mx: 'auto' }}>
                We&apos;d love to hear from you. Reach out to discuss educational support,
                donations, or collaboration opportunities.
              </Typography>
            </Box>
          </Box>
        </Box>

        <PageSection>
          <Grid container spacing={4}>
            {/* Contact Form Section */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  borderRadius: 2,
                  height: '100%',
                }}
              >
                <SectionTitle variant="h5" gutterBottom>
                  Send Us a Message
                </SectionTitle>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Alert severity="info" sx={{ mb: 1 }}>
                        We aim to respond to all inquiries within 48 hours.
                      </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        name="firstName"
                        disabled={formSubmitted}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        name="lastName"
                        disabled={formSubmitted}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        type="email"
                        label="Email Address"
                        variant="outlined"
                        name="email"
                        disabled={formSubmitted}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Phone Number"
                        variant="outlined"
                        name="phone"
                        disabled={formSubmitted}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        select
                        fullWidth
                        label="Reason for Contact"
                        variant="outlined"
                        name="reason"
                        defaultValue=""
                        disabled={formSubmitted}
                      >
                        <MenuItem value="">Select</MenuItem>
                        <MenuItem value="general">General Inquiry</MenuItem>
                        <MenuItem value="donation">Donation Information</MenuItem>
                        <MenuItem value="application">Application Support</MenuItem>
                        <MenuItem value="volunteer">Volunteer Opportunities</MenuItem>
                        <MenuItem value="partnership">Partnership/Collaboration</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        multiline
                        rows={5}
                        label="Message"
                        variant="outlined"
                        name="message"
                        placeholder="Please provide details about your inquiry..."
                        disabled={formSubmitted}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            required
                            color="primary"
                            name="agreeToTerms"
                            disabled={formSubmitted}
                          />
                        }
                        label="I agree to the Terms of Service and Privacy Policy"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        disabled={formSubmitted}
                        sx={{ py: 1.5 }}
                      >
                        {formSubmitted ? 'Message Sent' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

            {/* Contact Information Section */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  borderRadius: 2,
                  mb: 4,
                  bgcolor:
                    theme.palette.mode === 'light'
                      ? 'rgba(245, 245, 245, 0.9)'
                      : 'rgba(66, 66, 66, 0.9)',
                }}
              >
                <SectionTitle variant="h5" gutterBottom>
                  Contact Information
                </SectionTitle>

                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <LocationOnIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Address
                      </Typography>
                      <Typography>
                        123 Education Drive
                        <br />
                        Suite 456
                        <br />
                        New York, NY 10001
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <EmailIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Email
                      </Typography>
                      <Typography>
                        info@momintrust.org
                        <br />
                        support@momintrust.org
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', mb: 3 }}>
                    <PhoneIcon sx={{ mr: 2, color: theme.palette.primary.main }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        Phone
                      </Typography>
                      <Typography>
                        +1 (555) 123-4567
                        <br />
                        Mon-Fri: 9:00 AM - 5:00 PM EST
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 3, md: 4 },
                  borderRadius: 2,
                  bgcolor:
                    theme.palette.mode === 'light'
                      ? 'rgba(245, 245, 245, 0.9)'
                      : 'rgba(66, 66, 66, 0.9)',
                }}
              >
                <SectionTitle variant="h5" gutterBottom>
                  Follow Us
                </SectionTitle>

                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
                  <FacebookIcon
                    sx={{ fontSize: 40, color: theme.palette.primary.main, cursor: 'pointer' }}
                  />
                  <TwitterIcon
                    sx={{ fontSize: 40, color: theme.palette.primary.main, cursor: 'pointer' }}
                  />
                  <InstagramIcon
                    sx={{ fontSize: 40, color: theme.palette.primary.main, cursor: 'pointer' }}
                  />
                  <LinkedInIcon
                    sx={{ fontSize: 40, color: theme.palette.primary.main, cursor: 'pointer' }}
                  />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Map Section */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              mt: 4,
              overflow: 'hidden',
            }}
          >
            <SectionTitle variant="h5" gutterBottom>
              Our Location
            </SectionTitle>

            <Box
              sx={{
                width: '100%',
                height: '400px',
                bgcolor: 'rgba(200, 200, 200, 0.3)',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="body1">
                {/* In a real application, you would embed a Google Map or another map service here */}
                Interactive Map Would Be Displayed Here
              </Typography>
            </Box>
          </Paper>

          {/* FAQ Section */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 2,
              mt: 4,
            }}
          >
            <SectionTitle variant="h5" gutterBottom>
              Frequently Asked Questions
            </SectionTitle>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                How can I donate to Momin Trust?
              </Typography>
              <Typography paragraph>
                You can donate online through our secure payment portal on the Donations page, send
                a check to our mailing address, or contact us for wire transfer instructions.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Are donations tax-deductible?
              </Typography>
              <Typography paragraph>
                Yes, Momin Trust is a registered 501(c)(3) non-profit organization. All donations
                are tax-deductible to the extent allowed by law.
              </Typography>

              <Typography variant="h6" gutterBottom>
                How can I volunteer with Momin Trust?
              </Typography>
              <Typography paragraph>
                We welcome volunteers who are passionate about education! Please contact us through
                this form with &quot;Volunteer Opportunities&quot; selected as your reason, and
                we&apos;ll get back to you with current openings.
              </Typography>
            </Box>
          </Paper>
        </PageSection>
      </PageContainer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Thank you for your message. We'll get back to you soon!"
      />
    </>
  );
}

export default Contact;
