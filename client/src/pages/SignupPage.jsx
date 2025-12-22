import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Lightbulb from "@mui/icons-material/Lightbulb";
import { useAuth } from '../context/AuthContext';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSignup = async (e) => {
    e?.preventDefault();
    setError('');

    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    const result = await register({ name, email, password });
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error || 'Registration failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      alignItems: 'center',
      bgcolor: 'background.default'
    }}>
      <Container maxWidth="md">
        <Grid container sx={{ boxShadow: 5, borderRadius: 4, overflow: 'hidden', minHeight: 500 }}>
          <Grid item xs={12} md={6} sx={{ 
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            p: 4
          }}>
            <Lightbulb sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2 }}>
              Join Us Today!
            </Typography>
            <Typography variant="body1" align="center" sx={{ opacity: 0.9 }}>
              "Start your journey of innovation and collaboration"
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ bgcolor: 'white', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
              Sign Up
            </Typography>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <Box component="form" onSubmit={handleSignup}>
              <TextField 
                fullWidth 
                label="Full Name" 
                variant="outlined" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                sx={{ mb: 2 }}
              />
              <TextField 
                fullWidth 
                label="Email" 
                type="email"
                variant="outlined" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{ mb: 2 }}
              />
              <TextField 
                fullWidth 
                label="Password" 
                type="password" 
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{ mb: 2 }}
              />
              <TextField 
                fullWidth 
                label="Confirm Password" 
                type="password" 
                variant="outlined"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                sx={{ mb: 3 }}
              />
              <Button 
                fullWidth 
                variant="contained" 
                color="secondary"
                size="large"
                type="submit"
                disabled={loading}
                sx={{ mb: 2, py: 1.5 }}
              >
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>
            </Box>
            <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
              Already have an account?{' '}
              <Typography component="span" sx={{ color: 'primary.main', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/')}>
                Login
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignupPage;
