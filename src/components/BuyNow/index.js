import React, { useState } from 'react';
import style from "./BuyNow.module.scss"
import Image from 'next/image';
import { MdOutlineShoppingCart } from 'react-icons/md';

export default function BuyNow({ data}) {

    return (
        <button className={` ${style.btn} bg-transparent border-0 d-inline-flex `} >
            <span className={`rounded-pill d-inline-block fw-600 title-xs ${style.btn_label}`}>BUY NOW!!!</span>
            <span className={`rounded-pill d-inline-block ${style.btn_icon} `}><MdOutlineShoppingCart /></span>
        </button>
    );
}