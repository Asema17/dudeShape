import React from 'react'
import lupa from "../../assets/icon/loupe1.svg"
import menu from "../../assets/icon/menu 1 (1).svg"
import photo1 from "../../image/photo1.png"
import cards from "../../image/cards.svg"
export const Header = () => {


 const navItem = [
    {
        id:1,
        title: "home",
        path: "/",
    },
    {
        id:2,
        title: "about",
        path: "/about",
    },
    {
        id:3,
        title: "Features",
        path: "/features",
    },
    {
        id:4,
        title: "Contact",
        path: "/contacts",
    }
 ]


  return (
      <>
    <section className='w-full h-20'> 
        <div className='w-11/12 h-full mx-auto flex justify-between items-center'>
        <h1 className='text-2xl text-[#244D4D] font-bold'>DudeShape</h1>
        <ul className='flex gap-20'>
            {navItem.map((nav) => (
                <li>{nav.title}</li>
            ))}
        </ul>
        <div className='flex gap-2'>
            <img src={lupa} alt=""/>
            <img src={menu} alt=""/>
        </div>
        </div>
    </section>
    </>
  )
}
