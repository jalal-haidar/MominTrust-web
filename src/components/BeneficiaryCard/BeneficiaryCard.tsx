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
        height: '100%',
        width: '100%', // Ensure card takes full width of its container
        // Mobile optimizations
        boxShadow: { xs: 2, sm: 3 }, // Increased shadow for better visibility
        border: { xs: `1px solid ${theme.palette.divider}`, sm: 'none' }, // Subtle border on mobile
        borderRadius: { xs: 2, sm: '8px' }, // More rounded corners
        WebkitTapHighlightColor: 'transparent', // Remove tap highlight on mobile
      }}
      role="group"
      aria-labelledby={`beneficiary-${b.id}-grade`}
    >
      {isHighAchiever && (
        <Box
          sx={{
            position: 'absolute',
            top: { xs: -12, sm: -15 }, // Moved higher up
            right: { xs: -8, sm: -12 }, // More to the right
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
            borderRadius: '50%',
            width: { xs: 36, sm: 40 }, // Slightly larger
            height: { xs: 36, sm: 40 },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)', // Better shadow
            zIndex: 1,
            border: `2px solid ${theme.palette.background.paper}`, // Add border
          }}
        >
          <EmojiEventsIcon fontSize="small" />
        </Box>
      )}

      <CardActionArea
        sx={{
          height: '100%',
          padding: { xs: 1, sm: 0 }, // Add slight padding for better touch on mobile
          '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)', // Visual feedback on touch
          },
        }}
      >
        <CardContent
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            padding: { xs: 1.5, sm: 2 }, // Adjusted padding for mobile
            '&:last-child': { paddingBottom: { xs: 1.5, sm: 2 } }, // Override MUI default
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 1.5, sm: 2 }, // Tighter spacing on mobile
            }}
          >
            <Avatar
              sx={{
                width: { xs: 50, sm: 64 }, // Smaller on mobile
                height: { xs: 50, sm: 64 }, // Smaller on mobile
                bgcolor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                fontSize: { xs: '1.25rem', sm: '1.5rem' }, // Smaller font on mobile
                fontWeight: 'bold',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                border: `2px solid ${theme.palette.background.paper}`,
              }}
              aria-hidden
            >
              {b.initials}
            </Avatar>
            <Box
              sx={{
                minHeight: { xs: '60px', sm: '72px' }, // Shorter on mobile
                overflow: 'hidden',
                flex: 1, // Allow box to take remaining width
              }}
            >
              <Typography
                id={`beneficiary-${b.id}-grade`}
                component="div"
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: '1rem', sm: '1.25rem' }, // Smaller on mobile
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap', // Prevents text wrapping
                }}
              >
                Grade {b.grade} Student
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap', // Prevent wrapping on mobile
                }}
              >
                {b.region ?? 'Unknown region'}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 'auto',
              pt: { xs: 1.5, sm: 2.5 }, // Less padding on mobile
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center', // Better vertical alignment
            }}
          >
            <Chip
              label={`Academic: ${b.academicScore ?? 'N/A'}`}
              size="small"
              color={isHighAchiever ? 'secondary' : 'default'}
              sx={{
                fontWeight: isHighAchiever ? 'bold' : 'medium',
                borderRadius: '6px',
                height: { xs: 28, sm: 32 }, // Slightly taller
                fontSize: { xs: '0.75rem', sm: '0.8125rem' }, // Smaller text on mobile
                '& .MuiChip-label': {
                  px: { xs: 1.5, sm: 2 }, // More padding for better visibility
                },
                boxShadow: isHighAchiever ? '0 2px 4px rgba(0,0,0,0.1)' : 'none', // Add shadow for high achievers
                border: isHighAchiever ? `1px solid ${theme.palette.secondary.light}` : 'none', // Add border for high achievers
              }}
            />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontSize: { xs: '0.675rem', sm: '0.75rem' }, // Smaller on mobile
              }}
            >
              ID: {b.id.slice(-4)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BeneficiaryCard;
