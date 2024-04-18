

import Image from "next/image"
import SheetComponent from "./SheetComponent"
import { type GridCardData } from "@/lib/types"

const GridCardComponent = ({ cardData }: GridCardData ) => {
   
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-3">
          
        {cardData.map((details)=>{
            return (
              <div  key={details.id} className="flex flex-col mt-14 group">
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

export default GridCardComponent