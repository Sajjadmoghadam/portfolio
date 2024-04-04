import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(assets/homepagePhoto.png)",
            width: "100%",
            height: "100vh",
            backgroundPosition: "top",
            backgroundSize: "700px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <Typography
            sx={{
              color: "#DAC5A7",
              textAlign: "center",
              fontSize: "90px",
            }}
          >
            Full Stack <br />{" "}
            <Typography sx={{ fontStyle: "italic", fontSize: "90px" }}>
              {" "}
              Web Developer
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.3)",
              textAlign: "center",
              fontSize: "18px",
            }}
          >
            Premium web design development and SEO <br /> services in help your
            business stand out
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap:5,
            mt:7
          }}
        >
          <Box
            sx={{
              width: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              border: "1px solid #262421",
              bgcolor: "#181716",
              p: 4,
            }}
          >
            <Stack direction={"column"}>
              <Typography sx={{ color: "#DAC5A7" }}>01</Typography>
              <Typography sx={{ color: "#DAC5A7", my: 1 }}>
                WEB DESIGN
              </Typography>
              <Typography sx={{ color: "#DAC5A7" }}>
                Visually stunning web designs that <br /> captivate your
                audience by blending your <br /> brand voice and customer needs.
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:'start',
                my: 3,
                width:'100%',
                gap:3,
                ml:4
              }}
            >
              <Button sx={{ color: "#DAC5A7", border: "2px solid #262421", borderRadius:'50%', width:'50px', height:'50px' }}>
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>ABOUT WEBDESIGN</Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              border: "1px solid #262421",
              bgcolor: "#181716",
              p: 4,
            }}
          >
            <Stack direction={"column"}>
              <Typography sx={{ color: "#DAC5A7" }}>02</Typography>
              <Typography sx={{ color: "#DAC5A7", my: 1 }}>
                DEVELOPMENT
              </Typography>
              <Typography sx={{ color: "#DAC5A7" }}>
                Get custom web development solution that <br /> are tailored
                to your specification, designed <br /> to deliver a flawless user experience
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:'start',
                my: 3,
                width:'100%',
                gap:3,
                ml:4
              }}
            >
              <Button sx={{ color: "#DAC5A7", border: "2px solid #262421" , borderRadius:'50%', width:'50px', height:'50px' }}>
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>ABOUT WEBFLOW</Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              width: "350px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              border: "1px solid #262421",
              bgcolor: "#181716",
              p: 4,
            }}
          >
            <Stack direction={"column"}>
              <Typography sx={{ color: "#DAC5A7" }}>03</Typography>
              <Typography sx={{ color: "#DAC5A7", my: 1 }}>
                CONTENT & SEO
              </Typography>
              <Typography sx={{ color: "#DAC5A7" }}>
                Proven SEO strategies that enhance your <br /> online performance, 
                bringing you to the  <br /> forefront of organic web result.
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent:'start',
                my: 3,
                width:'100%',
                gap:3,
                ml:4
              }}
            >
              <Button sx={{ color: "#DAC5A7", border: "2px solid #262421" , borderRadius:'50%', width:'50px', height:'50px' }}>
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>ABOUT SEO</Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
