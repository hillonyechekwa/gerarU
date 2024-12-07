import useResponsive from "../hooks/useResponsive"
import Link from "next/link"
import { Separator } from "./Separator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagram, faLinkedin, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"
import guMedLogo from "../../public/logo.png"
import { faEnvelope, faLocationDot, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
    return (
        <footer className="w-full h-screen flex flex-col items-center justify-evenly p-5 bg-stone-950 text-white">
            <nav className="w-full p-3 flex justify-around items-start">
                <dl className="flex flex-col gap-y-3">
                    <dt className="uppercase text-yellow-200 text-xl">Academics</dt>
                    <dd>Faculty & Programmes</dd>
                    <dd>Pre-Degree programmes</dd>
                    <dd>Academic Calendar</dd>
                    <dd>E-Library</dd>
                </dl>
                <dl className="flex flex-col gap-y-3">
                    <dt className="uppercase text-yellow-200 text-xl">Admission</dt>
                    <dd>POST-UTME Admission</dd>
                    <dd>Direct-Entry Admission</dd>
                    <dd>Pre-Degree Admission</dd>
                    <dd>How to apply</dd>
                    <dd>Start Application</dd>
                </dl>
                <dl className="flex flex-col gap-y-3">
                    <dt className="uppercase text-yellow-200 text-xl">Resources</dt>
                    <dd>News & Updates</dd>
                    <dd>Events</dd>
                    <dd>Gallery</dd>
                    <dd>Site map</dd>
                </dl>
                <dl className="flex flex-col gap-y-3">
                    <dt className="uppercase text-yellow-200 text-xl">About</dt>
                    <dd>Meet the Chancellor</dd>
                    <dd>Our Leadership</dd>
                    <dd>Mission & Vision</dd>
                    <dd>Maps & Direction</dd>
                    <dd>Contact Us</dd>
                </dl>
            </nav>

            <Separator className="w-4/5 h-[2px] bg-gray-300" orientation="horizontal" />
            {/* <div className="w-4/5 h-[2px] bg-gray-300"></div> */}
            <ul className="flex gap-x-16">
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="w-8 inline" /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faFacebookSquare} className="w-8 inline" /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="w-8 inline" /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faXTwitter} className="w-8 inline" /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTiktok} className="w-8 inline" /></a></li>
            </ul>
            <Image src={guMedLogo} alt="gerar university logo" width="200" />

            <p className="text-lg flex items-center">
                <FontAwesomeIcon icon={faLocationDot} color="" border className="w-3 inline mr-2" /> 
                <span>Along Ijebu Ode-Oru-Ibadan Road, close to Quarry, imope-ijebu, PMB 2015, Ijebu Ode, Ogun State |</span> <FontAwesomeIcon icon={faPhone} className="w-4 inline mx-2" /><span> 08126307303 |</span> <FontAwesomeIcon icon={faEnvelope} className="w-4 inline mx-2" /> <span>info@gumed.edu.ng </span>
            </p>
            <p className="text-gray-500">Copyright &copy; 2024 Gerar University Of Medical Sciences.</p>
        </footer>
    )
}

export default Footer