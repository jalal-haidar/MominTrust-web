import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

type Props = {
  raised: number;
  target: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  'aria-label'?: string;
};

const CampaignProgressBar = ({
  raised,
  target,
  size = 'md',
  showText = true,
  'aria-label': ariaLabel,
}: Props) => {
  const theme = useTheme();
  const progress = Math.min(100, target > 0 ? (raised / target) * 100 : 0);

  const height = size === 'sm' ? 8 : size === 'lg' ? 16 : 12;

  // Determine color based on progress
  const getColor = () => {
    if (progress >= 100) return theme.palette.success.main;
    if (progress >= 75) return theme.palette.primary.main;
    if (progress >= 50) return theme.palette.secondary.main;
    return theme.palette.primary.main; // Default color
  };

  return (
    <Box>
      {showText && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          ${raised.toLocaleString()} raised of ${target.toLocaleString()}
        </Typography>
      )}
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height,
          borderRadius: height / 2,
          backgroundColor: theme.palette.grey[200],
          '& .MuiLinearProgress-bar': {
            borderRadius: height / 2,
            backgroundColor: getColor(),
            backgroundImage:
              progress >= 100
                ? `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.success.main} 100%)`
                : undefined,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        }}
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
