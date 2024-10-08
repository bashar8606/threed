import { Expo, Power3, gsap, Elastic } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";

gsap.config({ force3D: true });
export const useMetaBox = ({ style }) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);
  const [model, setModel] = useState(null);
  const { width } = useGetDeviceType();
  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({ repeat: 0, paused: true });
      tl.to(
        model?.rotation,
        { y: -1, x: -0.2, ease: Expo.easeOut, duration: 2 },
        0
      ).play(0);

      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () { },

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
        all: function () { },
      });
    }, main);

    return () => {
      ctx.revert();
    };
  }, [style, width, model]);

  return {
    main,
    setModel,
    model,
    width,
  };
};
