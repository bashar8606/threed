
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeFeatures = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(() => {
    const mask_img = `.${style.cover_img} img`
    const mask = `.${style.cover_img}`

    gsap.set(mask_img, { scale: 1.2 })
    gsap.set(mask, { clipPath: "inset(10% round 20px)" })

    let tl = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5 } })
    tl.to(mask_img, { scale: 1 })
    tl.to(mask, { clipPath: "inset(0% round 20px)" }, "<")

  }, { scope: main });

  return {
    main
  };
};
