"use client";
import style from "./HomeChoose.module.scss";
import { useHomeChoose } from "./useHomeChoose";
import SpecCard from "@/components/SpecCard";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const HomeChoose = ({ data }) => {
  const { main, customSettings } = useHomeChoose({ style });

  return (
    <section
      className={`${style.section} bg-secondary  position-relative`}
      ref={main}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2 ">
            <h2 className="text-primary  text-primary h6 pt-lg-4 lh-sm ">
              Why Choose
            </h2>
          </div>
          <div className="col-lg-5 ">
            <h3 className={`${style.title} h3 fw-400 text-white ff-secondary`}>
              What’s that made us different
            </h3>
          </div>
        </div>
        <div className={`row row-cols-lg-3 gx-lg-3 gx-xl-4 ${style.card_wrap}`}>
          {cards?.map((item, i)=>{
            return(
              <div key={i}>
              <SpecCard data={item}/>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeChoose;

const cards = [
  {
    title: "AI-Personalized Experiences",
    description:
      "Our VR system leverages advanced AI to create uniquely tailored experiences for each user.",
  },
  {
    title: "Hyper-Realistic Visuals and Sound",
    description:
      "Combining 4K per eye resolution and cutting-edge audio technology, our VR headset delivers a level of realism that’s unmatched.",
  },
  {
    title: "Intuitive Interaction",
    description:
      "Our VR system features advanced voice and gesture control, allowing for natural and intuitive interactions.",
  },
];
