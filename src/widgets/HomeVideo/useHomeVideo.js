import { useLayoutEffect, useRef, useState } from "react";
import { Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeVideo = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  const videoRef = useRef(null);

  useGSAP(
    () => {
      const video = `.${style.video}`;
      const shape = `.${style.shape}`;
      const card_wrap = `.${style.card_wrap}`;
      const title_span = gsap.utils.toArray(`.${style.title} span`);

      gsap.set(video, { scale: 1.4 });
      gsap.set(shape, { scale: 0.4, rotate: 50, autoAlpha: 0  });
      gsap.set(card_wrap, { yPercent: 50, autoAlpha: 0 });
      let tl = gsap.timeline({
        force3d: true,
        scrollTrigger: {
          trigger: main.current,
          scrub: 0.5,
          end: "top 10%",
          start: "top 80%",
        },
      });

      gsap.utils.toArray(title_span).forEach((item, index) => {
        gsap.set(item, { autoAlpha: 0.2 });
        tl.to(item, {
          autoAlpha: 1,
          stagger: 1,
        });
      });

      ScrollTrigger.create({
        trigger: video,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          videoRef.current.play();
        },
        onLeave: () => {
          videoRef.current.pause();
        },
        onEnterBack: () => {
          videoRef.current.play();
        },
        onLeaveBack: () => {
          videoRef.current.pause();
        },
      });

      let tl1 = gsap.timeline({
        force3d: true,
        scrollTrigger: {
          trigger: video,
          scrub: 0.5,
          end: "bottom bottom",
        },
      });
      tl1.to(video, { scale: 1, transformOrigin:"top" });

      let tl2 = gsap.timeline({
        force3d: true,
        scrollTrigger: {
          trigger: card_wrap,
          scrub: 0.5,
          end: "top 50%",
        },
      });
      tl2.to(card_wrap, { yPercent: 0, autoAlpha: 1 });
      tl2.to(shape, { scale:1, rotate: 0, autoAlpha: 1 },"<");
    },
    { scope: main }
  );

  return {
    main,
    videoRef,
  };
};
