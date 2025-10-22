import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import Alert from "@mui/material/Alert";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Snackbar from "@mui/material/Snackbar";

import { SectionTitle } from "@/components/styled";

type FormData = {
  [key: string]: string | boolean;
};

type ContactFormProps = {
  onFormSubmit?: (formData: FormData) => void;
};

const ContactForm: React.FC<ContactFormProps> = ({ onFormSubmit }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setSnackbarOpen(true);

    // In a real application, you would collect form data and send it to a server
    const formData = new FormData(e.currentTarget);
    if (onFormSubmit) {
      // Convert FormData to our FormData type
      const formDataObj: FormData = {};
      formData.forEach((value, key) => {
        formDataObj[key] = typeof value === "string" ? value : String(value);
      });
      onFormSubmit(formDataObj);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: 2,
          height: "100%",
        }}
      >
        <SectionTitle variant="h5" gutterBottom>
          Send Us a Message
        </SectionTitle>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <Alert severity="info" sx={{ mb: 1 }}>
                We aim to respond to all inquiries within 48 hours.
              </Alert>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                disabled={formSubmitted}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                disabled={formSubmitted}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
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
            <Grid size={{ xs: 12 }}>
              <TextField
                required
                fullWidth
                label="Phone Number"
                variant="outlined"
                name="phone"
                disabled={formSubmitted}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
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
                <MenuItem value="partnership">
                  Partnership/Collaboration
                </MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ xs: 12 }}>
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
            <Grid size={{ xs: 12 }}>
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
            <Grid size={{ xs: 12 }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={formSubmitted}
                sx={{ py: 1.5 }}
              >
                {formSubmitted ? "Message Sent" : "Send Message"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Thank you for your message. We'll get back to you soon!"
      />
    </>
  );
};

export default ContactForm;
