import Link from "next/link"
import Image from "next/image"
import guMedLogo from '../../public/nav-logo.png'
import { IconButton, Button } from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import useResponsive from "../hooks/useResponsive"


const Nav = () => {
    return (
        <nav className="w-full flex flex-col font-[family-name:var(--font-geist-sans)]">
            <ul className="w-full flex justify-between items-center py-2 px-10 bg-stone-950 text-gray-300">
                <li className="flex gap-x-5 items-center text-xs">
                    <Link href="#">Student Portal</Link>
                    <Link href="#">Faculty/Staff</Link>
                </li>
                <li className="flex gap-x-5 items-center">
                    <Link href="#" className="text-xs ">Applicant portal</Link>
                    <Button className="uppercase bg-[rgba(243,110,53,1)] text-gray-200 text-xs font-semibold px-4 py-2" type="button">
                        Apply Now
                    </Button>
                </li>
            </ul>
            <ul className="w-full flex justify-between items-center py-5 px-10">
                <li>
                    <Image src={guMedLogo} alt="Gerar Med logo" width="150" height="150" />
                </li>
                <li className="flex justify-between items-center gap-x-10 px-4">
                    <Link href="#" className="text-sm flex px-3 justify-evenly items-center gap-x-3">Academics <FontAwesomeIcon icon={faCaretDown} color="lightgray"  className="w-3 inline"/></Link>
                    <Link href="#" className="text-sm flex px-3 justify-evenly items-center gap-x-3">Admissions <FontAwesomeIcon icon={faCaretDown} color="lightgray" className="w-3 inline"/></Link>
                    <Link href="#" className="text-sm flex px-3 justify-evenly items-center gap-x-3">Resources <FontAwesomeIcon icon={faCaretDown} color="lightgray" className="w-3 inline"/></Link>
                    <Link href="#" className="text-sm flex px-3 justify-evenly items-center gap-x-3">About Us <FontAwesomeIcon icon={faCaretDown} color="lightgray" className="w-3 inline"/></Link>
                    <IconButton className="w-5">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5 inline" />
                    </IconButton>
                </li>
            </ul>
        </nav>
    )
}


export default Nav