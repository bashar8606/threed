import { useLayoutEffect, useRef, useState } from "react";
import { Elastic, Expo, Power3, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useAboutInfo = (style) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP((context, contextSafe) => {
    // const card = `.${style.card}`;
   
    return () => {
    };
  }, { scope: main });

  return {
    main,
  };
};
