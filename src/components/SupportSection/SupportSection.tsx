import React from "react";
import { Grid, Typography, Box, Button, Chip } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

import { PageSection, SectionTitle } from "@/components/styled";
import DonationCard from "@/components/DonationCard/DonationCard";

interface SupportSectionProps {
  title?: string;
  donationCardProps?: {
    title: string;
    raised: number;
    target: number;
    donorCount: number;
    impactItems: Array<{
      icon: React.ElementType;
      amount: number;
      description: string;
    }>;
    onDonateCheckout: (amount: number) => void;
  };
  contentTitle?: string;
  contentDescription?: string;
  fundPercentage?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

const SupportSection: React.FC<SupportSectionProps> = ({
  title = "Support Our Work",
  donationCardProps = {
    title: "General Fund",
    raised: 230000,
    target: 500000,
    donorCount: 142,
    impactItems: [
      {
        icon: SchoolIcon,
        amount: 25,
        description: "School supplies for one month",
      },
      {
        icon: MenuBookIcon,
        amount: 50,
        description: "Textbooks for one semester",
      },
      {
        icon: LocalLibraryIcon,
        amount: 100,
        description: "Full scholarship for one month",
      },
    ],
    onDonateCheckout: (amount) => alert(`Proceed to checkout: $${amount}`),
  },
  contentTitle = "Your Contribution Makes a Difference",
  contentDescription = "Your donation helps cover tuition, school supplies, and mentoring for talented students who otherwise could not continue their education.",
  fundPercentage = "90%",
  ctaButtonText = "Learn More About Donating",
  onCtaClick = () => {
    globalThis.window.location.href = "/donors";
  },
}) => {
  return (
    <PageSection>
      <SectionTitle variant="h4">{title}</SectionTitle>

      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <DonationCard
            title={donationCardProps.title}
            raised={donationCardProps.raised}
            target={donationCardProps.target}
            donorCount={donationCardProps.donorCount}
            impactItems={donationCardProps.impactItems}
            onDonateCheckout={donationCardProps.onDonateCheckout}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
            {contentTitle}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {contentDescription}
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <strong>{fundPercentage} of funds</strong> go directly to student
            support through:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
            <Chip
              icon={<SchoolIcon />}
              label="Tuition"
              color="primary"
              variant="outlined"
            />
            <Chip
              icon={<MenuBookIcon />}
              label="Textbooks"
              color="primary"
              variant="outlined"
            />
            <Chip
              icon={<AutoStoriesIcon />}
              label="School Supplies"
              color="primary"
              variant="outlined"
            />
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontStyle: "italic" }}
          >
            We ensure dignity and privacy for all beneficiaries.{" "}
            <strong>Your support changes lives.</strong>
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              color="secondary"
              href="/donors"
              size="large"
              onClick={(e) => {
                e.preventDefault();
                onCtaClick();
              }}
              sx={{
                mt: 1,
                px: 3,
                py: 1,
                fontWeight: 600,
              }}
            >
              {ctaButtonText}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </PageSection>
  );
};

export default SupportSection;
