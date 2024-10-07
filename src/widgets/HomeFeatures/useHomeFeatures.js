import { useLayoutEffect, useRef } from "react";
import { Elastic, Expo, Power4, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { Autoplay, Navigation } from "swiper/modules";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const useHomeFeatures = ({ style }) => {
  const main = useRef();
  const { isDesktop, width } = useGetDeviceType();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const customSettings = {
    spaceBetween: 15,
    slidesPerView: 1.3,
    pagination: false,
    modules: [Navigation],
    navigation: {
      prevEl: `.swiper-button-prev`,
      nextEl: `.swiper-button-next`,
    },
    breakpoints: {
      640: {
        spaceBetween: 2,
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      },
    },
  };



  const customSettings1 = {
    spaceBetween: 15,
    slidesPerView: 3,
    pagination: false,
    modules: [Navigation, Autoplay],
    autoplay: true,
    loop: false,
    navigation: {
      prevEl: `.${style.nav_prev}`,
      nextEl: `.${style.nav_next}`,
    },
  };

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      ScrollTrigger.matchMedia({
        "(min-width: 992px)": function () {

          const btn_wrap = self.selector(`.${style.view}`);
          const btn = self.selector(`.${style.view_btn}`);
          const btn_text = self.selector(`.${style.view_btn_text}`);
          const btn_icon = self.selector(`.${style.view_btn_icon}`);

          const slideWrap = self.selector(`.${style.card}`);
          const cards = self.selector(`.${style.card_img1}`);
          const cards_items = self.selector(`.${style.card_img1_img}`);

          gsap.set(btn, { scale: 0, autoAlpha: 0 });

          const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: main.current,
              toggleActions: "play reverse play reverse",
              start: "top 50%",
              end: "bottom 50%",
            },
          });

          tl2.to(btn, { duration: 1, autoAlpha: 1, ease: Elastic.easeInOut, scale: 1, yPercent: 0, xPercent: 0 });
          tl2.from(btn_icon, { duration: 1, scale: 0.8, ease: Elastic.easeInOut, }, "<");
          tl2.from(btn_text, { duration: 0.8, width: 0, padding: 0, ease: Expo.easeInOut }, "<.5");


          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: main.current,
              end: "bottom bottom",
              start: "top bottom",
              scrub: 0.8,
              anticipatePin: 1,
            },
          });
          gsap.utils.toArray(cards).forEach((card, index) => {
            const card_item = card.querySelector(`.${style.card_img1_img}`)
            gsap.set(card, { yPercent: (index === 0 ? 0 : 80), autoAlpha: (index === 0 ? 1 : 0) });
            tl.to(card, {
              autoAlpha: 1,
              duration: 0.3,
              stagger: 0.5,
            });
            tl.to(card, {
              yPercent: 0,
              stagger: 1,
              duration: 1,
            }, "<");
            tl.from(card, {
              boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)"
            }, "<");
            tl.to(card, {
              duration: 1,
              onUpdate: () => {
                const newCards = cards.slice(0, index + 1)
                const newCards_items = cards_items.slice(0, index + 1)
                gsap.utils.toArray(newCards).forEach((elem, i) => {
                  let anim = gsap.to(elem, {
                    y: () => ((newCards.length - i) * -50),
                    scale: () => 1 - ((newCards.length - i) * 0.08),
                    duration: 0.5,
                    ease: "ease"
                  });
                  anim.play()
                })
                // gsap.utils.toArray(newCards_items).forEach((elem, i) => {
                //   let anim = gsap.to(elem, {
                //     autoAlpha: () => ((i+1) * 0.3),
                //     duration: 0.5,
                //     ease: "ease"
                //   });
                //   anim.play()
                // })
              },
            }, "<.4");
          });
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

    return () => ctx.revert();
  }, [width, style]);

  return {
    main,
    customSettings,
    customSettings1,
    width,
    show,
    handleClose,
    handleShow
  };
};

export default useHomeFeatures;
