import { Box, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TransformationSolution = () => {
  var settings = {
    dots: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      img: "../.././assets/headway-5QgIuuBxKwM-unsplash 1.jpg",
      description:
        "Unveiling Triumph Over Adversity Witness the Resurrection: How SAASTargo Rescued a Drowning E-Commerce Venture,Igniting a 40% Surge!",
    },
    {
      img: "../.././assets/roberto-sorin-x649mR6yBIs-unsplash 1.jpg",
      description:
        "Chronicles of Cybersecurity Conquest Unveiling the Shadows: The Tactical IT Consulting Unleashes a 30% Surge in Small Business Fortitude",
    },
    {
      img: "../.././assets/christin-hume-Hcfwew744z4-unsplash (1) 1.jpg",
      description:
        "The Code of Efficiency Unraveled Cracking the Code: The Software Overhaul Sparks a 40% Surge in Operational Prowess - Unleashing the Power Within",
    },
  ];
  return (
    <>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Box>
          <Typography
            sx={{
              textAlign: "left",
              color: "black",
              fontWeight: "bold",
              paddingBottom: "10px",
            }}
            variant="h4"
          >
            Transformative Solution in Every step
          </Typography>
        </Box>
        <Box>
          <Slider {...settings}>
            {data.map((d) => (
              <Box
                key={d.id}
                sx={{
                  width: "100%",
                  maxWidth: "1200px", // Adjust the maximum width as needed
                  margin: "auto",
                  height: "auto",
                  position: "relative",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    maxWidth: "100%", // Ensure the image does not exceed its container's width
                    height: "auto", // Maintain aspect ratio
                    borderRadius: "40px",
                  }}
                  src={d.img}
                  alt="Img"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%", // Aligning description to the vertical center
                    left: "300px", // Pushing description to the right of the image
                    transform: "translateY(-50%)", // Centering vertically
                    color: "white", // Example text color
                  }}
                >
                  <Typography variant="body2">{d.description}</Typography>
                </div>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default TransformationSolution;
