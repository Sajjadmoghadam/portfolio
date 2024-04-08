import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

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
            gap: 5,
            mt: 7,
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
                justifyContent: "start",
                my: 3,
                width: "100%",
                gap: 3,
                ml: 4,
              }}
            >
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
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
                Get custom web development solution that <br /> are tailored to
                your specification, designed <br /> to deliver a flawless user
                experience
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                my: 3,
                width: "100%",
                gap: 3,
                ml: 4,
              }}
            >
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
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
                Proven SEO strategies that enhance your <br /> online
                performance, bringing you to the <br /> forefront of organic web
                result.
              </Typography>
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "start",
                my: 3,
                width: "100%",
                gap: 3,
                ml: 4,
              }}
            >
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>ABOUT SEO</Typography>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            width: "84%",
            mt: 7,
          }}
        >
          <Stack flexDirection={"row"} justifyContent={"space-between"} sx={{}}>
            <Typography sx={{ color: "#DAC5A7", fontSize: "50px" }}>
              Selected Work
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <ArrowOutwardIcon />
              </Button>{" "}
              <Typography sx={{ color: "#DAC5A7" }}>SEE ALL</Typography>
            </Box>
          </Stack>
          <Stack flexDirection={"row"} sx={{ mt: 3, gap: 2, width: "100%" }}>
            <img
              src="assets/HomepageIMG1.png"
              alt="img"
              style={{ width: "50%" }}
            />
            <img
              src="assets/HomepageIMG2.png"
              alt="img"
              style={{ width: "50%" }}
            />
          </Stack>
          <Stack flexDirection={"row"} sx={{ mt: 3, gap: 2, width: "100%" }}>
            <img
              src="assets/HomepageIMG3.png"
              alt="img"
              style={{ width: "50%" }}
            />
            <img
              src="assets/HomepageIMG4.png"
              alt="img"
              style={{ width: "50%" }}
            />
          </Stack>
        </Box>
        <Box sx={{ mt: "150px", width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Typography sx={{ color: "#DAC5A7" }}>THE PROCESS</Typography>
            <Typography
              sx={{ color: "#DAC5A7", textAlign: "center", fontSize: "150px" }}
            >
              Your Website <br /> in 5 steps
            </Typography>
            <Typography
              sx={{ color: "#DAC5A7", textAlign: "center", fontSize: "30px" }}
            >
              Our process ensures that we create a website
              <br /> tailored to your business needs.{" "}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 10,
          }}
        >
          <Stack sx={{ width: "100%", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "900px",
              }}
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "17%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    1 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>Lorem Ipsum</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  CONCEPT & STRATEGY
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Together, we develop a strategy that successfully combines{" "}
                  <br />
                  your goals with needs of your target audience. Based on <br />
                  this concepts, I create the first wireframes and an
                  interactive <br />
                  prototype. This provides us with a very good impression of the{" "}
                  <br />
                  website and the user interface.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    UX Design
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Wireframes
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    interactive Prototype
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "650px",
              }}
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "17%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    2 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>MORE MAGIC</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  DEVELOPMENT
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  In this step, we breathe life into your new high-end design.
                  You
                  <br />
                  will receive a custom-built website using a modular web design
                  <br />
                  system and CMS integration. Animation will ad the necessary
                  <br />
                  flair to your site and set you apart from the boring
                  competition
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Custom framer website
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Modular web design systems
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    CMS integration
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
          <Stack>
            <Root>
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                <ArrowDownwardIcon />
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                01
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                02
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                03
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                04
              </Button>
              <Divider
                orientation="vertical"
                sx={{ color: "#DAC5A7", borderColor: "#181716", mx: 4 }}
              />
              <Button
                sx={{
                  color: "#DAC5A7",
                  border: "2px solid #262421",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                }}
              >
                05
              </Button>
            </Root>
          </Stack>
          <Stack sx={{ width: "100%", alignItems: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "350px",
              }}
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "17%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    2 HOURS
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>DO WE MATCH?</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  DISCOVERY CALL
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Before we start, we determine if and how I can help you. What{" "}
                  <br />
                  are your requirements for your new website? Why do you need a{" "}
                  <br />
                  new website? What goals do you have, and what problems can we{" "}
                  <br />
                  solve with a new website?
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    We get to know each other better
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Determine how I can best assist you
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Understand the goals you have for your website
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "700px",
              }}
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "17%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    2 WEEK
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>SOME MAGIC</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  WEB DESIGN
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  Now comes the magic. Based on the previously developed <br />
                  concept, I create a high-end screen design perfectly tailored{" "}
                  <br />
                  to your brand. A web design that sets you apart from your{" "}
                  <br />
                  competition, fits your target audience ideally, and provides{" "}
                  <br />
                  an excellent user experience.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    High-end web design tailored to your brand
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Interactive prototype of the design
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "4px",
                border: "1px solid #262421",
                bgcolor: "#181716",
                p: 4,
                width: "70%",
                mt: "700px",
              }}
            >
              <Stack direction={"column"}>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#DAC5A7",
                      borderRadius: "2px",
                      border: "1px solid #3d3932",
                      width: "17%",
                      p: "5px",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    2 HOURS
                  </Typography>
                </Box>
                <Typography sx={{ color: "#8c7f6d" }}>READY TO GO</Typography>
                <Typography
                  sx={{ color: "#DAC5A7", mt: 1, mb: 2, fontSize: "22px" }}
                >
                  WEBSITE ONBOARDING
                </Typography>
                <Typography sx={{ color: "#8c7f6d" }}>
                  In a personal Framer workshop, I will show you how to make{" "}
                  <br />
                  changes to your new website quickly and easily. Additionally,{" "}
                  <br />
                  you will receive personalized Framer video tutorials that you{" "}
                  <br />
                  can access at any time. Edit your Framer website without a{" "}
                  <br />
                  complicated backend or the need for an additional programmer.{" "}
                  <br />
                  It's as simple as that.
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    mt: 3,
                    gap: 3,
                  }}
                >
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Personal workshop
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Personalized video tutorials
                  </Stack>
                  <Stack
                    flexDirection={"row"}
                    sx={{ color: "#DAC5A7", alignItems: "center", gap: 1 }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: "14px" }} />
                    Edit text and images directly on your website
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Box>
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
            mt: 5,
          }}
        >
          <Typography sx={{color: "#DAC5A7",fontSize:'80px',mb:6}}>Yousef Boroushaki</Typography>
          <Stack flexDirection={"row"} sx={{gap:'90px', ml:20}}>
            <Typography sx={{color:'#DAC5A7', fontSize:'20px'}} variant="button">
              A website that leaves <br />a lasting impression !
            </Typography>
            <Box>
              <Typography  sx={{color:'#DAC5A7'}}>
                Hi, I'm Yousef Boroushaki - a freelancer specializing in premium web <br /> 
                development I'm passionate about creating unique and effective solutions <br/>
                for my clients, and I bring a personal touch to every project. Let's <br/>
                work together to bring your vision to life!
              </Typography>
              <Stack></Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
