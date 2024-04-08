import React from "react";
import { Stack, Box, Typography, Button, Divider } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import CallMadeIcon from '@mui/icons-material/CallMade';
export default function Services() {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          flexDirection: "column",
          pt:'200px'
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
              Full Stack
            </Typography>
            <Typography variant="h2" sx={{ color: "#DAC5A7" }}>
              Mern
            </Typography>
            <Typography variant="body1" sx={{ color: "#DAC5A799" }}>
              Premium web design, development, and SEO services to help your
              business stand out.
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
                Webdesign
              </Typography>
              <Typography variant="h4" color="#DAC5A7" fontSize="25px">
                Transforming Your Ideas into Reality
              </Typography>
            </Box>
            <Box mt={2} sx={{ width: "100%", height: "100%" }}>
              <img width="100%" height="100%" src="assets/servicesimg3.jfif" />
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  Concept
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  I take time to understand your business needs and audience to
                  develop a unique concept for your website. I'll create
                  wireframes that serve as the foundation for your site's design
                  and functionality.
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
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  CMS Integration
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  I can help you streamline your content management process by
                  integrating a CMS into your website. Say goodbye to manual
                  updates and hello to efficiency.
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
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  WEb Design System
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  I use a modular design approach to create a web design system
                  that ensures consistency throughout your website. This results
                  in a professional and cohesive online presence.
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
                Development
              </Typography>
              <Typography variant="h4" color="#DAC5A7" fontSize="25px">
                Developing High-Performance Websites and Web Applications{" "}
              </Typography>
            </Box>
            <Box mt={2} sx={{ width: "100%", height: "100%" }}>
              <img width="100%" height="100%" src="assets/servicesimg2.jfif" />
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  Framer
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  I specialize in developing web applications using Framer. From
                  custom animations to complex interactions, I bring your web
                  app to life.
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
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  CMS Integration
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  I can help you streamline your content management process by
                  integrating a CMS into your website. Say goodbye to manual
                  updates and hello to efficiency.
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
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  WEb Design System
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  I use a modular design approach to create a web design system
                  that ensures consistency throughout your website. This results
                  in a professional and cohesive online presence.
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
              <img width="100%" height="100%" src="assets/servicesimg4.jfif" />
            </Box>
            <Box mt={5} width="100%" height="100%">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  Research
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  I conduct thorough research to identify the best keywords and
                  strategies to improve your website's search engine ranking.
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
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  SEo Ranking
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  My SEO services are designed to improve your website's
                  visibility on search engines, increasing your organic traffic
                  and driving more leads and sales.
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
                <Typography
                  color="#DAC5A7"
                  textAlign="start"
                  width="250px"
                  height="21px"
                >
                  SEO Support
                </Typography>
                <Typography
                  color="#DAC5A799"
                  textAlign="start"
                  width="814px"
                  height="58px"
                >
                  With ongoing SEO support, I ensure that your website stays
                  up-to-date with the latest SEO best practices, keeping you
                  ahead of the competition.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack
          mt={3}
          sx={{
            backgroundColor: "#DAC5A70D",
            width: "100%",
            height: "70%",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Box my={20} padding='20px'>
            <Typography color="#DAC5A7" variant="body1" >
              Project in mind?
            </Typography>
            <Typography color="#DAC5A7" variant="h2">
              Let’s make your
            </Typography>
            <Typography color="#DAC5A7" variant="h3" fontStyle="italic">
              Website shine
            </Typography>
            <Typography color="#DAC5A799" variant="body1" fontSize="13">
              Premium web design, webflow, and SEO services to help your
              business stand out.
            </Typography>
            <Button
              sx={{ backgroundColor:'#DAC5A7', fontSize: "13px", marginTop: "30px" , padding:'10px',color:'#0E0E0E'}}
              endIcon={
                <CallMadeIcon
                  fontSize="small"
                  sx={{
                    
                    border: "1px solid #DAC5A726",
                    padding: "5px",
                  }}
                />
              }
            >
              My Services
            </Button>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
