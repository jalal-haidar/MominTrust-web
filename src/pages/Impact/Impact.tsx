import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import SuccessStoryCard from '@/components/SuccessStoryCard';
import ImpactMetrics from '@/components/ImpactMetrics';

const sampleStories = [
  {
    id: 's1',
    headline: 'From Classroom to University Scholarship',
    summary: 'An anonymized success story about academic achievement supported by donors.',
    detail:
      'After receiving mentorship and financial support, the student was able to complete secondary education with top grades and received a university scholarship. Personal details have been anonymized to protect privacy.',
    initials: 'M.S',
  },
  {
    id: 's2',
    headline: 'Community Impact Through Mentorship',
    summary: 'How mentorship and financial aid helped a student to lead community projects.',
    detail:
      'By participating in a structured mentorship program, the beneficiary developed leadership skills and launched community initiatives that benefited 200+ peers. Sensitive information is redacted.',
    initials: 'R.K',
  },
  {
    id: 's3',
    headline: 'Overcoming Barriers with Education',
    summary: 'A brief, privacy-preserving account of success supported by Momin Trust.',
    detail:
      'This account highlights the transformative effect of consistent support. Specific names and locations are withheld to preserve dignity and privacy.',
    initials: 'S.A',
  },
];

function Impact() {
  const theme = useTheme();
  return (
    <>
      <Meta title="Impact" />

      <Box sx={{ mt: 2, mx: { xs: -2, md: 0 } }}>
        <ImpactMetrics />
      </Box>

      <Box
        sx={{
          mt: 10,
          mb: 6,
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            position: 'relative',
            display: 'inline-block',
            mb: 1,
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '25%',
              width: '50%',
              height: 3,
              background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, transparent)`,
              borderRadius: 2,
            },
          }}
        >
          Success Stories
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          align="center"
          sx={{
            mt: 3,
            mb: 5,
            maxWidth: 700,
            mx: 'auto',
            px: 2,
            fontWeight: 400,
          }}
        >
          Real-world examples of how our programs create lasting positive impact while respecting
          privacy.
        </Typography>

        <Grid container spacing={3} sx={{ px: { xs: 2, md: 4 }, mt: 4 }}>
          {sampleStories.map((s) => (
            <Grid key={s.id} item xs={12} sm={6} md={4}>
              <SuccessStoryCard
                id={s.id}
                headline={s.headline}
                summary={s.summary}
                initials={s.initials}
                detail={s.detail}
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          mt: 8,
          mb: 4,
          py: 6,
          px: 3,
          bgcolor: 'primary.light',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography component="h2" variant="h4" gutterBottom>
          Help Us Make a Difference
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
          Your contributions directly support education initiatives and create opportunities for
          children in need. Join our community of donors and see the impact you can make.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Typography
              component="a"
              href="/donors"
              variant="button"
              sx={{
                display: 'inline-block',
                py: 1.5,
                px: 4,
                bgcolor: 'primary.main',
                color: 'primary.contrastText',
                borderRadius: 1,
                fontWeight: 'bold',
                textDecoration: 'none',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              Become a Donor
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              component="a"
              href="/contact"
              variant="button"
              sx={{
                display: 'inline-block',
                py: 1.5,
                px: 4,
                bgcolor: 'background.paper',
                color: 'primary.main',
                borderRadius: 1,
                fontWeight: 'bold',
                textDecoration: 'none',
                '&:hover': {
                  bgcolor: 'background.default',
                },
              }}
            >
              Contact Us
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Impact;
