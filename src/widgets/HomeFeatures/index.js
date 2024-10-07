"use client";
import Slider from "@/components/Slider";
import style from "./HomeFeatures.module.scss";
import useHomeFeatures from "./useHomeFeatures";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import { Modal } from "react-bootstrap";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const HomeFeatures = ({ id }) => {
  const { main, customSettings, customSettings1, width, show, handleClose, handleShow } = useHomeFeatures({ style });

  return (
    <section
      className={`${style.section}`}
      ref={main}
      id={id}
    >

      {width < 991 ?
        <div className={`d-lg-none ${style.slider}`}>
          <div className="container">
            <h5 className="text-primary h5 mb-2">What we offer</h5>
            <Slider className={''} customSettings={customSettings}>
              {(data?.length > 0) && data?.map((item, i) => {
                return (
                  <SwiperSlide key={i} className={`h-auto ${style.slider_item}`}>
                    <div className={`${style.card_sm} h-100`}>
                      <div className={`${style.card_img1} mb-3 ratio ratio-4x3 bg-transparent`} >
                        <div className={`${style.card_img1_img} `}>
                          <div className="position-absolute top-0 start-0 w-100 h-100">
                            <Image src={`${item?.cover?.url}`} className="object-fit-contain" fill alt={item?.cover?.alt} />
                          </div>
                          {item?.icons?.map((item_sub, i) => {
                            return (
                              <div key={i} className={`${style.item} ratio`} style={{ '--top': `${item_sub?.position?.top}`, '--left': `${item_sub?.position?.left}`, '--width': `${item_sub?.size?.width}`, '--bs-aspect-ratio': `${item_sub?.size?.ratio}` }}>
                                <Image src={`${item_sub?.img?.url}`} className="object-fit-contain" fill alt={item_sub?.img?.alt} />
                              </div>
                            )
                          })}
                        </div>
                      </div>
                      <h2 className="fw-600 h5 mb-lg-4">{item?.title}</h2>
                      <div className="dynamic-content text-grey" dangerouslySetInnerHTML={{ __html: `${item?.description}` }}></div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Slider>
          </div> </div> : ""}

      <div className={`container`}>
        <div className={`row ${style.row} justify-content-between d-lg-flex d-none`}>
          <div className={`${style.col_left} `}>
            {data?.slice(0, 4)?.map((item, index) => {
              return (
                <div className={`${style.content}`} key={index}>
                  <h5 className="text-primary h5 mb-2">What we offer</h5>
                  <h2 className="h2 mb-lg-4">{item?.title}</h2>
                  <div className="dynamic-content text-grey" dangerouslySetInnerHTML={{ __html: `${item?.description}` }}></div>
                </div>
              )
            })}
          </div>
          <div className={`${style.col_right} `}>
            <div className={`${style.card} mb-4 mb-lg-0 ratio`}>
              {data?.slice(0, 4)?.map((item, index) => (
                <div className={`${style.card_img1}`} key={index}>
                  <div className={`${style.card_img1_img} `}>
                    <div className="position-absolute top-0 start-0 w-100 h-100">
                      <Image src={`${item?.cover?.url}`} className="object-fit-contain" fill alt={item?.cover?.alt} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {width >= 991 ?
        <div className={`${style.view} d-none text-center`}>
          <button className={`${style.view_btn} rounded-pill row gx-2`} onClick={handleShow}>
            <span className={`${style.view_btn_text} col`}>
              Explore more Features
            </span>
            <span className={`col-auto ${style.view_btn_icon}`}>+</span></button>
        </div> : ""}

      <Modal centered show={show} size="xl" className="bg-transparent border-0 " onHide={handleClose}>
        <Modal.Header closeButton className="border-bottom-0">
        </Modal.Header>
        <Modal.Body >
          <div className="d-flex  align-items-center position-relative px-lg-3">
            <div className="container">
              <Slider className={''} customSettings={customSettings1}>
                {(data?.length > 0) && data?.map((item, i) => {
                  return (
                    <SwiperSlide key={i} className={`h-auto ${style.slider_item}`}>
                      <div className={`${style.card_sm} h-100`}>
                        <div className={`${style.card_img1} mb-3 ratio ratio-4x3 bg-transparent`} >
                          <div className={`${style.card_img1_img} `}>
                            <div className="position-absolute top-0 start-0 w-100 h-100">
                              <Image src={`${item?.cover?.url}`} className="object-fit-contain" fill alt={item?.cover?.alt} />
                            </div>
                          </div>
                        </div>
                        <h2 className="fw-600 h5 mb-lg-4">{item?.title}</h2>
                        <div className="dynamic-content text-grey" dangerouslySetInnerHTML={{ __html: `${item?.description}` }}></div>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Slider>
              <button className={`${style.nav} position-absolute top-50 start-0 z-3 translate-middle-y rounded-circle ${style.nav_prev}`}>
                <IoIosArrowBack />
              </button>
              <button className={`${style.nav} position-absolute top-50 end-0 z-3 translate-middle-y rounded-circle ${style.nav_next}`}>
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>



    </section>
  );
};

export default HomeFeatures;


const data = [
  {
    title: "Personalized Online Tuition Services",
    description: "<ul><li>Expert-led online tutoring sessions.</li><li>Interactive learning experiences tailored to individual needs.</li><li>Flexible scheduling for convenience.</li></ul>",
    cover: {
      url: "/assets/images/b1.png",
      alt: ""
    },

  }, {
    title: "Comprehensive Educational Material",
    description: "<ul><li>Vast library of educational resources spanning various subjects and levels.</li><li>Textbooks, e-books, multimedia content, and interactive modules.</li><li>Regularly updated content to align with curriculum changes.</li></ul>",
    cover: {
      url: "/assets/images/b2.png",
      alt: ""
    },

  }, {
    title: "One-on-One Tuitions    ",
    description: "<ul><li>Personalized one-on-one sessions with experienced tutors.</li><li>Customized learning plans to address specific learning goals.</li><li>Progress tracking and feedback for continuous improvement.</li></ul>",
    cover: {
      url: "/assets/images/b3.png",
      alt: ""
    },

  }, {
    title: "Innovative Learning Platforms",
    description: "<ul><li>Cutting-edge learning management systems (LMS).</li><li>Interactive and gamified learning modules.</li><li>Integration of emerging technologies like AI and AR for enhanced engagement.</li></ul>",
    cover: {
      url: "/assets/images/b4.png",
      alt: ""
    },
  },]