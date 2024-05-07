import React from "react";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";
import TransformationSolution from "../pages/TransformationSolution";
import { Box, Typography, Card } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhyChooseUs from "../pages/WhyChooseUs";

const SalesForceServices = () => {
  // var settings = {
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
      name: "Salesforce Administrator",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Salesforce Developer",
    },
    {
      img: "./assets/sales/user-1.png",
      name: "Salesforce Consultant",
    },
    {
      img: "./assets/sales/content-1-1.png",
      name: "Salesforce Business Analyst",
    },
    {
      img: "./assets/sales/content-1.png",
      name: "Salesforce Architecticon worker",
    },
  ];
  const data = [
    {
      img: "./assets/sales/public-relation-1-5.png",
      name: "Salesforce Marketing Cloud",
      button: "Explore",
      description:
        "Make tailored promotions that transform strangers into enthusiastic supporters.",
    },
    {
      img: "./assets/sales/public-relation-1-3.png",
      name: "Salesforce Community Cloud",
      button: "Explore",
      description:
        "Create a vibrant community where your customers love your brand and promote it enthusiastically.",
    },
    {
      img: "./assets/sales/public-relation-1-5.png",
      name: "Salesforce Analytics Cloud",
      button: "Explore",
      description:
        "Explore your data thoroughly to discover valuable insights that can shape your business choices.",
    },
    {
      img: "./assets/sales/public-relation-1-4.png",
      name: "Salesforce Sales Cloud",
      button: "Explore",
      description:
        "Effectively handle your sales process, close deals swiftly, and witness a boost in your revenue.",
    },

    {
      img: "./assets/sales/public-relation-1-3.png",
      name: "Salesforce Heroku Cloud",
      button: "Explore",
      description:
        "Build custom apps in a flash, deploy them with ease, and watch them scale like magic.",
    },
    {
      img: "./assets/sales/public-relation-1-2.png",
      name: "Salesforce IoT Cloud",
      button: "Explore",
      description:
        "Connect your devices, gather insights, and unlock a world of possibilities your customers will love.",
    },
    {
      img: "./assets/sales/public-relation-1-1.png",
      name: "Salesforce Nonprofit Cloud",
      button: "Explore",
      description:
        "Equip your organization with purposeful tools to accomplish its mission for the greater good.",
    },
    {
      img: "./assets/sales/public-relation-1.png",
      name: "Salesforce Service Cloud",
      button: "Explore",
      description:
        "Deliver exceptional customer service that keeps your customers coming back for more.",
    },
  ];
  return (
    <>
      <Box className="salesBox1">
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Salesforce Development Service
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "white" }}
            >
              Elevating Businesses with Strategic Software Development &
              Informed IT Consulting
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center", // Center align items
          maxWidth: "1000px", // Limit maximum width to prevent stretching on larger screens
          margin: "0 auto", // Center the content horizontally
        }}
      >
        <Box sx={{ margin: "20px", flex: "0 0 auto", textAlign: "center" }}>
          <img
            style={{ maxWidth: "70%", height: "auto" }} // Make the image responsive
            src="../.././assets/sales1.png"
            alt=""
          />
        </Box>
        <Box sx={{ margin: "20px", flex: "1 1 300px" }}>
          <Typography
            variant="h5"
            style={{ fontSize: "18px", fontWeight: "bold", color: "black" }}
          >
            Trusted Partner for All Your Salesforce Needs
          </Typography>
          <br />
          <Typography style={{ fontSize: "15px", color: "black" }}>
            Connect your business with us to leverage endless opportunities and
            capabilities of Salesforce, allowing you to increase efficiency and
            maximize outcomes.
          </Typography>
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
            }}
            variant="h3"
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
                  height: "450px",
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
                      maxWidth: "250px", // Adjust the maximum width as needed
                      margin: "40px 0px 0px 0px",
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
      <Box>
        <Box>
          <Typography
            variant="h3"
            style={{ color: "black", fontWeight: "bold" }}
          >
            Chart Your Course to CRM Success
          </Typography>
        </Box>
        <Box
          className="chart"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <Box style={{ display: "flex", marginBottom: "20px" }}>
              <Box style={{ marginRight: "20px" }}>
                <img
                  style={{ width: "100px", height: "80px" }}
                  src="./assets/sales/user-2.png"
                  alt="user"
                />
              </Box>
              <Box sx={{ width: "300px" }}>
                <Typography
                  variant="h6"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Initial Consultation
                </Typography>
                <Typography variant="body2" style={{ color: "black" }}>
                  Our initial consultation digs deep into your unique needs and
                  goals. We collaborate with you to develop a customized plan
                  that unlocks the full potential of Salesforce for your
                  business.
                </Typography>
              </Box>
            </Box>
            <Box style={{ display: "flex", marginBottom: "20px" }}>
              <Box style={{ marginRight: "20px" }}>
                <img
                  style={{ width: "100px", height: "80px" }}
                  src="./assets/sales/awareness-1.png"
                  alt="user"
                />
              </Box>
              <Box sx={{ width: "300px" }}>
                <Typography
                  variant="h6"
                  style={{ color: "black", fontWeight: "bold" }}
                >
                  Customized Solution Design
                </Typography>
                <Typography variant="body2" style={{ color: "black" }}>
                  Forget one-size-fits-all solutions. Our expert team crafts a
                  bespoke Salesforce implementation that flawlessly aligns with
                  your specific business processes and objectives.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box style={{ display: "flex", marginBottom: "20px" }}>
            <Box style={{ marginRight: "20px" }}>
              <img
                style={{ width: "100px", height: "80px" }}
                src="./assets/sales/mission-1-1.png"
                alt="user"
              />
            </Box>
            <Box sx={{ width: "300px" }}>
              <Typography
                variant="h6"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Implementation and Integration
              </Typography>
              <Typography variant="body2" style={{ color: "black" }}>
                We handle the entire implementation process, ensuring your
                Salesforce instance seamlessly integrates with your existing
                technology and data. Enjoy a smooth transition and a user
                experience that flows effortlessly.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Map />
      <Contactus />
    </>
  );
};

export default SalesForceServices;
