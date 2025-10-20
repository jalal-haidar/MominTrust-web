import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Chip,
  useTheme,
  CardActionArea,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export type BeneficiaryPreview = {
  id: string;
  initials: string;
  grade: number;
  region?: string;
  academicScore?: number;
};

const BeneficiaryCard = ({ b }: { b: BeneficiaryPreview }) => {
  const theme = useTheme();
  const isHighAchiever = b.academicScore && b.academicScore > 80;

  return (
    <Card
      sx={{
        transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6,
        },
        overflow: 'visible',
        position: 'relative',
        height: '100%', // Ensures consistent card height
      }}
      role="group"
      aria-labelledby={`beneficiary-${b.id}-grade`}
    >
      {isHighAchiever && (
        <Box
          sx={{
            position: 'absolute',
            top: -10,
            right: -10,
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 2,
            zIndex: 1,
          }}
        >
          <EmojiEventsIcon fontSize="small" />
        </Box>
      )}

      <CardActionArea sx={{ height: '100%' }}>
        <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                fontSize: '1.5rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
              aria-hidden
            >
              {b.initials}
            </Avatar>
            <Box sx={{ minHeight: '72px' }}>
              <Typography
                id={`beneficiary-${b.id}-grade`}
                component="div"
                variant="h6"
                sx={{
                  fontWeight: 600,
                  whiteSpace: 'nowrap', // Prevents text wrapping
                }}
              >
                Grade {b.grade} Student
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {b.region ?? 'Unknown region'}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 'auto',
              pt: 2.5,
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Chip
              label={`Academic: ${b.academicScore ?? 'N/A'}`}
              size="small"
              color={isHighAchiever ? 'secondary' : 'default'}
              sx={{
                fontWeight: isHighAchiever ? 'bold' : 'normal',
                borderRadius: '6px',
              }}
            />
            <Typography variant="caption" color="text.secondary">
              ID: {b.id.slice(-4)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BeneficiaryCard;
