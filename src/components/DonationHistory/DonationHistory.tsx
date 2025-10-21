import React from 'react';
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
  useTheme,
} from '@mui/material';
import { CalendarToday as CalendarIcon, Category as CategoryIcon } from '@mui/icons-material';

interface Donation {
  id: string;
  date: string;
  amount: number;
  program: string;
  status: 'completed' | 'processing' | 'recurring';
}

interface DonationHistoryProps {
  donations: Donation[];
  limit?: number;
}

const DonationHistory: React.FC<DonationHistoryProps> = ({ donations, limit = 5 }) => {
  const theme = useTheme();
  const displayedDonations = donations.slice(0, limit);

  const getStatusColor = (status: Donation['status']) => {
    switch (status) {
      case 'completed':
        return theme.palette.success.main;
      case 'processing':
        return theme.palette.warning.main;
      case 'recurring':
        return theme.palette.info.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const getStatusLabel = (status: Donation['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'processing':
        return 'Processing';
      case 'recurring':
        return 'Recurring';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom fontWeight="bold">
        Recent Donations
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Your contribution history
      </Typography>

      <List sx={{ width: '100%' }}>
        {displayedDonations.map((donation, index) => (
          <React.Fragment key={donation.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                px: 0,
                py: 2,
                transition: 'background-color 0.2s',
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemText
                primary={
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="bold">
                      ${donation.amount.toLocaleString()}
                    </Typography>
                    <Chip
                      label={getStatusLabel(donation.status)}
                      size="small"
                      sx={{
                        backgroundColor: `${getStatusColor(donation.status)}20`,
                        color: getStatusColor(donation.status),
                        fontWeight: 'bold',
                        fontSize: '0.7rem',
                      }}
                    />
                  </Box>
                }
                secondary={
                  <Box sx={{ mt: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        mb: 0.5,
                      }}
                    >
                      <CategoryIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {donation.program}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                      <Typography variant="caption" color="text.secondary">
                        {formatDate(donation.date)}
                      </Typography>
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            {index < displayedDonations.length - 1 && <Divider component="li" />}
          </React.Fragment>
        ))}
      </List>

      {donations.length > limit && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography
            variant="body2"
            color="primary"
            sx={{
              cursor: 'pointer',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            View all {donations.length} donations
          </Typography>
        </Box>
      )}
    </Paper>
  );
};

export default DonationHistory;
