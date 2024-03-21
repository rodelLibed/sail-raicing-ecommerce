"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const VideoCarousel = () => {
  return (
    <div className="flex justify-center items-center">
        <Carousel className="w-full overflow-hidden">
            <CarouselContent>
                {Images.map((image, index) => (
                <CarouselItem className="brightness-50 aspect-square md:aspect-auto" key={index}>
                       <img src={image.img} alt="horizontal images" className=" min-w-[100%] min-h-[100%]" />
                </CarouselItem>
                ))}
            </CarouselContent>
      <CarouselPrevious className="absolute left-5 bg-white" />
      <CarouselNext className="absolute right-5 bg-white" />
    </Carousel>

    </div>
  )
}

export default VideoCarousel

const Images = [
    {id: 1, img: "/mobile-vectran3.webp"},
    {id: 2, img: "/big-vectran.webp"},
    
    
  ]
