# MominTrust PWA - Copilot Context

## Project Overview

This is a modern React PWA (Progressive Web App) built for **Momin Trust**, a non-profit organization dedicated to supporting talented but underprivileged children. The application serves as both a website and mobile application to maximize their online presence and exposure.

### Organization Mission

**Momin Trust** identifies brilliant children who excel academically in government schools but lack financial resources to pursue their educational goals. The organization follows a systematic approach to:

- Hunt for talented but poor children with outstanding academic performance
- Raise funds from donors and supporters
- Provide comprehensive educational financial support
- Follow systematic processes to ensure maximum impact
- Develop strategies to achieve their educational support goals

### Application Purpose

This PWA aims to:

- Maximize Momin Trust's online presence and exposure
- Facilitate fund-raising activities and donor engagement
- Showcase success stories and impact metrics
- Provide a platform for beneficiary applications and tracking
- Enable transparent reporting and accountability
- Suggest and implement strategies for achieving organizational goals

The application is built with TypeScript and Vite, providing a modern, production-ready setup for this noble cause.

## Tech Stack

- **Build Tool**: Vite v5
- **Framework**: React v18 with TypeScript
- **UI Framework**: Material-UI (MUI) v5 with Emotion
- **Routing**: React Router v6
- **State Management**: Recoil
- **Styling**: Emotion (CSS-in-JS)
- **Testing**: Vitest (unit), Playwright (e2e)
- **Notifications**: Notistack

## Architecture Patterns

### File Structure Convention

- Each component/page has its own directory with:
  - `index.ts` - Re-exports main component
  - `ComponentName.tsx` - Main component file
  - `styled.ts` - Styled components (when needed)
  - `types.ts` - TypeScript interfaces (when needed)

### State Management

- Uses Recoil for global state
- State atoms are organized by feature in `src/store/`
- Each store module has:
  - `index.ts` - Exports atoms/selectors
  - `types.ts` - Type definitions

### Routing

- Centralized in `src/routes/`
- Uses React Router v6 with data router pattern
- Page components are in `src/pages/`

### Theming

- MUI theme customization in `src/theme/`
- Supports multiple themes
- Theme state managed via Recoil

## Key Features

### Core Application Features

- PWA capabilities with manifest.json for mobile app-like experience
- Error boundaries for robust error handling
- Hot keys support for power users
- Mobile-responsive design (essential for reaching diverse audiences)
- Sidebar navigation for easy access to different sections
- Notification system for updates and alerts

### Domain-Specific Features (Momin Trust)

- **Beneficiary Management**: Track and showcase talented children supported by the trust
- **Donor Engagement**: Platform for potential donors to learn about impact and contribute
- **Success Stories**: Highlight achievements and impact of supported students
- **Transparency Portal**: Financial reporting and fund utilization tracking
- **Application System**: Allow eligible students to apply for educational support
- **Impact Metrics**: Display statistics on children helped, funds raised, and success rates
- **Strategy Dashboard**: Tools for organizational planning and goal tracking
- **Community Outreach**: Features to increase visibility and community engagement
- **AI-Powered Features**: Intelligent automation to enhance organizational efficiency and impact

### AI Integration Strategy

The MominTrust PWA leverages artificial intelligence to amplify the organization's impact while maintaining ethical standards and privacy protection:

#### **Smart Donor Engagement**

- **Predictive Donation Analytics**: AI algorithms analyze donor behavior to suggest optimal donation amounts and timing
- **Personalized Communication**: Automated generation of personalized thank-you messages and impact updates
- **Intelligent Segmentation**: AI-driven donor categorization for targeted fundraising campaigns
- **Donation Trend Analysis**: Machine learning models to identify seasonal patterns and optimize campaign scheduling

#### **Beneficiary Management Intelligence**

- **Automated Screening**: AI-assisted evaluation of beneficiary applications using academic performance patterns
- **Early Warning Systems**: Predictive models to identify students at risk of dropping out
- **Performance Tracking**: Intelligent analysis of academic progress with automated progress reports
- **Smart Matching**: AI algorithms to match donors with beneficiaries based on interests and impact preferences

#### **Content & Communication Automation**

- **Multi-language Support**: AI-powered translation for reaching diverse communities
- **Success Story Generation**: Automated creation of impact narratives while protecting privacy
- **Social Media Optimization**: AI-driven content scheduling and engagement optimization
- **Document Processing**: Intelligent extraction and processing of application documents

#### **Operational Efficiency**

- **Intelligent Chatbot**: 24/7 support for donor inquiries and beneficiary questions
- **Fraud Detection**: AI monitoring of donation patterns to identify suspicious activities
- **Resource Allocation**: Machine learning optimization of fund distribution
- **Impact Prediction**: Forecasting models for long-term beneficiary outcomes

#### **Ethical AI Guidelines**

- **Privacy-First**: All AI features must protect beneficiary sensitive information
- **Human Oversight**: AI recommendations require human validation for critical decisions
- **Transparency**: Clear disclosure when AI is involved in user interactions
- **Bias Prevention**: Regular auditing of AI models for fairness across demographics
- **Data Minimization**: Use only necessary data for AI processing with explicit consent

## Development Guidelines

### Technical Guidelines

- Use TypeScript for all new code
- Follow the established folder structure
- Use MUI components and theme system
- Implement proper error boundaries
- Add tests for new features
- Use semantic commit messages

### Non-Profit Domain Guidelines

- **Accessibility First**: Ensure the application is accessible to users with varying technical skills and abilities
- **Mobile-First Design**: Prioritize mobile experience as many users in target communities primarily use mobile devices
- **Performance Optimization**: Optimize for users with slower internet connections
- **Multilingual Support**: Consider local language support for better community reach
- **Transparency**: Always provide clear information about fund usage and impact
- **Privacy Protection**: Implement strong data protection for beneficiary information
- **Offline Capability**: Leverage PWA features for areas with poor connectivity
- **Cultural Sensitivity**: Design with awareness of local cultural contexts and values

## Common Patterns to Follow

1. **Component Creation**: Always create index.ts barrel exports
2. **Styling**: Use MUI's sx prop or styled components via Emotion
3. **State**: Use Recoil atoms for global state, useState for local state
4. **Types**: Define interfaces in separate types.ts files
5. **Error Handling**: Wrap components in error boundaries when needed
6. **Domain-Specific Patterns**:
   - Use consistent terminology (beneficiary, donor, impact, etc.)
   - Implement proper data validation for sensitive information
   - Create reusable components for impact metrics and success stories
   - Ensure all financial data handling follows security best practices
