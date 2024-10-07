"use client"
import Image from "next/image";
import style from "./EnquireModal.module.scss";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
import EnquireForm from "@/components/EnquireForm";


const EnquireModal = ({ isLight }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<button onClick={handleShow} className={`btn ${isLight?"btn-white":"btn-primary"} rounded-pill`}>Get Started</button>
			<Modal centered show={show} size="xl" className="bg-transparent border-0 " onHide={handleClose}>
				<Modal.Header closeButton className="border-bottom-0">
				</Modal.Header>
				<Modal.Body >
					<EnquireForm />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EnquireModal;