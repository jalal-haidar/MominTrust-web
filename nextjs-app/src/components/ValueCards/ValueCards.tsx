import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";

import { PageSection } from "@/components/styled";

// Define the types for value cards
export type ValueCardType = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
};

type ValueCardsProps = {
  values: ValueCardType[];
};

const ValueCards: React.FC<ValueCardsProps> = ({ values }) => {
  const theme = useTheme();

  return (
    <PageSection sx={{ my: 5 }}>
      <Grid container spacing={4}>
        {values.map((value, index) => {
          // Define border colors based on index if not provided
          let borderColor = value.color;
          if (!borderColor) {
            if (index === 0) {
              borderColor = theme.palette.primary.main;
            } else if (index === 1) {
              borderColor = theme.palette.secondary.main;
            } else {
              borderColor = theme.palette.primary.light;
            }
          }

          return (
            <Grid size={{ xs: 12, md: 4 }} key={value.id}>
              <Card
                elevation={1}
                sx={{
                  height: "100%",
                  borderLeft: `4px solid ${borderColor}`,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {value.icon}
                    <Typography variant="h6">{value.title}</Typography>
                  </Box>
                  <Typography variant="body2">{value.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </PageSection>
  );
};

export default ValueCards;
