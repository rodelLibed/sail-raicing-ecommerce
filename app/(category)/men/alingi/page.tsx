"use client"
import {  useEffect, useState } from "react" 
import Image from "next/image"
import SeparatorComponent from "@/components/Seperator"
import SheetComponent from "@/components/SheetComponent"
import storeItems from "@/app/data/data.json"


const AlingiComponent = () => {

  return (
    <div>
        <section>
            <div style={{ position: 'relative', height: '430px' }}>
             <Image
                alt="Banner Image"
                src="/alingi-red-bull/alingi-bannerImg.webp"
                    fill
                    style={{
                        objectFit: 'cover', // cover, contain, none
                    }}
            />
            </div>
            <div className="
                      flex uppercase justify-start items-center
                      h-10 whitespace-nowrap overflow-auto md:overflow-hidden 
                      gap-8 text-sm font-extralight text-white/60 ml-4"
                >
                    <label>Technical Sailing</label>
                    <label>Jackets</label>
                    <label>Sweaters</label>
                    <label>Polos</label>
                    <label>T-shirts</label>
                    <label>Bottoms</label>
                    <label>Accessories</label>
                    <label>Bikes</label>
                    
                </div> 

              <div className="flex justify-center items-center px-4 my-2">
                <SeparatorComponent className="bg-white/30" />
              </div>
        </section>
         
        {/* Product Section */}
        <section >
         <GridCardComponent />
        </section>
    </div>
  )
}

export default AlingiComponent


const GridCardComponent = () => {
  const [data, setData] = useState(storeItems)

  
  return (
     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-3">
          
              {data.map((details,index)=>{
                  return (
                    <div  key={index} className="flex flex-col mt-14 group">
                      <div className="relative h-[300px]">
                          <Image
                          alt="Product Details"
                          src={details.imageUrl}
                          sizes="100vw"
                          fill
                          className="object-cover"
                          />
                      </div>
                      <div  className="text-center mt-10">
                        <h1 className=" text-white text-sm  font-medium ">{details.title}</h1>
                         <h6 className="text-white text-xs">{details.color}</h6>
                           
                           <SheetComponent sheet={details} className="hidden group-hover:block"  />
                           <span className="text-white text-sm group-hover:hidden">{details.price}</span> 
                      </div>
                   </div>
                  )
              })}
          
     </div>
  )
}
