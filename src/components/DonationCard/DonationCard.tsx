import { useState } from 'react';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Snackbar,
  Alert,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PeopleIcon from '@mui/icons-material/People';
import CampaignProgressBar from '@/components/CampaignProgressBar/CampaignProgressBar';

const presetAmounts = [25, 50, 100];

// Impact items for different donation amounts
const defaultImpactItems = [
  { icon: SchoolIcon, amount: 25, description: 'Supplies for one student for a month' },
  { icon: MenuBookIcon, amount: 50, description: 'Textbooks for one semester' },
  { icon: AutoStoriesIcon, amount: 100, description: 'Full scholarship for one month' },
];

type DonationCardProps = {
  title: string;
  raised: number;
  target: number;
  donorCount?: number;
  impactItems?: Array<{
    icon: React.ElementType;
    amount: number;
    description: string;
  }>;
  // optional callback when proceeding to checkout with selected amount
  onDonateCheckout?: (amount: number) => void;
};

const DonationCard = ({
  title,
  raised,
  target,
  donorCount,
  impactItems = defaultImpactItems,
  onDonateCheckout,
}: DonationCardProps) => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number | ''>(presetAmounts[0]);
  const [currentRaised, setCurrentRaised] = useState<number>(raised);
  const [snackOpen, setSnackOpen] = useState(false);
  const theme = useTheme();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const handlePreset = (v: number) => setAmount(v);

  const handleProceed = () => {
    const value = typeof amount === 'number' ? amount : Number(amount) || 0;
    // optimistic update
    setCurrentRaised((prev) => prev + value);
    setSnackOpen(true);
    // stub: call callback if provided
    if (onDonateCheckout) onDonateCheckout(value);
    // close modal
    closeModal();
  };

  // Calculate percentage raised
  const percentageRaised = Math.floor((currentRaised / target) * 100);

  return (
    <>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          overflow: 'hidden',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: theme.palette.primary.main,
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Title and stats row */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              mb: 2,
            }}
          >
            <Typography component="h3" variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 0 }}>
              {title}
            </Typography>
            {donorCount && (
              <Chip
                icon={<PeopleIcon fontSize="small" />}
                label={`${donorCount} Donors`}
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
          </Box>

          {/* Progress information */}
          <Box sx={{ mb: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
              <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
                ${currentRaised.toLocaleString()}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ alignSelf: 'flex-end' }}>
                Goal: ${target.toLocaleString()}
              </Typography>
            </Box>
            <CampaignProgressBar
              raised={currentRaised}
              target={target}
              size="md"
              aria-label="Campaign progress"
            />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, textAlign: 'right' }}>
              {percentageRaised}% Funded
            </Typography>
          </Box>

          {/* Impact section */}
          <Divider sx={{ my: 2 }} />
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
            Your donation provides:
          </Typography>

          <List disablePadding sx={{ mb: 2 }}>
            {impactItems.slice(0, 3).map((item, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <item.icon fontSize="small" color="secondary" />
                </ListItemIcon>
                <ListItemText
                  primary={`$${item.amount} - ${item.description}`}
                  primaryTypographyProps={{
                    variant: 'body2',
                    fontWeight: 500,
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* Donate button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={openModal}
            aria-label={`Donate to ${title}`}
            size="large"
            sx={{
              py: 1.5,
              fontWeight: 700,
              mt: 1,
              bgcolor: theme.palette.primary.main,
              '&:hover': {
                bgcolor: theme.palette.primary.dark,
                transform: 'translateY(-2px)',
                boxShadow: 4,
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            Donate Now
          </Button>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="donation-dialog-title"
        PaperProps={{
          sx: { borderRadius: 2, maxWidth: 450 },
        }}
      >
        <DialogTitle
          id="donation-dialog-title"
          sx={{
            pb: 1,
            borderBottom: `3px solid ${theme.palette.primary.main}`,
            fontWeight: 700,
          }}
        >
          Donate to {title}
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Your donation helps provide education to deserving students who might otherwise miss
            this opportunity.
          </Typography>
          <Stack spacing={3} sx={{ mt: 1 }}>
            <Box>
              <Typography variant="subtitle2" fontWeight="600" gutterBottom>
                Choose an amount to donate
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  flexWrap: 'wrap',
                }}
              >
                {presetAmounts.map((p) => (
                  <Button
                    key={p}
                    variant={amount === p ? 'contained' : 'outlined'}
                    onClick={() => handlePreset(p)}
                    size="large"
                    sx={{
                      minWidth: 80,
                      fontWeight: amount === p ? 700 : 500,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    ${p}
                  </Button>
                ))}
              </Box>
            </Box>

            <TextField
              label="Custom amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
              inputProps={{ min: 0 }}
              fullWidth
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
              InputProps={{
                startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>,
              }}
            />

            <Box sx={{ bgcolor: 'rgba(0, 109, 119, 0.05)', p: 2, borderRadius: 1 }}>
              <Typography variant="body2" color="primary.main">
                Your donation of <strong>${typeof amount === 'number' ? amount : 0}</strong> could
                provide:
              </Typography>
              {amount && Number(amount) >= 25 && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  • School supplies for {Math.floor(Number(amount) / 25)} student
                  {Math.floor(Number(amount) / 25) !== 1 ? 's' : ''}
                </Typography>
              )}
              {amount && Number(amount) >= 50 && (
                <Typography variant="body2">
                  • Textbooks for {Math.floor(Number(amount) / 50)} semester
                  {Math.floor(Number(amount) / 50) !== 1 ? 's' : ''}
                </Typography>
              )}
              {amount && Number(amount) >= 100 && (
                <Typography variant="body2">
                  • Full scholarship for {Math.floor(Number(amount) / 100)} month
                  {Math.floor(Number(amount) / 100) !== 1 ? 's' : ''}
                </Typography>
              )}
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={closeModal} variant="text">
            Cancel
          </Button>
          <Button
            onClick={handleProceed}
            variant="contained"
            color="primary"
            disabled={!amount || Number(amount) <= 0}
            sx={{
              px: 4,
              fontWeight: 600,
              '&:hover': {
                boxShadow: 2,
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.2s ease',
            }}
          >
            Proceed to checkout
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackOpen} autoHideDuration={4000} onClose={() => setSnackOpen(false)}>
        <Alert
          onClose={() => setSnackOpen(false)}
          severity="success"
          sx={{ width: '100%', boxShadow: 3 }}
          variant="filled"
        >
          Thank you for your donation!
        </Alert>
      </Snackbar>
    </>
  );
};

export default DonationCard;
