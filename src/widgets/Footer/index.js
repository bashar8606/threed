import Link from 'next/link';
import style from "./Footer.module.scss"
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
                            <h3 className='text-primary fw-600 h5 mb-3 mb-lg-4 '>Aetheria</h3>
                            <p className='title-md text-light'>Our VR technology with AI transforms your perception, making the impossible possible. Discover worlds beyond imagination and redefine your reality.</p>

                            <ul className={`${style.social} mt-3 mt-lg-4 row gx-2`}>
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
                                    <h3 className={`${style.title} mb-2 mb-lg-3 title-md text-white fw-600 ff-secondary `}>Support</h3>
                                    <ul className={`ps-0 mb-0 ${style.nav}`}>
                                        {data1?.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link className={`title-md ${style.nav_link}`} href={`${item?.url}`}>{item?.label}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className={`${style.title} mb-2 mb-lg-3 title-md text-white fw-600 ff-secondary `}>Company</h3>
                                    <ul className={`ps-0 mb-0 ${style.nav}`}>
                                        {data2?.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link className={`title-md ${style.nav_link}`} href={`${item?.url}`}>{item?.label}</Link>
                                                </li>
                                            )
                                        })}

                                    </ul>
                                </div>

                                <div>
                                    <h3 className={`${style.title} mb-2 mb-lg-3 title-md text-white fw-600 ff-secondary `}>Legal</h3>
                                    <ul className={`ps-0 mb-0 ${style.nav}`}>
                                        {data3?.map((item, i) => {
                                            return (
                                                <li key={i}>
                                                    <Link className={`title-md ${style.nav_link}`} href={`${item?.url}`}>{item?.label}</Link>
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
const data1 = [
    {
        label: "Documentation",
        url: "#"
    }, {
        label: "Contact",
        url: "#about"
    }
]

const data2 = [
    {
        label: "About Us",
        url: "#"
    }, {
        label: "Partner",
        url: "#about"
    },
]
const data3 = [
    {
        label: "Privacy",
        url: "#"
    }, {
        label: "Terms",
        url: "#about"
    }, {
        label: "Partners",
        url: "#whatweoffer"
    },
]
