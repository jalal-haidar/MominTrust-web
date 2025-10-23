import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import { PageTitle } from "@/components/styled";

const Hero = styled(Box)(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  padding: theme.spacing(2),
  maxWidth: 960,
}));

type AboutHeroProps = {
  title?: string;
  subtitle?: string;
};

const AboutHero: React.FC<AboutHeroProps> = ({
  title = "About Momin Trust",
  subtitle = "We exist to support students and families through targeted educational and humanitarian programs that preserve dignity and promote long-term opportunity.",
}) => {
  return (
    <Box sx={{ mb: 5 }} component="main">
      <Hero role="region" aria-labelledby="about-hero-title">
        <PageTitle id="about-hero-title" variant="h3">
          {title}
        </PageTitle>
        <Typography sx={{ mt: 2 }} variant="h6">
          {subtitle}
        </Typography>
      </Hero>
    </Box>
  );
};

export default AboutHero;
