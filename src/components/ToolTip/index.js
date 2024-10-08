import React, { useState } from 'react';
import style from "./ToolTip.module.scss"
import Image from 'next/image';
import { useToolTip } from './useToolTip';

export default function ToolTip({ data }) {

    const {main} = useToolTip({style})

    return (
        <div className={`d-none d-lg-block  ${style.tooltip} ${data?.isLeft===true?style.tooltip_left:""} position-absolute`} style={{ top: data?.position.top, left: data?.position.left }} ref={main}>
            <div className={`bg-white ${style.tooltip_point} `}></div>
            <div className={`${style.tooltip_content} position-absolute`}>
                <span className='rounded-pill border border-white d-inline-block fw-300 title-md mb-2 text-white px-3 py-1'>{data?.title}</span>
                <p className='fw-300 title-xs text-light mb-0'>{data?.description}</p>
            </div>
        </div>
    );
}