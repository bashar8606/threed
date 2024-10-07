"use client"
import Image from "next/image";
import { useHomeTab } from "./useHomeTab";
import style from "./HomeTab.module.scss";
import Link from "next/link";


const HomeTab = ({ data, id }) => {
	const { main } = useHomeTab(style);
	return (
		<section id={id} className={`${style.section} overflow-hidden d-flex align-items-center sec-padding `} ref={main}>
			<div className="container">
				{/* <div className="col-lg-6 mx-auto text-center">
					<h2 className="text-primary h5">Skills</h2>
					<h3 className="h2 lh-sm mb-2 mb-lg-3">Your Child Will Learn</h3>
				</div> */}
				<div className="row align-items-center gy-3">
					<div className={`col-lg-8  mx-auto ${style.tab_wrap}`}>
						<div className={`${style.tab} position-relative`}>
							<div className={`position-absolute start-0 top-0 ${style.tab_card} w-100 h-100`}>
								{datas?.map((item, i) => {
									return (
										<div key={i} className={`${style.tab_card_item} ${style.tab_card_item__one} position-absolute d-inline-block`} style={{ "--bs-aspect-ratio": item?.ratio, top: item?.position?.top, left: item?.position?.left, width: item?.width }}>
											<div className="ratio">
												<Image src={item?.img} fill className="object-fit-cover" alt="logo" />
											</div>
										</div>
									)
								})}
							</div>
							<div className={`${style.tab_screen} ratio`}>

								<div className={`${style.tab_screen__frame} z-3`}>
									<Image src={`/assets/images/laptop.png`} priority={true} fill alt="logo" />
								</div>
								<div className={style.tab_screen__video}>
									<div className={`d-flex align-items-end pb-3 px-3   ${style.tab_screen__control} z-3 position-absolute justify-content-between`}>
										<div className={style.item_wrap}>
											<div className={`${style.item} ratio bg-white ratio-1x1 overflow-hidden d-inline-block rounded-circle`}>
												<Image src={`/assets/images/icons/icon-speaker.svg`} className={style.tab_icon} fill alt="logo" />
											</div>
											<div className={`${style.item} ratio bg-white ratio-1x1 overflow-hidden d-inline-block rounded-circle`}>
												<Image src={`/assets/images/icons/icon-video.svg`} className={style.tab_icon} fill alt="logo" />
											</div>
											<div className={`${style.item} ratio  ratio-1x1 overflow-hidden d-inline-block rounded-circle`}>
												<Image src={`/assets/images/icons/icon-mic.svg`} className={style.tab_icon} fill alt="logo" />
											</div>
											<div className={`${style.item} ratio  ratio-1x1 overflow-hidden d-inline-block rounded-circle`}>
												<Image src={`/assets/images/icons/icon-close.svg`} className={style.tab_icon} fill alt="logo" />
											</div>
										</div>
										<div className={`${style.video_sm} ratio ratio-16x9 overflow-hidden bg-white rounded-4`}>
											<Image src={`/assets/images/banner-call.png`} className={`object-fit-cover`} fill alt="logo" />
										</div>


									</div>
									<div className={`${style.video_wrap} w-100 h-100 overflow-hidden position-relative`}>
										<video width={`100%`}
											height={`100%`}
											loop
											muted
											autoPlay
											playsInline
											className="object-fit-cover position-absolute top-0 start-0 w-100 h-100"
											src="/assets/images/video.mp4">
										</video>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeTab;

const datas = [
	{
		img: "/assets/images/cards/1.png",
		ratio: "100%",
		width: "18%",
		position: {
			top: "-11%",
			left: "-15%"
		}
	}, {
		img: "/assets/images/cards/2.png",
		ratio: "30%",
		width: "14%",
		position: {
			top: "59%",
			left: "-15%"
		}
	}, {
		img: "/assets/images/cards/3.png",
		ratio: "30%",
		width: "15%",
		position: {
			top: "41%",
			left: "-6%"
		}
	}, {
		img: "/assets/images/cards/4.png",
		ratio: "101%",
		width: "16%",
		position: {
			top: "-9%",
			left: "96%"
		}
	}, {
		img: "/assets/images/cards/5.png",
		ratio: "29%",
		width: "14%",
		position: {
			top: "35%",
			left: "100%"
		}
	}, {
		img: "/assets/images/cards/6.png",
		ratio: "29%",
		width: "13%",
		position: {
			top: "48%",
			left: "87%"
		}
	}, {
		img: "/assets/images/cards/7.png",
		ratio: "33%",
		width: "27%",
		position: {
			top: "66%",
			left: "93%"
		}
	},
]
