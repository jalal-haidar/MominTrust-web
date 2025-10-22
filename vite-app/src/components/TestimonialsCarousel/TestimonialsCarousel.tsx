import { Box, Typography, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  organization: string;
  avatar: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  activeTestimonial: number;
  setActiveTestimonial: (index: number) => void;
  animationVisible: boolean;
}

const TestimonialsCarousel = ({
  testimonials,
  activeTestimonial,
  setActiveTestimonial,
  animationVisible,
}: TestimonialsCarouselProps) => {
  return (
    <Box
      sx={{
        mb: 6,
        px: 2,
        py: 4,
        borderRadius: 2,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? 'background.paper' : '#f5f5f5',
        opacity: animationVisible ? 1 : 0,
        transform: animationVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s',
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'medium' }}
      >
        What Our Partners Say
      </Typography>

      <Box sx={{ position: 'relative', minHeight: 200, px: { xs: 0, md: 6 } }}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={testimonial.id}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              opacity: activeTestimonial === index ? 1 : 0,
              transition: 'opacity 0.8s ease',
              zIndex: activeTestimonial === index ? 1 : 0,
            }}
          >
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{
                fontStyle: 'italic',
                mb: 3,
                fontSize: '1.1rem',
                px: { xs: 2, sm: 4, md: 6 },
              }}
            >
              <FormatQuoteIcon
                fontSize="small"
                sx={{ mr: 1, opacity: 0.6, transform: 'rotate(180deg)' }}
              />
              {testimonial.quote}
              <FormatQuoteIcon fontSize="small" sx={{ ml: 1, opacity: 0.6 }} />
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 56, height: 56, mr: 2 }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.title}, {testimonial.organization}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        {testimonials.map((testimonial, index) => (
          <Box
            key={`dot-${testimonial.id}`}
            onClick={() => setActiveTestimonial(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: activeTestimonial === index ? 'primary.main' : 'grey.300',
              mx: 0.5,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialsCarousel;
