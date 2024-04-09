import React from "react";
import { Box, Stack, Typography } from "@mui/material";
export default function Work() {
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          height: "2100px",
          backgroundColor: "#000000	",
          flexDirection: "column",
          overflow: "hidden",
          pt: "150px",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" color="#DAC5A7">
            Work
          </Typography>
          <Typography variant="body2" color="#DAC5A799">
            My latest web design projects and see how we can help bring your
            ideas to life.
          </Typography>
        </Stack>

        <Stack
          flexDirection={"row"}
          sx={{
            mt: 3,
            gap: 2,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="assets/HomepageIMG1.png"
            alt="img"
            style={{ width: "35%" }}
          />
          <img
            src="assets/HomepageIMG2.png"
            alt="img"
            style={{ width: "35%" }}
          />
        </Stack>
        <Stack
          flexDirection={"row"}
          sx={{
            mt: 3,
            gap: 2,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="assets/HomepageIMG3.png"
            alt="img"
            style={{ width: "35%" }}
          />
          <img
            src="assets/HomepageIMG4.png"
            alt="img"
            style={{ width: "35%" }}
          />
        </Stack>
      </Stack>
    </>
  );
}
