import React, { use } from 'react';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Lightbulb from "@mui/icons-material/Lightbulb";
import Person from "@mui/icons-material/Person";
import TrendingUp from "@mui/icons-material/TrendingUp";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate  = useNavigate();
  const handleGetStarted = () => {
    navigate('/signup');
    
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ffffff 0%, #e3f2fd 100%)' }}>
      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                color: '#1976d2',
                mb: 3,
                lineHeight: 1.2,
                animation: 'fadeInUp 0.8s ease-out',
                '@keyframes fadeInUp': {
                  from: {
                    opacity: 0,
                    transform: 'translateY(30px)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateY(0)',
                  }
                }
              }}
            >
              Turn Your Ideas Into Reality
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' },
                color: '#424242',
                mb: 5,
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
              }}
            >
              Share, Learn and Build Together
            </Typography>
            <Button
              variant="contained"
              size="large"
              color="success"
              onClick={handleGetStarted}
              endIcon={<ArrowForward />}
              sx={{
                px: 5,
                py: 1.8,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: '50px',
                textTransform: 'none',
                boxShadow: '0 4px 14px rgba(76, 175, 80, 0.4)',
                animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 6px 20px rgba(76, 175, 80, 0.5)',
                }
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 700,
              color: '#1976d2',
            }}
          >
            Why Choose BrainwaveBoard?
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: '1.1rem',
              color: '#616161',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Join a community of innovators and bring your ideas to life
          </Typography>
          
          <Grid container spacing={4}>
            {[
              {
                title: 'Share Ideas',
                desc: 'Post your innovative ideas and get feedback from peers',
                icon: <Lightbulb />,
                color: '#ff9800',
              },
              {
                title: 'Collaborate',
                desc: 'Connect with like-minded students and build together',
                icon: <Person />,
                color: '#2196f3',
              },
              {
                title: 'Get Inspired',
                desc: 'Explore trending ideas and stay motivated',
                icon: <TrendingUp />,
                color: '#4caf50',
              },
            ].map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    p: 4,
                    height: '100%',
                    background: '#ffffff',
                    borderRadius: '20px',
                    border: '1px solid #e0e0e0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.4s ease',
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2 + 0.6}s backwards`,
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '16px',
                      backgroundColor: feature.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      boxShadow: `0 4px 16px ${feature.color}40`,
                    }}
                  >
                    {React.cloneElement(feature.icon, {
                      sx: { fontSize: 35, color: 'white' }
                    })}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      fontWeight: 700,
                      color: '#212121',
                      fontSize: '1.4rem',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#616161',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.desc}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeScreen;