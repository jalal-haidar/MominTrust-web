import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useTheme } from '@mui/material/styles';

type DonorHeroProps = {
  title?: string;
  subtitle?: string;
  highlightedText?: string;
};

const DonorHero: React.FC<DonorHeroProps> = ({
  title = 'Support Our',
  subtitle = 'Your contribution empowers the next generation through education and mentorship.',
  highlightedText = 'Mission',
}) => {
  const theme = useTheme();
  const [donationAmount, setDonationAmount] = useState<string>('100');

  const handleDonationAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replaceAll(/\D/g, '');
    setDonationAmount(value);
  };

  const handleDonateClick = () => {
    // Handle donation - this would typically navigate to a payment page
    globalThis.location.href = `/donate?amount=${donationAmount}`;
  };

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        background: `linear-gradient(180deg, rgba(240,248,248,1) 0%, rgba(220,237,237,1) 100%)`,
        overflow: 'hidden',
        mb: 10,
        height: '300px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Content Container */}
      <Grid container spacing={2} sx={{ width: '100%' }}>
        <Grid item xs={12} md={6} sx={{ pl: { xs: 3, md: 8 }, pr: { xs: 3, md: 0 } }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 2,
              color: '#556',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {title}{' '}
            <Box component="span" sx={{ color: '#c97c5d', fontWeight: 900 }}>
              {highlightedText}
            </Box>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 400,
              mb: { xs: 3, md: 0 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            {subtitle}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Quick Donate Input */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
              pr: { xs: 2, md: 4 },
              pl: { xs: 2, md: 0 },
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '220px' }}>
              <Typography variant="caption" sx={{ mb: 0.5, fontWeight: 500 }}>
                Donation Amount
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                {['50', '100', '250', '500'].map((amount) => (
                  <Button
                    key={amount}
                    variant={donationAmount === amount ? 'contained' : 'outlined'}
                    color="primary"
                    size="small"
                    onClick={() => setDonationAmount(amount)}
                    sx={{
                      borderRadius: 1,
                      minWidth: 60,
                      height: 32,
                      fontSize: '0.8rem',
                    }}
                  >
                    ${amount}
                  </Button>
                ))}
              </Box>
              <TextField
                variant="outlined"
                size="small"
                value={donationAmount ? `$${donationAmount}` : ''}
                onChange={handleDonationAmountChange}
                placeholder="$100"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    height: 40,
                  },
                }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<VolunteerActivismIcon />}
              onClick={handleDonateClick}
              sx={{
                px: 3,
                py: 1.5,
                fontWeight: 600,
                backgroundColor: '#006064',
                '&:hover': {
                  backgroundColor: '#004446',
                },
              }}
            >
              Donate
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonorHero;
