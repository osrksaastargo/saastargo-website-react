import React from "react";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import TransformationSolution from "../pages/TransformationSolution";

import { Typography, Box, Card } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhyChooseUs from "../pages/WhyChooseUs";

const LowCodeServices = () => {
  const ExpertData = [
    {
      img: "./assets/sales/user-1-2.png",
      name: "Low Code Development Strategist",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Low Code Development Specialist",
    },
    {
      img: "./assets/sales/user-1.png",
      name: "Integration Expert",
    },
    {
      img: "./assets/sales/content-1-1.png",
      name: "Custom Solutions Developer",
    },
    {
      img: "./assets/sales/content-1.png",
      name: "Quality Assurance Analyst",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Project Manager",
    },
  ];
  // var settings = {
  //   dots: true,
  //   speed: 800,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
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
  const data = [
    {
      img: "./assets/digital/public-relation-1-5.png",
      name: "Process Automation",
      button: "Explore",
      description:
        "Effortlessly streamline operations with automated workflows, boosting precision and efficiency.",
    },
    {
      img: "./assets/ai/public-relation-1-4.png",
      name: "Mobile App Development",
      button: "Explore",
      description:
        "Craft dynamic, user-focused mobile experiences, shaping the future of digital engagement.",
    },
    {
      img: "./assets/ai/public-relation-1-3.png",
      name: "Data Integration and APIs",
      button: "Explore",
      description:
        "Enhance business intelligence by seamlessly connecting systems and maximizing data synergy.",
    },
    {
      img: "./assets/ai/public-relation-1-2.png",
      name: "Customer Experience Enhancement",
      button: "Explore",
      description:
        "Elevate interactions with seamless, personalized experiences that leave a lasting impact.",
    },

    {
      img: "./assets/ai/public-relation-1-1.png",
      name: "Intelligent Automation",
      button: "Explore",
      description:
        "Optimize processes with smart automation, blending AI and machine learning for enhanced efficiency.",
    },
    {
      img: "./assets/ai/public-relation-1.png",
      name: "Collaborative Development",
      button: "Explore",
      description:
        "Innovate together and harness collective expertise for cutting-edge solutions and accelerated growth.",
    },
  ];
  return (
    <>
      <Box className="lowCodeBox1">
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Low Code Development Service
            </Typography>
            <br />
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Accelerated Path to Digital Transformation
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "white" }}
            >
              Experience your accelerated path to digital transformation with
              SAASTargo's Low Code Development Service.
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
                  height: "520px",
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
      <div
        style={{
          backgroundColor: "#171e57",
          gap: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            width: "100%",
            padding: "30px 20px 20px 10px",
          }}
        >
          <Box>
            <Typography
              style={{
                color: "white",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
              variant="h3"
            >
              Low Code Development Performance
            </Typography>
          </Box>

          <Box>
            <Typography
              style={{
                fontSize: "20px",
                color: "white",
                paddingBottom: "20px",
              }}
              variant="body2"
            >
              Proactively tackle challenges in your low code development
              strategy through comprehensive audits. Identify potential issues
              and optimize for a seamless user experience.
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                color: "white",
                paddingBottom: "20px",
              }}
              variant="body2"
            >
              Elevate your low code development outcomes with personalized
              insights. Our robust reporting tools empower data-driven
              decisions, refining strategies to achieve your development goals.
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                color: "white",
                paddingBottom: "20px",
              }}
              variant="body2"
            >
              Achieve success through metric-driven decisions. Continuously
              monitor real-time KPIs for a comprehensive understanding of your
              low code development efforts, enabling well-informed decisions.
            </Typography>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <img
            style={{ padding: "20px", width: "30%" }}
            src="./assets/lowcode/rectangle-145.svg"
            alt="about-img1"
          />
          <img
            style={{ padding: "20px", maxWidth: "30%" }}
            src="./assets/lowcode/rectangle-146.svg"
            alt="about-img2"
          />
          <img
            style={{ padding: "20px", maxWidth: "30%" }}
            src="./assets/lowcode/rectangle-147.svg"
            alt="about-img3"
          />
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
      <Box style={{ marginLeft: "5%", marginRight: "5%" }}>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Low Code Development Service
        </Typography>
        <Box className="lowCodeBox2">
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
                width: "90%",
                maxWidth: "400px", // Set maximum width to prevent stretching on larger screens
                margin: "20px 0",
                padding: "30px",
                borderRadius: "30px",
              }}
            >
              <Box>
                <Typography variant="h6">Initial Consultation:</Typography>
                <br />
                <Typography variant="body2">
                  Engage in a personalized dialogue during our initial
                  consultation, charting a strategic roadmap for your Low Code
                  goals. Your vision becomes our guiding compass as we embark on
                  this collaborative journey.
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
                <Typography variant="h6">
                  Implementation and Integration:
                </Typography>
                <br />
                <Typography variant="body2">
                  Forge a seamless Low Code system as we meticulously implement
                  and integrate it with your existing tech infrastructure. Watch
                  your vision come to life with precision and efficiency,
                  ensuring a smooth transition into the realm of transformative
                  technology.
                </Typography>
              </Box>
              <Box>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src="../.././assets/mission-1-1.png"
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
                <Typography variant="h6">
                  Customized Solution Design:
                </Typography>
                <br />
                <Typography variant="body2">
                  Crafting a bespoke Low Code blueprint, we intricately design
                  solutions aligned with your business processes and objectives.
                  Witness innovation taking shape as we tailor every detail to
                  seamlessly fit your unique development needs.
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
        </Box>
      </Box>
      <Map />
      <Contactus />
    </>
  );
};

export default LowCodeServices;
