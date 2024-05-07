import { Box, Card, Typography, Container } from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <Container>
      <Card
        sx={{
          width: "500px",
          height: "150px",
          backgroundColor: "lightgrey",
          borderRadius: "20px",
          margin: "50px 0px 20px 200px",
          padding: "10px 0px 0px 20px",
          display: "flex",
          textAlign: "center",
        }}
      >
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "black" }}>
              <a style={{ color: "black" }} href="/about">
                About Us
              </a>
            </Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Location</Typography>
          </Box>
          <Box>
            <Typography>Client Reviews</Typography>
          </Box>
        </div>
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Work Portfolio</Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Career</Typography>
          </Box>
          <Box>
            <Typography>Awards</Typography>
          </Box>
        </div>
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Press Release</Typography>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Mission & Vision</Typography>
          </Box>
          <Box>
            <Typography>CXO</Typography>
          </Box>
        </div>
      </Card>
    </Container>
  );
};

export default AboutUs;
