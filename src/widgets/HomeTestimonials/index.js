"use client";
import style from "./HomeTestimonials.module.scss";
import { useHomeTestimonials } from "./useHomeTestimonials";
import SpecCard from "@/components/SpecCard";
import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Grid } from 'swiper/modules';
import "swiper/css/grid";


const HomeTestimonials = ({ data }) => {
  const { main } = useHomeTestimonials({ style });
  const customSettings = {
    spaceBetween: 10,
    slidesPerView: 4,
    modules: [Grid],
    grid: {
      rows: 2, 
      fill: 'row',
    },
    breakpoints: {
      640: {
          spaceBetween: 4,
          grid: {
            rows: 1,
            fill: 'row',
          },
      },
      768: {
          slidesPerView: 5,
      },
      992: {
          slidesPerView: 2,
          spaceBetween: 25,
          grid: {
            rows: 2,
            fill: 'row',
          },
      },
  },
    pagination: false,
    // modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
  };


  return (
    <section
      className={`${style.section} bg-secondary  position-relative`}
      ref={main}
    >
      <div className="container">
        <div className="col-lg-7">
      <h3 className={`${style.title} h2 fw-400 text-white`}>
            What our customers are saying
            </h3>
        </div>


        <Slider className={""} customSettings={customSettings} >
       
                <SwiperSlide >ete</SwiperSlide>
                <SwiperSlide >ete</SwiperSlide>
                <SwiperSlide >ete</SwiperSlide>
                <SwiperSlide >ete</SwiperSlide>
                <SwiperSlide >ete</SwiperSlide>
                <SwiperSlide >ete</SwiperSlide>
                <SwiperSlide >ete</SwiperSlide>
             
        </Slider>

      </div>
    </section>
  );
};

export default HomeTestimonials;

const card = [
  {
    title: "Innovate Your Imagination",
    img: "/assets/images/banner1.png",
  },
  {
    title: "Personalized Virtual Realities Tailored by Advanced AI",
    img: "/assets/images/banner1.png",
  },
];
