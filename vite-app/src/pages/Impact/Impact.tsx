import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Meta from '@/components/Meta';
// FullSizeCenteredFlexBox removed (unused)
import SuccessStoryCard from '@/components/SuccessStoryCard';
import ImpactMetrics from '@/components/ImpactMetrics';
import ImpactVisualizer from '@/components/ImpactVisualizer';
import SectionTitle from '@/components/SectionTitle';
import MultiButtonCTA from '@/components/MultiButtonCTA';

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
  return (
    <>
      <Meta title="Impact" />

      <Box sx={{ mt: 2, mx: { xs: -2, md: 0 } }}>
        <ImpactMetrics />
      </Box>

      <Box sx={{ mt: 6, mx: { xs: -2, md: 0 } }}>
        <ImpactVisualizer />
      </Box>

      <Box
        sx={{
          mt: 10,
          mb: 6,
        }}
      >
        <SectionTitle
          title="Success Stories"
          subtitle="Real-world examples of how our programs create lasting positive impact while respecting privacy."
        />

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

      <MultiButtonCTA
        title="Help Us Make a Difference"
        description="Your contributions directly support education initiatives and create opportunities for children in need. Join our community of donors and see the impact you can make."
        buttons={[
          {
            text: 'Become a Donor',
            link: '/donors',
            primary: true,
          },
          {
            text: 'Contact Us',
            link: '/contact',
          },
        ]}
      />
    </>
  );
}

export default Impact;
