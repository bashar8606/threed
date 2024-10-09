"use client";
import style from "./HomeBrands.module.scss";
import { useHomeBrands } from "./useHomeBrands";
import Image from "next/image";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";


const HomeBrands = ({ data }) => {
  const { main } = useHomeBrands({ style });
  const customSettings = {
    spaceBetween: 10,
    slidesPerView: 4,
    breakpoints: {
      640: {
        spaceBetween: 4,
      },
      768: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 7,
        spaceBetween: 25,
      
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
      className={`${style.section} bg-grey  position-relative`}
      ref={main}
    >
      <div className="container">
        <Slider className={""} customSettings={customSettings} >
          {datas?.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className={`${style.brand} ratio`}>
                  <Image
                    src={item?.img}
                    fill
                    className="object-fit-contain"
                    sizes="50vw"
                    quality={90}
                    alt={item?.title}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Slider>

      </div>
    </section>
  );
};

export default HomeBrands;

const datas = [
  {
    title: "",
    img: "/assets/images/br1.svg",
  },
  {
    title: "",
    img: "/assets/images/br2.svg",
  }, {
    title: "",
    img: "/assets/images/br3.svg",
  }, {
    title: "",
    img: "/assets/images/br4.svg",
  }, {
    title: "",
    img: "/assets/images/br5.svg",
  }, {
    title: "",
    img: "/assets/images/br1.svg",
  },
  {
    title: "",
    img: "/assets/images/br2.svg",
  }, {
    title: "",
    img: "/assets/images/br3.svg",
  }, {
    title: "",
    img: "/assets/images/br4.svg",
  }, {
    title: "",
    img: "/assets/images/br5.svg",
  },
];
