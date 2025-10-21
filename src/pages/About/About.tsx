import Divider from '@mui/material/Divider';
import VerifiedIcon from '@mui/icons-material/Verified';
import PeopleIcon from '@mui/icons-material/People';
import TimelineIcon from '@mui/icons-material/Timeline';
import { useTheme } from '@mui/material/styles';

import Meta from '@/components/Meta';
import { PageContainer } from '@/components/styled';
import AboutHero from '@/components/AboutHero';
import MissionSection from '@/components/MissionSection';
import ValueCards, { ValueCardType } from '@/components/ValueCards';
import HistorySection from '@/components/HistorySection';
import GetInvolvedSection from '@/components/GetInvolvedSection';

function About() {
  const theme = useTheme();

  // Define value cards data
  const valueCards: ValueCardType[] = [
    {
      id: 'transparency',
      title: 'Transparency',
      description:
        'We believe in full transparency about how donations are used, with detailed reporting on outcomes and impact metrics available to all stakeholders.',
      icon: <VerifiedIcon color="primary" sx={{ mr: 1 }} />,
      color: theme.palette.primary.main,
    },
    {
      id: 'dignity',
      title: 'Dignity',
      description:
        'We present all beneficiaries with dignity and respect, protecting their privacy while highlighting their achievements and potential.',
      icon: <PeopleIcon color="secondary" sx={{ mr: 1 }} />,
      color: theme.palette.secondary.main,
    },
    {
      id: 'impact',
      title: 'Long-term Impact',
      description:
        'We focus on sustainable solutions that create lasting change through education, mentoring, and community support systems.',
      icon: <TimelineIcon color="info" sx={{ mr: 1 }} />,
      color: theme.palette.primary.light,
    },
  ];

  return (
    <>
      <Meta title="About Momin Trust" />
      <PageContainer>
        <AboutHero />
        <MissionSection />
        <ValueCards values={valueCards} />
        <HistorySection />
        <Divider sx={{ my: 4 }} />
        <GetInvolvedSection />
      </PageContainer>
    </>
  );
}

export default About;
