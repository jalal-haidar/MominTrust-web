import Link from "next/link";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Meta from "@/components/Meta";
import { FullSizeCenteredFlexBox } from "@/components/styled";

function Page4() {
  return (
    <>
      <Meta title="page 4" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Page 4</Typography>
        <Button
          href={`/${Math.random().toString()}`}
          component={Link}
          variant="outlined"
          sx={{ mt: 4 }}
          size="small"
          color="warning"
        >
          Want to check 404?
        </Button>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Page4;
