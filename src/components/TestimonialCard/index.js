import React, { useState } from 'react';
import style from "./TestimonialCard.module.scss"
import Image from 'next/image';
import { TbStarFilled } from "react-icons/tb";
export default function TestimonialCard({ data }) {

    return (
        <div className={` ${style.card} position-relative  bg-grey`} >
            <div className="row align-items-center gy-2 gx-lg-4">
                <div className="col-md-auto text-center">
                    <div className={`ratio ratio-1x1 rounded-pill overflow-hidden ${style.card_img}`}>
                        <Image
                            src={data?.img}
                            fill
                            className="object-fit-cover"
                            sizes="50vw"
                            quality={90}
                            alt={data?.name}
                        />
                    </div>

                    <p className='text-light fw-600 title-md d-flex align-items-center lh-1 mt-2 mb-0'>
                 <span className='text-primary h6 d-block me-1'><TbStarFilled /></span>4.9</p>
                </div>
                <div className="col-md">
                    <div className={style.card_body}>
                        <h4 className={`  text-light fw-600 ${style.title}  title-md mb-2 `}>{data?.name}</h4>
                        <p className='title-md text-light mb-0'>{data?.text}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}