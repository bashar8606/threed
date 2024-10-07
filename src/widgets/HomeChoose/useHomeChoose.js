
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeChoose = ({style}) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(() => {
    // const title = `.${style.title}`;
    const mask_img = `.${style.cover_img} img`
    const mask = `.${style.cover_img}`
    // const title = gsap.utils.toArray(`.${style.title}`);

    gsap.set(mask_img, {  scale:0.8 })
    gsap.set(mask, { maskSize: "50%" })
  

    // gsap.to(app, { '--clip': "0%", stagger: 0.05, scrollTrigger: main.current, ease: Power4.easeInOut, autoAlpha: 1, duration: 1.8 })
    // gsap.to(title, { scrollTrigger: main.current, y: 0, autoAlpha: 1, ease: Expo.easeOut, duration: .8 })
    // gsap.to([app1Img, app2Img, app3Img], { scrollTrigger: main.current, duration: 1.8, autoAlpha: 1, ease: Power4.easeInOut, scale: 1, yPercent: 0, xPercent: 0 });

    // gsap.set(app1, { yPercent: 20 })
    // gsap.set(app2, { yPercent: -20 })
    // gsap.set(app3, { yPercent: 20 })

    let tl = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5 }})
    tl.to(mask_img, { scale:1 })
    tl.to(mask, { maskSize: "100%"  }, "<")
    // tl2.to(app3, { yPercent: 0 }, "<")

  }, { scope: main });

  return {
    main
  };
};
