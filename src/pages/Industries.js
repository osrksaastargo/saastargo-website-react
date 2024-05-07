import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";

const Industries = () => {
  return (
    <Container>
      <Card
        sx={{
          width: "500px",
          height: "120px",
          backgroundColor: "lightgrey",
          borderRadius: "20px",
          margin: "50px 0px 20px 350px",
          display: "flex",
          textAlign: "center",
        }}
      >
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography sx={{ color: "black" }}>
              <a style={{ color: "black" }} href="/industries">
                Ecommerce
              </a>
            </Typography>
          </Box>
          <Box>
            <Typography>Travel</Typography>
          </Box>
        </div>
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Horeca</Typography>
          </Box>
          <Box>
            <Typography>Entertainment</Typography>
          </Box>
        </div>
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography>Home and decor Technology</Typography>
          </Box>
          <Box>
            <Typography>Finance</Typography>
          </Box>
        </div>
      </Card>
    </Container>
  );
};

export default Industries;
