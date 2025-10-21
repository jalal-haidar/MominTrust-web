import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  Chip,
  useTheme,
} from '@mui/material';
import { Today } from '@mui/icons-material';

interface Donation {
  id: number;
  amount: number;
  donor: string;
  date: string;
  type: string;
}

interface RecentDonationsProps {
  donations: Donation[];
}

const RecentDonations: React.FC<RecentDonationsProps> = ({ donations }) => {
  const theme = useTheme();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card sx={{ height: 'fit-content' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Today sx={{ mr: 1, color: theme.palette.primary.main }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Recent Donations
          </Typography>
        </Box>
        <List sx={{ p: 0 }}>
          {donations.map((donation, index) => (
            <React.Fragment key={donation.id}>
              <ListItem sx={{ px: 0 }}>
                <ListItemIcon>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: theme.palette.secondary.main,
                      fontSize: '0.875rem',
                    }}
                  >
                    {donation.donor === 'Anonymous' ? '?' : donation.donor.charAt(0)}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        {formatCurrency(donation.amount)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {donation.date}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        {donation.donor}
                      </Typography>
                      <Chip
                        label={donation.type}
                        size="small"
                        sx={{
                          ml: 1,
                          height: 20,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>
                  }
                />
              </ListItem>
              {index < donations.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecentDonations;
