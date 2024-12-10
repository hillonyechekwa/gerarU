import { Carousel } from "./components/Carousel"
import { Separator } from "./components/Separator"
import { Card } from "./components/Card"
import ImageOne from "../public/carousel.jpg"
import ImageTwo from "../public/carousel.jpg"
import ImageThree from "../public/carousel.jpg"
import nuclogo from "../public/nuc-logo.png"
import Profile from "../public/profile.jpg"
import MatricPic from "../public/pic2.png"
import Image from "next/image"
import picOne from "../public/pic1.png"
import HSImg from "../public/healthscience.png"
import MSImg from "../public/medscience.png"
import { Button, IconButton } from "./components/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Clock, MapPin } from "lucide-react"
import { faArrowRight, faChevronCircleRight, faClock, faLocationDot, faMapLocationDot } from "@fortawesome/free-solid-svg-icons"



const images = [
  ImageOne,
  ImageTwo,
  ImageThree
]

export default function Home() {
  return (
    <main className="grid min-h-screen">
      <header className="grid grid-cols-3 grid-rows-1 w-full h-screen p-11 relative">
        <Carousel className="col-start-1 col-span-3 row-start-1 row-span-1 h-full" images={images} />
        <Card className=" w-[20rem] h-auto absolute left-3/4 top-2/3 -mt-[1.4rem]">
          <nav className="w-full flex justify-center items-center p-7 bg-[rgb(217,217,217)]">
            <dl className="w-full flex flex-col justify-evenly items-start gap-y-8 p-6">
              <dt className="text-2xl font-semibold">
                Quick Links
              </dt>
              <dd className="text-sm w-full">
                Admission requirements
                <Separator orientation="horizontal" className="w-full mt-3 bg-gray-400" />
              </dd>
              <dd className="text-sm w-full">
                How to apply?
                <Separator orientation="horizontal" className="w-full mt-3 bg-gray-400" />
              </dd>
              <dd className="text-sm w-full pb-12">
                News & updates
                <Separator orientation="horizontal" className="w-full mt-3 bg-gray-400" />
              </dd>
            </dl>
          </nav>
        </Card>
        <div>
          <h3></h3>
        </div>
      </header>
      <section className="relative w-full bg-[rgb(24,130,59)]  p-3 flex justify-center items-center gap-x-8 text-white mt-[6.2rem]">
        <Image src={nuclogo} alt="nuclogo" className="absolute left-0 w-24" />
        <h3>Gerar University of medical sciences is licensed by the national universities commision <a href="">Visit NUC to verify</a> </h3>
      </section>
      <section className="w-full h-screen px-8 pt-20 flex justify-center items-center">
        <Image src={Profile} alt="" width={500} className="relative z-10 left-8" />
        <div className="p-12 bg-black text-white text-2xl w-3/5 relative z-0">
          <div>
            <Separator orientation="horizontal" className=" bg-[rgba(255,248,175)] w-32 relative -top-5 left-32" />
            <Separator orientation="horizontal" className="bg-[rgba(243,110,53)] w-32 relative -top-5 left-16" />
          </div>
          <blockquote className="leading-relaxed px-16">
            <q>It is with great pleasure and heartfelt enthusiasm that I welcome you to  Gerar University of Medical Sciences. At Gerar University of Medical Sciences, we are committed to fostering an  environment that champions academic excellence, innovation, and  inclusivity. Our mission is to empower individuals to achieve their full  potential, contribute to society, and inspire positive change.</q>
            <cite>
              <h3 className="uppercase">Prof niran' adetoro</h3>
              <p className="captialize">vice chancellor</p>
            </cite>
          </blockquote>
        </div>
      </section>
      <section className="w-full flex flex-col gap-y-5 justify-center items-center p-8">
        <section className="w-full flex flex-col gap-y-9">
          <h2 className="text-6xl font-bold text-[rgb(243,110,53)]">News & Updates</h2>
          <section className="w-full flex justify-center items-center p-3">
            <article className="flex flex-col justify-center  gap-y-2 px-5 border-t-2 border-t-black h-full">
              <small className="text-xs capitalize">september 12, 2024</small>
              <h3 className="text-4xl font-extrabold capitalize">Investiture ceremony of the chancellor and vice-chancellor of gerar university of medical sciences</h3>
            </article>
            <Image src={picOne} alt="" width={700} className="" />
          </section>
        </section>
        <section className="w-full flex items-center justify-start gap-x-9">
          <Card className="w-[400px] h-[450px] border-b-black border-b-2 flex flex-col justify-start items-center">
            <Image src={MatricPic} alt="picture of matriculating students at gumed" width={400} className="" />
            <article className="flex flex-col justify-start px-5 pt-4 gap-y-3">
              <small className="uppercase text-[0.5rem]">september 12, 2024</small>
              <p className="text-2xl font-semibold">2023/2024 matriculation ceremony</p>
            </article>
          </Card>
          <Card className="w-[400px] h-[450px] flex flex-col justify-start items-center bg-black text-[rgba(255,248,175)]">
            <Image src={MatricPic} alt="picture of matriculating students at gumed" width={400} className="" />
            <article className="flex flex-col justify-start px-5 pt-4 gap-y-3">
              <small className="uppercase text-[0.5rem]">september 12, 2024</small>
              <p className="text-2xl font-semibold">Investiture ceremony of the chancellor and vice-chancellor of gerar university of medical sciences</p>
            </article>
          </Card>
          <IconButton className="text-2xl mx-auto">
            <p className="inline mx-3 ">View all news</p>
            <FontAwesomeIcon icon={faChevronCircleRight} className="inline-block  text-[rgb(243,110,53)]" />
          </IconButton>
        </section>
      </section>
      <section className="w-full p-8 py-12 flex flex-col gap-y-3 bg-[rgb(246,246,246)]">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-5xl">Upcoming Events</h3>
          <IconButton className="text-xl">
            <p className="inline mx-3">
              view all
            </p>
            <FontAwesomeIcon icon={faChevronCircleRight} className=" text-[rgb(243,110,53)]" />
          </IconButton>
        </div>
        <section className="grid grid-rows-1 grid-cols-3 gap-x-6">
          <Card className="flex flex-col gap-y-5 w-full">
            <div className="w-full flex justify-start gap-x-10 items-center border-b-2 border-b-[rgb(243,110,53)] p-3">
              <p className="uppercase flex justify-evenly items-center flex-col h-full gap-y-2">
                <span className="text-ls font-medium border-b-black border-b-2 pb-1">sep.</span>
                <span className="font-semibold text-4xl">10</span>
              </p>
              <div className="h-full flex flex-col justify-evenly">
                <p className="font-semibold text-sm capitalize">post UTME examination</p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faClock} size="xs" className=""/> */}
                    <Clock size={12} />
                  </span>
                  <span>
                    9:00am-12:00pm
                  </span>
                </p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faLocationDot} size="xs" className="" /> */}
                    <MapPin size={12} />
                  </span>
                  <span>The university library</span>
                </p>
              </div>
            </div>
            <Image src={MatricPic} alt="picture of matriculating students at gumed" className="w-full" />
          </Card>
          <Card className="flex flex-col gap-y-5 w-full">
            <Image src={MatricPic} alt="picture of matriculating students at gumed" className="w-full" />
            <div className="w-full flex justify-start gap-x-10 items-center border-t-2 border-t-[rgb(243,110,53)] p-3">
              <p className="uppercase flex justify-evenly items-center flex-col h-full gap-y-2">
                <span className="text-ls font-medium border-b-black border-b-2 pb-1">sep.</span>
                <span className="font-semibold text-4xl">10</span>
              </p>
              <div className="h-full flex flex-col justify-evenly">
                <p className="font-semibold text-sm capitalize">post UTME examination</p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faClock} size="xs" className=""/> */}
                    <Clock size={12} />
                  </span>
                  <span>
                    9:00am-12:00pm
                  </span>
                </p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faLocationDot} size="xs" className="" /> */}
                    <MapPin size={12} />
                  </span>
                  <span>The university library</span>
                </p>
              </div>
            </div>
          </Card>
          <Card className="flex flex-col gap-y-5 w-full">

            <div className="w-full flex justify-start gap-x-10 items-center border-t-2 border-t-[rgb(243,110,53)] p-3">
              <p className="uppercase flex justify-evenly items-center flex-col h-full gap-y-2">
                <span className="text-ls font-medium border-b-black border-b-2 pb-1">sep.</span>
                <span className="font-semibold text-4xl">10</span>
              </p>
              <div className="h-full flex flex-col justify-evenly">
                <p className="font-semibold text-sm capitalize">post UTME examination</p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faClock} size="xs" className=""/> */}
                    <Clock size={12} />
                  </span>
                  <span>
                    9:00am-12:00pm
                  </span>
                </p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faLocationDot} size="xs" className="" /> */}
                    <MapPin size={12} />
                  </span>
                  <span>The university library</span>
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start gap-x-10 items-center border-t-2 border-t-[rgb(243,110,53)] p-3">
              <p className="uppercase flex justify-evenly items-center flex-col h-full gap-y-2">
                <span className="text-ls font-medium border-b-black border-b-2 pb-1">sep.</span>
                <span className="font-semibold text-4xl">10</span>
              </p>
              <div className="h-full flex flex-col justify-evenly">
                <p className="font-semibold text-sm capitalize">post UTME examination</p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faClock} size="xs" className=""/> */}
                    <Clock size={12} />
                  </span>
                  <span>
                    9:00am-12:00pm
                  </span>
                </p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faLocationDot} size="xs" className="" /> */}
                    <MapPin size={12} />
                  </span>
                  <span>The university library</span>
                </p>
              </div>
            </div>
            <div className="w-full flex justify-start gap-x-10 items-center border-t-2 border-t-[rgb(243,110,53)] p-3">
              <p className="uppercase flex justify-evenly items-center flex-col h-full gap-y-2">
                <span className="text-ls font-medium border-b-black border-b-2 pb-1">sep.</span>
                <span className="font-semibold text-4xl">10</span>
              </p>
              <div className="h-full flex flex-col justify-evenly">
                <p className="font-semibold text-sm capitalize">post UTME examination</p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faClock} size="xs" className=""/> */}
                    <Clock size={12} />
                  </span>
                  <span>
                    9:00am-12:00pm
                  </span>
                </p>
                <p className="text-xs flex gap-x-3">
                  <span>
                    {/* <FontAwesomeIcon icon={faLocationDot} size="xs" className="" /> */}
                    <MapPin size={12} />
                  </span>
                  <span>The university library</span>
                </p>
              </div>
            </div>
          </Card>

        </section>
      </section>
      <section className="flex flex-col w-full gap-y-4 p-8">
        <h2 className="mb-5 text-6xl font-semibold text-[rgb(243,110,53)]">Our Facaulties</h2>
        <section className="w-full flex items-center gap-x-4">
          <Image src={HSImg} alt="Health sciences" className="w-3/5" />
          <article className="w-[500px] h-full px-20  bg-[rgb(32,30,30)] text-white flex flex-col items-start justify-center gap-y-5">
            <h3 className="font-semibold text-3xl capitalize text-[rgb(255,248,175)]">allied health sciences</h3>
            <p className="text-xs leading-relaxed">The Faculty of Allied Health Science is the academic division that  focuses on various healthcare-related programs and disciplines. These  programs aim to educate and train professionals who will support the  healthcare system by providing diagnostic, therapeutic, and preventive  services.</p>
            <IconButton className="text-sm flex items-center gap-x-2 px-0">
              <p className="inline px-0">View programmes</p>
              <FontAwesomeIcon icon={faArrowRight} size="lg" className="text-[rgb(243,110,53)]" />
            </IconButton>
          </article>
        </section>
        <section className="w-full gap-x-4 flex justify-evenly items-center">
          <article className="w-[500px] h-full px-20  bg-[rgb(32,30,30)] text-white flex flex-col items-start justify-center gap-y-5">
            <h3 className="font-semibold text-3xl capitalize text-[rgb(255,248,175)]">basic medical sciences</h3>
            <p className="text-xs line leading-relaxed ">A critical component  of medical and health sciences education, focusing on the foundational  scientific disciplines essential for understanding human health and  disease. This faculty provides the knowledge base and research  skills necessary for medical and healthcare professions.</p>
            <IconButton className="text-sm font-medium flex items-center gap-x-2 px-0">
              <p className="inline px-0">View programmes</p>
              <FontAwesomeIcon icon={faArrowRight} size="lg" className="text-[rgb(243,110,53)]" />
            </IconButton>
          </article>
          <Image src={MSImg} alt="medical sciences" />
        </section>
      </section>
      <section className="mt-20 flex flex-col items-start justify-evenly p-8 bg-[rgb(243,110,53)]">
        <h3>stay updated</h3>
        <p>subscribe here and we will email you the latest gerar university news and events each month.</p>
        <input type="text" name="" placeholder="Enter Email" id="" />
        <Button type="submit" className="">
          Sign Up
        </Button>
      </section>
    </main>
  );
}
