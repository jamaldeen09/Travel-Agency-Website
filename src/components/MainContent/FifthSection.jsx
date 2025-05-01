import React from 'react'
import ScrollFadeIn from "/src/components/Animations/ScrollFadeIn";

const FifthSection = () => {
  return (

    <ScrollFadeIn>

    <section className="flex items-center justify-evenly" >
        <div className="">
            <img src="/public/image 27.png" alt="" className="btnHoverEffect sm: w-[10vmax] md:w-[8vmax]"/>
        </div>
        <div>
            <img src="/public/image 28.png" alt="" className="btnHoverEffect sm: w-[10vmax] lg:w-[8vmax]"/>
        </div>
        <div className="">
            <img src="/public/image 29.png" alt="" className="btnHoverEffect sm: w-[10vmax] lg:w-[8vmax]"/>
        </div>
        <div>
            <img src="/public/image 30.png" alt="" className="btnHoverEffect sm: w-[10vmax] lg:w-[8vmax]"/>
        </div>
        <div>
            <img src="/public/image 31.png" alt="" className="btnHoverEffect sm: w-[10vmax] lg:w-[8vmax]"/>
        </div>
    </section>
    </ScrollFadeIn>
  
  )
}

export default FifthSection