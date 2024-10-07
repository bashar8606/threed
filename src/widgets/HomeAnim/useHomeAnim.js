import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeAnim = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const { width } = useGetDeviceType()

  useGSAP(() => {
    const title = `.${style.title}`;
    const title_span = `.${style.title} span`;
    const item_wrap = `.${style.item_wrap}`;
    ScrollTrigger.matchMedia({
      "(min-width: 992px)": function () {



      },

      "(min-width: 600px) and (max-width: 959px)": function () {
        // The ScrollTriggers created inside these functions are segregated and get
        // reverted/killed when the media query doesn't match anymore. 
      },

      // small
      "(max-width: 599px)": function () {
        // The ScrollTriggers created inside these functions are segregated and get
        // reverted/killed when the media query doesn't match anymore. 
      },

      // all 
      "all": function () {
        let tl = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5, end: "200%", pin: true } })
        // tl2.to(title_span, { autoAlpha: 1 })
        gsap.utils.toArray(title_span).forEach((card, index) => {
          gsap.set(card, { autoAlpha: 0.2 });
          tl.to(card, {
            autoAlpha: 1,
            stagger: 1,
          });
        });


    

        const tl1 = gsap.timeline({
          scrollTrigger: {
            trigger: main.current,
            end: "500%",
            scrub: 1,
          },
        });
  
        tl1.to(item_wrap, {xPercent: -80})




      }
    });

  }, { scope: main });

  return {
    main,
  };
};
