import { Box, Card, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Clients = () => {
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
      img: "../.././assets/user-3-1-4.png",
      name: "Ramesh from Hyderabad:",
      description:
        "Our business has taken a turn for the better with the SEO services we've been using. Revenue is up, and our ranking have improved in Google.",
    },
    {
      img: "../.././assets/user-3-1-3.png",
      name: "Jennifer from Texas, USA:",
      description:
        "As a small business owner, I'm genuinely grateful for the expert IT consulting we received. It really streamlined our business operations.",
    },
    {
      img: "../.././assets/user-3-1-2.png",
      name: "Priya from Andheri East, Mumbai:",
      description:
        "The team we worked with truly got our unique needs. Their IT consulting services were a game-changer in overcoming technical challenges. All the best.",
    },
    {
      img: "../.././assets/user-3-1-1.png",
      name: "John from Ontario, CA:",
      description:
        "The commitment to quality work and the digital marketing solutions we implemented significantly boosted our online presence and customer base.",
    },
    {
      img: "../.././assets/user-3-1.png",
      name: "Rajesh from Bangalore:",
      description:
        "Honestly, the expertise in Salesforce and AI-driven services was impressive. Their solutions modernized our systems and enhanced efficiency.",
    },
  ];
  return (
    <>
      <Box>
        <Typography
          style={{ color: "black", fontWeight: "bold", fontSize: "40px" }}
        >
          What Our Clients Say
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "lightgrey",
          width: "100%",
          borderRadius: "5px",
        }}
      >
        <Box className="clients">
          <Box>
            <Slider {...settings}>
              {data.map((d) => (
                <Card
                  key={d.id}
                  sx={{
                    width: "100%",
                    maxWidth: "300px", // Adjust the maximum width as needed
                    margin: "30px 0px 0px 50px",
                    height: "500px",
                    padding: "40px 0px 0px 20px",
                    gap: "20px",
                    textAlign: "center",
                    borderRadius: "30px",
                    cursor: "pointer",
                    background:
                      "linear-gradient(180deg, rgb(73.94, 49.23, 49.23) 0%, rgba(127.49, 127.49, 127.49, 0.8) 100%)",
                  }}
                >
                  <img
                    style={{
                      width: "70%",
                      maxWidth: "100%", // Ensure the image does not exceed its container's width
                      height: "auto", // Maintain aspect ratio
                      borderRadius: "40px",
                      marginLeft: "30px",
                    }}
                    src={d.img}
                    alt="img"
                  />
                  <br />
                  <div
                    style={{
                      paddingRight: "70px",
                      textAlign: "center",
                      marginLeft: "30px",
                    }}
                  >
                    <Typography
                      style={{ color: "white", fontWeight: "bold" }}
                      variant="h6"
                    >
                      {d.name}
                    </Typography>
                  </div>
                  <br />
                  <div style={{ marginLeft: "10px" }}>
                    <p
                      style={{
                        color: "white",
                        width: "250px",
                      }}
                    >
                      {d.description}
                    </p>
                  </div>
                </Card>
              ))}
            </Slider>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Clients;
