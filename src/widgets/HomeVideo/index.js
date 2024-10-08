"use client";
import style from "./HomeVideo.module.scss";
import { useHomeVideo } from "./useHomeVideo";
import Image from "next/image";

const HomeVideo = ({ data }) => {
  const { main, videoRef } = useHomeVideo({ style });
  const text = "Personalized Virtual Realities Tailored by Advanced AI";
  const words = text && text.split(" ");

  return (
    <section
      className={`${style.section} bg-secondary  position-relative`}
      ref={main}
    >

      <div className={`${style.shape} ratio d-none d-lg-block position-absolute`}>
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
      <div className="container">
        <div className={`row ${style.title_wrap} align-items-end`}>
          <div className="col-lg-9">
            <h2 className={`${style.title} ff-secondary h1 fw-400 text-white mb-lg-0`}>
              {words &&
                words.map((word, index) => <span key={index}>{word} </span>)}
            </h2>
          </div>
          <div className="col-lg-3">
            <h3 className="title-md fw-500 text-white">Reality Perfected</h3>
            <p className="fw-300 text-light">Our VR technology, enhanced by intelligent AI, adapts to your unique preferences, creating immersive experiences that reflect your individual desires and dreams.</p>
          </div>
        </div>

        <div className={`${style.video} overflow-hidden bg-primary ratio`}>


          <video width={`100%`}
            height={`100%`}
            loop
            ref={videoRef}
            muted
            // autoPlay
            playsInline
            className="object-fit-cover position-absolute top-0 start-0 w-100 h-100"
            src="/assets/video.mp4">
          </video>
        </div>

        <div className={`row ${style.card_wrap} align-items-center g-2 g-md-3`}>
          <div className="col-6 col-md-4 col-lg-3">
            <div className={`bg-grey py-5 px-3 text-center ${style.card}`}>
              <h4 className="h4 text-white fw-600">4K</h4>
              <p className="title-xs text-light mb-0">Resolution </p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className={`bg-grey py-5 px-3 text-center ${style.card}`}>
              <h4 className="h4 text-white fw-600">120Hz</h4>
              <p className="title-xs text-light mb-0">refresh rate </p>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className={`bg-grey py-5 px-3 text-center ${style.card}`}>
              <h4 className="h4 text-white fw-600">AI</h4>
              <p className="title-xs text-light mb-0">Processor </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div>
              <h5 className="title-sm text-white">Smart Drones, Smarter Choices</h5>
              <p className="title-xs text-light">Elevate your aerial photography with cutting-edge AI technology.</p>
            </div>
            <div>
              <h5 className="title-sm text-white">AI-Powered Precision</h5>
              <p className="title-xs text-light">Achieve perfect shots every time with our AI-integrated drones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideo;
