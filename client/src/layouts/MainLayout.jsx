import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%)",
      }}
    >
      {/* Header */}
      <Navbar />

      {/* Page content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",      // vertical center
          justifyContent: "center",  // horizontal center
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default MainLayout;
