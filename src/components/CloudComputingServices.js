import React from "react";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import TransformationSolution from "../pages/TransformationSolution";
import { Box, Card, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhyChooseUs from "../pages/WhyChooseUs";

const CloudComputingServices = () => {
  // var settings = {
  //   dots: true,
  //   speed: 800,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
  const data = [
    {
      img: "./assets/digital/public-relation-1-5.png",
      name: "Search Engine Optimization (SEO)",
      button: "Explore",
      description:
        "Boost your online visibility organically, rising to the top of search results effortlessly.",
    },
    {
      img: "./assets/digital/public-relation-1-4.png",
      name: "Pay-Per-Click (PPC) Advertising",
      button: "Explore",
      description:
        "Drive targeted traffic instantly with precision-targeted ads, maximizing your ROI.",
    },
    {
      img: "./assets/digital/public-relation-1-3.png",
      name: "Content Marketing",
      button: "Explore",
      description:
        "Captivate your audience with compelling content, forging lasting connections and brand loyalty.",
    },
    {
      img: "./assets/digital/public-relation-1-2.png",
      name: "Online Reputation Management (ORM)",
      button: "Explore",
      description:
        "Safeguard and enhance your online image, ensuring a positive perception in the digital realm.",
    },

    {
      img: "./assets/digital/public-relation-1-1.png",
      name: "Video Advertising",
      button: "Explore",
      description:
        "Engage, captivate, and convert with dynamic video campaigns, making your brand resonate visually.",
    },
    {
      img: "./assets/digital/public-relation-1.png",
      name: "Social Media Marketing",
      button: "Explore",
      description:
        "Ignite conversations and build communities, leveraging social platforms to amplify your brand presence.",
    },
  ];
  // var settings1 = {
  //   dots: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };

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
  var settings1 = {
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
  const ExpertData = [
    {
      img: "./assets/sales/user-1-2.png",
      name: "Cloud Architect",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Cloud Engineer",
    },
    {
      img: "./assets/sales/user-1.png",
      name: "Network Engineer",
    },
    {
      img: "./assets/sales/content-1-1.png",
      name: "System Engineer",
    },
    {
      img: "./assets/sales/content-1.png",
      name: "Cloud Security Specialist",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Project Manager",
    },
  ];
  return (
    <>
      <Box className="cloudBox1">
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Cloud Computing Services
            </Typography>
            <br />
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Say Goodbye to IT Overload.
            </Typography>
            <br />
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Say Hello to Cloud Computing
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "white" }}
            >
              Your gateway to agility and efficiency. We'll craft bespoke
              solutions that propel your business into the stratosphere.
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
      <Box sx={{ textAlign: "center" }}>
        <Box>
          <Typography
            sx={{
              textAlign: "left",
              color: "black",
              fontWeight: "bold",
              paddingBottom: "10px",
              paddingLeft: "10px",
            }}
            variant="h3"
          >
            Our Top-Notch Services
          </Typography>
          <Typography
            variant="body2"
            sx={{
              paddingLeft: "10px",
              fontSize: "30px",
              textAlign: "left",
              color: "black",
            }}
          >
            Seamlessly integrate AI models into your systems and optimize them
            for peak performance, ensuring a harmonious fusion with your
            existing infrastructure.
          </Typography>
        </Box>
        <Box>
          <Slider {...settings}>
            {data.map((d) => (
              <Card
                key={d.id}
                sx={{
                  width: "100%",
                  maxWidth: "350px", // Adjust the maximum width as needed
                  margin: "30px 0px 0px 0px",
                  height: "480px",
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
                    style={{ fontSize: "20px", color: "white", width: "300px" }}
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
      <WhyChooseUs />
      <div style={{ backgroundColor: "#171e57", gap: "50px" }}>
        <Box style={{ width: "100%", padding: "30px 20px 20px 10px" }}>
          <Box>
            <Typography
              style={{
                color: "white",
                fontWeight: "bold",
                paddingBottom: "40px",
              }}
              variant="h2"
            >
              Cloud Performance
            </Typography>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography
              style={{
                color: "white",

                paddingBottom: "40px",
                fontSize: "30px",
              }}
              variant="body2"
            >
              <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                Proactive Optimization :
              </span>{" "}
              We constantly monitor your cloud environment to identify and
              address potential issues before they impact your business.
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                color: "white",

                paddingBottom: "40px",
                fontSize: "30px",
              }}
              variant="body2"
            >
              <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                Data-Driven Insights :
              </span>{" "}
              We leverage robust reporting tools to provide you with actionable
              insights for optimizing your cloud performance
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                color: "white",

                paddingBottom: "40px",
                fontSize: "30px",
              }}
              variant="body2"
            >
              <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                Data-Driven Insights :
              </span>{" "}
              Our team of cloud engineers is always on hand to help you optimize
              your cloud resources and costs
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <img
              style={{
                width: "100%",
                height: "500px",
              }}
              src="./assets/cloud.jpg"
              alt="about-img1"
            />
          </Box>
        </Box>
      </div>
      <Box>
        <Box>
          <Typography
            style={{ color: "black", fontWeight: "bold", fontSize: "40px" }}
          >
            Expert Team
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "lightgrey",
            width: "100%",
            borderRadius: "5px",
          }}
        >
          <Box className="expert">
            <Box>
              <Slider {...settings1}>
                {ExpertData.map((d) => (
                  <Card
                    key={d.id}
                    sx={{
                      width: "100%",
                      maxWidth: "280px", // Adjust the maximum width as needed
                      margin: "30px 0px 0px 0px",
                      height: "300px",
                      padding: "40px 0px 0px 80px",
                      gap: "20px",
                      borderRadius: "30px",
                      cursor: "pointer",
                      background:
                        "linear-gradient(180deg, rgb(76, 52, 52) 0%, rgb(177.64, 90.59, 90.59) 100%)",
                    }}
                  >
                    <img
                      style={{
                        marginLeft: "40px",
                        width: "50%",
                        maxWidth: "100%", // Ensure the image does not exceed its container's width
                        height: "auto", // Maintain aspect ratio
                        borderRadius: "40px",
                      }}
                      src={d.img}
                      alt="img"
                    />
                    <br />
                    <div
                      style={{
                        paddingRight: "70px",
                        textAlign: "center",
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
                    <div>
                      <p style={{ color: "white", width: "300px" }}>
                        {d.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </Slider>
            </Box>
          </Box>
        </Box>
      </Box>
      <TransformationSolution />
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Typography variant="h3" style={{ color: "black", fontWeight: "bold" }}>
          Service Delivery Process
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            sx={{
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
              width: "90%", // Adjusted width for responsiveness
              maxWidth: "400px", // Set maximum width to prevent stretching on larger screens
              margin: "20px 0",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h6">Initial Consultation</Typography>
              <br />
              <Typography variant="body2">
                Navigate your way to app excellence as we delve into your unique
                development needs
              </Typography>
            </Box>

            <Box>
              <img
                style={{ width: "50px", height: "50px" }}
                src="../.././assets/mission-1-3.png"
                alt="arrow"
              />
            </Box>
          </Card>
          <Card
            sx={{
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
              width: "90%", // Adjusted width for responsiveness
              maxWidth: "400px", // Set maximum width to prevent stretching on larger screens
              margin: "20px 0",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h6">Customized Solution Design</Typography>
              <br />
              <Typography variant="body2">
                Craft a personalized blueprint aligned with your business
                processes and objectives.
              </Typography>
            </Box>
            <Box>
              <img
                style={{ width: "50px", height: "50px" }}
                src="./assets/sound.png"
                alt="vision"
              />
            </Box>
          </Card>
          <Card
            sx={{
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
              width: "90%", // Adjusted width for responsiveness
              maxWidth: "400px", // Set maximum width to prevent stretching on larger screens
              margin: "20px 0",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h6">Development and Integration</Typography>
              <br />
              <Typography variant="body2">
                Forge a seamless and potent system, integrating with your
                existing tech infrastructure.
              </Typography>
            </Box>
            <Box>
              <img
                style={{ width: "50px", height: "50px" }}
                src="../.././assets/sales/mission-1-1.png"
                alt="values"
              />
            </Box>
          </Card>
        </div>
      </div>
      <Map />
      <Contactus />
    </>
  );
};

export default CloudComputingServices;
