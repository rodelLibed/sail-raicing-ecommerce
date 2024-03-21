import Image from "next/image"
import SeparatorComponent from "@/components/Seperator"


const TShirtComponent = () => {
  
  return (
    <main  className="h-full">
       {/* Product Navigation Section */}
        <section>
              <div style={{ position: 'relative', height: '430px' }}>
                <Image
                  alt="Banner Image"
                  src="/shorts/shortsImg.webp"
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
                  <GridCardComponent />
            </section>
    </main>
  )
}

export default TShirtComponent


const GridCardComponent = () => {
    const cardImage = [
      { imageUrl: "/shorts/short1.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200" },
      { imageUrl: "/shorts/short2.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short3.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"},
      { imageUrl: "/shorts/short4.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short5.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short6.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short7.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short8.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short9.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short10.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short11.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      { imageUrl: "/shorts/short12.webp", title: "CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
      
       
    ]
    return (
       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-3">
            
                {cardImage.map((details, idx)=>{
                    return (
                      <div  key={idx} className="flex flex-col mt-14">
                        <div className="relative h-[300px]">
                            <Image
                            alt="Product Details"
                            src={details.imageUrl}
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="text-center mt-10">
                          <h1 className=" text-white text-lg font-medium ">{details.title}</h1>
                           <h6 className="text-white text-sm">{details.color}</h6>
                           <span className="text-white text-sm">{details.price}</span>
                        </div>
                     </div>
                    )
                })}
            
       </div>
    )
}