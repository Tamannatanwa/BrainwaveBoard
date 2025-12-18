import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ThumbUp from "@mui/icons-material/ThumbUp";
import Comment from "@mui/icons-material/Comment";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";

const IdeaCard = ({ idea, onLike, onComment, onEdit, onDelete, isOwner }) => {
  return (
    <Card sx={{ 
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      mb: 3,
      background: 'linear-gradient(135deg, #FFFFFF 0%, #FAFBFC 100%)',
      border: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        border: '1px solid rgba(59, 130, 246, 0.2)'
      }
    }}>
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ 
            bgcolor: 'primary.main', 
            mr: 2,
            width: 48,
            height: 48,
            fontWeight: 700,
            fontSize: '1.2rem',
            boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
          }}>
            {idea.user[0]}
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.5 }}>
              {idea.user}
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
              2 hours ago
            </Typography>
          </Box>
        </Box>

        <Typography variant="h5" sx={{ 
          fontWeight: 700, 
          color: 'text.primary', 
          mb: 2,
          background: 'linear-gradient(135deg, #1F2937 0%, #3B82F6 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          {idea.title}
        </Typography>
        
        <Typography variant="body1" sx={{ 
          color: 'text.secondary', 
          mb: 3, 
          lineHeight: 1.8,
          fontSize: '0.95rem'
        }}>
          {idea.description}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
          {idea.tags.map((tag, index) => (
            <Chip 
              key={index} 
              label={tag} 
              size="small"
              sx={{ 
                bgcolor: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
                background: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)',
                color: 'primary.main',
                fontWeight: 600,
                fontSize: '0.75rem',
                height: 28,
                border: '1px solid rgba(59, 130, 246, 0.2)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #BFDBFE 0%, #93C5FD 100%)',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.2s ease'
              }} 
            />
          ))}
        </Box>

        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          pt: 2,
          borderTop: '1px solid rgba(0,0,0,0.08)'
        }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              size="medium"
              startIcon={<ThumbUp />}
              onClick={() => onLike(idea.id)}
              sx={{ 
                color: 'info.main',
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 1,
                '&:hover': { 
                  bgcolor: '#EFF6FF',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              {idea.likes}
            </Button>
            <Button
              size="medium"
              startIcon={<Comment />}
              onClick={() => onComment(idea.id)}
              sx={{ 
                color: 'text.secondary',
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 1,
                '&:hover': { 
                  bgcolor: '#F3F4F6',
                  transform: 'scale(1.05)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              {idea.comments}
            </Button>
          </Box>
          
          {isOwner && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                size="medium" 
                onClick={() => onEdit(idea.id)} 
                sx={{ 
                  color: 'warning.main',
                  bgcolor: 'rgba(245, 158, 11, 0.1)',
                  '&:hover': { 
                    bgcolor: 'rgba(245, 158, 11, 0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton 
                size="medium" 
                onClick={() => onDelete(idea.id)} 
                sx={{ 
                  color: 'error.main',
                  bgcolor: 'rgba(239, 68, 68, 0.1)',
                  '&:hover': { 
                    bgcolor: 'rgba(239, 68, 68, 0.2)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default IdeaCard;

