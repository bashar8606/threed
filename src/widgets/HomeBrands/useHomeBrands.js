
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeBrands = ({style}) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);



  useGSAP(() => {
  
  }, { scope: main });

  return {
    main,
  };
};
