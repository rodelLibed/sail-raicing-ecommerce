"use client"
import React from 'react'
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger, SheetClose} from "@/components/ui/sheet"


const ContentSheetNav = () => {
  return (
    <Sheet >
    <SheetTrigger asChild>
     <Menu className="text-white w-7 h-7 cursor-pointer"/>
    </SheetTrigger>
    <SheetContent side={"top"} className='flex justify-center' >
      <SheetClose className="text-black font-extrabold absolute top-5 right-5 border-2 border-black p-1 rounded-full"><X/></SheetClose>
      <div className='flex flex-col gap-5 justify-center items-center'>
      <Image src="/slide-1.jpg" alt='Menu Image' fill className='object-cover -z-10' />
        {Links.map((links, idx)=>{
            return (
              <Link 
                key={idx}
                href={links.link}
                className='font-medium text-3xl md:text-6xl '
                >
                {links.name}
              </Link>
            )
        })}
      </div>
    </SheetContent>
</Sheet>
  )
}

export default ContentSheetNav

const Links = [
    { name: "Explore", link: "/explore" },
    { name: "Club house", link: "/clubouse" },
    { name: "Special Order", link: "/special-order" },
    { name: "Alinghi Red Bull Racing", link: "/alinghi" },
 
 ]