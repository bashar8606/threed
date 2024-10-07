"use client";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";
import SpecCard from "@/components/SpecCard";
import Slider from "@/components/Slider";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

const HomeAbout = ({ data }) => {
  const { main, customSettings } = useHomeAbout({ style });

  return (
    <section
      className={`${style.section} bg-secondary  position-relative`}
      ref={main}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-2 order-2 order-lg-1">
            <h2 className="text-primary h text-primary h6 pt-lg-4 lh-sm ">
              Our About Us
            </h2>
          </div>
          <div className="col-lg-5 order-3 order-lg-2">
            <h3 className={`${style.title} h2 fw-400 text-white`}>
              Imaginations Engineered Trust Delivered.
            </h3>


			<div className={style.list}>
				<Link href="#" className={` ${style.list_item} d-flex`}>Advertising</Link>
				<Link href="#"  className={` ${style.list_item} d-flex`}>Branding</Link>
				<Link href="#"  className={` ${style.list_item} d-flex`}>Digital Marketing</Link>
			</div>
          </div>
          <div className="col-lg-5 order-1 order-lg-3">
            <div className={`ms-lg-auto ${style.cover} mb-4 mb-lg-0`}>
              <div className={`ratio ${style.cover_img}`}>
                <Image
                  src={"/assets/images/banner1.png"}
                  priority={true}
                  fill
                  className="object-fit-cover"
                  sizes="50vw"
                  quality={90}
                  alt={`a girl wearing a VR Box`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <Slider className={""} customSettings={customSettings}>
          <SwiperSlide className={`h-auto ${style.slider_item}`}>
            <SpecCard
              title="Expert Instructor"
              theme="one"
              icon={"/assets/images/f1.svg"}
              bg={"/assets/images/s1.svg"}
            />
          </SwiperSlide>
          <SwiperSlide className={`h-auto ${style.slider_item}`}>
            <SpecCard
              title="24/7 Support "
              theme="two"
              icon={"/assets/images/f2.svg"}
              bg={"/assets/images/s2.svg"}
            />
          </SwiperSlide>
          <SwiperSlide className={`h-auto ${style.slider_item}`}>
            <SpecCard
              title="Lifetime Access"
              theme="three"
              icon={"/assets/images/f3.svg"}
              bg={"/assets/images/s3.svg"}
            />
          </SwiperSlide>
        </Slider> */}
      </div>
    </section>
  );
};

export default HomeAbout;
