
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeFeatures = ({style}) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(() => {
    // const title = `.${style.title}`;
    const mask_img = `.${style.cover_img} img`
    const mask = `.${style.cover_img}`
    // const title = gsap.utils.toArray(`.${style.title}`);

    gsap.set(mask_img, {  scale:1.2 })
    gsap.set(mask, { clipPath: "inset(10% round 20px)" })
  
    let tl = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5 }})
    tl.to(mask_img, { scale:1 })
    tl.to(mask, { clipPath: "inset(0% round 20px)"  }, "<")

  }, { scope: main });

  return {
    main
  };
};
