import React from 'react';
import Typography from '@mui/material/Typography';

import { PageSection, SectionTitle } from '@/components/styled';

type MissionSectionProps = {
  title?: string;
  description?: string;
};

const MissionSection: React.FC<MissionSectionProps> = ({
  title = 'Our Mission',
  description = 'Momin Trust connects donors with measurable impact projects focused on student sponsorship, educational resources, and transparent reporting. We prioritize privacy, cultural sensitivity, and stewardship of funds.',
}) => {
  return (
    <PageSection>
      <SectionTitle id="mission-title" variant="h4">
        {title}
      </SectionTitle>
      <Typography sx={{ mt: 2 }} variant="body1">
        {description}
      </Typography>
    </PageSection>
  );
};

export default MissionSection;
