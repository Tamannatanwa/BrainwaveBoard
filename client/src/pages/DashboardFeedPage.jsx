import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Lightbulb from "@mui/icons-material/Lightbulb";
import Add from "@mui/icons-material/Add";
import IdeaCard from "../components/IdeaCard";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import { useAuth } from "../context/AuthContext";

const DashboardFeedPage = () => {
  const [currentFilter, setCurrentFilter] = useState('all');
  const navigate = useNavigate();
  const { user } = useAuth();
  const [ideas, setIdeas] = useState([
    { id: 1, user: 'Alice Johnson', title: 'AI-Powered Study Assistant', description: 'An app that uses AI to create personalized study plans based on learning patterns and helps students optimize their learning time.', tags: ['AI', 'Education'], likes: 24, comments: 8 },
    { id: 2, user: user?.name || 'Current User', title: 'Campus Food Sharing Platform', description: 'A platform where students can share leftover food from events, reducing waste and helping those in need within the campus community.', tags: ['Social', 'Sustainability'], likes: 18, comments: 5 },
    { id: 3, user: 'Bob Smith', title: 'Interactive Code Learning', description: 'An interactive platform that gamifies coding education with real-time feedback and peer-to-peer code reviews.', tags: ['Education', 'Technology'], likes: 32, comments: 12 },
  ]);

  const handleLike = (id) => {
    setIdeas(ideas.map(idea => idea.id === id ? {...idea, likes: idea.likes + 1} : idea));
  };

  const handleDelete = (id) => {
    setIdeas(ideas.filter(idea => idea.id !== id));
  };

  const handleFilterChange = (filter) => {
    if (filter === 'add') {
      navigate('/add-idea');
    } else {
      setCurrentFilter(filter);
    }
  };

  const filteredIdeas = currentFilter === 'my' 
    ? ideas.filter(idea => idea.user === (user?.name || 'Current User'))
    : ideas;

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

        {filteredIdeas.length === 0 ? (
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
          filteredIdeas.map(idea => (
            <IdeaCard 
              key={idea.id}
              idea={idea}
              onLike={handleLike}
              onComment={() => {}}
              onEdit={() => navigate('/add-idea')}
              onDelete={handleDelete}
              isOwner={idea.user === (user?.name || 'Current User')}
            />
          ))
        )}
      </DashboardLayout>
    </MainLayout>
  );
};

export default DashboardFeedPage;
