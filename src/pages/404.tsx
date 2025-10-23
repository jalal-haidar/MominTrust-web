import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Custom404() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Page Not Found
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary" sx={{ mt: 4 }}>
            Go Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
