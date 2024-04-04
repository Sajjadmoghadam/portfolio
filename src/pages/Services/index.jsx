import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
export default function Services() {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000	",
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

          <Box mt={5} sx={{width:'100%', height:'100%'}}>
                <img width='50%' height='100%' src='assets/servicesimg1.png'/>
            </Box>
        </Stack>
      </Stack>
    </>
  );
}
