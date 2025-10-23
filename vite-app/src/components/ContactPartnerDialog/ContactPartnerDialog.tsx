import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  TextField,
} from '@mui/material';

interface ContactPartnerDialogProps {
  open: boolean;
  onClose: () => void;
  partnerName: string;
}

const ContactPartnerDialog = ({ open, onClose, partnerName }: ContactPartnerDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle>Contact {partnerName}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ mb: 2 }}>
          Fill out this form to get in touch with {partnerName}. Our partnership coordinator will
          facilitate the introduction.
        </DialogContentText>

        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Your Name" variant="outlined" fullWidth required />
          <TextField label="Email Address" type="email" variant="outlined" fullWidth required />
          <TextField label="Phone (Optional)" variant="outlined" fullWidth />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth required />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button variant="contained" onClick={onClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContactPartnerDialog;
