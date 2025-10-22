import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { SectionTitle } from '@/components/styled';

type SocialPlatform = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube';

type SocialLink = {
  platform: SocialPlatform;
  url: string;
};

type SocialLinksProps = {
  links?: SocialLink[];
  title?: string;
  iconSize?: number;
};

const defaultLinks: SocialLink[] = [
  { platform: 'facebook', url: 'https://facebook.com/momintrust' },
  { platform: 'twitter', url: 'https://twitter.com/momintrust' },
  { platform: 'instagram', url: 'https://instagram.com/momintrust' },
  { platform: 'linkedin', url: 'https://linkedin.com/company/momintrust' },
];

const SocialLinks: React.FC<SocialLinksProps> = ({
  links = defaultLinks,
  title = 'Follow Us',
  iconSize = 40,
}) => {
  const theme = useTheme();

  const getIcon = (platform: SocialPlatform) => {
    switch (platform) {
      case 'facebook':
        return <FacebookIcon sx={{ fontSize: iconSize, color: theme.palette.primary.main }} />;
      case 'twitter':
        return <TwitterIcon sx={{ fontSize: iconSize, color: theme.palette.primary.main }} />;
      case 'instagram':
        return <InstagramIcon sx={{ fontSize: iconSize, color: theme.palette.primary.main }} />;
      case 'linkedin':
        return <LinkedInIcon sx={{ fontSize: iconSize, color: theme.palette.primary.main }} />;
      case 'youtube':
        return <YouTubeIcon sx={{ fontSize: iconSize, color: theme.palette.primary.main }} />;
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 2,
        bgcolor:
          theme.palette.mode === 'light' ? 'rgba(245, 245, 245, 0.9)' : 'rgba(66, 66, 66, 0.9)',
      }}
    >
      <SectionTitle variant="h5" gutterBottom>
        {title}
      </SectionTitle>

      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 3 }}>
        {links.map((link) => (
          <Box
            key={link.platform}
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.3s ease',
              },
            }}
          >
            {getIcon(link.platform)}
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default SocialLinks;
