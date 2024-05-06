import { Box, Card, TextField, Typography } from "@mui/material";
import React from "react";

const Contactus = () => {
  return (
    <Box
      sx={{
        marginLeft: "50px",
        "@media (max-width: 200px)": {
          margin: "auto",
          width: "100%",
          padding: "auto",
        },
        "@media (max-width: 600px)": {
          margin: "auto",
          width: "100%",
          padding: "auto",
        },
        "@media (max-width: 768px)": {
          margin: "auto",
          width: "100%",
          padding: "auto",
        },
      }}
    >
      <Card
        sx={{
          borderRadius: "20px",
          border: "1px solid white",
          padding: "20px 40px 20px 100px",
          "@media (max-width:600px)": { padding: "20px 40px 20px 20px" },
          margin: "10px 50px 40px 10px",
          background:
            "linear-gradient(180deg, rgba(59, 59, 59, 1) 0%, rgba(141, 95, 95, 0.74) 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Set default flex direction to column for all devices
            justifyContent: "space-around",

            "@media (min-width: 500px)": {
              // Media query for small screens and above
              flexDirection: "row", // Set flex direction to row for small screens and above
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: 150, // 480px width on extra small screens (up to 480px)
                sm: 300, // 767px width on small screens (up to 767px)
                md: 450, // 1024px width on medium screens (up to 1024px)
                lg: 450, // 1024px width on large screens (up to 1280px)
                xl: 750, // 1280px width on extra large screens (1281px and greater)
              },
            }}
          >
            <Box sx={{ paddingBottom: "20px" }}>
              <Typography sx={{ color: "white" }} variant="h4">
                Amplifying Growth
              </Typography>
            </Box>
            <Box sx={{ paddingBottom: "20px" }}>
              <Typography sx={{ color: "#ffc6c6" }}>Address</Typography>
              <Typography
                variant="body2"
                sx={{
                  paddingLeft: "20px",
                  width: "200px",
                  color: "white",
                  "@media (max-width: 768px)": { width: "150px" },
                }}
              >
                235, 2nd and 3rd Floor, 13th Cross Road Indira Nagar 2nd Stage,
                Hoysala Nagar, Bengaluru - 560038 (INDIA)
              </Typography>
            </Box>
            <Box sx={{ paddingBottom: "20px" }}>
              <Typography sx={{ color: "#ffc6c6" }}>Phone No.</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "20px",
                }}
              >
                <a style={{ color: "white" }} href="tel:+918882509166">
                  +91-8882509166
                </a>
                <a style={{ color: "white" }} href="tel:+91-8882509166">
                  +91-8882509166
                </a>
              </Box>
            </Box>
            <Box sx={{ paddingBottom: "20px" }}>
              <Typography sx={{ color: "#ffc6c6" }}>Email:</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: "20px",
                }}
              >
                <a style={{ color: "white" }} href="mailto:info@saastargo.com">
                  info@saastargo.com
                </a>
                <a style={{ color: "white" }} href="mailto:sales@saastargo.com">
                  sales@saastargo.com
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: 150, // 480px width on extra small screens (up to 480px)
                sm: 300, // 767px width on small screens (up to 767px)
                md: 450, // 1024px width on medium screens (up to 1024px)
                lg: 450, // 1024px width on large screens (up to 1280px)
                xl: 750, // 1280px width on extra large screens (1281px and greater)
              },
              paddingLeft: "50px",
              "@media (max-width: 768px)": { paddingLeft: "0px" },
            }}
          >
            <Box
              sx={{
                paddingBottom: "20px",
                "@media (max-width: 768px)": {
                  // Media query for small screens and above
                  marginTop: "20px", // Set flex direction to row for small screens and above
                },
              }}
            >
              <Typography variant="h4" sx={{ color: "white" }}>
                Enquire Us
              </Typography>
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                placeholder="Your Name"
                variant="outlined"
                sx={{ border: "1px solid white" }}
              />
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                placeholder="Your Email"
                variant="outlined"
                sx={{ border: "1px solid white" }}
              />
            </Box>
            <Box sx={{ marginBottom: "20px" }}>
              <TextField
                placeholder="Your Number"
                variant="outlined"
                sx={{ border: "1px solid white" }}
              />
            </Box>
            <Box>
              <TextField
                placeholder="Your Message"
                variant="outlined"
                multiline
                rows={4} // Adjust this value to increase the height
                sx={{
                  width: "225px",
                  border: "1px solid white",
                  "@media (max-width: 768px)": { width: "150px" },
                }}
              />
            </Box>
            <Box sx={{ marginTop: "20px" }}>
              <button
                style={{
                  borderRadius: "20px",
                  backgroundColor: "black",
                  border: "1px solid grey",
                  color: "white",
                  width: "80px",
                  height: "25px",
                }}
              >
                Send
              </button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Contactus;
