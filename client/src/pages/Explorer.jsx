import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IdeaCard from "../components/IdeaCard";
import MainLayout from "../layouts/MainLayout";

const Explorer = () => {
  const navigate = useNavigate();
  const [currentFilter, setCurrentFilter] = useState('all');
  const ideas = [
    { id: 1, user: 'Alice Johnson', title: 'AI-Powered Study Assistant', description: 'An app that uses AI to create personalized study plans based on learning patterns.', tags: ['AI', 'Education'], likes: 24, comments: 8 },
    { id: 2, user: 'Bob Smith', title: 'Campus Food Sharing Platform', description: 'A platform where students can share leftover food from events, reducing waste.', tags: ['Social', 'Sustainability'], likes: 18, comments: 5 },
    { id: 3, user: 'Carol White', title: 'Interactive Code Learning', description: 'An interactive platform that gamifies coding education with real-time feedback.', tags: ['Education', 'Technology'], likes: 32, comments: 12 },
    { id: 4, user: 'David Brown', title: 'Mental Health Chatbot', description: 'A supportive AI chatbot that provides mental health resources and coping strategies.', tags: ['Healthcare', 'AI'], likes: 41, comments: 15 },
  ];

  const handleFilterChange = (filter) => {
    if (filter === 'add') {
      navigate('/signup');
    } else {
      setCurrentFilter(filter);
    }
  };

  return (
    <MainLayout showFooter={false}>
      {/* Hero Section */}
      <Box sx={{ 
        bgcolor: 'white',
        pt: 8,
        pb: 6,
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Typography variant="h2" sx={{ 
              fontWeight: 700, 
              mb: 2,
              background: 'linear-gradient(135deg, #1F2937 0%, #3B82F6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', md: '3rem' }
            }}>
              Explore Innovative Ideas
            </Typography>
            <Typography variant="h6" sx={{ 
              color: 'text.secondary',
              mb: 4,
              fontWeight: 400,
              lineHeight: 1.6
            }}>
              Discover what students around the world are creating
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{ 
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
              }}
            >
              Join to Share Your Ideas
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Ideas Grid */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
          mb: 4
        }}>
          {ideas.map(idea => (
            <IdeaCard 
              key={idea.id}
              idea={idea}
              onLike={() => {}}
              onComment={() => {}}
              onEdit={() => {}}
              onDelete={() => {}}
              isOwner={false}
            />
          ))}
        </Box>
      </Container>

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            textAlign: 'center',
            bgcolor: 'primary.main',
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            color: 'white',
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)'
          }}>
            <Typography variant="h3" sx={{ 
              fontWeight: 700, 
              mb: 2,
              fontSize: { xs: '1.75rem', md: '2.5rem' }
            }}>
              Ready to Share Your Ideas?
            </Typography>
            <Typography variant="h6" sx={{ 
              mb: 4, 
              opacity: 0.95,
              fontWeight: 400,
              maxWidth: '600px',
              mx: 'auto'
            }}>
              Join thousands of students who are already making an impact
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              size="large"
              onClick={() => navigate('/signup')}
              sx={{ 
                px: 5,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: 2,
                textTransform: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
              }}
            >
              Get Started Now
            </Button>
          </Box>
        </Container>
      </Box>
    </MainLayout>
  );
};

export default Explorer;