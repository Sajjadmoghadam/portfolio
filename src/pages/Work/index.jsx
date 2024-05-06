import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./style.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function Work() {
  useGSAP(() => {
    gsap.from(".work-header", {
      y: -200,
      duration: 2,
      opacity: 0,
      // delay:0.5
    });
    gsap.from(".work-img", {
      y: 200,
      duration: 2,
      opacity: 0,
      // delay:0.5
    });
  });
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          // height: "2100px",
          backgroundColor: "#000000	",
          flexDirection: "column",
          overflow: "hidden",
          pt: "150px",
          pb: 18,
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="work-header"
          mb={5}
        >
          <Typography variant="h2" color="#DAC5A7">
            Work
          </Typography>
          <Typography
            variant="body2"
            color="#DAC5A799"
            sx={{ textAlign: "center" }}
          >
            My latest web design projects and see how we can help bring your
            ideas to life.
          </Typography>
        </Stack>
        <Box className="work-img">
          <Stack
            flexDirection={"row"}
            sx={{
              mt: 3,
              // gap: 2,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              px:10,
              
            }}
          >
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide><img src="assets/ecommerce/ecomm-img1.png" alt="img"/></SwiperSlide>
              <SwiperSlide><img src="assets/ecommerce/ecomm-img2.png" alt="img"/></SwiperSlide>
              <SwiperSlide><img src="assets/ecommerce/ecomm-img3.png" alt="img"/></SwiperSlide>
            </Swiper>
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              <SwiperSlide><img src="assets/pannel/panel-img1.png" alt="img"/></SwiperSlide>
              <SwiperSlide><img src="assets/pannel/panel-img2.png" alt="img"/></SwiperSlide>
              <SwiperSlide><img src="assets/pannel/panel-img3.png" alt="img"/></SwiperSlide>
              <SwiperSlide><img src="assets/pannel/panel-img4.png" alt="img"/></SwiperSlide>
              <SwiperSlide><img src="assets/pannel/panel-img5.png" alt="img"/></SwiperSlide>
            </Swiper>
            {/* <img
              src="assets/HomepageIMG1.png"
              alt="img"
              style={{ width: "35%" }}
            />
            <img
              src="assets/HomepageIMG2.png"
              alt="img"
              style={{ width: "35%" }}
            /> */}
          </Stack>
          {/* <Stack
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
          </Stack> */}
        </Box>
      </Stack>
    </>
  );
}
