import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Lightbulb from "@mui/icons-material/Lightbulb";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ background: '#1F2937', color: 'white', py: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Lightbulb sx={{ fontSize: 20 }} />
              <Typography variant="body1" sx={{ fontWeight: 700 }}>BrainwaveBoard</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Typography variant="caption" sx={{ color: '#9CA3AF', cursor: 'pointer', '&:hover': { color: 'white' } }}>About Us</Typography>
              <Typography variant="caption" sx={{ color: '#9CA3AF', cursor: 'pointer', '&:hover': { color: 'white' } }}>Contact</Typography>
              <Typography variant="caption" sx={{ color: '#9CA3AF', cursor: 'pointer', '&:hover': { color: 'white' } }}>Privacy Policy</Typography>
              <Typography variant="caption" sx={{ color: '#9CA3AF', cursor: 'pointer', '&:hover': { color: 'white' } }}>Terms</Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                <IconButton 
                  key={index} 
                  size="small"
                  sx={{ 
                    color: 'white', 
                    background: 'rgba(255,255,255,0.1)', 
                    '&:hover': { background: 'rgba(255,255,255,0.2)' },
                    p: 0.5
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 1.5, pt: 1.5, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: '#9CA3AF' }}>
            © 2024 BrainwaveBoard. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
