import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Resources from "../pages/Resources";
import Industries from "../pages/Industries";
import AboutUs from "../pages/AboutUs";
import Service from "../pages/Services";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSectionToggle = (section) => {
    setActiveSection(section === activeSection ? null : section);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <AppBar style={{ backgroundColor: "black" }} position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexGrow: 1,
              }}
            >
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <a href="/">
                  <img
                    style={{
                      marginTop: "42px",
                      width: "200px",
                      height: "100px",
                      cursor: "pointer",
                    }}
                    src="../.././assets/logo-main-png-2-1.png"
                    alt="logo"
                  />
                </a>
              </Typography>
              <IconButton
                color="inherit"
                onClick={toggleMenu}
                sx={{ display: { md: "none" } }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            </Box>
            <Box
              sx={{
                gap: "25px",
                alignItems: "center",
                display: { xs: "none", md: "flex" },
                paddingLeft: "20px",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{ cursor: "pointer", mr: 1 }}
                onClick={() => handleSectionToggle("about")}
              >
                About
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ cursor: "pointer", mr: 1 }}
                onClick={() => handleSectionToggle("service")}
              >
                Services
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ cursor: "pointer", mr: 1 }}
                onClick={() => handleSectionToggle("industries")}
              >
                Industries
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{ cursor: "pointer", mr: 1 }}
                onClick={() => handleSectionToggle("resources")}
              >
                Resources
              </Typography>
              <button className="navbar-button">Get Free Consultation</button>
              <img
                style={{ width: "150px", height: "50px" }}
                src="../.././assets/file.png"
                alt="search"
              />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={menuOpen} onClose={toggleMenu}>
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", mb: 2 }}
            onClick={() => handleSectionToggle("about")}
          >
            About
          </Typography>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", mb: 2 }}
            onClick={() => handleSectionToggle("service")}
          >
            Services
          </Typography>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", mb: 2 }}
            onClick={() => handleSectionToggle("industries")}
          >
            Industries
          </Typography>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer", mb: 2 }}
            onClick={() => handleSectionToggle("resources")}
          >
            Resources
          </Typography>
          <button className="navbar-button">Get Free Consultation</button>
          <img
            style={{ width: "150px", height: "50px" }}
            src="../.././assets/file.png"
            alt="search"
          />
        </Box>
      </Drawer>

      {activeSection === "about" && <AboutUs />}
      {activeSection === "service" && <Service />}
      {activeSection === "industries" && <Industries />}
      {activeSection === "resources" && <Resources />}
    </>
  );
};

export default Navbar;
