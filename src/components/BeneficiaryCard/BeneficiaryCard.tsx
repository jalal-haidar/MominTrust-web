import { Card, CardContent, Avatar, Typography, Box, Chip, useTheme } from '@mui/material';

export type BeneficiaryPreview = {
  id: string;
  initials: string;
  grade: number;
  region?: string;
  academicScore?: number;
};

const BeneficiaryCard = ({ b }: { b: BeneficiaryPreview }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        transition: 'transform 200ms',
        '&:hover': { transform: 'translateY(-6px)' },
        boxShadow: 1,
      }}
      role="group"
      aria-labelledby={`beneficiary-${b.id}-grade`}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
            aria-hidden
          >
            {b.initials}
          </Avatar>
          <Box>
            <Typography
              id={`beneficiary-${b.id}-grade`}
              component="div"
              variant="subtitle1"
              sx={{ fontWeight: 600 }}
            >
              Grade {b.grade}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {b.region ?? 'Unknown region'}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Chip label={`Academic: ${b.academicScore ?? 'N/A'}`} size="small" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BeneficiaryCard;
