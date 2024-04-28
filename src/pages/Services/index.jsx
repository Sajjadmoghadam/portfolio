import React from "react";
import { Stack, Box, Typography, Button, Divider } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
export default function Services() {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          flexDirection: "column",
          pt: "200px",
          pb: 10,
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "100%",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography variant="h3" sx={{ color: "#DAC5A7" }}>
              Full Stack Developer
            </Typography>
            <Typography variant="h2" sx={{ color: "#DAC5A7" }}>
              Mern Stack
            </Typography>
            <Typography variant="body1" sx={{ color: "#DAC5A799" }}>
              Premium Front-End and Back-End development, and SEO services to
              help your business stand out.
            </Typography>
            <Button
              sx={{ color: "#DAC5A7", fontSize: "13px", marginTop: "30px" }}
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
          </Box>

          <Box mt={5} sx={{ width: "100%", height: "100%" }}>
            <img width="80%" height="100%" src="assets/servicesimg1.png" />
          </Box>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Stack
            mt={10}
            sx={{
              backgroundColor: "#383735",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              mx: "auto",
              textAlign: "center",
              width: "70%",
              padding: "40px",
            }}
          >
            {" "}
            <Box
              sx={{
                alignContent: "start",
                justifyContent: "flex-start",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <Typography variant="h6" color="#DAC5A7" fontSize="13px">
                Front-End
              </Typography>
              <Typography variant="h4" color="#DAC5A7" fontSize="25px">
                Transforming Your Ideas into Reality
              </Typography>
            </Box>
            <Box mt={2} sx={{ width: "100%", height: "100%" }}>
              <img
                width="100%"
                height="100%"
                src="assets/servicesimg3.jfif"
                alt="img"
              />
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  User Interface
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I provide a visually appealing and easy-to-navigate user
                  interface that enhances the overall user experience
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Performance
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I optimize your website for fast loading times and smooth
                  operation to ensure a seamless user experience.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Mobile responsiveness
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I create website that responsive and adaptable to various
                  devices and screen sizes, including mobile phones, tablets,
                  and desktops.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Stack
            mt={5}
            sx={{
              backgroundColor: "#383735",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              mx: "auto",
              textAlign: "center",
              width: "70%",
              padding: "40px",
            }}
          >
            {" "}
            <Box
              sx={{
                alignContent: "start",
                justifyContent: "flex-start",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <Typography variant="h6" color="#DAC5A7" fontSize="13px">
                Back-End
              </Typography>
              <Typography variant="h4" color="#DAC5A7" fontSize="25px">
                Developing High-Performance and secure Websites{" "}
              </Typography>
            </Box>
            <Box mt={2} sx={{ width: "100%", height: "100%" }}>
              <img
                width="100%"
                height="100%"
                src="assets/servicesimg2.jfif"
                alt="img"
              />
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Data storage and management
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I provide a secure and efficient way to store and manage data,
                  ensuring that it is organized, accessible, and easily
                  retrievable when needed.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Security
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I implement strong security measures to protect sensitive
                  data, prevent unauthorized access, and mitigate potential
                  security threats, such as SQL injection or cross-site
                  scripting attacks.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Performance optimization
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I optimize your website performance, ensuring that it runs
                  efficiently and quickly processes requests to provide a
                  seamless user experience.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Stack
            mt={5}
            sx={{
              backgroundColor: "#383735",
              alignContent: "center",
              justifyContent: "center",
              flexDirection: "column",
              mx: "auto",
              textAlign: "center",
              width: "70%",
              padding: "40px",
            }}
          >
            {" "}
            <Box
              sx={{
                alignContent: "start",
                justifyContent: "flex-start",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <Typography variant="h6" color="#DAC5A7" fontSize="13px">
                SEO & content{" "}
              </Typography>
              <Typography variant="h4" color="#DAC5A7" fontSize="25px">
                Boosting Your Website's Organic Search Traffic
              </Typography>
            </Box>
            <Box mt={2} sx={{ width: "100%", height: "100%" }}>
              <img
                width="100%"
                height="100%"
                src="assets/servicesimg4.jfif"
                alt="img"
              />
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  website visibility
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I help improve your website's ranking on search engine results
                  pages, making it easier for users to find and visit the site.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Competing with competitors
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I allow your business to stay competitive in your industry by
                  improving your online visibility and ranking relative to
                  competitors.
                </Typography>
              </Box>
              <Divider
                sx={{
                  borderColor: "#DAC5A726",
                  margin: "20px",
                  height: "100%",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography color="#DAC5A7" textAlign="center" width="20%">
                  Driving organic traffic
                </Typography>
                <Typography color="#DAC5A799" textAlign="center" width="80%">
                  I help attract users who are actively searching for
                  relevant content, products, or services, leading to higher
                  quality traffic and potential conversions.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
