import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import { SectionTitle } from "@/components/styled";

interface GetInvolvedSectionProps {
  title?: string;
  content?: string;
  homeButtonText?: string;
  contactButtonText?: string;
  onHomeClick?: () => void;
  onContactClick?: () => void;
}

const GetInvolvedSection = ({
  title = "Learn More / Get Involved",
  content = "Visit our Contact page to reach out, explore donation opportunities on the Donors page, or read our Impact reports for transparency on outcomes.",
  homeButtonText = "Back to Home",
  contactButtonText = "Contact Us",
  onHomeClick = () => {
    globalThis.window.location.href = "/";
  },
  onContactClick = () => {
    globalThis.window.location.href = "/contact";
  },
}: GetInvolvedSectionProps) => {
  return (
    <Box
      component="section"
      aria-labelledby="contact-title"
      sx={{
        width: "100%",
        maxWidth: 960,
        padding: "12px 8px",
      }}
    >
      <SectionTitle id="contact-title" variant="h5">
        {title}
      </SectionTitle>
      <Typography sx={{ mt: 1 }} variant="body1">
        {content}
      </Typography>

      <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
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
    </Box>
  );
};

export default GetInvolvedSection;
