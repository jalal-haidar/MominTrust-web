import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { SectionTitle } from '@/components/styled';

type LocationMapProps = {
  title?: string;
  height?: number | string;
  mapUrl?: string;
  placeholder?: string;
};

const LocationMap: React.FC<LocationMapProps> = ({
  title = 'Our Location',
  height = 400,
  mapUrl,
  placeholder = 'Interactive Map Would Be Displayed Here',
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        mt: 4,
        overflow: 'hidden',
      }}
    >
      <SectionTitle variant="h5" gutterBottom>
        {title}
      </SectionTitle>

      <Box
        sx={{
          width: '100%',
          height: height,
          bgcolor: 'rgba(200, 200, 200, 0.3)',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {mapUrl ? (
          <iframe
            src={mapUrl}
            title="Location Map"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
          />
        ) : (
          <Typography variant="body1">{placeholder}</Typography>
        )}
      </Box>
    </Paper>
  );
};

export default LocationMap;
