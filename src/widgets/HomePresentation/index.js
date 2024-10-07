"use client";
import Image from "next/image";
import { useHomePresentation } from "./useHomePresentation";
import style from "./HomePresentation.module.scss";

const HomePresentation = ({ data }) => {
  const { main } = useHomePresentation(style);
  return (
    <section
      className={`${style.section} bg-secondary py-0 sec-padding  overflow-hidden d-flex align-items-center `}
      ref={main}
    >
      <div className="container">
        <div className="position-relative">
          <div className={`${style.line} `}>
            <div className={style.line_item}>
              <h3 className={`${style.title} text-uppercase fw-700 h1 text-grey`}>Product</h3>
            </div>
            <div className={style.line_item}></div>
            <div className={style.line_item}></div>
            <div className={`text-end ${style.line_item}`}>
              <h3 className={`text-uppercase fw-700 h1 text-grey ${style.title} `}>Detail</h3>
            </div>
          </div>

          <div className={style.img}>
            <div className={`position-absolute ${style.img_shape}`}>
              <div className="ratio">
			  <Image
                  src={"/assets/images/shape1.png"}
                  priority={true}
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
      </div>
    </section>
  );
};

export default HomePresentation;
