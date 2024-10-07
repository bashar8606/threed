"use client"
import Image from "next/image";
import { useAboutInfo } from "./useAboutInfo";
import style from "./AboutInfo.module.scss";
import { Modal } from "react-bootstrap";
import EnquireForm from "@/components/EnquireForm";


const AboutInfo = ({ data }) => {
	const { main } = useAboutInfo(style);
	return (
		<section className={`${style.section} sec-padding`} ref={main}>
			<div className="container">
				<div className="col-lg-7 mx-auto">
					<h5 className="text-primary h5 mb-2">{data?.title}</h5>
					<h2 className="h3 fw-400 mb-lg-4 mb-3">{data?.title_sub}</h2>
					<div className="dynamic-content text-grey" dangerouslySetInnerHTML={{ __html: `${data?.content}` }}></div>
				</div>
			</div>
		</section>
	);
};

export default AboutInfo;
