import { Link } from "react-router-dom"; // Import Link from React Router
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
          }}
          // component={Link}
          // to="/" 
        >
          BrainwaveBoard
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        {/* Menu */}
        <Stack direction="row" spacing={2} alignItems="center">
          <Button
            color="inherit"
            sx={{ textTransform: "none" }}
            component={Link}
            to="/home"
          >
            Home
          </Button>

          <Button
            color="inherit"
            sx={{ textTransform: "none" }}
            component={Link}
            to="/explore"
          >
            Explore
          </Button>

          <Button
            variant="contained"
            color="secondary"
            sx={{ textTransform: "none" }}
            component={Link}
            to="/add-idea"
          >
            Add Idea
          </Button>

          <Button
            color="inherit"
            sx={{ textTransform: "none" }}
            component={Link}
            to="/"
          >
            Login / Signup
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
