import { Box, Divider } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

import Hero from '@/components/Hero/Hero';
import ImpactMetrics from '@/components/ImpactMetrics/ImpactMetrics';
import Meta from '@/components/Meta/Meta';
import { BeneficiaryPreview } from '@/components/BeneficiaryCard/BeneficiaryCard';
import CoreValues from '@/components/CoreValues';
import FeaturedBeneficiaries from '@/components/FeaturedBeneficiaries';
import SupportSection from '@/components/SupportSection';
import { PageContainer, PageSection, PageTitle } from '@/components/styled';

const sampleBeneficiaries: BeneficiaryPreview[] = [
  { id: 'b1', initials: 'A.B', grade: 7, region: 'Lahore', academicScore: 92 },
  { id: 'b2', initials: 'S.K', grade: 9, region: 'Karachi', academicScore: 88 },
  {
    id: 'b3',
    initials: 'M.R',
    grade: 10,
    region: 'Peshawar',
    academicScore: 95,
  },
  {
    id: 'b4',
    initials: 'N.T',
    grade: 8,
    region: 'Islamabad',
    academicScore: 90,
  },
];

const Landing = () => {
  return (
    <Box component="main">
      <Meta title="Momin Trust" />
      <Hero />

      <PageContainer maxWidth="lg">
        {/* Impact Section */}
        <PageSection>
          <PageTitle variant="h4">Our Impact</PageTitle>
          <ImpactMetrics />
        </PageSection>

        <Divider sx={{ my: 5 }} />

        {/* Core Values Section */}
        <CoreValues />

        <Divider sx={{ my: 5 }} />

        {/* Beneficiaries Section */}
        {/* <FeaturedBeneficiaries beneficiaries={sampleBeneficiaries} /> */}
        {/* <Divider sx={{ my: 5 }} /> */}

        {/* Donation Section */}
        <SupportSection
          donationCardProps={{
            title: 'General Fund',
            raised: 230000,
            target: 500000,
            donorCount: 142,
            impactItems: [
              {
                icon: SchoolIcon,
                amount: 25,
                description: 'School supplies for one month',
              },
              {
                icon: MenuBookIcon,
                amount: 50,
                description: 'Textbooks for one semester',
              },
              {
                icon: LocalLibraryIcon,
                amount: 100,
                description: 'Full scholarship for one month',
              },
            ],
            onDonateCheckout: (amount) => alert(`Proceed to checkout: $${amount}`),
          }}
        />
      </PageContainer>
    </Box>
  );
};

export default Landing;
