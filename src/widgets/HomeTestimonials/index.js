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
import TestimonialCard from "@/components/TestimonialCard";


const HomeTestimonials = ({ data }) => {
  const { main } = useHomeTestimonials({ style });
  const customSettings = {
    spaceBetween: 10,
    slidesPerView: 1.2,
    modules: [Grid],
   
    breakpoints: {
      640: {
        spaceBetween: 2,
      },
      768: {
        slidesPerView: 2,
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
          <h3 className={`${style.title} h2 fw-300 text-white`}>
            What our <span className="fw-400">customers are</span> saying
          </h3>
        </div>


        <Slider className={""} customSettings={customSettings} >
          {datas?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <TestimonialCard data={item} />
              </SwiperSlide>
            )
          })}
        </Slider>

      </div>
    </section>
  );
};

export default HomeTestimonials;

const datas = [
  {
    name: "Mario M.",
    text: "Incredible immersion! The AI-driven environments and personalized storylines make every game a unique adventure. It's like stepping into another world!",
    img: "/assets/images/av1.png",
    star: "4.9"
  },
  {
    name: "Emily R.",
    text: "This VR stands out with its hyper-realistic graphics and advanced motion tracking. The voice and gesture controls are intuitive and seamless.",
    img: "/assets/images/av2.png",
    star: "4.9"
  }, {
    name: "Rina S.",
    text: "Incredible immersion! The AI-driven environments and personalized storylines make every game a unique adventure. It's like stepping into another world!",
    img: "/assets/images/av3.png",
    star: "4.9"
  }, {
    name: "Mario M.",
    text: "Incredible immersion! The AI-driven environments and personalized storylines make every game a unique adventure. It's like stepping into another world!",
    img: "/assets/images/av4.png",
    star: "4.9"
  }, {
    name: "Mario M.",
    text: "Incredible immersion! The AI-driven environments and personalized storylines make every game a unique adventure. It's like stepping into another world!",
    img: "/assets/images/av2.png",
    star: "4.9"
  },
];
