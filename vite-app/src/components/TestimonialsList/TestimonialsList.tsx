import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

export type TestimonialType = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

type TestimonialsListProps = {
  testimonials: TestimonialType[];
  title?: string;
};

const TestimonialsList: React.FC<TestimonialsListProps> = ({
  testimonials,
  title = 'Donor Testimonials',
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 600, mb: 6 }}>
        {title}
      </Typography>

      <Grid container spacing={4} sx={{ px: { xs: 1, md: 4 } }}>
        {testimonials.map((testimonial) => (
          <Grid item xs={12} md={4} key={testimonial.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                p: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardContent sx={{ flex: 1, position: 'relative', pt: 4 }}>
                <FormatQuoteIcon
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: -5,
                    color: alpha(theme.palette.secondary.main, 0.2),
                    fontSize: 60,
                    transform: 'rotate(180deg)',
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontStyle: 'italic', position: 'relative', zIndex: 1, mb: 4 }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsList;
