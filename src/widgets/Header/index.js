"use client"
import Image from "next/image";
import style from "./Header.module.scss"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CartItems } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";
import { Modal } from "react-bootstrap";
import useHeader from "./useHeader";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrSearch } from "react-icons/gr";

function Header() {
    let cartCount = useRecoilValue(CartItems);
    const { main, width, show, handleClose, handleShow, handleClose1, handleShow1, showOffcanvas } = useHeader({ style });

    return (
        <header className={`${style.header} fixed-top `} ref={main}>
            <Navbar onSelect={(e)=>{console.log(e,"logged")}} expand={"xl"} variant="light" className="">
                <Container>

                    <Link href="/" className='navbar-brand'>
                        <div className={`${style.logo} ratio `}>
                            <Image src={`/assets/images/logo.svg`} priority={true} fill alt="logo" />
                        </div>
                    </Link>
                    <Navbar.Toggle className={`border-0 px-0  ${style.header_toggle}`} onClick={handleShow1} aria-controls={`offcanvasNavbar-expand-xl`} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-xl`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                        placement="start"
                        show={showOffcanvas}
                        onHide={handleClose1}
                        
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                                <div className={`${style.logo} ratio `}>
                                    <Image src={`/assets/images/logo.svg`} fill alt="logo icon" />
                                </div>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className="align-items-lg-center">
                            <Nav className="ms-auto pe-xl-3 align-items-xl-center h-100">
                                {data?.map((item, i) => {
                                    return (
                                        <Link key={i} href={`${item?.url}`} className='nav-link' onClick={handleClose1}>{`${item?.label}`}</Link>
                                    )
                                })}
                            </Nav>
                            <Nav className="ms-auto pe-xl-3 align-items-xl-center h-100 d-none d-lg-flex">
                                <div className={`${style.search} d-flex rounded-pill`}><input type="text" placeholder="Search"  className="form-control title-xs bg-transparent border-0"/> <button  className='btn text-white btn-transparent rounded-pill ' >
<GrSearch /></button></div>
                              
                                <Link className='nav-link h6 mb-0 pe-0'  href={'/'}><MdOutlineShoppingCart /></Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>

    );
}

export default Header;

const data = [
    {
        label: "Shop",
        url: "#"
    }, {
        label: "About us",
        url: "#about"
    }, {
        label: "Product",
        url: "#whatweoffer"
    }, {
        label: "Services",
        url: "#features"
    },{
        label: "Contact ",
        url: "#learn"
    },
]

