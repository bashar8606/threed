"use client";
import style from "./HomeFeatures.module.scss";
import { useHomeFeatures } from "./useHomeFeatures";
import SpecCard from "@/components/SpecCard";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const HomeFeatures = ({ data }) => {
  const { main, customSettings } = useHomeFeatures({ style });

  return (
    <section
      className={`${style.section} bg-secondary overflow-hidden  position-relative`}
      ref={main}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4 ">
            <h3 className={`${style.title} ff-secondary h4 fw-400 text-white`}>
              Beyond the Screen
            </h3>
            <p className="text-light title-md mb-4 mb-lg-5">
              Break free from traditional screens and step into a world where
              sophisticated AI and VR combine to bring your most vivid fantasies
              to life with unparalleled realism.
            </p>

            <div className={style.cards}>
              {card?.map((item, i) => {
                return (
                  <div
                    className={`d-flex align-items-center position-relative ${style.card} mb-3`}
                    key={i}
                  >
                    <span className={`rounded-pill position-absolute border border-primary d-block ${style.round}`}></span>
                    <Image
                      src={"/assets/images/stroke.png"}
                      priority={true}
                      fill
                      sizes="50vw"
                      className={style.stroke}
                      quality={90}
                      alt={``}
                    />
                    <div className={`overflow-hidden ${style.card_icon}`}>
                      <div className="ratio ratio-1x1">
                        <Image
                          src={item?.img}
                          priority={true}
                          fill
                          className="object-fit-cover"
                          sizes="50vw"
                          quality={90}
                          alt={item?.title}
                        />
                      </div>
                    </div>
                    <h4 className="title-sm text-white ps-4 mb-0">
                      {item?.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-6 position-relative">
            <div className={`${style.shape} ratio position-absolute`}>
              <Image
                src={"/assets/images/shape2.png"}
                priority={true}
                fill
                className="object-fit-cover"
                sizes="90vw"
                quality={90}
                alt={`decor`}
              />
            </div>


            <div className={`ratio ${style.cover_img} overflow-hidden`}>
              <Image
                src={"/assets/images/bg3.png"}
                priority={true}
                fill
                className="object-fit-cover"
                sizes="50vw"
                quality={90}
                alt={`a man wearing a VR Box in space`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatures;

const card = [
  {
    title: "Innovate Your Imagination",
    img: "/assets/images/avatar1.png",
  },
  {
    title: "Personalized Virtual Realities Tailored by Advanced AI",
    img: "/assets/images/avatar2.png",
  },
];
