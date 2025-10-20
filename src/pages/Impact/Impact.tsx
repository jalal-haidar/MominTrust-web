import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';
import SuccessStoryCard from '@/components/SuccessStoryCard';

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
      <FullSizeCenteredFlexBox>
        <Typography component="h1" variant="h3">
          Impact Metrics
        </Typography>
        <Typography sx={{ mt: 2 }}>
          This dashboard will surface statistics and success stories while protecting beneficiary
          privacy.
        </Typography>
      </FullSizeCenteredFlexBox>

      <Grid container spacing={2} sx={{ px: { xs: 2, md: 4 }, mt: 4 }}>
        {sampleStories.map((s) => (
          <Grid key={s.id} item xs={12} sm={6} md={4}>
            <SuccessStoryCard
              id={s.id}
              headline={s.headline}
              summary={s.summary}
              initials={s.initials}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Impact;
