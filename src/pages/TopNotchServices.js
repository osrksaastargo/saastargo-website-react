import { Box, Card, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopNotchServices = () => {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      img: "./assets/home/public-relation-1-7.png",
      name: "Salesforce Development",
      button: "Explore",
      description:
        "Revive business strategies, optimize customer relationships, and unlock the true potential of your business with our Salesforce development services.",
    },
    {
      img: "./assets/home/public-relation-1-6.png",
      name: "Digital Marketing",
      button: "Explore",
      description:
        "Connect your business with us to leverage endless opportunities and capabilities of Salesforce, allowing you to increase efficiency and maximize outcomes.",
    },
    {
      img: "./assets/home/public-relation-1-5.png",
      name: "Web Development",
      button: "Explore",
      description:
        "With a specialization in creating high-quality web applications, we offer optimized and user- friendly web development services for businesses worldwide",
    },
    {
      img: "./assets/home/public-relation-1-4.png",
      name: "App Development",
      button: "Explore",
      description:
        "Efficient testing through automation tools, reducing manual effort and ensuring consistent results",
    },

    {
      img: "./assets/home/public-relation-1-3.png",
      name: "Cloud Computing",
      button: "Explore",
      description:
        "Cloud computing has transformed the IT industry through its scalable and versatile platform, enabling cost-effective storage and management of vast data volumes",
    },
    {
      img: "./assets/home/public-relation-1-2.png",
      name: "Low Code Development",
      button: "Explore",
      description:
        "Low-code development platforms provide a visual interface for creating high-quality applications without extensive coding",
    },
    {
      img: "./assets/home/public-relation-1-1.png",
      name: "Blockchain Development",
      button: "Explore",
      description:
        "Redefine the future of your business. Embrace the decentralized revolution",
    },
    {
      img: "./assets/home/public-relation-1.png",
      name: "AI Development",
      button: "Explore",
      description:
        "Whether you're a small startup or a global enterprise, we have the expertise and resources to develop an AI solution",
    },
  ];
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
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
            Our Top-Notch Services
          </Typography>
        </Box>
        <Box>
          <Slider {...settings}>
            {data.map((d) => (
              <Card
                key={d.id}
                sx={{
                  width: "100%",
                  maxWidth: "300px", // Adjust the maximum width as needed
                  margin: "30px 0px 0px 0px",
                  height: "550px",
                  padding: "40px 0px 0px 20px",
                  gap: "20px",
                  borderRadius: "30px",
                  cursor: "pointer",
                  background:
                    "linear-gradient(180deg, rgb(218.87, 94.3, 94.3) 0%, rgba(38.24, 27.28, 27.28, 0.72) 100%)",
                }}
              >
                <img
                  style={{
                    width: "50px",
                    maxWidth: "70px", // Ensure the image does not exceed its container's width
                    height: "70px", // Maintain aspect ratio
                  }}
                  src={d.img}
                  alt="img"
                />
                <br />
                <div
                  style={{
                    paddingRight: "70px",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    style={{ color: "white", fontWeight: "bold" }}
                    variant="h4"
                  >
                    {d.name}
                  </Typography>
                </div>
                <br />
                <div style={{ textAlign: "left" }}>
                  <Typography
                    variant="body2"
                    style={{ fontSize: "20px", color: "white", width: "220px" }}
                  >
                    {d.description}
                  </Typography>
                </div>
                <br />
                <div
                  style={{
                    display: "flex",
                    textAlign: "left",
                    paddingTop: "30px",
                  }}
                >
                  <p style={{ color: "white" }}>{d.button}</p>
                  <img
                    style={{ paddingLeft: "20px" }}
                    src="./assets/home/next-3-8.png"
                    alt="greater-than"
                  />
                </div>
              </Card>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default TopNotchServices;
