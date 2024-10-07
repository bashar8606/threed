"use client"
import Image from "next/image";
import style from "./HomeAnim.module.scss";
import { useHomeAnim } from "./useHomeAnim";


const HomeAnim = ({ data, id }) => {
	const { main } = useHomeAnim({ style });
	const text = "We aim to help children discover the joy of creative learning and grow into well- rounded individuals."
	const words = text && text.split(' ');

	return (
		<section className={`${style.section} d-flex align-items-center`} id={id} ref={main} >

			<div className="container-fluid">
				<div className="row">

					<div className={`col-lg-6 ${style.col_left} d-flex flex-column justify-content-between `}>
						<h2 className={`mb-4 ${style.title} fw-400 `}>
							{words && words.map((word, index) => (
								<span key={index}>
									{word}{' '}
								</span>
							))}
						</h2>
						<p className="h5 fw-300 lh-2">
							We believe in nurturing every child&apos;s curiosity, imagination, and creativity, empowering them to become confident, well-rounded individuals who are eager to explore the world around them.
						</p>
					</div>

					<div className={`col-lg-6 ${style.col_right} overflow-hidden d-flex flex-column justify-content-between `}>
						<div>
							<p className="h5 fw-300 mb-2 mb-lg-3 lh-2 text-white">
								Meet our Teachers
							</p>

							<div className={`${style.pf_wrap} d-flex justify-content-start align-items-center pb-4 py-lg-4`}>
								<div className="d-flex">
									{faculties?.data?.map((item, i) => {
										return (
											<div key={i} className={`${style.pf_sm} d-inline-block rounded-circle overflow-hidden bg-light  ratio ratio-1x1`}>
												<Image src={`${item?.url}`} priority={true} fill className="object-fit-cover" alt={`${item?.alt}`} />
											</div>
										)
									})}
								</div>
								
							</div>
						</div>

						<div className={`row gx-0 flex-nowrap ${style.item_wrap} `}>
							<div className={`col-auto ${style.item} rounded-pill`}>Creative</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Efficient</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Inspiring</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Innovative</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Creative</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Efficient</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Inspiring</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Innovative</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Creative</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Efficient</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Inspiring</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Innovative</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Creative</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Efficient</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Inspiring</div>
							<div className={`col-auto ${style.item} rounded-pill`}>Innovative</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAnim;



const faculties = {
	title: "",
	data: [
		{
			url: "/assets/images/p1.png",
			alt: ""
		}, {
			url: "/assets/images/p2.png",
			alt: ""
		}, {
			url: "/assets/images/p3.png",
			alt: ""
		}, {
			url: "/assets/images/p4.png",
			alt: ""
		},
	]
}