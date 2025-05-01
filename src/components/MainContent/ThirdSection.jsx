import { section } from 'framer-motion/client'
import React,{ useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import ScrollFadeIn from "/src/components/Animations/ScrollFadeIn";



const ThirdSection = () => {

    const weightCustomization = {
        fontWeight: "500"
    }

    const [ isHidden,setIsHidden ] = useState(false);
    const [ isLiked,setIsLiked ] = useState(false);

    const handleLikeButton = () => {
        setIsLiked(!isLiked);
    }

  return (
    <section className="min-h-screen flex justify-center items-center md:px-[5rem] lg:px-[10rem]">

        <ScrollFadeIn>
        <div className="flex flex-col gap-5 cardHoverEffect">

            <div className="flex flex-col gap-[1rem] w-[50vw]">
               <p style={weightCustomization}>Easy and <span className="text-orange-500">Fast</span></p>
               <h1 className="font-bold max-sm:text-[1.8rem] sm:text-[2.2rem] md:text-4xl">Book Your <span className="text-orange-500">Next</span> Trip <br />In 3 Easy Steps</h1>
            </div>

            <div className="flex flex-col gap-10">

                <div className="flex gap-[1rem] items-center">
                    <img src="/public/Group 7.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">Choose Destination</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Voluptas tenetur earum </p>
                    </div>
                </div>

                <div className="flex gap-[1rem] items-center">
                    <img src="/public/Group 12.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">Make Payment</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Voluptas tenetur earum </p>
                    </div>
                </div>

                <div className="flex gap-[1rem] items-center">
                    <img src="/public/Group 11.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold">Reach Airport on Selected Date</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Voluptas tenetur earum </p>
                    </div>
                </div>
            </div>
        </div>
        </ScrollFadeIn>

        
        <div className={`flex justify-center items-center md:w-[90vw] lg:w-[80vw]`}>

            {/* card */}

            <ScrollFadeIn>
            <div className="max-sm:hidden sm:hidden max-md:hidden md:flex lg:flex bg-white rounded-2xl shadow-xl flex flex-col gap-[1rem] cardHoverEffect rotateEffect py-4 px-4 md:mt-[18rem] min-w-[35vw] lg:mt-0 min-w-[23vw]">
               <img src="https://cdn.flyingdress.photo/images/styles/original/D__00771.jpg" alt="" className="rounded-3xl lg:w-[20vmax] h-[20vmin]"/>

                <div className="flex flex-col gap-[1rem]">
                  <h2 style={{fontWeight: "600"}} className="text-xl">Trip To Greece</h2>
                  <h2 className="text-gray-500">14-29 June| by Robbin junior</h2>
                </div>

                <div className="flex gap-3">
                    <FontAwesomeIcon icon={faLeaf} className="bg-gray-200 p-3 rounded-[50%] text-gray-500 iconHoverEffect"/>

                    <FontAwesomeIcon icon={faMap} className="bg-gray-200 p-3 rounded-[50%] text-gray-500 iconHoverEffect "/>
                    <FontAwesomeIcon icon={faPaperPlane} className="bg-gray-200 p-3 rounded-[50%] text-gray-500 iconHoverEffect"/>
                </div>

                <div className="flex justify-between pt-3">
                   <div className="flex gap-3">
                      <FontAwesomeIcon icon={faBuilding} className="text-gray-500"/>
                      <h2>24 people going</h2>
                   </div>

                   <div>
                     <FontAwesomeIcon icon={faHeart} className={`text-2xl ${isLiked ? "text-red-500" : "text-black"} cursor-pointer`} onClick={handleLikeButton}/>
                   </div>
                </div>
            </div>
            </ScrollFadeIn>
        </div>
    </section>
  )
}

export default ThirdSection