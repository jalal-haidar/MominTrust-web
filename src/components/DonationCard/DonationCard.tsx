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
} from '@mui/material';
import CampaignProgressBar from '@/components/CampaignProgressBar/CampaignProgressBar';

const presetAmounts = [25, 50, 100];

const DonationCard = ({
  title,
  raised,
  target,
  onDonateCheckout,
}: {
  title: string;
  raised: number;
  target: number;
  // optional callback when proceeding to checkout with selected amount
  onDonateCheckout?: (amount: number) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number | ''>(presetAmounts[0]);
  const [currentRaised, setCurrentRaised] = useState<number>(raised);
  const [snackOpen, setSnackOpen] = useState(false);

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

  return (
    <>
      <Card sx={{ boxShadow: 2 }}>
        <CardContent>
          <Typography component="h3" variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            ${currentRaised.toLocaleString()} raised of ${target.toLocaleString()}
          </Typography>
          <CampaignProgressBar
            raised={currentRaised}
            target={target}
            size="md"
            aria-label="Campaign progress"
          />
          <Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={openModal}
              aria-label={`Donate to ${title}`}
              sx={{ py: 1.5, fontWeight: 700 }}
            >
              Donate Now
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={open} onClose={closeModal} aria-labelledby="donation-dialog-title">
        <DialogTitle id="donation-dialog-title">Donate to {title}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <Typography variant="body2">Choose an amount to donate</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {presetAmounts.map((p) => (
                <Button
                  key={p}
                  variant={amount === p ? 'contained' : 'outlined'}
                  onClick={() => handlePreset(p)}
                >
                  ${p}
                </Button>
              ))}
            </Box>
            <TextField
              label="Custom amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
              inputProps={{ min: 0 }}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleProceed} variant="contained" color="primary">
            Proceed to checkout
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={snackOpen} autoHideDuration={4000} onClose={() => setSnackOpen(false)}>
        <Alert onClose={() => setSnackOpen(false)} severity="success" sx={{ width: '100%' }}>
          Thank you for your donation!
        </Alert>
      </Snackbar>
    </>
  );
};

export default DonationCard;
