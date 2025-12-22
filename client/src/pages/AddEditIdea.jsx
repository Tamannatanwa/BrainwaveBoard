import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import CircularProgress from "@mui/material/CircularProgress";
import ideasAPI from "../api/ideas.js";

const AddEditIdea = () => {
  const [searchParams] = useSearchParams();
  const ideaId = searchParams.get('id');
  const isEditMode = !!ideaId;
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditMode) {
      fetchIdea();
    }
  }, [ideaId]);

  const fetchIdea = async () => {
    try {
      setFetching(true);
      const response = await ideasAPI.getById(ideaId);
      const idea = response.data;
      setTitle(idea.title);
      setDescription(idea.description);
      setTags(idea.tags?.join(', ') || '');
      setCategory(idea.category || '');
    } catch (error) {
      console.error('Error fetching idea:', error);
      setError('Failed to load idea');
    } finally {
      setFetching(false);
    }
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setError('');

    if (!title || !description) {
      setError('Please fill in title and description');
      return;
    }

    setLoading(true);
    try {
      const tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => tag);
      const ideaData = { title, description, tags: tagsArray, category };

      if (isEditMode) {
        await ideasAPI.update(ideaId, ideaData);
      } else {
        await ideasAPI.create(ideaData);
      }
      
      navigate('/dashboard');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to save idea. Please try again.');
    } finally {
      setLoading(false);
    }
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
            {isEditMode ? 'Edit Your Idea' : 'Share Your Idea'}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, textAlign: 'center' }}>
            {isEditMode ? 'Update your idea details' : 'Tell us about your innovative idea and inspire others'}
          </Typography>

          {fetching ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <>
              {error && (
                <Alert severity="error" sx={{ mb: 3 }}>
                  {error}
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit}>
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
                    disabled={loading}
                    sx={{ px: 4 }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    size="large"
                    type="submit"
                    disabled={loading}
                    sx={{ px: 4 }}
                  >
                    {loading ? 'Saving...' : isEditMode ? 'Update Idea' : 'Submit Idea'}
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </Card>
      </Container>
    </Box>
  );
};

export default AddEditIdea;
