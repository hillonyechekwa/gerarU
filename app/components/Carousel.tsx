"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { IconButton } from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"

export interface CarouselProps extends React.HtmlHTMLAttributes<HTMLDivElement>{
    images: StaticImageData[]
    className: string
}


export const Carousel = ({images, className}: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        console.log("previous")
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
    const nextSlide = () => {
        console.log("next")
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }


    return (
        <div className={`relative w-full mx-auto ${className} `}>
            <div className="overflow-hidden relative h-full">
                {images.map((image, index) => (
                    <div key={index} className={`absolute inset-0 transition-transform transform ${index === currentIndex ? 'translate-x-0': 'translate-x-full'}`}>
                        <Image src={image} alt={`Slide ${index}`} className="w-full h-3/4 object-cover object-left-top"/>
                    </div>
                ))}
            </div>
            <div className="absolute left-3/4 top-2/3 -mt-[0.5rem] -ml-[4.6rem] w-auto bg-[rgb(243,110,53)] flex">
                <IconButton onClick={prevSlide} className="text-white">
                    <FontAwesomeIcon icon={faCaretLeft} size="2x" className="mx-auto"/>
                </IconButton>
                <IconButton onClick={nextSlide} className=" text-white">
                    <FontAwesomeIcon icon={faCaretRight} size="2x" className="mx-auto"/>
                </IconButton>
            </div>
        </div>
    )
}

