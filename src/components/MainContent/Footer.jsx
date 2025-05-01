
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { footer } from 'framer-motion/client';
import ScrollFadeIn from "/src/components/Animations/ScrollFadeIn";



const Footer = () => {
  return (

    <ScrollFadeIn>
    <footer className=" p-20 grid max-sm:justify-items-center sm:grid-cols-2  md:grid-cols-3 gap-[6rem] lg:grid-cols-5">

         <div className="flex flex-col gap-8 max-sm:justify-center items-center">
            <h1 className="text-5xl">Jadoo.</h1>
            <p className="text-gray-500 text-md">Book your trip in minutes,get full <br /> Control for much longer</p>
         </div>

           <div className="gap-4 flex flex-col">
             <h3 className="font-bold text-xl">Company</h3>

               <div className="flex flex-col gap-2 text-gray-500 text-xl">
                 <h2>About</h2>
                 <h2>Careers</h2>
                 <h2>Mobile</h2>
            </div>
        </div>

        <div className="gap-4 flex-col flex">
            <h3 className="font-bold text-xl">Contact</h3>

            <div className="flex flex-col gap-2 text-gray-500 text-xl">
              <h2>Help/FAQ</h2>
              <h2>Press</h2>
              <h2>Affiliates</h2>
            </div>
       </div>

        <div className="flex gap-3 flex-col">
            <h3 className="font-bold text-xl">More</h3>

            <div className="flex flex-col gap-2 text-gray-500 text-xl">
                <h2>Airlinefees</h2>
                <h2>Airline</h2>
                <h2>Low fare tips</h2>
            </div>
        </div>



           <div className="flex flex-col gap-2 justify-center items-center ">
             <div className="flex items-center gap-2">
                 <img src="/public/Facebook icon.png" alt="facebook icon" className="shadow-xl py-[1rem] px-[1.2rem] rounded-[50%]"/>
                 <img src="/public/Social.png" alt="instagram icon" />
                 <img src="/public/Vector.png" alt="" className="shadow-xl py-[1rem] px-[1rem] rounded-[50%]"/>
             </div>

             <div className="flex flex-col gap-3">

                 <h2 className="text-gray-500 font-bold text-center text-xl">Discover our app</h2>
                 <div className="flex gap-2">
                   <div className="flex items-center bg-black rounded-3xl gap-2  justify-center max-sm:w-[30vw] sm:w-[25vw] h-[9vh] md:w-[20vw] h-[7vh] lg:w-[9vw] h-[7vh]">
                     <img src="/public/google-play 1.png" alt="" className="w-[1vmax]"/>

                     <div className="flex flex-col">
                         <h2 className="text-white md:text-xs lg:text-sm">GET IT ON</h2>
                         <h2 className="text-gray-400 md:text-xs lg:text-sm">GOOGLE PLAY</h2>
                     </div>
                 </div>


                 <div className="flex items-center gap-3 bg-black rounded-3xl justify-center max-sm:w-[30vw] sm:w-[25vw] h-[9vh] md:w-[20vw] h-[7vh] lg:w-[9vw] h-[7vh] ">

                     <FontAwesomeIcon icon={faAppleWhole} className="text-white text-md"/>

                     <div className="flex flex-col">
                         <h2 className="text-white text-sm">Available on </h2>
                         <h2 className="text-white text-sm">Apple Store</h2>
                    </div>
                 </div>
                 </div>
             </div>
         </div>
    </footer>
    </ScrollFadeIn>
  )
}

export default Footer