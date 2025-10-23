import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { useTheme } from '@mui/material/styles';

// Tier type definition
export type DonationTierType = {
  id: string;
  title: string;
  amount: string;
  period: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  color: string;
  buttonText: string;
  featured?: boolean;
};

type DonationTiersProps = {
  tiers: DonationTierType[];
  title?: string;
};

const DonationTiers: React.FC<DonationTiersProps> = ({ tiers, title = 'Ways to Give' }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 10 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 60,
            height: 3,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          },
        }}
      >
        {title}
      </Typography>

      <Grid container spacing={2} justifyContent="center" sx={{ px: { xs: 2, md: 4 } }}>
        {tiers.map((tier) => (
          <Grid item xs={12} md={4} key={tier.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: tier.featured
                  ? '0 3px 10px rgba(0,0,0,0.12)'
                  : '0 1px 4px rgba(0,0,0,0.08)',
                transform: tier.featured ? 'scale(1.01)' : 'none',
                border: tier.featured ? `1px solid ${theme.palette.primary.main}` : 'none',
              }}
            >
              {tier.featured && (
                <Chip
                  label="Most Popular"
                  sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    fontSize: '0.7rem',
                    height: 24,
                  }}
                  size="small"
                />
              )}

              <CardContent sx={{ p: 3, flex: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        tier.id === 'monthly'
                          ? '#e8f5e9'
                          : tier.id === 'annual'
                            ? '#e3f2fd'
                            : '#f3e5f5',
                      color:
                        tier.id === 'monthly'
                          ? '#4caf50'
                          : tier.id === 'annual'
                            ? '#1976d2'
                            : '#9c27b0',
                      width: 50,
                      height: 50,
                    }}
                  >
                    {tier.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {tier.title}
                  </Typography>
                </Box>

                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color:
                      tier.id === 'monthly'
                        ? '#4caf50'
                        : tier.id === 'annual'
                          ? '#1976d2'
                          : '#9c27b0',
                    mb: 0.5,
                  }}
                >
                  {tier.amount}
                </Typography>

                <Typography variant="subtitle1" sx={{ color: theme.palette.text.secondary, mb: 3 }}>
                  {tier.period}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DonationTiers;
