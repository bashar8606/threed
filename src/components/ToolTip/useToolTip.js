
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useToolTip = ({style}) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(() => {
    const tooltip = `.${style.tooltip}`
    const tooltip_point = `.${style.tooltip_point}`
    const tooltip_content = `.${style.tooltip_content}`

    gsap.set(tooltip_point, { scale: 0.8, autoAlpha: 0 })
    gsap.set(tooltip_content, {  autoAlpha: 0 })


    let tl = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5, end:"top 60%" }})
    tl.to(tooltip_point, { scale:1, autoAlpha: 1 }, "<")
    tl.to(tooltip_point, { "--tr": "1" })
    tl.to(tooltip_content, { autoAlpha: 1 })
    // tl2.to(app3, { yPercent: 0 }, "<")

  }, { scope: main });

  return {
    main
  };
};
