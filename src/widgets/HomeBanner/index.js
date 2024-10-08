"use client";
import Image from "next/image";
import style from "./HomeBanner.module.scss";
import { useHomeBanner } from "./useHomeBanner";
import MetaBox from "@/components/MetaBox";
import BuyNow from "@/components/BuyNow";

const HomeBanner = ({ data }) => {
  const { main, width } = useHomeBanner({ style });

  return (
    <section className={`${style.section} bg-secondary  d-flex`} ref={main}>
      <div className="container">
        <div className={`position-absolute ratio ${style.shape}`}>
          <Image
            src={"/assets/images/shape-ellipse.png"}
            fill
            alt="decor image shapes"
          />
        </div>
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <div className={`row justify-content-between align-items-end mb-lg-3 ${style.fade}`}>
              <div className="col-auto text-white">
                <div className="d-flex">
                  <div>
                    <p className="title-xs text-light mb-1">Tech</p>
                    <p className="h5 text-white lh-1">125M+</p>
                  </div>
                  <div>
                    <div className={`${style.pf_wrap} d-flex justify-content-start justify-content-lg-start align-items-center `}>
                      <div className="d-flex">
                        {faculties?.data?.map((item, i) => {
                          return (
                            <div key={i} className={`${style.pf_sm} d-inline-block rounded-circle overflow-hidden bg-light  ratio ratio-1x1`}>
                              <Image src={`${item?.url}`} priority={true} fill className="object-fit-cover" alt={`${item?.alt}`} />
                            </div>
                          )
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-auto text-white text-md text-white fw-500 mb-0">
                Beyond the Screen
              </div>
            </div>

            <div className={`ratio ${style.reality} overflow-hidden mb-3`}>
              <Image
                src={`/assets/images/Reality.svg`}
                priority={true}
                fill
                className={`object-fit-cover ${style.fade}`}
                alt={``}
              />
            </div>
          </div>

          <div className="row">
            <div className={`col-lg-3 `}>
              <h3 className={`${style.fade} title-md text-white`}>Reality Perfected</h3>
              <p className={`${style.fade} text-light title-md`}>
                Dive into a visually stunning future with our AI-powered VR.
                Personalized experiences that push the boundaries of what&apos;s
                possible.
              </p>

              <div className={`${style.card} ${style.fade} d-flex  align-items-center mb-3`}>
                <div
                  className={`rounded-pill d-flex align-items-center justify-content-center bg-white ${style.card_icon}`}
                >
                  <Image
                    src={`/assets/images/icon-headset.svg`}
                    priority={true}
                    width={12}
                    height={12}
                    className={`object-fit-cover `}
                    alt={``}
                  />
                </div>
                <p className="text-light title-sm mb-0 ps-2">
                  Innovate Your
                  <br /> Imagination
                </p>
              </div>

              <div className={`${style.card} ${style.fade} d-flex  align-items-center`}>
                <div
                  className={`rounded-pill d-flex align-items-center justify-content-center bg-white ${style.card_icon}`}
                >
                  <Image
                    src={`/assets/images/icon-headset.svg`}
                    priority={true}
                    width={12}
                    height={12}
                    className={`object-fit-cover `}
                    alt={``}
                  />
                </div>
                <p className="text-light title-sm mb-0 ps-2">
                  Dreams Turned
                  <br /> Digital
                </p>
              </div>

              <div className={`mt-lg-4 ${style.fade}`}>
                <BuyNow />
              </div>
            </div>
          </div>
        </div>
        <div className={` ${style.fade} ${style.model_wrap}`}>
          <MetaBox />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
const faculties = {
  title: "",
  data: [
    {
      url: "/assets/images/p1.png",
      alt: ""
    }, {
      url: "/assets/images/p2.png",
      alt: ""
    }, {
      url: "/assets/images/p3.png",
      alt: ""
    }
  ]
}