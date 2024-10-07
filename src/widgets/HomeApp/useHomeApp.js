
import { useLayoutEffect, useRef, useState } from "react";
import { Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.config({ force3D: true });
export const useHomeApp = (style) => {
  gsap.registerPlugin(ScrollTrigger);
  const main = useRef(null);

  useGSAP(() => {
    const title = `.${style.title}`;
    const app = `.${style.card_main}`
    const app1 = `.${style.card_main_app}`
    const app2 = `.${style.card_main_app1}`
    const app3 = `.${style.card_main_app2}`

    const app1Img = `.${style.card_main_app} img`
    const app2Img = `.${style.card_main_app1} img`
    const app3Img = `.${style.card_main_app2} img`

    gsap.set(title, { y: 60, autoAlpha: 0 })
    gsap.set(app1Img, { yPercent: 25, autoAlpha: 0 })
    gsap.set(app2Img, { yPercent: -25, autoAlpha: 0 })
    gsap.set(app3Img, { yPercent: 20, autoAlpha: 0 })

    gsap.to(app, { '--clip': "0%", stagger: 0.05, scrollTrigger: main.current, ease: Power4.easeInOut, autoAlpha: 1, duration: 1.8 })
    gsap.to(title, { scrollTrigger: main.current, y: 0, autoAlpha: 1, ease: Expo.easeOut, duration: .8 })
    gsap.to([app1Img, app2Img, app3Img], { scrollTrigger: main.current, duration: 1.8, autoAlpha: 1, ease: Power4.easeInOut, scale: 1, yPercent: 0, xPercent: 0 });

    gsap.set(app1, { yPercent: 20 })
    gsap.set(app2, { yPercent: -20 })
    gsap.set(app3, { yPercent: 20 })

    let tl2 = gsap.timeline({ force3d: true, scrollTrigger: { trigger: main.current, scrub: 0.5, }})
    tl2.to(app1, { yPercent: 0 })
    tl2.to(app2, { yPercent: 0 }, "<")
    tl2.to(app3, { yPercent: 0 }, "<")

  }, { scope: main });

  return {
    main
  };
};
