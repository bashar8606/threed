"use client"
import Image from "next/image";
import style from "./HomeBanner.module.scss";
import { useHomeBanner } from "./useHomeBanner";
import MetaBox from "@/components/MetaBox";

const HomeBanner = ({ data }) => {
	const { main, width } = useHomeBanner({ style });

	return (
		<section className={`${style.section} bg-secondary  `} ref={main} >
			<div className="container">
				<div className={`position-absolute ratio ${style.shape}`}>
					<Image src={'/assets/images/shape-ellipse.png'} fill alt="decor image shapes"/>
				</div>
                <MetaBox/>
            </div>
		</section>
	);
};

export default HomeBanner;

