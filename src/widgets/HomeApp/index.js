"use client"
import Image from "next/image";
import { useHomeApp } from "./useHomeApp";
import style from "./HomeApp.module.scss";


const HomeApp = ({ data, id }) => {
	const { main } = useHomeApp(style);
	return (
		<section className={`${style.section} py-0 sec-padding  overflow-hidden d-flex align-items-center `} id={id} ref={main}>
			<div className="container">
				<div className="col-xl-8 col-lg-10 mx-auto">
					{datas?.map((item, i) => {
						return (
							<div className={`row gy-3 ${style.item} ${i%2===0?"":"flex-md-row-reverse"} justify-content-md-between align-items-center`} key={i}>
								<div className="col-6 col-md-4 col-lg-4">
									<div className="ratio ratio-1x1">
										<Image src={item?.img} priority={true} fill className="object-fit-contain" alt={``} />
									</div>
								</div>
								<div className="col-md-7 col-lg-7">
									<h2 className="text-primary h5 mb-2">{item?.title_sm}</h2>
									<h3 className="h2 mb-lg-4">{item?.title}</h3>
									<p className="text-grey title-md mb-3">{item?.description}</p>
								</div>
							</div>

						)
					})}
				</div>
			</div>
		</section>
	);
};

export default HomeApp;

const datas = [
	{
		title_sm: "Teacher & Students",
		title: "Make Math Innovative",
		description: "Try our exploration activities to discover important math concepts, then use our practice activities to master those skills.",
		img: "/assets/images/s1.png"
	}, {
		title_sm: "Teacher & Students",
		title: "Explore Math With Free Calculators",
		description: "Explore our easy-to-use calculators that can be used to promote student-centered discovery-based learning. Perform calculations for any level of mathematics including 3D.",
		img: "/assets/images/s2.png"
	}, {
		title_sm: "Teacher & Students",
		title: "Engage Every Student",
		description: "Our Classroom learning platform allows teachers to view student progress real-time and provide individual feedback for personalized learning experience. It helps teachers to encourage active participation and discussion.",
		img: "/assets/images/s3.png"
	}, {
		title_sm: "Teacher & Students",
		title: "Solve Problems Step-by-Step",
		description: "Our Math Practice tool offers new ways for learners to access algebraic transformation in an understandable way. Let your students build comfort and fluency in solving algebraic problems, like simplifying algebraic expressions or solving linear equations, while getting instant hints and feedback.",
		img: "/assets/images/s4.png"
	},


]

