"use client";
import style from "./HomeAbout.module.scss";
import { useHomeAbout } from "./useHomeAbout";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward, MdKeyboardArrowRight } from "react-icons/md";
const HomeAbout = ({ data }) => {
  const { main } = useHomeAbout({ style });

  return (
    <section
      className={`${style.section} bg-secondary overflow-hidden position-relative`}
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
            <h3 className={`${style.title} h2 fw-400 text-white ff-secondary`}>
              Imaginations Engineered Trust Delivered.
            </h3>

            <div className="col-lg-7">
              <div className={style.list}>
                <Link href="#" className={` ${style.list_item} position-relative d-flex`}>Advertising<span className="ms-2"> <MdArrowOutward /> </span> </Link>
                <Link href="#" className={` ${style.list_item} position-relative d-flex`}>Branding  <span className="ms-2"> <MdArrowOutward /> </span></Link>
                <Link href="#" className={` ${style.list_item} position-relative d-flex`}>Digital Marketing  <span className="ms-2"> <MdArrowOutward /> </span></Link>
              </div>
            </div>

          </div>
          <div className="col-lg-5 order-1 order-lg-3">
            <div className={`ms-lg-auto ${style.cover} position-relative mb-4 mb-lg-0`}>
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

              <span class={`${style.cover_label} rounded-pill border border-white d-inline-block fw-300 title-md mb-2 text-white px-3 py-1 position-absolute`}>AI Health</span>
              <span class={`${style.cover_arrow}  d-inline-block  h4 text-white position-absolute`}><MdKeyboardArrowRight/></span>



              <div className={`ratio ${style.cover_img}`}>
                <Image
                  src={"/assets/images/bg2.png"}
                  priority={true}
                  fill
                  className="object-fit-cover"
                  sizes="50vw"
                  quality={90}
                  alt={`a man and boy wearing  VR Boxes`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
