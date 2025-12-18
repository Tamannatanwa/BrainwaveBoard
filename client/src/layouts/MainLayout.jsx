import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";

const MainLayout = ({ children, showFooter = true }) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Fixed Header */}
      <Box sx={{ flexShrink: 0, zIndex: 1100 }}>
        <Navbar isLoggedIn={isAuthenticated} onLogout={logout} />
      </Box>

      {/* Scrollable Page content */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          pt: "64px", // Account for fixed navbar
          pb: showFooter ? "120px" : "0", // Account for fixed footer height
        }}
      >
        {children}
      </Box>

      {/* Fixed Footer */}
      {showFooter && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            flexShrink: 0,
          }}
        >
          <Footer />
        </Box>
      )}
    </Box>
  );
};

export default MainLayout;
