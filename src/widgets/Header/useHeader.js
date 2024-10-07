import { useLayoutEffect, useRef } from "react";
import { Elastic, Expo, Power4, gsap } from "gsap";
import useGetDeviceType from "@/hooks/useGetDeviceType";
import { useState } from "react";


const useHeader = ({ style }) => {
  const main = useRef();
  const { isDesktop, width } = useGetDeviceType();

  const [show, setShow] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShow1 = () => setShowOffcanvas(true);
  const handleClose1 = () => setShowOffcanvas(false);

  return {
    main,
    show,
    showOffcanvas,
    handleClose,
    handleShow,
    handleShow1,
    handleClose1
  };
};

export default useHeader;
