import React from "react";
import TransformationSolution from "../pages/TransformationSolution";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Industries = () => {
  var settings = {
    dots: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const data = [
    {
      img: "../.././assets/poster 1 2.jpg",
      description:
        "AMPLIFY THE MAGIC, SELL OUT THE SEATS, AND LEAVE AUDIENCES BREATHLESS.",
    },
    {
      img: "../.././assets/poster 2 1.jpg",
      description:
        "SIZZLE WITH DIGITAL STRATEGIES THAT KEEP RESERVATIONS OVERFLOWING.",
    },
    {
      img: "../.././assets/poster 3.jpg",
      description:
        "FUEL WANDERLUST, DRIVE BOOKINGS, AND BUILD LASTING MEMORIES.",
    },
  ];
  return (
    <>
      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
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
                    left: "800px", // Pushing description to the right of the image
                    transform: "translateY(-50%)", // Centering vertically
                    color: "white", // Example text color
                  }}
                >
                  <p style={{ width: "300px" }}>{d.description}</p>
                </div>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
      <TransformationSolution />
      <Map />

      <div
        style={{
          marginTop: "120px",
          position: "relative",
          width: "100%",
          height: "100vh",
          backgroundImage: `url("../.././assets/design-3.png")`,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url("../.././assets/design-4.png")`,
            zIndex: -1,
          }}
        />
        <Box style={{ position: "relative", top: "-100px" }}>
          <Contactus />
        </Box>
      </div>
    </>
  );
};

export default Industries;
