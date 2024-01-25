"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


//Icons
import { BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

//
import { Button } from '@/components/ui/button'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



const Header = () => {

   
  return (
    <div className='h-20 bg-black/50 w-full flex justify-between items-center px-5 f sticky top-0'>
         <div>
             <h1 className='text-white text-xl font-semibold'>Sail Racing</h1>
         </div>

         <div className='hidden md:flex gap-5 text-white font-medium text-lg ml-5'>
            <Link href="/">Men</Link>
            <Link href="/">Women</Link>
            <Link href="/">Junior</Link>
         </div>

         <div className='flex items-center gap-3 md:gap-3'>
            <Image src="/logo-bull.webp" height={50} width={50} alt="Flags" quality={100} className='hidden md:block' />
            <Image src="/flag1.jpg" height={30} width={30} alt="Flags" quality={100}  />
            <BsSearch className="text-white w-5 h-5 cursor-pointer"/>
            <ContentNav />
           
            
         </div>
      
    </div>
  )
}

export default Header


export function ContentNav() {
  return (
    <>
    <Sheet >
          <SheetTrigger asChild>
          <GiHamburgerMenu className="text-white w-7 h-7 cursor-pointer"/>
          </SheetTrigger>
          <SheetContent side={"top"} className='flex justify-center' >
            <div className='flex flex-col gap-5 justify-center items-center'>
              {Links.map((links, idx)=>{
                  return (
                    <Link 
                    key={idx}
                      href={links.link}
                      className='font-medium text-3xl md:text-6xl'
                      >
                      {links.name}
                    </Link>
                  )
              })}
            </div>
          </SheetContent>
      </Sheet>
      
      </>
  )
}

const Links = [
   { name: "Explore", link: "/explore" },
   { name: "Club house", link: "/clubouse" },
   { name: "Special Order", link: "/special-order" },
   { name: "Alinghi Red Bull Racing", link: "/alinghi" },

]