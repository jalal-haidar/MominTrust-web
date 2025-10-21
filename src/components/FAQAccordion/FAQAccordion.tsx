import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme, alpha } from '@mui/material/styles';

export type FAQItemType = {
  id: string;
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs: FAQItemType[];
  title?: string;
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
}) => {
  const theme = useTheme();
  const [expandedFaq, setExpandedFaq] = useState<string | false>(false);

  const handleFaqChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ mb: 10, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 600, mb: 5 }}>
        {title}
      </Typography>

      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expandedFaq === faq.id}
            onChange={handleFaqChange(faq.id)}
            sx={{
              mb: 2,
              boxShadow: 'none',
              borderRadius: '8px !important',
              border: '1px solid',
              borderColor: 'divider',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${faq.id}-content`}
              id={`${faq.id}-header`}
              sx={{
                backgroundColor:
                  expandedFaq === faq.id
                    ? alpha(theme.palette.primary.main, 0.08)
                    : alpha(theme.palette.background.paper, 0.8),
                borderRadius: '8px',
                '&.Mui-expanded': {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ borderTop: '1px solid', borderColor: 'divider', py: 2 }}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQAccordion;
