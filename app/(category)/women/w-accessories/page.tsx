"use client"
import Image from "next/image"
import SeparatorComponent from "@/components/Seperator"
import GridCardComponent from "@/components/GridCardComponent"
import { useState } from "react"
import storeItems from "@/app/data/women-category-db/accessories-data.json"

const WomenAccessories = () => {
  
  const [data, setData] = useState(storeItems)

  return (
    <main>
        <section>
              <div style={{ position: 'relative', height: '430px' }}>
                <Image
                  alt="Banner Image"
                  src="/product-women-images/accessories/w-accessoriesImg.webp"
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
                    <label>Category</label>
                    <label>Color</label>
                    <label>Size</label>
                    <label>Collection</label>
                    <label>Sort by</label>
                    
                </div> 

              <div className="flex justify-center items-center px-4 my-2">
                <SeparatorComponent className="bg-white/30" />
              </div>
              
          </section>


            {/* Product Section */}
            <section >
                  <GridCardComponent cardData={data} />
            </section>
    </main>
  )
}

export default WomenAccessories


