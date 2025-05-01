import React from 'react'
import ScrollFadeIn from "/src/components/Animations/ScrollFadeIn";
import { section } from 'framer-motion/client';

const FourthSection = () => {
  return (
    <section className="min-h-[120vh] gap-[2rem] py-20 flex justify-between px-[10rem] items-center max-sm:flex-col sm:flex-col md:flex-col lg:flex-row ">

        <ScrollFadeIn>
        <div className="flex flex-col gap-3 w-full max-sm:text-center sm:items-center md:items-center lg:items-start w-[39.1vw]">
            <h3 style={{fontWeight: "500"}}>TESTIMO<span className="text-orange-500">NI</span>ALS</h3>
            <h1 className="font-bold max-sm:text-[1.7rem] sm:text-4xl md:text-6xl lg:text-7xl">What <span className="text-orange-500">People</span> Say About Us</h1>
        </div>
        </ScrollFadeIn>


        <ScrollFadeIn>
        <div className="flex justify-center items-center flex-col gap-10 max-sm:w-[100vw] sm:w-[100vw] md:w-[70vw] min-h-[100vh] lg:max-w-[50vw]">
            <div className="shadow-xl h-[40%] flex flex-col gap-3 justify-between p-4 rounded-2xl hover:rotate-[-4deg] testimonialsHoverEffect">
                
                <div className="px-3">
                   <img src="/public/image.png" alt="" />
                </div>

                <div className="flex justify-center">
                    
                    <h2 className="sm:text-lg md:text-xl" style={{fontWeight: "500"}}>"On the Windows talking painted posture yet its <br /> express parties use. Sure last upon he same as <br /> knew next. Of believed or diverted no."</h2>
                </div>

                <div className="flex justify-center flex-col pl-[3.5rem]">
                    <h1 className=" sm:text-xl md:text-2xl" style={{fontWeight: "600"}}>Mike taylor</h1>
                    <p>Lahore, Pakistan</p>
                </div>
            </div>
            <div style={{transform: "rotate(-2deg)"}} className="border-2 decreasedZindex flex justify-between flex-col gap-3 bg-white rounded-xl px-[3.66rem] py-4 max-sm:w-[70vw] sm:w-[63vw] md:h-[30vh] w-[59vw] lg:max-w-[30vw]">

                <div>

                </div>

                <div>
                    <p style={{fontWeight: "400"}}>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse quasi rem atque minus nesciunt voluptas."</p>
                </div>
                <div>
                    <h3 style={{fontWeight: "600"}} className="text-2xl">Chris Thomas</h3>
                    <p style={{fontWeight: "600"}} className="text-gray-500">CEO of Red Button</p>
                </div>
            </div>
        </div>
        </ScrollFadeIn>
       
    </section>
  )
}

export default FourthSection