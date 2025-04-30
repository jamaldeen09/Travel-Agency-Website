import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import "/src/index.css";
import Typewriter from "/src/components/Animations/Typewriter";


const HeaderBody = () => {
  const style = {
    fontWeight: "500",
  }

  const style2 ={
    fontWeight: "500",
  }
  return (
    <>
      <div className="min-h-[89.5vh] flex justify-evenly header-body py-20 px-20">
         
         <div className="flex flex-col gap-4 py-[8rem] max-sm:min-w-[75vw] sm:min-w-[100%] md:min-w-[50vw] lg:min-w-[20vw]">
            <h4 style={style} className="text-red-500">BEST DESTINATIONS AROUND THE WORLD</h4>
           

            <h1 className="font-bold max-sm:text-4xl sm:text-6xl md:text-5xl lg:text-7xl">Travel, enjoy <br /> and live a new <br /> and full life</h1>
            <p style={style2} >Built Wicket longer admire do barton vanity itself do in it. <br />Preferred to sportsmen it engrossed listening. Park gate <br /> sell they west hard for the.</p>

            <div className="flex gap-10">
              <button className="btnHoverEffect bg-orange-400 py-[1rem] px-3 text-white rounded-md shadow-xl shadow-orange-200">Find out more</button>
            
              <div className="flex justify-center items-center gap-3">

                <button className="bg-red-500 py-2 px-3 rounded-[50%] shadow-xl shadow-red-200 playBtnHoverEffect">
                  <FontAwesomeIcon icon={faPlay} className="text-sm text-white playBtnHoverEffect"/>
                </button>
                <p>Play Demo</p>
              </div>
            </div>
         </div>

         <div className="flex justify-center items-center max-sm:hidden sm:hidden md:block lg:block">
          <img src="/public/plane.png" alt="" />
           <img src="/public/Traveller 1.png" className=" md:w-[400vmax] lg:w-[40vmax]"/>
         </div>
      </div>
    </>
  )
}

export default HeaderBody