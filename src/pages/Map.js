// import React from "react";
// import { Box, Typography } from "@mui/material";
// import "./Map.css"; // Assuming this is where your CSS styles are defined

// const Map = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           margin: "auto",
//           "@media (max-width: 200px)": {
//             margin: "auto",
//             width: "100%",
//             padding: "auto",
//           },
//           "@media (max-width: 400px)": {
//             margin: "auto",
//             width: "100%",
//             padding: "auto",
//           },
//           "@media (max-width: 600px)": {
//             margin: "auto",
//             width: "100%",
//             padding: "auto",
//           },
//           position: "relative",
//         }}
//       >
//         <Box sx={{ textAlign: "center" }}>
//           <Box>
//             <Typography
//               sx={{ fontSize: "40px", fontWeight: "bold", color: "black" }}
//             >
//               Contact US
//             </Typography>
//           </Box>
//           <Box>
//             <img
//               style={{
//                 width: "400px",
//                 height: "400px",
//                 marginTop: "-180px",
//                 marginLeft: "300px",
//               }}
//               src="../.././assets/vector-2-1.png"
//               alt="arrow"
//             />
//           </Box>
//           <Box>
//             <img
//               style={{ width: "700px", height: "400px", marginTop: "-180px" }}
//               src="../.././assets/1019996-ojo4yq0-1-1.png"
//               alt="map"
//             />
//             {/* Add ellipses */}
//             <div className="ellipse" />
//             <div className="ellipse-2" />
//             <div className="ellipse-3" />
//             <div className="ellipse-4" />
//             <div className="ellipse-5" />
//             <div className="ellipse-6" />
//             <div className="ellipse-7" />
//             <div className="ellipse-8" />
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Map;

import React from "react";
import { Box, Typography } from "@mui/material";
import "./Map.css"; // Assuming this is where your CSS styles are defined

const Map = () => {
  return (
    <>
      <Box
        sx={{
          width: {
            xs: 350,
            sm: 768,
            md: 1024,
            lg: 1280,
            xl: 1500,
          },
          marginTop: "30px",
          position: "relative", // Ensure the container has relative positioning
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "bold", color: "black" }}
            >
              Contact US
            </Typography>
          </Box>
          <Box>
            <img
              className="arrow"
              style={{
                width: "60%",
                height: "400px",
                marginTop: "-160px",
                marginLeft: "28%",
                "@media (max-width: 768px)": {
                  marginLeft: "-20%", // Adjusted margin left for small devices
                },
                "@media (max-width: 576px)": {
                  width: "70%", // Adjusted width for extra small devices
                  marginTop: "-100px",
                  marginLeft: "15%", // Adjusted margin left for extra small devices
                },
              }}
              src="../.././assets/vector-2-1.png"
              alt="arrow"
            />
          </Box>
          <Box>
            <img
              style={{ width: "100vw", height: "400px", marginTop: "-180px" }}
              src="../.././assets/1019996-ojo4yq0-1-1.png"
              alt="map"
            />
            {/* Add ellipses */}
            <div className="ellipse" />
            <div className="ellipse-2" />
            <div className="ellipse-3" />
            <div className="ellipse-4" />
            <div className="ellipse-5" />
            <div className="ellipse-6" />
            <div className="ellipse-7" />
            <div className="ellipse-8" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Map;
