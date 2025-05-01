import { section } from 'framer-motion/client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import ScrollFadeIn from "/src/components/Animations/ScrollFadeIn";

const SecondSection = () => {

    const fontCustom = {
        fontWeight: "500",
    }

    const radiusCurve = {
        borderTopRightRadius: "3rem",
        borderTopLeftRadius: "3rem",
    }
  return (
    <section className="min-h-[30vh] flex justify-center flex-col items-center gap-20 p-[10rem]">

        <div className="flex flex-col items-center gap-[1rem]">
            <h4 style={fontCustom}>Top Selling</h4>
            <h1 className="font-bold max-sm:text-2xl sm:text-[2.3rem] md:text-5xl">Top Destinations</h1>
        </div>

        <div className="flex md: flex-col gap-8 lg:flex-row gap-5 ">

            <ScrollFadeIn>
            <div className="min-h-[50vh] rounded-3xl bg-white shadow-xl pb-4 cardHoverEffect  max-sm:w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[27vw]">
                <img style={radiusCurve} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1200px-Colosseo_2020.jpg" alt="" className="w-[100%] h-[50vh] "/>

                <div className="">

                    <div className="flex justify-between px-4 py-6">
                        <h2>Rome, Italy</h2>

                        <h2>$5.42k</h2>
                    </div>

                    <div className="flex gap-3 items-center  px-4 ">
                        <FontAwesomeIcon icon={faLocationArrow} className="text-xl"/>
                        10 Days Trip
                    </div>
                </div>
            </div>
            </ScrollFadeIn>


            <ScrollFadeIn>
            <div className="min-h-[50vh] rounded-3xl bg-white shadow-xl pb-4 secondCardHoverEffect max-sm:w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[27vw] ">
                <img style={radiusCurve} src="https://static.posters.cz/image/1300/3189.jpg" alt="" className="w-[100%] h-[50vh] "/>

                <div className="">

                    <div className="flex justify-between px-4 py-6">
                        <h2>Londom, UK</h2>

                        <h2>$4.2k</h2>
                    </div>

                    <div className="flex gap-3 items-center  px-4 ">
                        <FontAwesomeIcon icon={faLocationArrow} className="text-xl"/>
                        12 Days Trip
                    </div>
                </div>
            </div>
            </ScrollFadeIn>

            <ScrollFadeIn>
            <div className="min-h-[50vh] rounded-3xl bg-white shadow-xl pb-4 cardHoverEffect max-sm:w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[27vw]">
                <img style={radiusCurve} src="https://media.timeout.com/images/106102928/image.jpg" alt="" className="w-[100%] h-[50vh] "/>

                <div className="">

                    <div className="flex justify-between px-4 py-6">
                        <h2>Full Europe</h2>

                        <h2>$5.42k</h2>
                    </div>

                    <div className="flex gap-3 items-center  px-4 ">
                        <FontAwesomeIcon icon={faLocationArrow} className="text-xl"/>
                        28 Days Trip
                    </div>
                </div>
            </div>
            </ScrollFadeIn>
           
        </div>
    </section>
  )
}

export default SecondSection