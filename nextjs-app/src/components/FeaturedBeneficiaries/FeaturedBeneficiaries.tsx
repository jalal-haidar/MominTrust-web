import React from "react";
import { Box, Grid, Typography, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { PageSection, SectionTitle } from "@/components/styled";
import BeneficiaryCard, {
  BeneficiaryPreview,
} from "@/components/BeneficiaryCard/BeneficiaryCard";

interface FeaturedBeneficiariesProps {
  title?: string;
  description?: string;
  beneficiaries: BeneficiaryPreview[];
  viewAllButtonText?: string;
  onViewAllClick?: () => void;
}

const FeaturedBeneficiaries: React.FC<FeaturedBeneficiariesProps> = ({
  title = "Featured Beneficiaries",
  description = "Every student's privacy is protected while showcasing their academic achievements.",
  beneficiaries,
  viewAllButtonText = "View All Beneficiaries",
  onViewAllClick = () => {
    if (typeof globalThis.window !== "undefined") {
      globalThis.window.location.href = "/beneficiaries";
    }
  },
}) => {
  const theme = useTheme();

  return (
    <PageSection>
      <SectionTitle
        variant="h4"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" }, // Smaller on mobile
          mb: { xs: 1, sm: 1.5 }, // Less margin on mobile
        }}
      >
        {title}
      </SectionTitle>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          mb: { xs: 2, sm: 3 }, // Less margin on mobile
          fontSize: { xs: "0.875rem", sm: "1rem" }, // Smaller font on mobile
        }}
      >
        {description}
      </Typography>

      {/* Mobile horizontal scroll container for extra small screens */}
      <Box
        sx={{
          display: { xs: "block", sm: "none" }, // Only show on xs screens
          overflowX: "auto",
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
          scrollSnapType: "x mandatory", // Enable scroll snapping
          pb: 2, // Add padding for scrollbar
          mx: -2, // Negative margin to compensate for parent padding
          px: 2,
          // Hide scrollbar in most browsers but keep functionality
          msOverflowStyle: "none", // IE and Edge
          scrollbarWidth: "none", // Firefox
          "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, Opera
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            gap: 3, // Increase gap between cards
          }}
        >
          {beneficiaries.map((b) => (
            <Box
              key={b.id}
              sx={{
                width: "85vw", // Slightly wider cards
                maxWidth: "300px", // Increased max width
                scrollSnapAlign: "center", // Snap to center for better UX
                pr: 1, // Add some padding on the right
              }}
            >
              <BeneficiaryCard b={b} />
            </Box>
          ))}
        </Box>
        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 2,
            mb: 1,
            color: theme.palette.text.secondary,
            fontStyle: "italic",
            // Add indicator dots for better UX
            "&::before": {
              content: '"• • •"',
              letterSpacing: "5px",
              display: "block",
              mb: 0.5,
            },
          }}
        >
          Swipe to see more
        </Typography>
      </Box>

      {/* Standard grid layout for larger screens */}
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Grid container spacing={4} alignItems="stretch" sx={{ mt: 1 }}>
          {beneficiaries.map((b) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 3 }}
              key={b.id}
              sx={{ display: "flex" }}
            >
              <Box sx={{ width: "100%", display: "flex" }}>
                <BeneficiaryCard b={b} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{ mt: { xs: 3, sm: 4 }, display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            onViewAllClick();
          }}
          href="/beneficiaries"
          endIcon={<ArrowForwardIcon />}
          sx={{
            mt: { xs: 1, sm: 2 },
            width: { xs: "100%", sm: "auto" }, // Full width on mobile
            py: { xs: 1.5, sm: 1 }, // Taller button on mobile
            px: { xs: 2, sm: 3 }, // More horizontal padding
            borderRadius: { xs: 2, sm: 28 }, // Pill shaped on larger screens
            borderWidth: 2, // Thicker border
            fontWeight: "medium",
            textTransform: "none", // Don't capitalize text
            "&:hover": {
              borderWidth: 2,
              backgroundColor: "rgba(0, 0, 0, 0.04)",
            },
          }}
        >
          {viewAllButtonText}
        </Button>
      </Box>
    </PageSection>
  );
};

export default FeaturedBeneficiaries;
