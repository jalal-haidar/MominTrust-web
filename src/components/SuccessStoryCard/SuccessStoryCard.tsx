import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  id: string;
  headline: string;
  summary: string;
  initials?: string; // anonymized author/beneficiary initials
  // optional longer detail to show in the modal; if absent the summary is used
  detail?: string;
};

const SuccessStoryCard = ({ id, headline, summary, initials = 'A.B', detail }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ boxShadow: 1 }} role="article" aria-labelledby={`story-${id}-title`}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Avatar aria-hidden>{initials}</Avatar>
            <Typography id={`story-${id}-title`} variant="h6" component="h3">
              {headline}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Button
              onClick={handleOpen}
              variant="outlined"
              size="small"
              aria-label={`Read story ${headline}`}
            >
              Read story
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={`dialog-${id}-title`}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id={`dialog-${id}-title`}>
          {headline}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
            size="large"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" paragraph>
            {detail ?? summary}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SuccessStoryCard;
