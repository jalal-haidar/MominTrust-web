import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { SectionTitle } from '@/components/styled';
import { styled } from '@mui/material/styles';

// Section styled component
const SectionContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: 960,
  padding: '12px 8px',
}));

interface GetInvolvedSectionProps {
  title?: string;
  content?: string;
  homeButtonText?: string;
  contactButtonText?: string;
  onHomeClick?: () => void;
  onContactClick?: () => void;
}

const GetInvolvedSection = ({
  title = 'Learn More / Get Involved',
  content = 'Visit our Contact page to reach out, explore donation opportunities on the Donors page, or read our Impact reports for transparency on outcomes.',
  homeButtonText = 'Back to Home',
  contactButtonText = 'Contact Us',
  onHomeClick = () => {
    globalThis.window.location.href = '/';
  },
  onContactClick = () => {
    globalThis.window.location.href = '/contact';
  },
}: GetInvolvedSectionProps) => {
  return (
    <SectionContainer component="section" aria-labelledby="contact-title">
      <SectionTitle id="contact-title" variant="h5">
        {title}
      </SectionTitle>
      <Typography sx={{ mt: 1 }} variant="body1">
        {content}
      </Typography>

      <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
        <Button
          href="/"
          variant="contained"
          startIcon={<HomeIcon />}
          onClick={(e) => {
            e.preventDefault();
            onHomeClick();
          }}
        >
          {homeButtonText}
        </Button>

        <Button
          href="/contact"
          variant="outlined"
          onClick={(e) => {
            e.preventDefault();
            onContactClick();
          }}
        >
          {contactButtonText}
        </Button>
      </Box>
    </SectionContainer>
  );
};

export default GetInvolvedSection;
