import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SchoolIcon from '@mui/icons-material/School';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';

import Meta from '@/components/Meta';
import { PageContainer, PageSection, PageTitle, SectionTitle } from '@/components/styled';

// Define steps for the application process
const steps = ['Personal Information', 'Educational Details', 'Supporting Documents'];

function Apply() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setCompleted(true);
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(false);
  };

  return (
    <>
      <Meta
        title="Apply for Support | Momin Trust"
        description="Apply for educational support through Momin Trust's beneficiary program"
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
              <PageTitle id="apply-hero-title" variant="h3">
                Apply for Educational Support
              </PageTitle>
              <Typography variant="h6" component="p" sx={{ mt: 2, maxWidth: 800, mx: 'auto' }}>
                We support talented students from underprivileged backgrounds to reach their full
                potential through education.
              </Typography>
            </Box>
          </Box>
        </Box>

        <PageSection>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 2,
              mb: 4,
            }}
          >
            {completed ? (
              <Box sx={{ textAlign: 'center', py: 3 }}>
                <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Application Submitted
                </Typography>
                <Typography variant="body1" paragraph>
                  Thank you for applying to the Momin Trust educational support program.
                </Typography>
                <Typography variant="body1" paragraph>
                  We will review your application and contact you within 2-3 weeks.
                </Typography>
                <Typography variant="body1" paragraph>
                  Your application reference number is:{' '}
                  <strong>
                    MT-
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, '0')}
                  </strong>
                </Typography>
                <Button
                  component={RouterLink}
                  to="/"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Return to Home
                </Button>
              </Box>
            ) : (
              <>
                <Box sx={{ width: '100%', mb: 4 }}>
                  <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    sx={{
                      '& .MuiStepLabel-root .Mui-completed': {
                        color: theme.palette.secondary.main,
                      },
                      '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel': {
                        color: theme.palette.text.primary,
                      },
                    }}
                  >
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>

                <Box component="form" sx={{ mt: 3 }}>
                  {activeStep === 0 && (
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                          Personal Information
                        </Typography>
                        <Alert severity="info" sx={{ mb: 3 }}>
                          All information is kept confidential and used only for application review
                          purposes.
                        </Alert>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="First Name"
                          variant="outlined"
                          name="firstName"
                          autoComplete="given-name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Last Name"
                          variant="outlined"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Date of Birth"
                          type="date"
                          variant="outlined"
                          InputLabelProps={{ shrink: true }}
                          name="dateOfBirth"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          select
                          fullWidth
                          label="Gender"
                          variant="outlined"
                          name="gender"
                          defaultValue=""
                        >
                          <MenuItem value="">Select</MenuItem>
                          <MenuItem value="male">Male</MenuItem>
                          <MenuItem value="female">Female</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                          <MenuItem value="prefer-not-to-say">Prefer not to say</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Email Address"
                          variant="outlined"
                          type="email"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Phone Number"
                          variant="outlined"
                          name="phone"
                          autoComplete="tel"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Address"
                          variant="outlined"
                          name="address"
                          multiline
                          rows={2}
                          autoComplete="street-address"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="City"
                          variant="outlined"
                          name="city"
                          autoComplete="address-level2"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Postal Code"
                          variant="outlined"
                          name="postalCode"
                          autoComplete="postal-code"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          select
                          fullWidth
                          label="How did you hear about us?"
                          variant="outlined"
                          name="referralSource"
                          defaultValue=""
                        >
                          <MenuItem value="">Select</MenuItem>
                          <MenuItem value="website">Website</MenuItem>
                          <MenuItem value="social-media">Social Media</MenuItem>
                          <MenuItem value="friend">Friend/Family</MenuItem>
                          <MenuItem value="school">School/University</MenuItem>
                          <MenuItem value="event">Community Event</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </TextField>
                      </Grid>
                    </Grid>
                  )}

                  {activeStep === 1 && (
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                          Educational Details
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          select
                          fullWidth
                          label="Current Educational Level"
                          variant="outlined"
                          name="educationLevel"
                          defaultValue=""
                        >
                          <MenuItem value="">Select</MenuItem>
                          <MenuItem value="elementary">Elementary School</MenuItem>
                          <MenuItem value="middle">Middle School</MenuItem>
                          <MenuItem value="high">High School</MenuItem>
                          <MenuItem value="undergraduate">Undergraduate</MenuItem>
                          <MenuItem value="graduate">Graduate</MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="School/Institution Name"
                          variant="outlined"
                          name="schoolName"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Field of Study/Major"
                          variant="outlined"
                          name="fieldOfStudy"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Current GPA/Score"
                          variant="outlined"
                          name="gpa"
                          placeholder="e.g., 3.5/4.0"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          select
                          fullWidth
                          label="Expected Graduation Year"
                          variant="outlined"
                          name="graduationYear"
                          defaultValue=""
                        >
                          <MenuItem value="">Select</MenuItem>
                          {[...Array(10)].map((_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <MenuItem key={year} value={year}>
                                {year}
                              </MenuItem>
                            );
                          })}
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Academic Achievements"
                          variant="outlined"
                          name="achievements"
                          multiline
                          rows={3}
                          placeholder="List notable academic achievements, awards, or recognition"
                        />
                      </Grid>
                    </Grid>
                  )}

                  {activeStep === 2 && (
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Typography variant="h6" gutterBottom>
                          Supporting Documents
                        </Typography>
                        <Alert severity="info" sx={{ mb: 3 }}>
                          Please prepare the following documents in PDF format. File size should not
                          exceed 5MB per document.
                        </Alert>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" gutterBottom>
                          Academic Transcripts
                        </Typography>
                        <Button
                          variant="outlined"
                          component="label"
                          startIcon={<SchoolIcon />}
                          fullWidth
                          sx={{ height: '56px', textTransform: 'none' }}
                        >
                          Upload Transcript
                          <input type="file" hidden accept=".pdf,.doc,.docx" />
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Typography variant="subtitle2" gutterBottom>
                          Proof of Financial Need
                        </Typography>
                        <Button
                          variant="outlined"
                          component="label"
                          startIcon={<SchoolIcon />}
                          fullWidth
                          sx={{ height: '56px', textTransform: 'none' }}
                        >
                          Upload Document
                          <input type="file" hidden accept=".pdf,.doc,.docx" />
                        </Button>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="subtitle2" gutterBottom>
                          Personal Statement (max 500 words)
                        </Typography>
                        <TextField
                          required
                          fullWidth
                          multiline
                          rows={6}
                          variant="outlined"
                          placeholder="Please describe your educational goals, why you need support, and how this scholarship will help you achieve your ambitions."
                          name="personalStatement"
                          helperText="Your personal statement helps us understand your situation and goals."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox required color="primary" name="termsAccepted" />}
                          label="I certify that all information provided is accurate and complete to the best of my knowledge."
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControlLabel
                          control={<Checkbox required color="primary" name="privacyAccepted" />}
                          label="I understand and agree to Momin Trust's Privacy Policy and Terms of Service."
                        />
                      </Grid>
                    </Grid>
                  )}

                  <Divider sx={{ my: 3 }} />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                      variant="outlined"
                    >
                      Back
                    </Button>
                    <Button variant="contained" onClick={handleNext}>
                      {activeStep === steps.length - 1 ? 'Submit Application' : 'Continue'}
                    </Button>
                  </Box>
                </Box>
              </>
            )}
          </Paper>

          {/* Additional information section */}
          <Paper
            elevation={2}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: 2,
              mt: 4,
              mb: 2,
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(245, 245, 245, 0.9)'
                  : 'rgba(66, 66, 66, 0.9)',
            }}
          >
            <SectionTitle variant="h5" gutterBottom>
              Application Process
            </SectionTitle>
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    1. Submit Application
                  </Typography>
                  <Typography>
                    Complete the online application form and upload all required documents.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    2. Review Period
                  </Typography>
                  <Typography>
                    Our selection committee reviews applications within 2-3 weeks of submission.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ textAlign: 'center', p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    3. Decision
                  </Typography>
                  <Typography>
                    Selected applicants will be notified and invited for an interview or asked for
                    additional information.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4, p: 2, bgcolor: theme.palette.background.paper, borderRadius: 1 }}>
              <Typography variant="subtitle1" gutterBottom fontWeight="bold">
                Have questions about the application process?
              </Typography>
              <Typography paragraph>
                Please contact our support team at <strong>support@momintrust.org</strong> or visit
                our <RouterLink to="/faq">FAQ page</RouterLink>.
              </Typography>
            </Box>
          </Paper>
        </PageSection>
      </PageContainer>
    </>
  );
}

export default Apply;
