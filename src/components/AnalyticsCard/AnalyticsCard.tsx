import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  growth?: number;
  subtitle?: string;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, value, icon, growth, subtitle }) => {
  const theme = useTheme();
  const [animatedValue, setAnimatedValue] = useState<string>('0');

  useEffect(() => {
    const stringValue = value.toString();
    const numericMatch = stringValue.match(/^([^\d]*)([\d,]+)(.*)$/);

    if (!numericMatch) {
      setAnimatedValue(stringValue);
      return;
    }

    const prefix = numericMatch[1] || '';
    const numericPart = numericMatch[2].replaceAll(',', '');
    const suffix = numericMatch[3] || '';

    const targetNumber = Number.parseInt(numericPart, 10);
    const duration = 1500;
    const steps = 30;
    const increment = targetNumber / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep += 1;
      const current = Math.min(Math.round(increment * currentStep), targetNumber);
      const formattedNumber = current.toLocaleString();
      setAnimatedValue(`${prefix}${formattedNumber}${suffix}`);

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValue(stringValue);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card
      sx={{
        height: '100%',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
              {animatedValue}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="caption" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              backgroundColor: `${theme.palette.primary.main}20`,
              borderRadius: '50%',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {icon}
          </Box>
        </Box>
        {growth !== undefined && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            {growth > 0 ? (
              <TrendingUp sx={{ color: theme.palette.success.main, mr: 0.5 }} />
            ) : (
              <TrendingDown sx={{ color: theme.palette.error.main, mr: 0.5 }} />
            )}
            <Typography
              variant="body2"
              sx={{
                color: growth > 0 ? theme.palette.success.main : theme.palette.error.main,
                fontWeight: 'medium',
              }}
            >
              {growth > 0 ? '+' : ''}
              {growth}% this month
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;
