import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme, alpha } from '@mui/material/styles';

// Icons
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaymentsIcon from '@mui/icons-material/Payments';
import HandshakeIcon from '@mui/icons-material/Handshake';

type PaymentMethodsProps = {
  title?: string;
};

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ title = 'Payment Methods' }) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
        {title}
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="payment methods"
          variant="fullWidth"
          sx={{ mb: 3 }}
        >
          <Tab
            label="Credit Card"
            icon={<CreditCardIcon />}
            iconPosition="start"
            sx={{ fontWeight: 600 }}
          />
          <Tab
            label="Bank Transfer"
            icon={<PaymentsIcon />}
            iconPosition="start"
            sx={{ fontWeight: 600 }}
          />
          <Tab
            label="Corporate Giving"
            icon={<HandshakeIcon />}
            iconPosition="start"
            sx={{ fontWeight: 600 }}
          />
        </Tabs>
      </Box>

      <Box sx={{ p: 3 }}>
        {activeTab === 0 && (
          <Box>
            <Typography variant="body1" paragraph>
              Make a secure donation using your credit or debit card. Our payment processing is
              secure and encrypted to ensure your information is protected.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {/* Credit Card Form would go here */}
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" gutterBottom>
                  Credit card donations are processed immediately, and you&apos;ll receive a
                  confirmation email with your tax receipt.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                    background: alpha(theme.palette.primary.main, 0.05),
                    borderRadius: 2,
                  }}
                >
                  <CreditCardIcon
                    sx={{ fontSize: 60, color: theme.palette.primary.main, opacity: 0.7 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {activeTab === 1 && (
          <Box>
            <Typography variant="body1" paragraph>
              Direct bank transfers are available for those who prefer this method. Please use the
              following information to make your contribution.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                    Bank Name:
                  </Typography>
                  <Typography>First Community Bank</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                    Account Name:
                  </Typography>
                  <Typography>Momin Trust Educational Fund</Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                    Account Number:
                  </Typography>
                  <Typography>XXXX-XXXX-7890</Typography>
                </Box>
                <Box>
                  <Typography variant="subtitle2" gutterBottom fontWeight="bold">
                    Reference:
                  </Typography>
                  <Typography>Please include your name in the reference</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                    height: '100%',
                    background: alpha(theme.palette.primary.main, 0.05),
                    borderRadius: 2,
                  }}
                >
                  <AccountBalanceIcon
                    sx={{ fontSize: 60, color: theme.palette.primary.main, opacity: 0.7 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}

        {activeTab === 2 && (
          <Box>
            <Typography variant="body1" paragraph>
              Corporate partnerships and matching gift programs make a significant impact on our
              educational initiatives.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="subtitle2" paragraph>
                  We work with corporations of all sizes to create meaningful partnerships that
                  align with your corporate social responsibility goals.
                </Typography>
                <Typography variant="body2" paragraph>
                  Benefits of corporate partnerships include:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body2">Employee engagement opportunities</Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Recognition in annual reports and events
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">
                      Custom impact reporting for your company
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body2">Matched giving programs for employees</Typography>
                  </li>
                </ul>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Contact us at <strong>partners@momintrust.org</strong> to discuss opportunities.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 3,
                    height: '100%',
                    background: alpha(theme.palette.primary.main, 0.05),
                    borderRadius: 2,
                  }}
                >
                  <HandshakeIcon
                    sx={{ fontSize: 60, color: theme.palette.primary.main, opacity: 0.7 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PaymentMethods;
