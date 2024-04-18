"use client"
import {  useState } from "react" 
import Image from "next/image"
import SeparatorComponent from "@/components/Seperator"
import storeItems from "@/app/data/men-category-db/alingi-data.json"
import GridCardComponent from "@/components/GridCardComponent"


const AlingiComponent = () => {
  const [data] = useState(storeItems)
  return (
    <div>
        <section>
            <div style={{ position: 'relative', height: '430px' }}>
             <Image
                alt="Banner Image"
                src="/men/alingi-red-bull/alingi-bannerImg.webp"
                fill
                style={{
                    objectFit: 'cover', // cover, contain, none
                }} />
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
         <GridCardComponent cardData={data} />
        </section>
    </div>
  )
}

export default AlingiComponent



