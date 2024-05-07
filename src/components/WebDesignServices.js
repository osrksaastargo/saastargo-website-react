import React from "react";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import TransformationSolution from "../pages/TransformationSolution";
import { Typography, Box, Card } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhyChooseUs from "../pages/WhyChooseUs";

const WebDesignServices = () => {
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
      img: "./assets/web/public-relation-1-5.png",
      name: "E-Commerce Development",
      button: "Explore",
      description:
        "Ignite your online business with cutting-edge eCommerce solutions.",
    },
    {
      img: "./assets/web/public-relation-1-4.png",
      name: "Mobility",
      button: "Explore",
      description:
        "Craft engaging user experiences to dominate the mobile-centric landscape.",
    },
    {
      img: "./assets/web/public-relation-1-3.png",
      name: "Custom Web App Development",
      button: "Explore",
      description:
        "Tailored solutions that align perfectly with your business processes.",
    },
    {
      img: "./assets/web/public-relation-1-2.png",
      name: "Corporate Website Development",
      button: "Explore",
      description:
        "Elevate your corporate presence with a professional and user-friendly website.",
    },

    {
      img: "./assets/web/public-relation-1-1.png",
      name: "PHP/MySQL Development",
      button: "Explore",
      description: "Harness the power of robust backend technologies.",
    },
    {
      img: "./assets/web/public-relation-1.png",
      name: "DevOps",
      button: "Explore",
      description:
        "Streamline your development processes for optimal efficiency.",
    },
  ];
  const ExpertData = [
    {
      img: "./assets/sales/user-1-2.png",
      name: "Web Developer",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Front-End Developer",
    },
    {
      img: "./assets/sales/user-1.png",
      name: "Back-End Developer",
    },
    {
      img: "./assets/sales/content-1-1.png",
      name: "Full-Stack Developer",
    },
    {
      img: "./assets/sales/content-1.png",
      name: "UI/UX Designer",
    },
  ];
  return (
    <>
      <Box className="webBox1">
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Web Development Services Elevate Your Digital
            </Typography>
            <br />
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Presence with Our Web Development Services
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "white" }}
            >
              At Saastargo, we go beyond offering mere services; we specialize
              in crafting bespoke solutions tailored exclusively for you. Just
              as your business is unique, so are our strategies.
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
      <Box>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Web Development Platforms :
        </Typography>
        <Box className="webBox2">
          <Box style={{ display: "flex", gap: "80px" }}>
            <Card
              style={{
                width: "250px",
                height: "50px",
                border: "1px solid black",
                borderRadius: "25px",
                display: "flex",
                padding: "50px 10px 30px 0px",
                marginBottom: "30px",
                justifyContent: "space-evenly",
              }}
            >
              <Typography>PHP Development</Typography>
              <img
                style={{ width: "50px", height: "50px" }}
                src="./assets/web/content-3.png"
                alt="img1"
              />
            </Card>
            <Card
              style={{
                width: "250px",
                height: "50px",
                border: "1px solid black",
                borderRadius: "25px",
                display: "flex",
                padding: "50px 10px 30px 0px",
                marginBottom: "30px",
                justifyContent: "space-evenly",
              }}
            >
              <Typography>AngularJS Development</Typography>
              <img
                style={{ width: "50px", height: "50px" }}
                src="./assets/web/web-design-1.png"
                alt="img1"
              />
            </Card>
          </Box>
          <Box style={{ display: "flex", gap: "80px" }}>
            <Card
              style={{
                width: "250px",
                height: "50px",
                border: "1px solid black",
                borderRadius: "25px",
                display: "flex",
                padding: "50px 10px 30px 0px",
                marginBottom: "30px",
                justifyContent: "space-evenly",
              }}
            >
              <Typography>Node.js Development</Typography>
              <img
                style={{ width: "50px", height: "50px" }}
                src="./assets/web/code-1-2.png"
                alt="img1"
              />
            </Card>
            <Card
              style={{
                width: "250px",
                height: "50px",
                border: "1px solid black",
                borderRadius: "25px",
                display: "flex",
                padding: "50px 10px 30px 0px",
                marginBottom: "30px",
                justifyContent: "space-evenly",
              }}
            >
              <Typography>CakePHP Development</Typography>
              <img
                style={{ width: "50px", height: "50px" }}
                src="./assets/web/code-1-2.png"
                alt="img1"
              />
            </Card>
          </Box>
          <Box>
            <Card
              style={{
                width: "250px",
                height: "50px",
                border: "1px solid black",
                borderRadius: "25px",
                display: "flex",
                padding: "50px 10px 30px 0px",
                marginBottom: "30px",
                justifyContent: "space-evenly",
              }}
            >
              <Typography>UI/UX Design & Development</Typography>
              <img
                style={{ width: "50px", height: "50px" }}
                src="./assets/web/ux-design-1.png"
                alt="img1"
              />
            </Card>
          </Box>
        </Box>
      </Box>
      <WhyChooseUs />
      <div style={{ display: "flex", backgroundColor: "#171e57" }}>
        <div>
          <Box
            style={{
              width: "100%",
              height: "1000px",
              padding: "30px 20px 20px 30px",
            }}
          >
            <Box>
              <Typography
                style={{
                  color: "white",
                  fontWeight: "bold",
                  paddingBottom: "40px",
                }}
                variant="h2"
              >
                Web Development Performance :
              </Typography>
            </Box>

            <Box sx={{ display: "flex" }}>
              <Typography
                style={{
                  color: "white",

                  paddingBottom: "40px",
                }}
                variant="h4"
              >
                <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Audits:
                </span>{" "}
                Identify and resolve potential challenges preemptively, ensuring
                optimal performance.
              </Typography>
            </Box>
            <Box>
              <Typography
                style={{
                  color: "white",

                  paddingBottom: "40px",
                }}
                variant="h4"
              >
                <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Campaigns:
                </span>{" "}
                Leverage robust reporting tools for data-driven decisions,
                refining audience targeting.
              </Typography>
            </Box>
            <Box>
              <Typography
                style={{
                  color: "white",

                  paddingBottom: "40px",
                }}
                variant="h4"
              >
                <span style={{ fontSize: "40px", fontWeight: "bold" }}>
                  Key Metrics:
                </span>{" "}
                Achieve success through metric-driven decisions, continuously
                monitoring real-time KPIs.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <img
                style={{ width: "100%", height: "900px", marginTop: "-1000px" }}
                src="./assets/ai/design-4.png"
                alt="img"
              />
            </Box>
          </Box>
        </div>

        <div>
          <img
            style={{
              paddingTop: "10px",
              width: "100%",
              height: "90%",
            }}
            src="./assets/web/rectangle-164.svg"
            alt="about-img1"
          />
        </div>
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
      <div>
        <Box>
          <Typography
            variant="h3"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Service Delivery Process:
          </Typography>
        </Box>
        <Box className="mobileBox2">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Change flex direction based on screen size

              justifyContent: "space-evenly",
              gap: "10px",
            }}
          >
            <div style={{ maxWidth: { xs: "100%", sm: "250px" } }}>
              <img
                style={{ width: "70%", height: "auto" }}
                src="./assets/mobile/rectangle-165.png"
                alt="service"
              />
            </div>
            <div style={{ maxWidth: { xs: "100%", sm: "600px" } }}>
              <Box>
                <Typography
                  variant="h4"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Initial Consultation:
                </Typography>
                <Typography
                  variant="body2"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  Navigate your way to app excellence as we delve into your
                  unique development needs.
                </Typography>
              </Box>
              <br />
              <Box>
                <Typography
                  variant="h4"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Customized Solution Design:
                </Typography>
                <Typography
                  variant="body2"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  Craft a personalized blueprint aligned with your business
                  processes and objectives.
                </Typography>
              </Box>
              <br />
              <Box>
                <Typography
                  variant="h4"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Development and Integration:
                </Typography>
                <Typography
                  variant="body2"
                  style={{ fontSize: "20px", color: "black" }}
                >
                  Forge a seamless and potent system, integrating with your
                  existing tech infrastructure.
                </Typography>
              </Box>
            </div>
          </Box>
        </Box>
      </div>
      <Map />
      <Contactus />
    </>
  );
};

export default WebDesignServices;
