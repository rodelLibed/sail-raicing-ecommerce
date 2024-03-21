import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from '@/components/ui/carousel'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'

const CarouselComponent2 = ({className} : {className : string}) => {
  return (
    <Carousel className={className}>
    <CarouselContent>
      {Images.map((images) => (
        <CarouselItem key={images.id} >
          <div className="p-1">
            <Card className='p-5'>
              <CardContent className="flex h-[400px] items-center justify-center  ">
                 <Image src={images.img} height={500} width={500} alt="Carousel Images" className='h-[60vh]  ' />
            
              </CardContent>
              <CardFooter className='flex justify-center'>
              <div className='flex flex-col justify-center items-center'>
                  <h1 className='text-white font-medium uppercase'>Glacier Parka</h1>
                  <span className=' text-white/10 font-medium'>dk grey solid</span>
                  <span className='text-white'>P10,000</span>
                </div>
              </CardFooter>
            
        
            </Card>
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className='absolute left-4 bg-black text-white' />
    <CarouselNext className='absolute right-4 bg-black text-white' />
  </Carousel>
  )
}

export default CarouselComponent2

const Images = [ 
    
    {id: 1, img: "/images3/jacket1.webp"},
    {id: 2, img: "/images3/jacket2.webp"},
    {id: 3, img: "/images3/hat1.webp"},
    {id: 4, img: "/images3/jacket3.webp"},
    {id: 5, img: "/images3/jacket4.webp"},
    {id: 6, img: "/images3/jacket5.webp"},
    
   ]