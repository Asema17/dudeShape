import React from 'react'
import photo1 from "../../image/photo1.png"


export const Intro = () => {
  return (
    <>
    <section className='w-full'>
        <div className='w-11/12 mx-auto'>
        <div className='w-full flex justify-end'>
        <img src={photo1} alt=""/>
        </div>
      <div className='w-96 h-96 bg-[#244D4D] text-white flex flex-col justify-center items-center pl-10 gap-5 absolute top-56 left-56'>
        <p className='text-5xl'>We help you make modern Furnitures</p>
        <p> We will help you to make an elegant and luxurious interior
         designed by professional interior designer.
        </p>
     </div>
        </div>
        </section>
        </>
  )
}
