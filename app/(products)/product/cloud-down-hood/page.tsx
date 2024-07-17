"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
const page = () => {
  return (
    <div >
        <Carousel className='w-full h-[86vh] flex items-center overflow-hidden'>
            <CarouselContent >
                {image.map((img, index)=>{
                    return (
                    <CarouselItem key={index} className='flex justify-center items-center' >
                        <img src={img.img} alt="" />
                    </CarouselItem>
                    )
                })}
            </CarouselContent>
            <CarouselPrevious className="absolute left-5 bg-white" />
            <CarouselNext  className="absolute right-5 bg-white" />
        </Carousel>
    </div>
  )
}

export default page


const image = [
    {img: "/men/accessories/accessories1.webp"  },
    {img: "/men/accessories/accessories1.webp"  },
    {img: "/big-vectran.webp"  },
]