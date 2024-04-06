import { Stack, Box, Typography, TextField, Button } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import SouthIcon from "@mui/icons-material/South";
import CallMadeIcon from "@mui/icons-material/CallMade";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import { styled } from "@mui/system";

import React from "react";

export default function Contact() {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#F3F6F9",
    100: "#E5EAF2",
    200: "#DAE2ED",
    300: "#C7D0DD",
    400: "#B0B8C4",
    500: "#9DA8B7",
    600: "#6B7A90",
    700: "#434D5B",
    800: "#303740",
    900: "#1C2025",
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color:C;
    background:#DAC5A726};
    border: 1px solid #DAC5A726;
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: #DAC5A726   ;
    }

    &:focus {
      outline: 0;
      border-color: #DAC5A726;
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );
  return (
    <>
      <Stack sx={{ backgroundColor: "#000000", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "12%",
          }}
        >
          <Box
            sx={{
              width: "600px",
              height: "600px",
              alignItems: "center",
            }}
          >
            <img
              width="100%"
              height="100%"
              src="./assets/homepagePhoto.png"
              alt=""
            />
          </Box>
          <Stack flexDirection="column">
            <Box
              sx={{
                backgroundColor: "#DAC5A726",
                width: "600px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                padding: "30px 50px",
              }}
            >
              <Typography sx={{ color: "#DAC5A799", fontSize: "13px" }}>
                Contact
              </Typography>
              <Typography
                variant="h3"
                fontSize="bold"
                sx={{ color: "#DAC5A7" }}
              >
                Let’s get in touch.
              </Typography>
              <Box
                mt={3}
                gap={2}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <TextField
                  label="Name"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#DAC5A726",
                    border: "1px solid #DAC5A726"
                    
                  }}
                />
                <TextField
                  label="Name"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#DAC5A726",
                    border: "1px solid #DAC5A726",
                  }}
                />
                <Textarea
                  aria-label="minimum height"
                  minRows={7}
                  placeholder="Message"
                />
                <Button
                  variant="text"
                  sx={{
                    backgroundColor: "#DAC5A7",
                    width: "100%",
                    color: "#0E0E0E",
                    border: "1px solid #DAC5A726",
                    "&:hover": {
                      backgroundColor: "#DAC5A7",
                    },
                    "&:focus": {
                      border: "1px solid #DAC5A726",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
            <Stack width="100%" mt={5} gap="30px" flexDirection="column">
              <Button
                startIcon={<LinkedInIcon />}
                sx={{
                  backgroundColor: "#DAC5A726",
                  width: "100%",
                  height: "56px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: "1px",
                  color:'#DAC5A7'

                }}
              >
                Linkedin
              </Button>

              <Button
                startIcon={<GitHubIcon />}
                sx={{
                  backgroundColor: "#DAC5A726",
                  width: "100%",
                  height: "56px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: "1px",
                  color:'#DAC5A7'

                }}
              >
                Github
              </Button>

              <Button
                startIcon={<MailIcon />}
                sx={{
                  backgroundColor: "#DAC5A726",
                  width: "100%",
                  height: "56px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: "1px",
                  color:'#DAC5A7'
                }}
              >
                Email
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}
