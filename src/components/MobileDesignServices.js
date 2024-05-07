import React from "react";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import TransformationSolution from "../pages/TransformationSolution";
import { Box, Card, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhyChooseUs from "../pages/WhyChooseUs";

const MobileDesignServices = () => {
  // var settings1 = {
  //   dots: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
  const ExpertData = [
    {
      img: "./assets/sales/user-1-2.png",
      name: "Mobile App Administrator",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Mobile App Developer",
    },
    {
      img: "./assets/sales/user-1.png",
      name: "Mobile App Consultant",
    },
    {
      img: "./assets/sales/content-1-1.png",
      name: "Mobile App Business Analyst",
    },
    {
      img: "./assets/sales/content-1.png",
      name: "Mobile App Architect",
    },
  ];
  // var settings = {
  //   dots: true,
  //   speed: 800,
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
      img: "./assets/mobile/public-relation-1-3.png",
      name: "Native App Development",
      button: "Explore",
      description:
        "Make tailored promotions that transform strangers into enthusiastic supporters.",
    },
    {
      img: "./assets/mobile/public-relation-1-4.png",
      name: "Hybrid App Development:",
      button: "Explore",
      description:
        "Create cross-platform native-like apps using web technologies (HTML, CSS, JS) with frameworks like Ionic/Cordova or Framework7.",
    },
    {
      img: "./assets/mobile/public-relation-1-3.png",
      name: "Backend Development and APIs:",
      button: "Explore",
      description:
        "Explore your data thoroughly to discover valuable insights that can shape your business choices.",
    },
    {
      img: "./assets/mobile/public-relation-1-2.png",
      name: "App UI/UX Design:",
      button: "Explore",
      description:
        "Optimize user experience through iterative refinement, usability testing, and responsive, accessible design.",
    },

    {
      img: "./assets/mobile/public-relation-1-1.png",
      name: "Analytics:",
      button: "Explore",
      description:
        "Google Analytics and Firebase Analytics for informed app optimization.",
    },
    {
      img: "./assets/mobile/public-relation-1.png",
      name: "App Testing and QA:",
      button: "Explore",
      description:
        "Ensure high app quality through test automation tools and dedicated QA processes for a reliable user experience.",
    },
  ];
  return (
    <>
      <Box className="mobileBox1">
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Mobile App Development Service
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "white" }}
            >
              Turn your mobile app vision into reality with our comprehensive
              development services. We craft engaging user experiences and
              ensure optimal performance, empowering you to dominate the
              mobile-centric landscape and unlock new revenue avenues
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
            Our Core Services
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
            We don't just offer services; we craft personalized solutions
            designed exclusively for you. Your business is unique, and so are
            our strategies.
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
                    style={{ fontSize: "20px", color: "white", width: "250px" }}
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
      <Box>
        <Box>
          <Typography
            style={{
              paddingLeft: "10px",
              color: "black",
              fontWeight: "bold",
              fontSize: "40px",
            }}
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
      <Box
        style={{
          paddingTop: "20px",
          backgroundColor: "grey",
          minHeight: "750px", // Set minHeight to ensure content visibility
          display: "flex",
          flexDirection: "row", // Adjusted flex direction to column for mobile view
          justifyContent: "space-evenly",
          alignItems: "center", // Center align items horizontally
        }}
      >
        <div style={{ padding: "30px" }}>
          <Box>
            <Typography
              variant="h4"
              style={{
                fontSize: "clamp(30px, 6vw, 50px)",
                fontWeight: "600",
                color: "black",
              }} // Adjusted font size to be responsive
            >
              Development Performance
            </Typography>
          </Box>
          <br />
          <Box>
            <Typography
              variant="h5"
              style={{
                fontSize: "clamp(20px, 4vw, 40px)",
                fontWeight: "600",
                color: "black",
              }} // Adjusted font size to be responsive
            >
              Audits:
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontSize: "clamp(15px, 3vw, 30px)",
                color: "black",
                maxWidth: "500px",
              }} // Adjusted font size and width to be responsive
            >
              Identify potential challenges preemptively in your mobile app
              development processes.
            </Typography>
          </Box>
          <br />
          <Box>
            <Typography
              variant="h5"
              style={{
                fontSize: "clamp(20px, 4vw, 40px)",
                fontWeight: "600",
                color: "black",
              }} // Adjusted font size to be responsive
            >
              Campaigns:
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontSize: "clamp(15px, 3vw, 30px)",
                color: "black",
                maxWidth: "500px",
              }} // Adjusted font size and width to be responsive
            >
              Boost outcomes with tailored insights for mobile app development
              campaigns.
            </Typography>
          </Box>
          <br />
          <Box>
            <Typography
              variant="h5"
              style={{
                fontSize: "clamp(20px, 4vw, 40px)",
                fontWeight: "600",
                color: "black",
              }} // Adjusted font size to be responsive
            >
              Key Metrics:
            </Typography>
            <Typography
              variant="h5"
              style={{
                fontSize: "clamp(15px, 3vw, 30px)",
                color: "black",
                maxWidth: "500px",
              }} // Adjusted font size and width to be responsive
            >
              Achieve success in mobile app development through metric-driven
              decisions.
            </Typography>
          </Box>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <img
              style={{
                width: "clamp(100px, 20vw, 200px)",
                height: "clamp(125px, 25vw, 250px)",
              }} // Adjusted width and height to be responsive
              src="./assets/mobile/rectangle-153.svg"
              alt="pic1"
            />
          </Box>
          <Box>
            <img
              style={{
                width: "clamp(100px, 20vw, 200px)",
                height: "clamp(125px, 25vw, 250px)",
              }} // Adjusted width and height to be responsive
              src="./assets/mobile/rectangle-154.svg"
              alt="pic2"
            />
          </Box>
        </div>
      </Box>

      <TransformationSolution />

      <div
        style={{
          backgroundColor: "#171e57",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          style={{
            width: "100%",
            padding: "30px 20px 20px 30px",
          }}
        >
          <Typography
            style={{
              color: "white",
              fontWeight: "bold",
              paddingBottom: "40px",
            }}
            variant="h2"
          >
            Mobile App Development Performance:
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              style={{
                color: "white",
                paddingBottom: "40px",
              }}
              variant="h4"
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Audits:
              </span>{" "}
              Identify potential challenges preemptively in your mobile app
              development processes. Our comprehensive audits pinpoint issues
              for proactive resolution, ensuring optimal performance and a
              seamless user experience.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              style={{
                color: "white",
                paddingBottom: "40px",
              }}
              variant="h4"
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Campaigns:
              </span>{" "}
              Boost outcomes with tailored insights for mobile app development
              campaigns. Leverage our robust reporting tools for data-driven
              decisions, refining audience targeting, and increasing app
              installations and user engagement.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              style={{
                color: "white",
                paddingBottom: "40px",
              }}
              variant="h4"
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Key Metrics:
              </span>{" "}
              Achieve success in mobile app development through metric-driven
              decisions. Continuously monitor real-time KPIs for a comprehensive
              understanding of your development pipeline, enabling well-informed
              decisions.
            </Typography>
          </Box>
        </Box>

        <Box
          style={{
            width: "20%",
            "@media (max-width:768px)": {
              display: "none",
            },
          }}
        >
          <img
            style={{
              paddingTop: "10px",
              width: "100%", // Set width to 100% for responsiveness
              height: "auto",
            }}
            src="./assets/mobile/rectangle-164.svg"
            alt="about-img1"
          />
        </Box>
      </div>

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
              gap: "10px", // Reduced gap for smaller screens
            }}
          >
            <div style={{ maxWidth: { xs: "100%", sm: "250px" } }}>
              {" "}
              {/* Adjusted max width based on screen size */}
              <img
                style={{ width: "70%", height: "auto" }} // Adjusted image size to be responsive
                src="./assets/mobile/rectangle-165.png"
                alt="service"
              />
            </div>
            <div style={{ maxWidth: { xs: "100%", sm: "600px" } }}>
              {" "}
              {/* Adjusted max width based on screen size */}
              <Box>
                <Typography
                  variant="h4"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Initial Consultation:
                </Typography>
                <Typography
                  variant="body2"
                  style={{ fontSize: "18px", color: "black" }}
                >
                  {" "}
                  {/* Changed variant to body1 for smaller screens */}
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
                  style={{ fontSize: "18px", color: "black" }}
                >
                  {" "}
                  {/* Changed variant to body1 for smaller screens */}
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
                  style={{ fontSize: "18px", color: "black" }}
                >
                  {" "}
                  {/* Changed variant to body1 for smaller screens */}
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

export default MobileDesignServices;
