import React from "react";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import TransformationSolution from "../pages/TransformationSolution";
import { Box, Typography, Card } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhyChooseUs from "../pages/WhyChooseUs";
const AiServices = () => {
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
      img: "./assets/ai/public-relation-1-5.png",
      name: "AI Technology Consulting",
      button: "Explore",
      description:
        "Empower your business with our expert AI guidance and unlock new possibilities.",
    },
    {
      img: "./assets/ai/public-relation-1-4.png",
      name: "End-to-end AI Model Development",
      button: "Explore",
      description:
        "From ideation to deployment, we build AI models that solve your unique problems.",
    },
    {
      img: "./assets/ai/public-relation-1-3.png",
      name: "Fine-tuning Models",
      button: "Explore",
      description:
        "Optimize your AI’s performance with our fine-tuning service, tailored to your needs.",
    },
    {
      img: "./assets/ai/public-relation-1-2.png",
      name: "AI Model Integration and Optimization",
      button: "Explore",
      description:
        "Seamlessly integrate and optimize AI models into your existing systems for enhanced efficiency.",
    },

    {
      img: "./assets/ai/public-relation-1-1.png",
      name: "AI Conversational Tools",
      button: "Explore",
      description:
        "Engage your audience with our AI conversational tools, making interactions smoother than ever.",
    },
    {
      img: "./assets/ai/public-relation-1.png",
      name: "Custom AI Solutions",
      button: "Explore",
      description:
        "Get AI solutions custom-built for your business, because one size doesn’t fit all.",
    },
  ];
  const ExpertData = [
    {
      img: "./assets/sales/user-1-2.png",
      name: "AI Development  Administrator",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "AI Development Developer",
    },
    {
      img: "./assets/sales/user-1.png",
      name: "AI Development Consultant",
    },
    {
      img: "./assets/sales/content-1-1.png",
      name: "AI Development Business Analyst",
    },
    {
      img: "./assets/sales/content-1.png",
      name: "AI Development Architect",
    },
  ];
  return (
    <>
      <Box className="aiBox1">
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              AI Development Services
            </Typography>
            <br />
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Level Up Your Business with AI
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "white" }}
            >
              Whether you're a small startup or a global enterprise, we have the
              expertise and resources to develop an AI solution that drives your
              success. Let's talk about your goals.
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
      <div
        style={{
          backgroundColor: "#171e57",
          gap: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box style={{ width: "100%", padding: "30px 20px 20px 10px" }}>
          <Box>
            <Typography
              style={{
                color: "white",
                fontWeight: "bold",
                paddingBottom: "20px",
              }}
              variant="h3"
            >
              Optimal AI Development Performance
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
              Identify potential challenges preemptively in your AI development
              processes. Our comprehensive audits pinpoint issues for proactive
              resolution, ensuring optimal performance and a seamless user
              experience.
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
              Boost outcomes with tailored insights for AI development
              campaigns. Leverage our robust reporting tools for data-driven
              decisions, refining strategies, and achieving your development
              goals.
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
              Achieve success in AI development service through metric-driven
              decisions. Continuously monitor real-time KPIs for a comprehensive
              understanding of your development pipeline, enabling well-informed
              decisions.
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
            style={{ padding: "20px", width: "20%" }}
            src="./assets/ai/rectangle-145 (1).png"
            alt="about-img1"
          />
          <img
            style={{ padding: "20px", width: "20%" }}
            src="./assets/ai/rectangle-146 (1).png"
            alt="about-img1"
          />
          <Box>
            <img
              style={{ padding: "20px", width: "80%" }}
              src="./assets/ai/rectangle-147 (1).png"
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
      <Box className="aiBox2">
        <Typography
          variant="h3"
          style={{ paddingTop: "150px", color: "black", fontWeight: "bold" }}
        >
          Our AI Development Service Delivery Process
        </Typography>
        <Box
          style={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-evenly",
            gap: "10px",
          }}
        >
          <div style={{ maxWidth: { xs: "100%", sm: "50%" } }}>
            <img
              style={{ width: "70%", height: "auto" }}
              src="./assets/ai/design-2-1.png"
              alt="img"
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
                style={{ fontSize: "18px", color: "black" }}
              >
                Chart a tailored strategy for your AI goals in our comprehensive
                consultation.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Customized Solution Design:
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "18px", color: "black" }}
              >
                Craft a personalized AI blueprint aligning with your business
                processes and objectives.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Development and Integration:
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "18px", color: "black" }}
              >
                Forge a seamless AI system, integrating it flawlessly with your
                existing tech infrastructure.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Testing and Quality Assurance:
              </Typography>
              <Typography
                variant="body2"
                style={{ fontSize: "18px", color: "black" }}
              >
                Implement rigorous testing to ensure your AI application meets
              </Typography>
            </Box>
          </div>
        </Box>

        <Box>
          <img
            style={{ width: "100%", height: "800px", marginTop: "-650px" }}
            src="./assets/ai/design-4.png"
            alt="img"
          />
        </Box>
      </Box>
      <Map />
      <Contactus />
    </>
  );
};

export default AiServices;
