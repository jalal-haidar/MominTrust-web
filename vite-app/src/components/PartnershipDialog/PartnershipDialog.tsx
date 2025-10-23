import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Typography,
} from '@mui/material';

interface PartnershipDialogProps {
  open: boolean;
  onClose: () => void;
}

const PartnershipDialog = ({ open, onClose }: PartnershipDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>Partner With Momin Trust</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Partnering with Momin Trust offers numerous benefits while supporting education for
          underprivileged talented students:
        </DialogContentText>

        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Partnership Benefits</Typography>
          <ul>
            <li>Recognition on our website and promotional materials</li>
            <li>Increased visibility in the community</li>
            <li>Corporate social responsibility fulfillment</li>
            <li>Networking opportunities with other educational partners</li>
            <li>Direct impact on students&apos; educational outcomes</li>
          </ul>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Ways to Partner
          </Typography>
          <ul>
            <li>
              <strong>Educational Institutions:</strong> Offer scholarships, tuition discounts, or
              special admission considerations
            </li>
            <li>
              <strong>Bookstores & Suppliers:</strong> Provide discounts on educational materials or
              donate resources
            </li>
            <li>
              <strong>Organizations:</strong> Sponsor programs, provide mentorship, or offer
              specialized training
            </li>
          </ul>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Partnership Process
          </Typography>
          <ol>
            <li>Fill out our partnership inquiry form</li>
            <li>Meet with our partnership coordinator</li>
            <li>Define the scope and terms of partnership</li>
            <li>Sign a simple memorandum of understanding</li>
            <li>Begin making an impact together!</li>
          </ol>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button variant="contained" onClick={onClose} component="a" href="/contact">
          Contact Us to Partner
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PartnershipDialog;
