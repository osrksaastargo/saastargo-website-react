import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";

const Service = () => {
  return (
    <Container>
      <Card
        sx={{
          width: "1100px",
          height: "600px",
          backgroundColor: "lightgrey",
          borderRadius: "20px",
          margin: "50px 0px 20px 50px",
          padding: "10px 0px 0px 20px",
          display: "flex",
          textAlign: "center",
        }}
      >
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              <a style={{ color: "black" }} href="/salesforce-service">
                Salesforce Development
              </a>
            </Typography>
            <div
              style={{
                gap: "10px",
                marginTop: "10px",

                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>Marketing</Typography>
              <Typography>Sales</Typography>
              <Typography>Service</Typography>
              <Typography>Commerce</Typography>
              <Typography>App</Typography>
              <Typography>Community</Typography>
            </div>
          </Box>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{ fontWeight: "bold", color: "black", marginTop: "30px" }}
            >
              <a style={{ color: "black" }} href="/digital-marketing-service">
                Digital Marketing Services
              </a>
            </Typography>
            <div
              style={{
                gap: "10px",
                marginTop: "10px",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>SEO</Typography>
              <Typography>PPC</Typography>
              <Typography>Content</Typography>
              <Typography>ORM</Typography>
              <Typography>Advertising</Typography>
              <Typography>Social Media</Typography>
            </div>
          </Box>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography
              sx={{ fontWeight: "bold", marginLeft: "-30px", color: "black" }}
            >
              <a style={{ color: "black" }} href="/mobile-service">
                App Development
              </a>
            </Typography>
            <div
              style={{
                gap: "10px",
                marginTop: "10px",
                marginLeft: "90px",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>ios</Typography>
              <Typography>Android</Typography>
              <Typography>React Native</Typography>
              <Typography>Flutter</Typography>
              <Typography>Xamarin</Typography>
              <Typography>Hybrid</Typography>
            </div>
          </Box>

          <Box sx={{ marginBottom: "10px", marginTop: "30px" }}>
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              <a style={{ color: "black" }} href="/low-code-service">
                Low Code Development
              </a>
            </Typography>
            <div
              style={{
                gap: "10px",
                marginTop: "10px",
                paddingLeft: "70px",
                marginLeft: "10px",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>Process Automation</Typography>
              <Typography>Mobile App</Typography>
              <Typography>Data Integration and APIs</Typography>
              <Typography>Customer Experience Enhancement</Typography>
              <Typography>Intelligent Automation</Typography>
              <Typography>Collaborative</Typography>
            </div>
          </Box>
        </div>
        <div style={{ marginTop: "30px", marginLeft: "20px" }}>
          <Box sx={{ marginBottom: "10px", marginRight: "25px" }}>
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              <a style={{ color: "black" }} href="/web-service">
                Web Development
              </a>
            </Typography>
            <div
              style={{
                gap: "10px",
                marginTop: "10px",
                marginLeft: "20px",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>Front-end</Typography>
              <Typography>Responsive Web</Typography>
              <Typography>E-commerce</Typography>
              <Typography>API</Typography>
              <Typography>Microservices</Typography>
              <Typography>Full-stack</Typography>
            </div>
          </Box>

          <Box
            sx={{ marginBottom: "10px", marginTop: "30px", marginLeft: "20px" }}
          >
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              <a style={{ color: "black" }} href="/blockchain-service">
                BlockChain Development
              </a>
            </Typography>
            <div
              style={{
                gap: "10px",
                marginTop: "10px",
                marginLeft: "0px",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>Solana</Typography>
              <Typography>Hedera</Typography>
              <Typography>Stellar</Typography>
              <Typography>Polygon</Typography>
              <Typography>Cardano</Typography>
              <Typography>Hyperledger</Typography>
            </div>
          </Box>
        </div>
        <div style={{ marginTop: "30px", marginLeft: "20px" }}>
          <Box sx={{ marginBottom: "10px" }}>
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              <a style={{ color: "black" }} href="/cloud-computing-service">
                Cloud Computing
              </a>
            </Typography>
            <div
              style={{
                gap: "10px",
                marginTop: "10px",
                marginLeft: "20px",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>Public</Typography>
              <Typography>Private</Typography>
              <Typography>Hybrid</Typography>
              <Typography>Community</Typography>
              <Typography>Multi-Cloud</Typography>
              <Typography>Serverless</Typography>
            </div>
          </Box>

          <Box sx={{ marginBottom: "10px", marginTop: "30px" }}>
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              <a style={{ color: "black" }} href="/ai-service">
                Ai Development
              </a>
            </Typography>
            <div
              style={{
                gap: "10px",
                marginTop: "10px",
                marginLeft: "20px",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography>Machine Learning</Typography>
              <Typography>Deep Learning</Typography>
              <Typography>Predictive Analytics</Typography>
              <Typography>Data Science</Typography>
              <Typography>Robotic</Typography>
              <Typography>Fraud detection</Typography>
            </div>
          </Box>
        </div>
      </Card>
    </Container>
  );
};

export default Service;
