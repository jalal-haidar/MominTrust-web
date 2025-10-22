import CircularProgress from '@mui/material/CircularProgress';

import { FullSizeCenteredFlexBox } from '@/components/styled';

function Loading() {
  return (
    <FullSizeCenteredFlexBox role="status" aria-live="polite" aria-label="Loading">
      <CircularProgress aria-hidden />
    </FullSizeCenteredFlexBox>
  );
}

export default Loading;
