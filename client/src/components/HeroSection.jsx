import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #ffffff, #e0f0ff)", // White → Light blue
        px: 4,
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Turn Your Ideas Into Reality
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Share, Learn and Build Together
          </Typography>
          <Button variant="contained" sx={{ bgcolor: "green", color: "white", px: 4, py: 1.5 }}>
            Get Started
          </Button>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <img
            src="../assets/images/downloadShare.png"
            alt="Students Collaborating"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
