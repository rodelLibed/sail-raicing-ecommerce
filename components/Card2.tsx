import Image from "next/image"
import { Card,  CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const CardComponent2 = ({className} : {className: string}) => {
  return (
    <div className={className}>
        {Images.map((images)=> {
             return (
                <Card  key={images.id} className="h-[500px] flex flex-col justify-center items-center">
                    <CardContent className="">
                        <Image src={images.img} alt="Product Images" height={500} width={500} className="w-[1000px]"  />
                   </CardContent>
                    <CardFooter>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-white font-medium uppercase'>Glacier Parka</h1>
                        <span className=' text-white/10 font-medium'>dk grey solid</span>
                        <span className='text-white'>P10,000</span>
                        </div>
                    </CardFooter>
               </Card>
             )
        })}
       
    </div>
  )
}

export default CardComponent2

const Images = [ 
    
    {id: 1, img: "/images3/jacket1.webp"},
    {id: 2, img: "/images3/jacket2.webp"},
    {id: 3, img: "/images3/hat1.webp"},
    {id: 4, img: "/images3/jacket3.webp"},
    {id: 5, img: "/images3/jacket4.webp"},
    {id: 6, img: "/images3/jacket5.webp"},
    
   ]
   