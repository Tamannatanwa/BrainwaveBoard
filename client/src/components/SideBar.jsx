import React from 'react';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Lightbulb from "@mui/icons-material/Lightbulb";
import Person from "@mui/icons-material/Person";
import Add from "@mui/icons-material/Add";

const Sidebar = ({ currentFilter, onFilterChange }) => {
  const menuItems = [
    { text: 'All Ideas', icon: <Lightbulb />, value: 'all' },
    { text: 'My Ideas', icon: <Person />, value: 'my' },
    { text: 'Add New', icon: <Add />, value: 'add' },
    { text: 'Profile', icon: <Person />, value: 'profile' },
  ];

  return (
    <Box sx={{ 
      width: '100%', 
      height: 'fit-content',
      position: 'sticky',
      top: '100px',
      background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
      borderRadius: 4,
      p: 2.5,
      border: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
    }}>
      <List sx={{ p: 0 }}>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.value}
            onClick={() => onFilterChange(item.value)}
            sx={{
              borderRadius: 3,
              mb: 1.5,
              py: 1.5,
              px: 2,
              background: currentFilter === item.value 
                ? 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)' 
                : 'transparent',
              boxShadow: currentFilter === item.value 
                ? '0 4px 12px rgba(59, 130, 246, 0.3)' 
                : 'none',
              '&:hover': {
                background: currentFilter === item.value 
                  ? 'linear-gradient(135deg, #3B82F6 0%, #1E3A8A 100%)' 
                  : 'linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%)',
                transform: 'translateX(8px)',
                boxShadow: currentFilter === item.value 
                  ? '0 4px 12px rgba(59, 130, 246, 0.4)' 
                  : '0 2px 8px rgba(0,0,0,0.1)'
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <ListItemIcon sx={{ 
              color: currentFilter === item.value ? 'white' : 'primary.main', 
              minWidth: 40 
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                fontWeight: currentFilter === item.value ? 700 : 600,
                color: currentFilter === item.value ? 'white' : 'primary.main',
                fontSize: '0.95rem'
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
