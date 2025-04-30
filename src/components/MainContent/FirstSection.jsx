import React from 'react'
import ReusableCard from './ReusableCard'

const FirstSection = () => {

    const fontStyle = {
        fontWeight: "500"
    }
  return (
    <section className="border-4 border-red-500 min-h-[60vh] text-center">
        <div className="flex flex-col gap-[1rem]">
            <h3 style={fontStyle} className="">CATEGORY</h3>
            <h1 className="text-5xl font-bold">We Offer Best Services</h1>
        </div>


        <div>
            
            <ReusableCard />
        </div>
    </section>
  )
}

export default FirstSection