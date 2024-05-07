import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";

const Resources = () => {
  return (
    <Container>
      <Card
        sx={{
          width: "350px",
          height: "100px",
          backgroundColor: "lightgrey",
          borderRadius: "20px",
          margin: "50px 0px 20px 500px",
          display: "flex",
          textAlign: "center",
        }}
      >
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Blog</Typography>
          </Box>
          <Box>
            <Typography>Travel</Typography>
          </Box>
        </div>
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Newsletters</Typography>
          </Box>
          <Box>
            <Typography>Web Stories</Typography>
          </Box>
        </div>
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <img
            style={{ width: "100px", height: "60px", borderRadius: "25px" }}
            src="./assets/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
            alt="resource"
          />
        </div>
      </Card>
    </Container>
  );
};

export default Resources;
