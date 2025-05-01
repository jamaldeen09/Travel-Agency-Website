import React from 'react'
import ScrollFadeIn from "/src/components/Animations/ScrollFadeIn";


const FirstSection = () => {

    const fontStyle = {
        fontWeight: "500"
    }

    const positionStyles = {
        zIndex: "999"
    }
  return (
    <section className="min-h-[60vh] flex flex-col items-center py-20 gap-20">
        <div className="flex items-center gap-[1rem] flex-col">
            
            <h3 style={fontStyle} className="">CATEGORY</h3>
            <h1 className=" font-bold max-sm:text-4xl sm:text-5xl">We Offer Best Services</h1>
           
        </div>


        <div className="flex gap-5 max-sm:flex-col sm:flex-col md:flex-col lg:flex-row">

            <ScrollFadeIn>
            <div className="flex flex-col items-center flex flex-col justify-center py-[3rem] px-[2rem] btnHoverEffect gap-3">
                <img src="/public/Group 48.png" alt="" />
                <h3 className="font-bold md:text-2xl lg:text-xl">Calculated Weather</h3>
                <div className="text-center">
                    <p className="">Built Wicket longer <br /> admire do barton  <br /> vanity itself do in it</p>
                </div>
            </div>
            </ScrollFadeIn>


            <ScrollFadeIn>

            <div className="flex flex-col items-center flex flex-col justify-center py-[2rem] px-[4rem] shadow-xl rounded-[2rem] btnHoverEffect gap-3" style={positionStyles}>
                <img src="/public/Group 51.png" alt="" className="   lg:w-[8vmax]"/>
                <h3 className="font-bold text-xl">Best Flights</h3>
                <div className="text-center">
                    <p>Engrossed listening <br /> Park gate sell they  <br /> west hard for the.</p>
                </div>
            </div>
            </ScrollFadeIn>
           
        
            <ScrollFadeIn>

            <div className="flex flex-col items-center flex flex-col justify-center py-[3rem] px-[2rem] btnHoverEffect gap-3">
                <img src="/public/Group 50.png" alt="" />
                <h3 className="font-bold text-xl">Local Events</h3>
                <div classNmae="text-center">
                    <p>Barton Vanity itself do <br /> in it. Preferd to men it  <br /> engrossed listening.</p>
                </div>
            </div>
            </ScrollFadeIn>
            

            <ScrollFadeIn>

            <div className="flex flex-col items-center flex flex-col justify-center py-[3rem] px-[2rem] btnHoverEffect gap-3">
                <img src="/public/Group 49.png" alt="" />
                <h3 className="font-bold text-xl">Customization</h3>
                <div className="text-center">
                    <p>We deliver outsourced <br /> aviation services for <br /> military customers</p>
                </div>
            </div>
            </ScrollFadeIn>
           
        </div>
    </section>
  )
}

export default FirstSection