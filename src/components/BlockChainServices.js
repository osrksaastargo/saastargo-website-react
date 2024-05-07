import { Box, Card, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhyChooseUs from "../pages/WhyChooseUs";

const BlockChainServices = () => {
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
      img: "./assets/blockchain/solana-3.png",
    },
    {
      img: "./assets/blockchain/solana-5.png",
    },
    {
      img: "./assets/blockchain/stellar-xlm-logo-1-2.png",
    },
    {
      img: "./assets/blockchain/stellar-xlm-logo-1-9.png",
    },

    {
      img: "./assets/blockchain/stellar-xlm-logo-1-11.png",
    },
    {
      img: "./assets/blockchain/stellar-xlm-logo-1-5.png",
    },
  ];
  const ExpertData = [
    {
      img: "./assets/sales/user-1-2.png",
      name: "Blockchain Developer",
    },
    {
      img: "./assets/sales/user-1-1.png",
      name: "Front-End Blockchain Developer",
    },
    {
      img: "./assets/sales/user-1.png",
      name: "Back-End Blockchain Developer",
    },
    {
      img: "./assets/sales/content-1-1.png",
      name: "Full-Stack Blockchain Developer",
    },
    {
      img: "./assets/sales/content-1.png",
      name: "Blockchain UI/UX Designer",
    },
  ];
  return (
    <>
      <Box className="blockchainBox1">
        <Box>
          <Box>
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Blockchain Development Services
            </Typography>
            <br />
            <Typography
              variant="h4"
              sx={{ fontSize: "50px", fontWeight: "bold", color: "white" }}
            >
              Transforming Visions into Blockchain Realities
            </Typography>
            <br />
            <Typography
              variant="body2"
              sx={{ fontSize: "40px", color: "white" }}
            >
              Redefine the future of your business. Embrace the decentralized
              revolution with tailored solutions that enhance security,
              transparency, and efficiency.
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
              <Box
                key={d.id}
                sx={{
                  width: "100%",
                  maxWidth: "300px", // Adjust the maximum width as needed
                  margin: "30px 0px 0px 0px",
                  height: "350px",
                  padding: "40px 0px 0px 20px",
                  gap: "20px",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{
                    width: "200px",
                    maxWidth: "400px", // Ensure the image does not exceed its container's width
                    height: "300px", // Maintain aspect ratio
                  }}
                  src={d.img}
                  alt="img"
                />
              </Box>
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
              Blockchain Development Performance:
            </Typography>
          </Box>

          <Box>
            <Typography
              style={{
                fontSize: "20px",
                color: "white",
                fontWeight: "bold",
                paddingBottom: "40px",
              }}
              variant="body2"
            >
              Proactively identify and resolve potential challenges in
              blockchain development, ensuring optimal performance and security.
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                color: "white",
                fontWeight: "bold",
                paddingBottom: "40px",
              }}
              variant="body2"
            >
              Harness powerful reporting tools for data-driven decisions in
              blockchain strategies, refining target audiences and maximizing
              effectiveness.
            </Typography>
          </Box>
          <Box>
            <Typography
              style={{
                fontSize: "20px",
                color: "white",
                fontWeight: "bold",
                paddingBottom: "40px",
              }}
              variant="body2"
            >
              Attain success in blockchain initiatives through metric-driven
              decisions, maintaining a vigilant watch on real-time KPIs for
              continuous improvement.
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
            src="./assets/blockchain/rectangle-145.svg"
            alt="about-img1"
          />
          <img
            style={{ padding: "20px", width: "20%" }}
            src="./assets/blockchain/rectangle-146.svg"
            alt="about-img1"
          />
          <Box>
            <img
              style={{ padding: "20px", width: "80%" }}
              src="./assets/blockchain/rectangle-147.svg"
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
      <Box style={{ backgroundColor: "black", padding: "40px" }}>
        <Box>
          <Typography
            variant="h2"
            style={{ color: "white", fontSize: "40px", fontWeight: "bold" }}
          >
            Service Delivery Process for Blockchain Development:{" "}
          </Typography>
        </Box>
        <Box style={{ paddingTop: "20px" }}>
          <Typography
            variant="h5"
            style={{ color: "white", fontSize: "30px", fontWeight: "400" }}
          >
            Initial Consultation
          </Typography>
          <br />
          <Typography
            variant="h5"
            style={{ color: "white", fontSize: "30px", fontWeight: "400" }}
          >
            Embark on your journey to blockchain excellence. Our first session
            dives into your distinctive blockchain development needs and
            aspirations. Together, we'll formulate a tailored strategy that
            leverages the full potential of blockchain technology for your
            business.
          </Typography>
          <br />
          <img
            style={{ width: "100%", height: "500px" }}
            src="./assets/blockchain/rectangle-109.svg"
            alt="service"
          />
        </Box>
        <Box style={{ paddingTop: "20px" }}>
          <Typography
            variant="h5"
            style={{ color: "white", fontSize: "30px", fontWeight: "400" }}
          >
            Customized Solution
          </Typography>
          <br />
          <Typography
            variant="h5"
            style={{ color: "white", fontSize: "30px", fontWeight: "400" }}
          >
            Design Crafting a blockchain solution just for you. Our skilled team
            designs a personalized blueprint that aligns perfectly with your
            specific business processes and objectives, ensuring a unique and
            effective blockchain solution.
          </Typography>
          <br />
          <img
            style={{ width: "100%", height: "500px" }}
            src="./assets/blockchain/rectangle-110.svg"
            alt="service"
          />
        </Box>
        <Box style={{ paddingTop: "20px" }}>
          <Typography
            variant="h5"
            style={{ color: "white", fontSize: "30px", fontWeight: "400" }}
          >
            Development and Integration
          </Typography>
          <br />
          <Typography
            variant="h5"
            style={{ color: "white", fontSize: "30px", fontWeight: "400" }}
          >
            Forge a seamless and potent blockchain system. We take charge of the
            entire development process, ensuring your blockchain solution
            seamlessly integrates with your existing tech infrastructure and
            data. Experience a smooth transition and a user-centric blockchain
            interface.
          </Typography>
        </Box>
      </Box>
      <Box style={{ padding: "30px", height: "auto" }}>
        <Box>
          <Typography
            variant="h2"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            Revolutionize your business with the power of blockchain
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" style={{ fontSize: "30px" }}>
            Let's build the future together!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default BlockChainServices;
