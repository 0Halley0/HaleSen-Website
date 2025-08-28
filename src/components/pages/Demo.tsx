import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import Seperator from "../../assets/seperator2.png";
import { GradientDivider } from "../shared/GradientDivider";
import "swiper/swiper-bundle.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import DemoForm1 from "../demos/forms/DemoForm1";
import DemoForm2 from "../demos/forms/DemoForm2";
import DemoForm3 from "../demos/forms/DemoForm3";
import DemoForm4 from "../demos/forms/DemoForm4";

export default function Demo() {
  return (
    <Box
      id="demo"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        py: 6,
      }}
    >
      <GradientDivider />
      <Box sx={{ width: "100%", position: "relative", zIndex: 2 }}>
        <img
          src={Seperator}
          alt="Contact Header"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          }}
        />
      </Box>
      <GradientDivider />

      <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
        Checkout My Demo Components
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4, color: "gray" }}>
        Explore some of the interactive components I've built with React & MUI
      </Typography>

      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        FORM EXAMPLES
      </Typography>

      <Container sx={{ maxWidth: "80vw", mt: 4 }}>
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          allowTouchMove={false}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          style={{ width: "100%", paddingBottom: "40px" }}
        >
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <DemoForm1 />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <DemoForm2 />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <DemoForm3 />
          </SwiperSlide>
          <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
            <DemoForm4 />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}
