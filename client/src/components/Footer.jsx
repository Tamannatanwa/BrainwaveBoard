import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "background.footer",
        color: "text.footer",
        py: 4,
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
        maxWidth="lg"
        sx={{ mx: "auto", px: 2 }}
      >
        {/* About */}
        <Typography variant="body2">
          © {new Date().getFullYear()} BrainwaveBoard. All rights reserved.
        </Typography>

        {/* Links */}
        <Stack direction="row" spacing={3}>
          <Typography sx={{ cursor: "pointer" }}>About</Typography>
          <Typography sx={{ cursor: "pointer" }}>Contact</Typography>
        </Stack>

        {/* Social Icons */}
        <Stack direction="row" spacing={1}>
          <IconButton sx={{ color: "text.footer" }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "text.footer" }}>
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "text.footer" }}>
            <InstagramIcon />
          </IconButton>
          <IconButton sx={{ color: "text.footer" }}>
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
