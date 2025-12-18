import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";

const AddEditIdea = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Show success message (simulated)
    alert('Idea submitted successfully!');
    navigate('/dashboard');
  };

  return (
    <Box sx={{ 
      minHeight: 'calc(100vh - 64px)',
      bgcolor: 'background.default',
      py: 8
    }}>
      <Container maxWidth="md">
        <Card sx={{ p: 4, borderRadius: 4, boxShadow: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, textAlign: 'center' }}>
            Share Your Idea
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}>
            Tell us about your innovative idea and inspire others
          </Typography>

          <TextField 
            fullWidth 
            label="Idea Title" 
            variant="outlined" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a catchy title for your idea"
            sx={{ mb: 3 }}
          />

          <TextField 
            fullWidth 
            label="Description" 
            variant="outlined"
            multiline
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your idea in detail. What problem does it solve? How does it work?"
            sx={{ mb: 3 }}
          />

          <TextField 
            fullWidth 
            label="Tags" 
            variant="outlined" 
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., AI, Education, Healthcare (comma separated)"
            helperText="Add relevant tags to help others discover your idea"
            sx={{ mb: 3 }}
          />

          <TextField 
            fullWidth 
            select
            label="Category" 
            variant="outlined" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ mb: 4 }}
          >
            <MenuItem value="technology">Technology</MenuItem>
            <MenuItem value="education">Education</MenuItem>
            <MenuItem value="healthcare">Healthcare</MenuItem>
            <MenuItem value="environment">Environment</MenuItem>
            <MenuItem value="social">Social Impact</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button 
              variant="outlined"
              size="large"
              onClick={() => navigate('/dashboard')}
              sx={{ px: 4 }}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              onClick={handleSubmit}
              sx={{ px: 4 }}
            >
              Submit Idea
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default AddEditIdea;
