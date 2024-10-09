"use client";
import Image from "next/image";
import { useHomePresentation } from "./useHomePresentation";
import style from "./HomePresentation.module.scss";
import ToolTip from "@/components/ToolTip";

const HomePresentation = ({ data }) => {
  const { main } = useHomePresentation(style);
  return (
    <section
      className={`${style.section} pb-0 bg-secondary sec-padding  overflow-hidden d-flex align-items-center `}
      ref={main}
    >
      <div className="container">
        <div className="position-relative">
          <div className={`${style.line} `}>
            <div className={`d-flex align-items-center ${style.line_item}`}>
              <h3 className={`${style.title} ff-secondary text-uppercase fw-700 h1 text-grey lh-1 mb-0`}>Product</h3>
            </div>
            <div className={style.line_item}></div>
            <div className={style.line_item}></div>
            <div className={`text-end ${style.line_item}  d-flex align-items-center justify-content-end`}>
              <h3 className={`text-uppercase fw-700 h1 text-grey ${style.title} ff-secondary  lh-1 mb-0`}>Detail</h3>
            </div>
          </div>

          <div className={style.img}>
            {tooltips?.map((item, i) => {
              return (
                <ToolTip data={item} key={i}/>
              )
            })}


            <div className={`position-absolute ${style.img_shape}`}>
              <div className="ratio">
                <Image
                  src={"/assets/images/shape1.png"}
                  fill
                  className="object-fit-cover"
                  sizes="50vw"
                  quality={90}
                  alt={`a purple abstract decor`}
                />
              </div>
            </div>
            <div className={style.img_banner}>
              <div className="ratio">
                <Image
                  src={"/assets/images/banner1.png"}
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
      </div>
    </section>
  );
};

export default HomePresentation;


const tooltips = [{
  title: "AI Health",
  description: "Personalized health insights using advanced AI.",
  isLeft: true,
  position: {
    top: "87%",
    left: "17%"
  },
}, {
  title: "AI Health",
  description: "Personalized health insights using advanced AI.",
  isLeft: false,
  position: {
    top: "55%",
    left: "77%"
  },
},]