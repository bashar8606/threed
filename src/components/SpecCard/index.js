import React, { useState } from 'react';
import style from "./SpecCard.module.scss"
import Image from 'next/image';

export default function SpecCard({ data}) {

    return (
        <div className={` ${style.card} position-relative h-100`} >
            <div className={style.card_body}>
                <h4 className={`  text-white fw-400 ${style.title}  h5 `}>{data?.title}</h4>
                <p className='title-sm text-light mb-0'>{data?.description}</p>
            </div>
        </div>
    );
}