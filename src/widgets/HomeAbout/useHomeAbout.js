
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeAbout = ({style}) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(() => {
    // const title = `.${style.title}`;
    const mask_img = `.${style.cover_img} img`
    const mask = `.${style.cover_img}`
    // const title = gsap.utils.toArray(`.${style.title}`);

    gsap.set(mask_img, {  scale:0.8 })
    gsap.set(mask, { maskSize: "50%" })


    let tl = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5 }})
    tl.to(mask_img, { scale:1 })
    tl.to(mask, { maskSize: "100%"  }, "<")
    // tl2.to(app3, { yPercent: 0 }, "<")

  }, { scope: main });

  return {
    main
  };
};
