import { Expo, Power3, gsap, Elastic } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useHomeBanner = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const { width } = useGetDeviceType();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      // const fade = self.selector(`.${style.fade}`)
      // const globe = self.selector(`.${style.globe}`)
      // const p1 = self.selector(`.${style.p1}`)
      // const p2 = self.selector(`.${style.p2}`)



      // gsap.set(fade, { y: 80, filter: `blur(5px)`, autoAlpha: 0 })
      // gsap.set(globe, { rotate: -30, yPercent: 30, autoAlpha: 0 })
      // gsap.set(p1, { scale:0.8, autoAlpha: 0, transformOrigin:"left bottom" })
      // gsap.set(p2, { scale:0.8, autoAlpha: 0, transformOrigin:"right bottom"  })

      // const tl = gsap.timeline({ repeat: 0, paused: true });
      // tl.to(fade, { y: 0, autoRound: false,stagger: 0.05, filter: `blur(0px)`, autoAlpha: 1, ease: Expo.easeOut, duration: 1.5 }, 0)
      // tl.to(globe, { yPercent: 0, rotate: 0, autoAlpha: 1, ease: Expo.easeOut, duration: 1.5 }, 0.5)
      // tl.to([p1, p2], { scale: 1, autoAlpha: 1, ease: Expo.easeOut, duration: 1.5 }, 0.5)
      // tl.addLabel("anim", "<")
      //   .play(0);

      // tl2.to(app3, { xPercent: 0, yPercent: 0 }, "<")

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

        }
      });

    }, main);

    return () => {
      ctx.revert();
    };
  }, [style, width]);

  return {
    main,
    width
  };
};
