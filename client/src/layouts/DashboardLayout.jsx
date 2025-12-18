import React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import TrendingUp from "@mui/icons-material/TrendingUp";
import LocalFireDepartment from "@mui/icons-material/LocalFireDepartment";
import EmojiEvents from "@mui/icons-material/EmojiEvents";
import Sidebar from "../components/SideBar";

const DashboardLayout = ({ children, currentFilter, onFilterChange }) => {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default', 
      pt: '80px', 
      pb: 4,
      background: 'linear-gradient(to bottom, #F9FAFB 0%, #FFFFFF 100%)',
      px: { xs: 0.5, sm: 0.75, md: 1 }
    }}>
   
      <Box sx={{ width: '100%', maxWidth: '1800px', mx: 'auto', px: { xs: 1, sm: 2, md: 3 } }}>
        <Grid container spacing={2} sx={{ mx: 0, width: '100%' }}>
          <Grid item xs={12} md={2.5} lg={2}>
            <Sidebar currentFilter={currentFilter} onFilterChange={onFilterChange} />
          </Grid>
          <Grid item xs={12} md={6.5} lg={7}>
            {children}
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Box sx={{ position: 'sticky', top: '100px' }}>
              <Card sx={{ 
                borderRadius: 4, 
                p: 3, 
                mb: 3,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box sx={{ 
                  p: 1, 
                  borderRadius: 2, 
                  background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <LocalFireDepartment sx={{ color: 'white', fontSize: 20 }} />
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>Trending Ideas</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {['Smart Campus System', 'Eco-Friendly Transport', 'Mental Health App'].map((item, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      p: 2, 
                      background: 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
                      borderRadius: 3, 
                      cursor: 'pointer', 
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(0,0,0,0.05)',
                      '&:hover': { 
                        transform: 'translateX(5px)',
                        background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      } 
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.5 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>{item}</Typography>
                      <Chip 
                        label={`+${12 + index * 3}`}
                        size="small"
                        sx={{ 
                          bgcolor: 'secondary.main', 
                          color: 'white',
                          fontWeight: 700,
                          height: 20,
                          fontSize: '0.7rem'
                        }} 
                      />
                    </Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>likes today</Typography>
                  </Box>
                ))}
              </Box>
              </Card>
              
              <Card sx={{ 
                borderRadius: 4, 
                p: 3,
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Box sx={{ 
                    p: 1, 
                    borderRadius: 2, 
                    background: 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <EmojiEvents sx={{ color: 'white', fontSize: 20 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>Top Contributors</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  {['Sarah Miller', 'John Davis', 'Emma Wilson'].map((name, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2,
                        p: 1.5,
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(59, 130, 246, 0.05)',
                          transform: 'translateX(3px)'
                        }
                      }}
                    >
                      <Avatar sx={{ 
                        bgcolor: 'primary.main', 
                        width: 48,
                        height: 48,
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
                      }}>
                        {name[0]}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', mb: 0.5 }}>{name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>{15 - index * 2} ideas</Typography>
                          {index === 0 && (
                            <Chip 
                              label="Top"
                              size="small"
                              sx={{ 
                                bgcolor: 'warning.main', 
                                color: 'white',
                                height: 16,
                                fontSize: '0.65rem',
                                fontWeight: 700,
                                ml: 0.5
                              }} 
                            />
                          )}
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardLayout;

