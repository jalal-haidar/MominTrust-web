# Common Tasks and Examples

## Domain-Specific Tasks for Momin Trust

### Creating a Beneficiary Profile Component

```typescript
// src/components/BeneficiaryCard/BeneficiaryCard.tsx
import type { FC } from 'react';
import { Card, CardContent, Typography, Avatar, Box, Chip } from '@mui/material';
import type { Beneficiary } from './types';

interface BeneficiaryCardProps {
  beneficiary: Beneficiary;
  showSensitiveInfo?: boolean;
}

export const BeneficiaryCard: FC<BeneficiaryCardProps> = ({
  beneficiary,
  showSensitiveInfo = false
}) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Avatar src={beneficiary.photoUrl} sx={{ mr: 2 }}>
            {beneficiary.name.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="h6">{beneficiary.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              Grade {beneficiary.currentGrade}
            </Typography>
          </Box>
        </Box>

        <Chip
          label={`Academic Score: ${beneficiary.academicScore}%`}
          color="primary"
          size="small"
          sx={{ mr: 1, mb: 1 }}
        />

        {showSensitiveInfo && (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Monthly Support: ${beneficiary.monthlySupportAmount}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

// types.ts
export interface Beneficiary {
  id: string;
  name: string;
  currentGrade: number;
  academicScore: number;
  photoUrl?: string;
  monthlySupportAmount: number;
  schoolName: string;
  dateJoined: Date;
  status: 'active' | 'graduated' | 'pending';
}
```

### Creating Donor Engagement Features

```typescript
// src/components/DonationCard/DonationCard.tsx
import type { FC } from 'react';
import { Card, CardContent, Typography, Button, LinearProgress, Box } from '@mui/material';
import type { Campaign } from './types';

interface DonationCardProps {
  campaign: Campaign;
  onDonate: (campaignId: string) => void;
}

export const DonationCard: FC<DonationCardProps> = ({ campaign, onDonate }) => {
  const progressPercentage = (campaign.raisedAmount / campaign.targetAmount) * 100;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {campaign.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {campaign.description}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2">
            ${campaign.raisedAmount.toLocaleString()} raised of ${campaign.targetAmount.toLocaleString()} goal
          </Typography>
          <LinearProgress variant="determinate" value={progressPercentage} sx={{ mt: 1 }} />
        </Box>

        <Button
          variant="contained"
          onClick={() => onDonate(campaign.id)}
          fullWidth
        >
          Donate Now
        </Button>
      </CardContent>
    </Card>
  );
};
```

### Creating Impact Metrics Dashboard

```typescript
// src/components/ImpactMetrics/ImpactMetrics.tsx
import type { FC } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { School, People, AttachMoney, TrendingUp } from '@mui/icons-material';

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const MetricCard: FC<MetricCardProps> = ({ title, value, icon, color }) => (
  <Card>
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ color, mr: 2 }}>{icon}</Box>
        <Box>
          <Typography variant="h4" component="div">
            {value}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export const ImpactMetrics: FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Children Supported"
          value="1,247"
          icon={<People />}
          color="primary.main"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Schools Reached"
          value="85"
          icon={<School />}
          color="secondary.main"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Funds Raised"
          value="$2.3M"
          icon={<AttachMoney />}
          color="success.main"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <MetricCard
          title="Success Rate"
          value="94%"
          icon={<TrendingUp />}
          color="info.main"
        />
      </Grid>
    </Grid>
  );
};
```

## AI-Powered Features Implementation

### Creating an AI Donation Recommendation System

```typescript
// src/components/AIRecommendations/DonationRecommendations.tsx
import type { FC } from 'react';
import { Card, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import { TrendingUp, Psychology, Star } from '@mui/icons-material';

interface DonationRecommendation {
  id: string;
  amount: number;
  reason: string;
  confidence: number;
  impact: string;
  aiGenerated: boolean;
}

interface AIRecommendationsProps {
  donorId: string;
  recommendations: DonationRecommendation[];
  onAcceptRecommendation: (recommendation: DonationRecommendation) => void;
}

export const AIRecommendations: FC<AIRecommendationsProps> = ({
  donorId,
  recommendations,
  onAcceptRecommendation,
}) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <Psychology sx={{ mr: 1 }} />
        AI-Powered Donation Suggestions
      </Typography>

      {recommendations.map((rec) => (
        <Card key={rec.id} sx={{ mb: 2, border: rec.confidence > 0.8 ? 2 : 1, borderColor: rec.confidence > 0.8 ? 'primary.main' : 'grey.300' }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="h5" color="primary">
                ${rec.amount}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Chip
                  icon={<TrendingUp />}
                  label={`${Math.round(rec.confidence * 100)}% match`}
                  size="small"
                  color={rec.confidence > 0.8 ? 'success' : 'default'}
                />
                {rec.aiGenerated && (
                  <Chip
                    icon={<Psychology />}
                    label="AI Generated"
                    size="small"
                    variant="outlined"
                  />
                )}
              </Box>
            </Box>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {rec.reason}
            </Typography>

            <Typography variant="body2" sx={{ mb: 2 }}>
              <strong>Expected Impact:</strong> {rec.impact}
            </Typography>

            <Button
              variant={rec.confidence > 0.8 ? 'contained' : 'outlined'}
              startIcon={rec.confidence > 0.8 ? <Star /> : undefined}
              onClick={() => onAcceptRecommendation(rec)}
              fullWidth
            >
              {rec.confidence > 0.8 ? 'Recommended Donation' : 'Consider This Amount'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
```

### Creating an AI Chatbot Component

```typescript
// src/components/AIChatbot/AIChatbot.tsx
import type { FC } from 'react';
import { useState } from 'react';
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  Typography,
  IconButton,
  Paper,
  Chip
} from '@mui/material';
import { Chat, Close, Send, Psychology } from '@mui/icons-material';

interface ChatMessage {
  id: string;
  message: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  aiConfidence?: number;
}

export const AIChatbot: FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      message: 'Hello! I\'m here to help you learn about Momin Trust and answer any questions about donations or our beneficiaries. How can I assist you today?',
      sender: 'ai',
      timestamp: new Date(),
      aiConfidence: 0.95
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate AI processing
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: generateAIResponse(currentMessage),
        sender: 'ai',
        timestamp: new Date(),
        aiConfidence: Math.random() * 0.3 + 0.7 // 70-100% confidence
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    // Simple keyword-based responses (in production, this would be an AI API call)
    const input = userInput.toLowerCase();

    if (input.includes('donate') || input.includes('donation')) {
      return 'I\'d be happy to help you with donations! You can make a one-time donation or set up monthly support for our beneficiaries. Would you like to know about our current campaigns or learn how your donation makes an impact?';
    }

    if (input.includes('beneficiary') || input.includes('student')) {
      return 'Our beneficiaries are talented students from government schools who excel academically but need financial support. We currently support over 1,200 students across 85 schools. Would you like to see some success stories or learn about our selection process?';
    }

    return 'Thank you for your question! Our team works hard to support talented students through education. Is there something specific about Momin Trust\'s mission or programs you\'d like to know more about?';
  };

  return (
    <>
      <Fab
        color="primary"
        onClick={() => setOpen(true)}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}
      >
        <Chat />
      </Fab>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        sx={{ '& .MuiDialog-paper': { height: '70vh' } }}
      >
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Psychology sx={{ mr: 1 }} />
            Momin Trust AI Assistant
          </Box>
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ flexGrow: 1, overflow: 'auto', mb: 2 }}>
              {messages.map((msg) => (
                <Paper
                  key={msg.id}
                  sx={{
                    p: 2,
                    mb: 1,
                    ml: msg.sender === 'user' ? 4 : 0,
                    mr: msg.sender === 'ai' ? 4 : 0,
                    bgcolor: msg.sender === 'user' ? 'primary.light' : 'grey.100'
                  }}
                >
                  <Typography variant="body2">{msg.message}</Typography>
                  {msg.sender === 'ai' && msg.aiConfidence && (
                    <Chip
                      size="small"
                      label={`AI Confidence: ${Math.round(msg.aiConfidence * 100)}%`}
                      sx={{ mt: 1 }}
                    />
                  )}
                </Paper>
              ))}

              {isTyping && (
                <Paper sx={{ p: 2, mr: 4, bgcolor: 'grey.100' }}>
                  <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                    AI is typing...
                  </Typography>
                </Paper>
              )}
            </Box>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                placeholder="Ask about donations, beneficiaries, or our mission..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                disabled={isTyping}
              />
              <IconButton
                onClick={handleSendMessage}
                disabled={!currentMessage.trim() || isTyping}
                color="primary"
              >
                <Send />
              </IconButton>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
```

### Creating Predictive Analytics for Beneficiaries

```typescript
// src/components/AIAnalytics/BeneficiaryPrediction.tsx
import type { FC } from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Alert, Chip } from '@mui/material';
import { TrendingUp, Warning, CheckCircle, Psychology } from '@mui/icons-material';

interface PredictionResult {
  beneficiaryId: string;
  beneficiaryName: string;
  graduationProbability: number;
  riskFactors: string[];
  recommendations: string[];
  confidenceLevel: number;
  lastUpdated: Date;
}

interface BeneficiaryPredictionProps {
  predictions: PredictionResult[];
}

export const BeneficiaryPrediction: FC<BeneficiaryPredictionProps> = ({ predictions }) => {
  const getRiskLevel = (probability: number) => {
    if (probability >= 0.8) return { level: 'low', color: 'success', icon: CheckCircle };
    if (probability >= 0.6) return { level: 'medium', color: 'warning', icon: TrendingUp };
    return { level: 'high', color: 'error', icon: Warning };
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <Psychology sx={{ mr: 1 }} />
        AI-Powered Academic Success Predictions
      </Typography>

      {predictions.map((prediction) => {
        const risk = getRiskLevel(prediction.graduationProbability);
        const RiskIcon = risk.icon;

        return (
          <Card key={prediction.beneficiaryId} sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="h6">{prediction.beneficiaryName}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ID: {prediction.beneficiaryId}
                  </Typography>
                </Box>
                <Chip
                  icon={<RiskIcon />}
                  label={`${risk.level.toUpperCase()} RISK`}
                  color={risk.color}
                  size="small"
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Graduation Probability: {Math.round(prediction.graduationProbability * 100)}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={prediction.graduationProbability * 100}
                  color={risk.color}
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  AI Confidence: {Math.round(prediction.confidenceLevel * 100)}%
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={prediction.confidenceLevel * 100}
                  sx={{ height: 4, borderRadius: 2 }}
                />
              </Box>

              {prediction.riskFactors.length > 0 && (
                <Alert severity={risk.color} sx={{ mb: 2 }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Identified Risk Factors:
                  </Typography>
                  {prediction.riskFactors.map((factor, index) => (
                    <Typography key={index} variant="body2">
                      • {factor}
                    </Typography>
                  ))}
                </Alert>
              )}

              <Box>
                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  AI Recommendations:
                </Typography>
                {prediction.recommendations.map((rec, index) => (
                  <Chip
                    key={index}
                    label={rec}
                    size="small"
                    sx={{ mr: 1, mb: 1 }}
                    variant="outlined"
                  />
                ))}
              </Box>

              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
                Last Updated: {prediction.lastUpdated.toLocaleDateString()}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};
```

## Creating a New Page Component

1. Create directory: `src/pages/NewPage/`
2. Create files:
   - `index.ts` - Barrel export
   - `NewPage.tsx` - Component
   - `types.ts` - TypeScript interfaces (if needed)

Example structure:

```typescript
// src/pages/NewPage/NewPage.tsx
import type { FC } from 'react';
import { Box, Typography } from '@mui/material';

export const NewPage: FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">New Page</Typography>
    </Box>
  );
};

// src/pages/NewPage/index.ts
export { NewPage } from './NewPage';
```

## Adding a New Route

1. Import the page component in `src/routes/Pages/index.ts`
2. Add route configuration:

```typescript
{
  path: '/new-page',
  element: <NewPage />,
}
```

## Creating a Reusable Component

Follow the component pattern in `src/components/`:

- Create component directory
- Implement with proper TypeScript types
- Export through barrel file
- Add to components index if widely used

## Adding Global State

1. Create atom in appropriate store module:

```typescript
// src/store/feature/index.ts
export const featureAtom = atom<FeatureType>({
  key: 'feature',
  default: initialState,
});
```

2. Use in components:

```typescript
import { useRecoilState } from 'recoil';
import { featureAtom } from '@/store/feature';

const [feature, setFeature] = useRecoilState(featureAtom);
```

## Styling Components

### Using sx prop (preferred for simple styles):

```typescript
<Box sx={{
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  p: 3,
  bgcolor: 'background.paper'
}}>
```

### Using styled components (for complex/reusable styles):

```typescript
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(2),
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));
```

## Error Handling

Wrap components in error boundaries:

```typescript
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@/error-handling/fallbacks';

<ErrorBoundary FallbackComponent={ErrorFallback}>
  <Component />
</ErrorBoundary>
```

## Adding Notifications

Use the notification system:

```typescript
import { useRecoilState } from 'recoil';
import { notificationsAtom } from '@/store/notifications';

const [, setNotifications] = useRecoilState(notificationsAtom);

const showNotification = (message: string, variant: 'success' | 'error' | 'warning' | 'info') => {
  setNotifications((prev) => [...prev, { id: Date.now(), message, variant }]);
};
```

## Testing New Components

### Unit Test Example:

```typescript
import { render, screen } from '@testing-library/react';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
```

### E2E Test Example:

```typescript
import { test, expect } from '@playwright/test';

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  await page.click('[data-testid="nav-link"]');
  await expect(page).toHaveURL('/new-page');
});
```

## PWA Features

### Adding to manifest.json:

Update `manifest.json` for PWA capabilities like icons, theme colors, etc.

### Service Worker:

The SW component in `src/sections/SW/` handles service worker registration.

## Performance Optimization

### Lazy Loading Routes:

```typescript
import { lazy } from 'react';

const LazyPage = lazy(() => import('./pages/HeavyPage'));
```

### Code Splitting:

Use dynamic imports for heavy libraries:

```typescript
const heavyLibrary = await import('heavy-library');
```

## Development Workflow

1. Start dev server: `npm run dev`
2. Run tests: `npm run test:unit`
3. Type check: `npm run ts:check`
4. Lint: `npm run lint:check`
5. Format: `npm run prettier:check`
6. E2E tests: `npm run test:e2e`
7. Build: `npm run build`
