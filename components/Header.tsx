"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


//Icons
import { Search } from 'lucide-react'

import ContentSheetNav from './ContentSheetNav';

const Header = () => {

   
  return (
    <div className='h-20 bg-black/50 w-full flex justify-between items-center px-5 z-10 sticky top-0'>
         <div>
             <Link href="/" className='text-white text-xl font-semibold'>Sail Racing</Link>
         </div>

         <div className='hidden md:flex gap-5 text-white font-medium text-lg ml-5'>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/junior">Junior</Link>
         </div>

         <div className='flex items-center gap-3 md:gap-3'>
            <Search className="text-white w-5 h-5 cursor-pointer"/>
            <ContentSheetNav/>
         </div>
      
    </div>
  )
}

export default Header




