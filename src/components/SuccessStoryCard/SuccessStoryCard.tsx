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
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

// Icons
import CloseIcon from '@mui/icons-material/Close';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Define categories for stories to add visual context
type StoryCategory = 'education' | 'community' | 'achievement';

// Helper function to get icon and color based on category
const getCategoryDetails = (
  headline: string,
): { category: StoryCategory; icon: JSX.Element; color: string } => {
  const lowerHeadline = headline.toLowerCase();

  if (
    lowerHeadline.includes('education') ||
    lowerHeadline.includes('classroom') ||
    lowerHeadline.includes('scholarship')
  ) {
    return {
      category: 'education',
      icon: <SchoolIcon fontSize="small" />,
      color: '#2196f3', // blue
    };
  } else if (lowerHeadline.includes('community') || lowerHeadline.includes('mentorship')) {
    return {
      category: 'community',
      icon: <GroupsIcon fontSize="small" />,
      color: '#4caf50', // green
    };
  } else {
    return {
      category: 'achievement',
      icon: <EmojiEventsIcon fontSize="small" />,
      color: '#ff9800', // orange
    };
  }
};

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
  const theme = useTheme();
  const { category, icon, color } = getCategoryDetails(headline);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 20px rgba(0,0,0,0.12)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            backgroundColor: color,
          },
        }}
        role="article"
        aria-labelledby={`story-${id}-title`}
      >
        <CardContent sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>
          {/* Category chip */}
          <Chip
            icon={icon}
            label={category.charAt(0).toUpperCase() + category.slice(1)}
            size="small"
            sx={{
              alignSelf: 'flex-start',
              mb: 2,
              backgroundColor: `${color}20`,
              color: color,
              fontWeight: 500,
              '& .MuiChip-icon': {
                color: color,
              },
            }}
          />

          {/* Avatar and headline */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Avatar
              aria-hidden
              sx={{
                bgcolor: `${color}80`,
                color: theme.palette.getContrastText(`${color}80`),
                fontWeight: 'bold',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              {initials}
            </Avatar>
            <Typography
              id={`story-${id}-title`}
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                lineHeight: 1.3,
              }}
            >
              {headline}
            </Typography>
          </Box>

          {/* Quote icon for testimonial feel */}
          <Box sx={{ position: 'relative', mb: 1 }}>
            <FormatQuoteIcon
              sx={{
                position: 'absolute',
                top: -5,
                left: -8,
                color: `${color}30`,
                fontSize: 24,
                transform: 'rotate(180deg)',
              }}
            />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                pl: 3,
                fontStyle: 'italic',
                minHeight: '60px',
                mb: 2,
              }}
            >
              {summary}
            </Typography>
          </Box>

          <Box sx={{ mt: 'auto' }}>
            <Divider sx={{ my: 2 }} />
            <Button
              onClick={handleOpen}
              variant="text"
              size="medium"
              aria-label={`Read story ${headline}`}
              sx={{
                color: color,
                '&:hover': {
                  backgroundColor: `${color}10`,
                },
              }}
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
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
            overflow: 'hidden',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {/* Decorative top bar */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              backgroundColor: color,
            }}
          />

          <DialogTitle
            sx={{
              m: 0,
              p: 3,
              pb: 2,
              display: 'flex',
              alignItems: 'flex-start',
            }}
            id={`dialog-${id}-title`}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
              <Avatar
                sx={{
                  bgcolor: `${color}80`,
                  color: theme.palette.getContrastText(`${color}80`),
                  fontWeight: 'bold',
                  height: 48,
                  width: 48,
                }}
              >
                {initials}
              </Avatar>
              <Box>
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {headline}
                </Typography>
                <Chip
                  icon={icon}
                  label={category.charAt(0).toUpperCase() + category.slice(1)}
                  size="small"
                  sx={{
                    backgroundColor: `${color}20`,
                    color: color,
                    fontWeight: 500,
                    '& .MuiChip-icon': {
                      color: color,
                    },
                  }}
                />
              </Box>
            </Box>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                color: theme.palette.grey[500],
                '&:hover': {
                  backgroundColor: theme.palette.grey[100],
                },
              }}
              size="large"
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent sx={{ p: 3, pt: 2 }}>
            <Box sx={{ position: 'relative', mb: 3 }}>
              <FormatQuoteIcon
                sx={{
                  position: 'absolute',
                  top: -5,
                  left: -8,
                  color: `${color}30`,
                  fontSize: 32,
                  transform: 'rotate(180deg)',
                }}
              />
              <Typography
                variant="body1"
                paragraph
                sx={{
                  pl: 3,
                  pr: 3,
                  fontStyle: 'italic',
                  color: theme.palette.text.secondary,
                }}
              >
                {summary}
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" paragraph>
              {detail ?? summary}
            </Typography>
          </DialogContent>

          <DialogActions sx={{ p: 2.5, pt: 1 }}>
            <Button
              onClick={handleClose}
              sx={{
                color,
                '&:hover': {
                  backgroundColor: `${color}10`,
                },
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default SuccessStoryCard;
