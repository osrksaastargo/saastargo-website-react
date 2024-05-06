import React from "react";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import TransformationSolution from "../pages/TransformationSolution";
import TopNotchServices from "../pages/TopNotchServices";

import { Box, Card, Typography } from "@mui/material";
import Clients from "../pages/Clients";
import { Image } from "@mui/icons-material";

const Home = () => {
  return (
    <>
      <Box className="homeBox1">
        <Box>
          <Box>
            <Typography
              variant="body1"
              style={{ fontSize: "60px", color: "white" }}
            >
              Elevating Businesses with Strategic Software Development &
              Informed IT Consulting
            </Typography>
          </Box>
          <Box>
            <Card
              sx={{
                borderRadius: "40px",
                width: "150px",
                height: "40px",
                textAlign: "center",
                paddingTop: "15px",
                backgroundColor: "orange",
                marginTop: "50px",
              }}
            >
              <Typography>Reach Us Now</Typography>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "black",
          height: "150px",
          alignItems: "center",
          padding: "0px 40px 0px 40px",
        }}
      >
        <Box>
          <img
            style={{ width: "80px", height: "80px" }}
            src="../.././assets/hilton-logo-2.png"
            alt="hilton"
          />
        </Box>
        <Box>
          <img
            style={{ width: "80px", height: "60px" }}
            src="../.././assets/windstar-cruises.png"
            alt="windstar"
          />
        </Box>
        <Box>
          <img
            style={{ width: "80px", height: "60px" }}
            src="../.././assets/rowan-university-2.png"
            alt="rowan"
          />
        </Box>
        <Box>
          <img
            style={{ width: "80px", height: "60px" }}
            src="../.././assets/sysco-logo.png"
            alt="sysco"
          />
        </Box>
      </Box>
      <Box className="homeBox2">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "40px",
            flexWrap: "wrap", // Allow flex items to wrap to next line
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap", // Allow flex items to wrap to next line
            }}
          >
            <Card
              sx={{
                backgroundColor: "black",
                display: "flex",
                width: "200px",
                height: "120px",
                alignItems: "center",
                borderRadius: "20px",
                justifyContent: "space-evenly",
                "@media (max-width:768px)": {
                  width: "calc(50% - 15px)", // Adjust width for responsiveness, considering gap
                  marginBottom: "20px", // Add margin to separate cards in column layout
                },
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                  paddingLeft: "10px",
                }}
                src="../.././assets/experience 1.png"
                alt="experience"
              />
              <Typography sx={{ color: "white", marginLeft: "20px" }}>
                5+ YEARS EXPERIENCE
              </Typography>
            </Card>
            <Card
              sx={{
                backgroundColor: "black",
                display: "flex",
                width: "200px",
                height: "120px",
                alignItems: "center",
                borderRadius: "20px",
                "@media (max-width:768px)": {
                  width: "calc(50% - 15px)", // Adjust width for responsiveness, considering gap
                  marginBottom: "20px", // Add margin to separate cards in column layout
                },
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                  paddingLeft: "10px",
                }}
                src="../.././assets/clients 2.png"
                alt="clients"
              />
              <Typography sx={{ color: "white", marginLeft: "20px" }}>
                35+ HAPPY CLIENTS
              </Typography>
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap", // Allow flex items to wrap to next line
            }}
          >
            <Card
              sx={{
                backgroundColor: "black",
                display: "flex",
                width: "200px",
                height: "120px",
                alignItems: "center",
                borderRadius: "20px",
                "@media (max-width:768px)": {
                  width: "calc(50% - 15px)", // Adjust width for responsiveness, considering gap
                  marginBottom: "20px", // Add margin to separate cards in column layout
                },
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                  paddingLeft: "10px",
                }}
                src="../.././assets/projects 3.png"
                alt="projects"
              />
              <Typography sx={{ color: "white", marginLeft: "20px" }}>
                35+ COMPLETED PROJECTS
              </Typography>
            </Card>
            <Card
              sx={{
                backgroundColor: "black",
                display: "flex",
                width: "200px",
                height: "120px",
                alignItems: "center",
                borderRadius: "20px",
                "@media (max-width:768px)": {
                  width: "calc(50% - 15px)", // Adjust width for responsiveness, considering gap
                  marginBottom: "20px", // Add margin to separate cards in column layout
                },
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  color: "white",
                  paddingLeft: "10px",
                }}
                src="../.././assets/client retention 4.png"
                alt="retention"
              />
              <Typography sx={{ color: "white", marginLeft: "20px" }}>
                94% CLIENT RETENTION
              </Typography>
            </Card>
          </div>
        </Box>

        <Box
          style={{
            padding: "30px 40px 20px 10px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <img
              style={{
                borderRadius: "20px",
                width: "300px",
                height: "300px",
              }}
              src="../.././assets/sergey-zolkin-_UeY8aTI6d0-unsplash.jpg"
              alt="sergey"
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography
                variant="h6"
                style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              >
                DRIVEN WITH DESIRE TO SOLVE BUSINESS INTRICACIES
              </Typography>
            </Box>
            <br />
            <Box>
              <Typography
                variant="h6"
                style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}
              >
                SaasTargo = Saas + Target + Growth
              </Typography>
            </Box>
            <br />
            <Box>
              <Typography
                variant="body2"
                style={{ color: "black", fontSize: "15px", fontWeight: "bold" }}
              >
                Unraveling the complexities of SaaS scaling with our targeted
                approach that accelerates your journey towards growth
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <TopNotchServices />
      <Clients />
      <TransformationSolution />
      <Map />
      <Contactus />
    </>
  );
};

export default Home;
