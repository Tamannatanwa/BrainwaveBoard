import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Lightbulb from "@mui/icons-material/Lightbulb";
import Add from "@mui/icons-material/Add";
import IdeaCard from "../components/IdeaCard";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";
import ideasAPI from "../api/ideas.js";
import likesAPI from "../api/likes.js";

const DashboardFeedPage = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetchIdeas();
  }, [currentFilter, user]);

  const fetchIdeas = async () => {
    try {
      setLoading(true);
      const filters = currentFilter === 'my' && user?.id ? { userId: user.id } : {};
      const response = await ideasAPI.getAll(filters);
      setIdeas(response.data || []);
    } catch (error) {
      console.error('Error fetching ideas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (id) => {
    try {
      await likesAPI.toggle(id);
      fetchIdeas(); // Refresh ideas to get updated like count
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this idea?')) {
      return;
    }
    try {
      await ideasAPI.delete(id);
      setIdeas(ideas.filter(idea => idea.id !== id));
    } catch (error) {
      console.error('Error deleting idea:', error);
      alert('Failed to delete idea. Please try again.');
    }
  };

  const handleFilterChange = (filter) => {
    if (filter === 'add') {
      navigate('/add-idea');
    } else {
      setCurrentFilter(filter);
    }
  };

  // Transform API data to match component expectations
  const transformedIdeas = ideas.map(idea => ({
    id: idea.id,
    user: idea.user?.name || 'Unknown User',
    title: idea.title,
    description: idea.description,
    tags: idea.tags || [],
    likes: idea._count?.likes || 0,
    comments: idea._count?.comments || 0,
    userId: idea.userId,
    createdAt: idea.createdAt,
  }));

  return (
    <MainLayout showFooter={false}>
      <DashboardLayout currentFilter={currentFilter} onFilterChange={handleFilterChange}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 1.5,
            background: 'linear-gradient(135deg, #1F2937 0%, #3B82F6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {currentFilter === 'my' ? 'My Ideas' : 'All Ideas'}
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'text.secondary',
            fontSize: '1rem',
            fontWeight: 500
          }}>
            Discover amazing ideas from students around the world
          </Typography>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : transformedIdeas.length === 0 ? (
          <Card sx={{ p: 6, textAlign: 'center' }}>
            <Lightbulb sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
              No ideas yet
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Be the first one to add an idea!
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              startIcon={<Add />}
              onClick={() => navigate('/add-idea')}
            >
              Add Your First Idea
            </Button>
          </Card>
        ) : (
          transformedIdeas.map(idea => (
            <IdeaCard 
              key={idea.id}
              idea={idea}
              onLike={handleLike}
              onComment={() => {}}
              onEdit={() => navigate(`/add-idea?id=${idea.id}`)}
              onDelete={handleDelete}
              isOwner={idea.userId === user?.id}
            />
          ))
        )}
      </DashboardLayout>
    </MainLayout>
  );
};

export default DashboardFeedPage;
