import Link from "next/link"
import Image from "next/image"
import SeparatorComponent from "@/components/Seperator"

const JuniorComponent = () => {
  const Links = [ 
    { url: "/", name: "ARBR" },
    { url: "/", name: "JACKETS" },
    { url: "/", name: "SWEATER & HOODIES" },
    { url: "/", name: "T-SHIRTS" },
    { url: "/", name: "ACCESSORIES" },
  
  
  ]
  return (
    <main>
       <section>
          <div 
             className="flex justify-start items-center h-10 whitespace-nowrap 
              overflow-hidden gap-9 text-sm font-extralight text-white/60 ml-4">
                    {Links.map((links, index)=>{
                        return (
                          <Link key={index} href={links.url} >{links.name}</Link>
                        )
                    })}
          </div> 
              <div style={{ position: 'relative', height: '430px' }}>
                <Image
                  alt="Banner Image"
                  src="/product-junior-images/j-bannerImg.webp"
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

export default JuniorComponent


const GridCardComponent = () => {
  const cardImage = [
    { imageUrl: "/product-junior-images/j-jacket1.webp", title: "J CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200" },
    { imageUrl: "/product-junior-images/j-jacket2.webp", title: "J CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
    { imageUrl: "/product-junior-images/j-jacket3.webp", title: "J CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"},
    { imageUrl: "/product-junior-images/j-jacket4.webp", title: "J CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
    { imageUrl: "/product-junior-images/j-jacket5.webp", title: "J CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
    { imageUrl: "/product-junior-images/j-jacket6.webp", title: "J CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
    { imageUrl: "/product-junior-images/j-jacket7.webp", title: "J CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  },
    { imageUrl: "/product-junior-images/j-jacket8.webp", title: "J CLOUD DOWN HOOD", color: "ORANGE RED", price: "P.4200"  } 
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
