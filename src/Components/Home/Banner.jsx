// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// my import
import img from "../../assets/side-view-gamer-playing-with-controller.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <div className="my-16">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className="rounded-xl" src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-xl" src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-xl" src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img className="rounded-xl" src={img} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
