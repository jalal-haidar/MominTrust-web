import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import { SectionTitle } from '@/components/styled';

type ContactInfoProps = {
  address?: {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
  };
  email?: {
    primary: string;
    support?: string;
  };
  phone?: {
    number: string;
    hours?: string;
  };
};

const defaultAddress = {
  street1: 'Iqbal Market, Main Bazar Thandkoi',
  street2: '',
  city: 'Swabi',
  state: 'Khyber Pakhtunkhwa',
  zip: '10001',
};

const defaultEmail = {
  primary: 'info@momintrust.org',
  support: 'support@momintrust.org',
};

const defaultPhone = {
  number: '+92 325 1595334)',
  hours: 'Mon-Fri: 9:00 AM - 5:00 PM PST',
};

const ContactInfo: React.FC<ContactInfoProps> = ({
  address = defaultAddress,
  email = defaultEmail,
  phone = defaultPhone,
}) => {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 2,
        mb: 4,
        bgcolor:
          theme.palette.mode === 'light' ? 'rgba(245, 245, 245, 0.9)' : 'rgba(66, 66, 66, 0.9)',
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
              {address.street1}
              <br />
              {address.street2 && (
                <>
                  {address.street2}
                  <br />
                </>
              )}
              {address.city}, {address.state} {address.zip}
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
              {email.primary}
              {email.support && (
                <>
                  <br />
                  {email.support}
                </>
              )}
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
              {phone.number}
              {phone.hours && (
                <>
                  <br />
                  {phone.hours}
                </>
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ContactInfo;
