import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import { SectionTitle } from '@/components/styled';

export type FAQ = {
  question: string;
  answer: string;
};

type ContactFAQProps = {
  faqs: FAQ[];
  title?: string;
};

const defaultFAQs: FAQ[] = [
  {
    question: 'How can I donate to Momin Trust?',
    answer:
      'You can donate online through our secure payment portal on the Donations page, send a check to our mailing address, or contact us for wire transfer instructions.',
  },
  {
    question: 'Are donations tax-deductible?',
    answer:
      'Yes, Momin Trust is a registered 501(c)(3) non-profit organization. All donations are tax-deductible to the extent allowed by law.',
  },
  {
    question: 'How can I volunteer with Momin Trust?',
    answer:
      'We welcome volunteers who are passionate about education! Please contact us through this form with "Volunteer Opportunities" selected as your reason, and we\'ll get back to you with current openings.',
  },
];

const ContactFAQ: React.FC<ContactFAQProps> = ({
  faqs = defaultFAQs,
  title = 'Frequently Asked Questions',
}) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3, md: 4 },
        borderRadius: 2,
        mt: 4,
      }}
    >
      <SectionTitle variant="h5" gutterBottom>
        {title}
      </SectionTitle>

      <Box sx={{ mt: 3 }}>
        {faqs.map((faq, index) => (
          <Box
            // If the FAQ doesn't have a unique ID, we use a stable identifier based on the question
            key={`faq-${faq.question.replaceAll(/\s+/g, '-').toLowerCase().substring(0, 20)}`}
            sx={{ mb: index < faqs.length - 1 ? 3 : 0 }}
          >
            <Typography variant="h6" gutterBottom>
              {faq.question}
            </Typography>
            <Typography paragraph>{faq.answer}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default ContactFAQ;
