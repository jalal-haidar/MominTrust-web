import { Card, CardContent, Typography, Button, LinearProgress, Box } from '@mui/material';

const DonationCard = ({
  title,
  raised,
  target,
  onDonate,
}: {
  title: string;
  raised: number;
  target: number;
  onDonate?: () => void;
}) => {
  const progress = Math.min(100, (raised / target) * 100 || 0);

  return (
    <Card sx={{ boxShadow: 2 }}>
      <CardContent>
        <Typography component="h3" variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          ${raised.toLocaleString()} raised of ${target.toLocaleString()}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 12, borderRadius: 6, mb: 2 }}
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Campaign progress"
        />
        <Box>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={onDonate}
            aria-label={`Donate to ${title}`}
            sx={{ py: 1.5, fontWeight: 700 }}
          >
            Donate Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DonationCard;
