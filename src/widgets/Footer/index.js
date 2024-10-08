import Link from 'next/link';
import style from "./Footer.module.scss"
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Subscribe from './Subscribe';

function Footer() {
    return (
        <footer className={`${style.footer} bg-secondary`}>

            <div className={`sec-padding ${style.footer_nav}`}>
                <div className="container">
                    <Subscribe style={style} />
                    <div className="row gy-3 gy-lg-0 justify-content-lg-between">
                        <div className="col-lg-4">
                            <h2 className='text-primary fw-600 h5'>Aetheria</h2>
                            <p className='title-md text-light'>Our VR technology with AI transforms your perception, making the impossible possible. Discover worlds beyond imagination and redefine your reality.</p>

                            <ul className={`${style.social} mt-3 mt-lg-3 row gx-2`}>
                                <li className='col-auto'>
                                    <a href="#" aria-label="instagram" target="_blank"
                                        rel="noopener noreferrer"><FaInstagram /> <span className="visually-hidden">instagram</span></a>
                                </li>
                                <li className='col-auto'>
                                    <a href="#" aria-label="Facebook" target="_blank"
                                        rel="noopener noreferrer"><FaFacebook /> <span className="visually-hidden">Facebook</span></a>
                                </li>
                                <li className='col-auto'>
                                    <a href="#" aria-label="Youtube" target="_blank"
                                        rel="noopener noreferrer"><FaYoutube /> <span className="visually-hidden">Youtube</span></a>
                                </li>
                                <li className='col-auto'>
                                    <a href="#" aria-label="Twitter" target="_blank"
                                        rel="noopener noreferrer"><FaTwitter /> <span className="visually-hidden">Twitter</span></a>
                                </li>
                            </ul>

                        </div>

                        <div className="col-lg-5">
                            <div className="row row-cols-md-3 row-cols-2 gy-2">
                                <div>
                                    <h4 className={`${style.title} mb-2 mb-lg-3 title-md text-white fw-600 ff-secondary `}>Support</h4>
                                    <ul className={`ps-0 mb-0 ${style.nav}`}>
                                        {data?.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <a className={`title-md ${style.nav_link}`} href={`${item?.url}`}>{item?.label}</a>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className={`${style.title} mb-2 mb-lg-3 title-md text-white fw-600 ff-secondary `}>Company</h4>
                                    <ul className={`ps-0 mb-0 ${style.nav}`}>
                                        {data?.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <a className={`title-md ${style.nav_link}`} href={`${item?.url}`}>{item?.label}</a>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>

                                <div>
                                    <h4 className={`${style.title} mb-2 mb-lg-3 title-md text-white fw-600 ff-secondary `}>Legal</h4>
                                    <ul className={`ps-0 mb-0 ${style.nav}`}>
                                        {data?.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <a className={`title-md ${style.nav_link}`} href={`${item?.url}`}>{item?.label}</a>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>
                            </div>

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
    },
]
