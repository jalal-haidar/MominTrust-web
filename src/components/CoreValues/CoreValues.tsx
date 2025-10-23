import React from "react";
import { Grid, Typography, Box, useTheme } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import { ContentCard, PageSection, SectionTitle } from "@/components/styled";

export type CoreValueType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
};

interface CoreValuesProps {
  title?: string;
  values?: CoreValueType[];
}

const CoreValues: React.FC<CoreValuesProps> = ({
  title = "Our Core Values",
  values,
}) => {
  const theme = useTheme();

  // Default core values if none are provided
  const defaultValues: CoreValueType[] = [
    {
      id: "education",
      title: "Education First",
      description:
        "We believe education is the key to breaking cycles of poverty and creating long-term opportunity.",
      icon: <SchoolIcon />,
      color: theme.palette.primary.main,
    },
    {
      id: "dignity",
      title: "Dignity & Privacy",
      description:
        "We present all beneficiaries with respect, maintaining dignity and protecting personal identities.",
      icon: <VolunteerActivismIcon />,
      color: theme.palette.secondary.main,
    },
    {
      id: "transparency",
      title: "Transparent Impact",
      description:
        "We provide clear reporting on how funds are used and the measurable differences they make.",
      icon: <TrendingUpIcon />,
      color: theme.palette.primary.light,
    },
  ];

  const displayValues = values || defaultValues;

  return (
    <PageSection>
      <SectionTitle variant="h4">{title}</SectionTitle>

      <Grid container spacing={4} sx={{ mt: 3 }}>
        {displayValues.map((value) => (
          <Grid size={{ xs: 12, md: 4 }} key={value.id}>
            <ContentCard elevation={2}>
              <Box sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: value.color,
                      borderRadius: "50%",
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: theme.palette.getContrastText(
                        value.color || theme.palette.primary.main
                      ),
                      mr: 2,
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h6" fontWeight="600">
                    {value.title}
                  </Typography>
                </Box>
                <Typography variant="body1">{value.description}</Typography>
              </Box>
            </ContentCard>
          </Grid>
        ))}
      </Grid>
    </PageSection>
  );
};

export default CoreValues;
