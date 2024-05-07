import React from "react";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import TransformationSolution from "../pages/TransformationSolution";
import { Box, Typography, Card } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhyChooseUs from "../pages/WhyChooseUs";

const DigitalMarketingServices = () => {
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
      name: "Digital Marketing Strategist",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "SEO Specialist",
    },
    {
      img: "./assets/sales/user-1.png",
      name: "PPC Advertising Specialist",
    },
    {
      img: "./assets/sales/content-1-1.png",
      name: "Content Marketing Expert",
    },
    {
      img: "./assets/sales/content-1.png",
      name: "Social Media Manager",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Project Manager",
    },
  ];
  return (
    <>
      <Box className="digitalBox1">
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Digital Marketing Services
            </Typography>
            <br />
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              We Bring Your Brand to Life
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "white" }}
            >
              We breathe life into your brand, crafting compelling narratives
              and strategic campaigns that captivate audiences. From social
              media mastery to data-driven SEO, we pave the way for your brand's
              digital success.
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
            style={{
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
              fontSize: "20px",
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
                  maxWidth: "300px", // Adjust the maximum width as needed
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
      <div style={{ marginLeft: "5%", marginRight: "5%" }}>
        {/* Added margins for better spacing on smaller screens */}
        <Typography
          variant="h3"
          style={{ color: "black", fontWeight: "bold", textAlign: "Left" }}
        >
          Optimal Performance
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
              margin: "20px 0", // Adjusted margin for better spacing
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h6">Audits:</Typography>
              <br />
              <Typography variant="body2">
                Proactively address challenges in your digital marketing
                strategy through comprehensive audits. Identify potential issues
                and optimize for a flawless user experience.
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
              margin: "20px 0", // Adjusted margin for better spacing
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h6">Campaigns:</Typography>
              <br />
              <Typography variant="body2">
                Elevate your digital marketing outcomes with personalized
                insights. Our robust reporting tools empower data-driven
                decisions, refining strategies to achieve your marketing goals.
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
              margin: "20px 0", // Adjusted margin for better spacing
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h6">Key Metrics:</Typography>
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
      <Box sx={{ marginTop: "50px" }}>
        <Box>
          <Typography
            variant="h3"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Digital Marketing Service Delivery Process:
          </Typography>
        </Box>
        <Box className="chart">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div>
              <Box style={{ display: "flex", margin: "40px" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography
                    variant="h6"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Initial Consultation
                  </Typography>
                  <Typography variant="body2" style={{ color: "black" }}>
                    Understand your goals and challenges. Lay the foundation for
                    a tailored digital strategy.
                  </Typography>
                </Box>
                <Box>
                  <img
                    style={{ width: "100px", height: "80px" }}
                    src="./assets/sales/user-2.png"
                    alt="user"
                  />
                </Box>
              </Box>
              <Box style={{ display: "flex", margin: "40px" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography
                    variant="h6"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Analysis
                  </Typography>
                  <Typography variant="body2" style={{ color: "black" }}>
                    performance and engagement. Implement data-driven
                    optimizations.
                  </Typography>
                </Box>
                <Box>
                  <img
                    style={{ width: "100px", height: "80px" }}
                    src="./assets/sales/mission-1-1.png"
                    alt="user"
                  />
                </Box>
              </Box>
              <Box style={{ display: "flex", margin: "40px" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography
                    variant="h6"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Communication
                  </Typography>
                  <Typography variant="body2" style={{ color: "black" }}>
                    Provide detailed reports on success indicators. Establish an
                    open feedback loop for refinement.
                  </Typography>
                </Box>
                <Box>
                  <img
                    style={{ width: "100px", height: "80px" }}
                    src="./assets/digital/mission-1-3.png"
                    alt="user"
                  />
                </Box>
              </Box>
            </div>
            <div>
              <Box style={{ display: "flex", margin: "40px" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography
                    variant="h6"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Customized Solution Design
                  </Typography>
                  <Typography variant="body2" style={{ color: "black" }}>
                    Craft a unique, strategic digital plan. Combine creativity
                    for optimal impact.
                  </Typography>
                </Box>
                <Box>
                  <img
                    style={{ width: "100px", height: "80px" }}
                    src="./assets/sales/awareness-1.png"
                    alt="user"
                  />
                </Box>
              </Box>
              <Box style={{ display: "flex", margin: "40px" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography
                    variant="h6"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Implementation and Integration
                  </Typography>
                  <Typography variant="body2" style={{ color: "black" }}>
                    Seamlessly implement campaigns and technologies. Ensure a
                    cohesive and impactful digital presence.
                  </Typography>
                </Box>
                <Box>
                  <img
                    style={{ width: "100px", height: "80px" }}
                    src="./assets/digital/mission-1-1-2x.png"
                    alt="user"
                  />
                </Box>
              </Box>
              <Box style={{ display: "flex", margin: "40px" }}>
                <Box sx={{ width: "300px" }}>
                  <Typography
                    variant="h6"
                    style={{ color: "black", fontWeight: "bold" }}
                  >
                    Scalability and Growth
                  </Typography>
                  <Typography variant="body2" style={{ color: "black" }}>
                    scalability opportunities based on insights. Evolve
                    strategies to stay competitive and aligned with trends.
                  </Typography>
                </Box>
                <Box>
                  <img
                    style={{ width: "100px", height: "80px" }}
                    src="./assets/mission-1-1.png"
                    alt="user"
                  />
                </Box>
              </Box>
            </div>
          </div>
        </Box>
      </Box>
      <Map />
      <Contactus />
    </>
  );
};

export default DigitalMarketingServices;
