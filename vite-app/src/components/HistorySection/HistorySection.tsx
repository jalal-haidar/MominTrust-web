import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { PageSection, SectionTitle } from '@/components/styled';

interface HistorySectionProps {
  title?: string;
  content?: string;
  quoteText?: string;
  quoteAuthor?: string;
}

const HistorySection = ({
  title = 'Our History',
  content = 'Founded in 2019, Momin Trust began with a mission to identify brilliant students from underprivileged backgrounds and provide the financial support they need to continue their education. What started with supporting 5 students has now grown to a program that supports over 50 talented individuals across multiple regions.',
  quoteText = 'Education is the most powerful weapon which you can use to change the world.',
  quoteAuthor = 'Nelson Mandela',
}: HistorySectionProps) => {
  const theme = useTheme();

  return (
    <PageSection>
      <SectionTitle id="history-title" variant="h4">
        {title}
      </SectionTitle>
      <Typography sx={{ mt: 2, mb: 4 }} variant="body1">
        {content}
      </Typography>

      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)',
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          mb: 4,
        }}
      >
        <Typography variant="h6" gutterBottom>
          &ldquo;{quoteText}&rdquo;
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'right' }}>
          — {quoteAuthor}
        </Typography>
      </Box>
    </PageSection>
  );
};

export default HistorySection;
