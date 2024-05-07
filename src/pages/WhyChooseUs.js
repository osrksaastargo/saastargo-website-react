import React from "react";
import { Box, Typography } from "@mui/material";

const WhyChooseUs = () => {
  return (
    <div>
      <Box sx={{ margin: "20px", maxWidth: "100%" }}>
        <Box>
          <Typography
            variant="h3"
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: "40px",
              textAlign: "center",
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h5"
            style={{
              color: "black",
              textAlign: "center",
              fontSize: "25px",
              marginButtom: "30px",
            }}
          >
            Pioneering Tomorrow with Precision and Passion
          </Typography>
        </Box>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div
            style={{ display: "flex", alignItems: "center", maxWidth: "300px" }}
          >
            <div style={{ marginRight: "20px" }}>
              <img
                style={{
                  padding: "10px",
                  width: "80px",
                  height: "100px",
                }}
                src="./assets/sales/content-2.png"
                alt="img"
              />
            </div>
            <div style={{ flex: 1 }}>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                  textAlign: "start",
                }}
              >
                In-house Expertise
              </Typography>
            </div>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", maxWidth: "300px" }}
          >
            <div style={{ marginRight: "20px" }}>
              <img
                style={{
                  padding: "10px",
                  width: "80px",
                  height: "100px",
                }}
                src="./assets/sales/algorithm-1.png"
                alt="img"
              />
            </div>
            <div style={{ flex: 1 }}>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                  textAlign: "start",
                }}
              >
                Seamless Integration
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div
            style={{ display: "flex", alignItems: "center", maxWidth: "300px" }}
          >
            <div style={{ marginRight: "20px" }}>
              <img
                style={{
                  padding: "10px",
                  width: "80px",
                  height: "100px",
                }}
                src="./assets/sales/pen.png"
                alt="img"
              />
            </div>
            <div style={{ flex: 1 }}>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                  textAlign: "start",
                }}
              >
                Tailored Solutions for Challenges
              </Typography>
            </div>
          </div>

          {/* Repeat similar structure for other items */}

          <div
            style={{ display: "flex", alignItems: "center", maxWidth: "300px" }}
          >
            <div style={{ marginRight: "20px" }}>
              <img
                style={{
                  padding: "10px",
                  width: "80px",
                  height: "100px",
                }}
                src="./assets/sales/backlink-1.png"
                alt="img"
              />
            </div>
            <div style={{ flex: 1 }}>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                  textAlign: "start",
                }}
              >
                Support and Maintenance
              </Typography>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div
            style={{ display: "flex", alignItems: "center", maxWidth: "300px" }}
          >
            <div style={{ marginRight: "20px" }}>
              <img
                style={{
                  padding: "10px",
                  width: "80px",
                  height: "100px",
                }}
                src="./assets/sales/vector.png"
                alt="img"
              />
            </div>
            <div style={{ flex: 1 }}>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                  textAlign: "start",
                }}
              >
                Incorporation of Cutting-Edge Technology
              </Typography>
            </div>
          </div>

          <div
            style={{ display: "flex", alignItems: "center", maxWidth: "300px" }}
          >
            <div style={{ marginRight: "20px" }}>
              <img
                style={{
                  padding: "10px",
                  width: "80px",
                  height: "100px",
                }}
                src="./assets/sales/like.png"
                alt="img"
              />
            </div>
            <div style={{ flex: 1 }}>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "20px",
                  textAlign: "start",
                }}
              >
                On-Time Delivery & Cost-Effective Solution
              </Typography>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default WhyChooseUs;
