import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  raised: number;
  target: number;
  size?: 'sm' | 'md' | 'lg';
  'aria-label'?: string;
};

const CampaignProgressBar = ({ raised, target, size = 'md', 'aria-label': ariaLabel }: Props) => {
  const progress = Math.min(100, target > 0 ? (raised / target) * 100 : 0);

  const height = size === 'sm' ? 8 : size === 'lg' ? 16 : 12;

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
        ${raised.toLocaleString()} raised of ${target.toLocaleString()}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height, borderRadius: 8 }}
        role="progressbar"
        aria-label={ariaLabel ?? 'Campaign progress'}
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </Box>
  );
};

export default CampaignProgressBar;
