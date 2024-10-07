import Link from 'next/link';
import style from "./Footer.module.scss"
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Subscribe from './Subscribe';

function Footer() {
    return (
        <footer className={`${style.footer} bg-black`}>

            <div className={`sec-padding ${style.footer_nav}`}>
                <div className="container">
                    <div className="row gy-3 gy-lg-0 ">
                        <div className="col-lg">
                            <Subscribe style={style} />

                            <ul className={`${style.social} mt-3 mt-lg-3 row gx-2`}>
                                <li className='col-auto'><a href=""><FaInstagram /></a></li>
                                <li className='col-auto'><a href=""><FaFacebook /></a></li>
                                <li className='col-auto'><a href=""><FaYoutube /></a></li>
                                <li className='col-auto'><a href=""><FaTwitter /></a></li>
                            </ul>

                        </div>

                        <div className="col-6 col-lg-3">
                            <h4 className={`${style.title} mb-2 mb-lg-3  text-white fw-600 ff-secondary `}>Links</h4>
                            <ul className={`ps-0 mb-0 ${style.nav}`}>
                                {data?.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <a className={style.nav_link} href={`${item?.url}`}>{item?.label}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>


                        <div className="col-lg-3">
                            <h4 className={`${style.title}  mb-2 mb-lg-3  text-white  fw-600 ff-secondary `}>Address</h4>
                            <address className='mb-4 mb-lg-4 title-md'>
                                Office #716, B Block, 7th Floor, <br />
                                Business Village, Port Saeed<br />
                                PO Box 33846, Dubai, UAE
                            </address>

                            <h4 className={`${style.title}  mb-2 mb-lg-3 text-white  fw-600 ff-secondary `}>Support</h4>
                            <ul className={`ps-0 mb-0 ${style.nav}`}>
                                <li>
                                    <a className={style.nav_link} href={`mailto:${"info@edunest.ae"}`}>
                                        <span>
                                            <IoMailOutline />
                                        </span>
                                        info@edunest.ae
                                    </a>
                                </li>
                                {/* 
                                <li>
                                    <Link className={style.nav_link} href={`tel:${"(04) 259 5888"}`}>
                                        <span>
                                            <IoCallOutline />
                                        </span>
                                        (04) 259 5888
                                    </Link>
                                </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.footer_credit}>
                <div className="container">
                    <div className="row ff-secondary">
                        <div className="col-lg">
                            <p className='mb-lg-0 fw-500'>Copyright © 2024 Edunest all rights reserved</p>
                        </div>
                        <div className="col-lg text-lg-end">
                            <p className='mb-lg-0 fw-500 lh-sm'>Design & Developed By :  <a href="https://voizzit.com/" target='_blank'>Voizzit Information Technology LLC</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
const data = [
    {
        label: "Home",
        url: "#"
    }, {
        label: "About Us",
        url: "#about"
    }, {
        label: "What We Offer",
        url: "#whatweoffer"
    }, {
        label: "Features",
        url: "#features"
    },{
        label: "Learn ",
        url: "#learn"
    },{
        label: "Contact",
        url: "#contact"
    },{
        label: "Terms & Conditions",
        url: "/terms-and-conditions"
    },{
        label: "Privacy Policy",
        url: "/privacy-policy"
    },
]
