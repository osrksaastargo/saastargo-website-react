import React from "react";
import { Box, Card, Typography } from "@mui/material";
import Contactus from "../pages/Contactus";
import Map from "../pages/Map";

const About = () => {
  return (
    <div style={{ marginTop: "0px" }}>
      <Box className="aboutBox1">
        <Box>
          <Box>
            <Typography
              variant="body1"
              sx={{ fontSize: "60px", color: "white" }}
            >
              Welcome to SaasTargo Technologies, where cutting-edge solutions
              meet your business needs.
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
      <div
        style={{
          backgroundColor: "grey",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <img
            style={{ width: "100%", height: "1000px" }}
            src="../.././assets/rectangle-150-1.png"
            alt="about-img"
          />
        </Box>
        <Box sx={{ padding: "30px 20px" }}>
          <Typography
            variant="h3"
            style={{
              fontSize: "40px",
              color: "black",
              fontWeight: "bold",
              maxWidth: "400px",
            }}
          >
            We Can Unleash Your Business Potential
          </Typography>
          <Typography
            variant="body2"
            style={{
              paddingTop: "40px",
              color: "black",
              fontWeight: "500",
              fontSize: "30px",
              maxWidth: "400px",
            }}
          >
            We're not just about software development, IT Consulting and Digital
            Marketing; we're about YOUR SUCCESS. We understand the challenges
            you face and are here to propel your company forward with innovative
            digital solutions.
          </Typography>
        </Box>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ padding: "30px 20px" }}>
          <Typography
            variant="h3"
            style={{ color: "black", fontWeight: "bold", maxWidth: "500px" }}
          >
            Our passion? Helping you thrive in this digital era
          </Typography>
          <Typography
            variant="h5"
            style={{
              paddingTop: "40px",
              color: "black",
              fontWeight: "500",
              fontSize: "20px",
              maxWidth: "400px",
            }}
          >
            What sets us apart?
          </Typography>
          <Typography
            variant="h5"
            style={{
              paddingTop: "40px",
              color: "black",
              fontWeight: "500",
              fontSize: "30px",
              maxWidth: "400px",
            }}
          >
            Our customer-centric approach places your needs front and center.
            Partnering with us means unlocking the full potential of your
            business. Let's soar to new heights together!
          </Typography>
        </Box>
        <Box>
          <img
            style={{ width: "100%", maxWidth: "400px" }}
            src="../.././assets/rectangle-150.png"
            alt="about-img"
          />
        </Box>
      </div>

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
              Dynamic Culture of Innovation
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
              We formulate strategies from the get-go, ensuring your goals are
              not just achieved, but your enterprise prospers.
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
              We create an innovative environment, accelerating your growth and
              propelling you towards market success.
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
              Seamlessly blend business processes with advanced digital
              infrastructure, optimizing your operations and enhancing key
              metrics.
            </Typography>
          </Box>
        </Box>
        <Box
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <img
            style={{ padding: "20px", width: "20%" }}
            src="../.././assets/rectangle-145.png"
            alt="about-img1"
          />
          <img
            style={{ padding: "20px", width: "20%" }}
            src="../.././assets/rectangle-146.png"
            alt="about-img1"
          />
          <Box>
            <img
              style={{ padding: "20px", width: "80%" }}
              src="../.././assets/rectangle-147.png"
              alt="about-img1"
            />
          </Box>
        </Box>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              margin: "20px",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box style={{ maxWidth: "280px" }}>
              <Typography variant="h4">Your Success Our Mission</Typography>
              <br />
              <Typography variant="body2" style={{ fontSize: "20px" }}>
                We’re on a mission to redefine success in the digital age,
                ensuring your business not only survives but excels.
              </Typography>
            </Box>

            <Box>
              <img
                style={{ width: "70px", height: "70px" }}
                src="../.././assets/mission-1.png"
                alt="arrow"
              />
            </Box>
          </Card>
          <Card
            sx={{
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",

              maxWidth: "300px",
              width: "100%",
              height: "auto",
              margin: "20px",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h4">Our Vision</Typography>
              <br />
              <Typography variant="body2" style={{ fontSize: "20px" }}>
                Be your leading innovative service provider, shaping a connected
                and fulfilling future for you and your customers.
              </Typography>
            </Box>
            <Box>
              <img
                style={{ width: "70px", height: "70px" }}
                src="../.././assets/mission-1-1.png"
                alt="vision"
              />
            </Box>
          </Card>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              margin: "20px",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h4">Our Core Values</Typography>
              <br />
              <Typography variant="body2" style={{ fontSize: "20px" }}>
                Our approach is collaborative and adaptable, delivering
                high-quality solutions that evolve with your needs.
              </Typography>
            </Box>
            <Box>
              <img
                style={{ width: "70px", height: "70px" }}
                src="../.././assets/mission-1-3.png"
                alt="values"
              />
            </Box>
          </Card>

          <Card
            sx={{
              backgroundColor: "lightgrey",
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              margin: "20px",
              padding: "30px",
              borderRadius: "30px",
            }}
          >
            <Box>
              <Typography variant="h4">Our Commitment</Typography>
              <br />
              <Typography variant="body2" style={{ fontSize: "20px" }}>
                Our team thrives on collaboration, ensuring a "Can-do" spirit
                that attracts top talent dedicated to our business.
              </Typography>
            </Box>
            <Box>
              <img
                style={{ width: "70px", height: "70px" }}
                src="../.././assets/mission-1-2.png"
                alt="values"
              />
            </Box>
          </Card>
        </div>
      </div>

      <Map />
      <Contactus />
    </div>
  );
};

export default About;
