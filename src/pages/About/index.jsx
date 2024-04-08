import { Box, Button, Stack, Typography, Divider } from "@mui/material";
import React from "react";
import SouthIcon from "@mui/icons-material/South";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
export default function About() {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "2769px",
          backgroundColor: "#000000	",
          flexDirection: "column",
          overflow: "hidden",
          pt:'200px'
        }}
      >
        <Stack
          mx="auto"
          sx={{
            flexDirection: "row",
            padding: "50px",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ width: "30%", height: "590px", position:'fixed', top:100, left:0 }}>
            <img width="100%" height="60%" src="assets/aboutimg1.jfif" alt="img" />
          </Box>
          <Box sx={{ width: "70%", height: "350px" }}>
            <Typography variant="h3" color="#DAC5A7">
              Amirreza Mirshafiee
            </Typography>
            <Typography variant="body2" color="#DAC5A799">
              Delivering Premium Web Design and Development Services to Boost
              Your Online Presence.
            </Typography>
            <Button
              sx={{ color: "#DAC5A7", fontSize: "13px", marginTop: "25px" }}
              startIcon={
                <SouthIcon
                  fontSize="small"
                  sx={{
                    color: "#DAC5A7",
                    borderRadius: "50%",
                    border: "1px solid #DAC5A726",
                    padding: "5px",
                  }}
                />
              }
            >
              My Services
            </Button>
            <Stack
              mt={25}
              sx={{
                height: "750px",
                width: "700px",
                backgroundColor: "#DAC5A726",
                padding: "50px ",
              }}
            >
              <Stack flexDirection="column">
                {" "}
                <Box>
                  <Typography color="#DAC5A799" fontSize="13px">
                    Arik Andersson
                  </Typography>
                  <Typography color="#DAC5A799" fontSize="40px">
                    Your Partner in Bringing Your Web Design Vision to Life
                  </Typography>
                  <Typography color="#DAC5A799" fontSize="13px">
                    As a freelance web designer and developer, I bring a unique
                    combination of creativity and technical expertise to every
                    project. With a keen eye for design and a passion for
                    delivering user-friendly web experiences, I work closely
                    with clients to understand their needs and bring their
                    vision to life.
                    <br />
                    <br /> My approach is rooted in collaboration and
                    communication, and I take pride in my ability to explain
                    technical concepts in simple terms. Whether I'm developing a
                    new website from scratch or optimizing an existing site for
                    search engines, I always strive for excellence in both form
                    and function. With a dedication to quality and a commitment
                    to staying on top of the latest trends and technologies, I
                    am confident in my ability to deliver exceptional results
                    that exceed my clients' expectations.ّ
                  </Typography>
                  <Box mt={3} sx={{ width: "704px", height: "417px" }}>
                    <img
                      width="100%"
                      height="100%"
                      src="assets/aboutimg2.jfif"
                    />
                  </Box>
                </Box>
              </Stack>
            </Stack>
            <Stack mt={5} gap="30px" flexDirection="row">
              <Box
                sx={{
                  backgroundColor: "#DAC5A726",
                  width: "244px",
                  height: "56px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "1px",
                }}
              >
                <Button startIcon={<LinkedInIcon />} sx={{ color: "#DAC5A7" }}>
                  Linkedin
                </Button>
                <CallMadeIcon sx={{ color: "#DAC5A7" }} />
              </Box>
              <Box
                sx={{
                  backgroundColor: "#DAC5A726",
                  width: "243px",
                  height: "56px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "1px",
                }}
              >
                <Button startIcon={<GitHubIcon />} sx={{ color: "#DAC5A7" }}>
                  Github
                </Button>
                <CallMadeIcon sx={{ color: "#DAC5A7" }} />
              </Box>{" "}
              <Box
                sx={{
                  backgroundColor: "#DAC5A726",
                  width: "244px",
                  height: "56px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "1px",
                }}
              >
                <Button startIcon={<MailIcon />} sx={{ color: "#DAC5A7" }}>
                  Email
                </Button>
                <CallMadeIcon sx={{ color: "#DAC5A7" }} />
              </Box>
            </Stack>
            <Stack
              mt={5}
              sx={{
                height: "500px",
                width: "700px",
                backgroundColor: "#DAC5A726",
                padding: "50px ",
                flexDirection: "column",
              }}
            >
              <Typography color="#DAC5A799" fontSize="13px">
                Awards
              </Typography>
              <Box mt={3} sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin:'20px 0'
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Awwwards SOTD
                  </Typography>
                  <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                    
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin:'20px 0'
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Awwwards SOTD
                  </Typography>
                  <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                    
                  }}
                />                <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin:'20px 0'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ color: "#DAC5A7", fontSize: "20px" }}
                >
                  Awwwards SOTD
                </Typography>
                <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  
                }}
              />                <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin:'20px 0'
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#DAC5A7", fontSize: "20px" }}
              >
                Awwwards SOTD
              </Typography>
              <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
            </Box>
            <Divider
              sx={{
                borderColor: "#DAC5A726",
                
              }}
            />                <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin:'20px 0'
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "#DAC5A7", fontSize: "20px" }}
            >
              Awwwards SOTD
            </Typography>
            <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
          </Box>
          <Divider
            sx={{
              borderColor: "#DAC5A726",
              
            }}
          />
                          <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin:'20px 0'
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#DAC5A7", fontSize: "20px" }}
                  >
                    Awwwards SOTD
                  </Typography>
                  <Typography sx={{ color: "#DAC5A7" }}>2023</Typography>
                </Box>
                <Divider
                  sx={{
                    borderColor: "#DAC5A726",
                    
                  }}
                />
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
