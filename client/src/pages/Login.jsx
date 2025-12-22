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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e?.preventDefault();
    setError('');
    setLoading(true);

    if (!email || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    const result = await login({ email, password });
    
    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error || 'Login failed. Please try again.');
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
            background: 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            p: 4
          }}>
            <Lightbulb sx={{ fontSize: 80, mb: 2 }} />
            <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2 }}>
              Welcome Back!
            </Typography>
            <Typography variant="body1" align="center" sx={{ opacity: 0.9 }}>
              "Every big idea starts with a small step"
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ bgcolor: 'white', p: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}>
              Login
            </Typography>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <Box component="form" onSubmit={handleLogin}>
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
                sx={{ mb: 3 }}
              />
              <Button 
                fullWidth 
                variant="contained" 
                color="primary"
                size="large"
                type="submit"
                disabled={loading}
                sx={{ mb: 2, py: 1.5 }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </Box>
            <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
              Don't have an account?{' '}
              <Typography component="span" sx={{ color: 'secondary.main', cursor: 'pointer', fontWeight: 600 }} onClick={() => navigate('/signup')}>
                Sign Up
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
