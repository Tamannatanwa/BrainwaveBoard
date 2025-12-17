import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <Box textAlign="center">
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Share Your Ideas
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Brainstorm, explore, and collaborate on creative ideas.
      </Typography>

      <Button variant="contained" color="secondary">
        GET STARTED
      </Button>
    </Box>
  );
}
