import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Lightbulb from "@mui/icons-material/Lightbulb";
import Add from "@mui/icons-material/Add";
import ExitToApp from "@mui/icons-material/ExitToApp";
import IconButton from "@mui/material/IconButton";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ background: 'primary.main', boxShadow: 2 }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }} onClick={() => navigate('/home')}>
          <Lightbulb sx={{ color: 'white', fontSize: 32 }} />
          <Typography variant="h5" sx={{ color: 'white', fontWeight: 700 }}>
            BrainwaveBoard
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button 
            sx={{ color: 'white', fontWeight: 500, '&:hover': { background: 'rgba(255,255,255,0.1)' } }}
            onClick={() => navigate('/home')}
          >
            Home
          </Button>
          {isLoggedIn ? (
            <>
              <Button 
                sx={{ color: 'white', fontWeight: 500, '&:hover': { background: 'rgba(255,255,255,0.1)' } }}
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </Button>
              <Button 
                variant="contained"
                color="secondary"
                startIcon={<Add />}
                onClick={() => navigate('/add-idea')}
              >
                Add Idea
              </Button>
              <IconButton onClick={onLogout} sx={{ color: 'white' }}>
                <ExitToApp />
              </IconButton>
            </>
          ) : (
            <>
              <Button 
                sx={{ color: 'white', fontWeight: 500, '&:hover': { background: 'rgba(255,255,255,0.1)' } }}
                onClick={() => navigate('/explore')}
              >
                Explore
              </Button>
              <Button 
                variant="outlined"
                onClick={() => navigate('/')}
                sx={{ 
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { background: 'rgba(255,255,255,0.1)', borderColor: 'white' }
                }}
              >
                Login
              </Button>
              <Button 
                variant="contained"
                color="secondary"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;