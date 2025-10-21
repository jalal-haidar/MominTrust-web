import { Grid, Card, CardMedia, CardContent, Box, Typography, Chip, Button } from '@mui/material';

interface Partner {
  id: string;
  name: string;
  description: string;
  type: string;
  location: string;
  logo: string;
  website: string;
  contribution: string;
}

interface PartnerGridProps {
  partners: Partner[];
  getTypeLabel: (type: string) => string;
  getTypeColor: (type: string) => string;
}

const PartnerGrid = ({ partners, getTypeLabel, getTypeColor }: PartnerGridProps) => {
  return (
    <Grid container spacing={3} sx={{ mb: 6 }}>
      {partners.map((partner) => (
        <Grid item xs={12} sm={6} md={4} key={partner.id}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: 4,
              },
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={partner.logo}
              alt={`${partner.name} logo`}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  mb: 1,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" component="h3">
                  {partner.name}
                </Typography>
                <Chip
                  label={getTypeLabel(partner.type)}
                  size="small"
                  sx={{
                    backgroundColor: `${getTypeColor(partner.type)}20`,
                    color: getTypeColor(partner.type),
                    fontWeight: 500,
                  }}
                />
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Location: {partner.location}
              </Typography>

              <Typography variant="body2" paragraph>
                {partner.description}
              </Typography>

              <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 'auto' }}>
                Contribution:
              </Typography>
              <Typography variant="body2" paragraph>
                {partner.contribution}
              </Typography>

              <Button
                variant="outlined"
                size="small"
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mt: 'auto' }}
              >
                Visit Website
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PartnerGrid;
