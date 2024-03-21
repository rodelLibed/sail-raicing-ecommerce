
import Image from 'next/image'
import Link from 'next/link'
import CarouselComponent from '@/components/Carousel'
import CardComponent from '@/components/Card'
import VideoCarousel from '@/components/VideoCarousel'
import CardComponent2 from '@/components/Card2'
import CarouselComponent2 from '@/components/Carousel2'
import { Button, buttonVariants } from '@/components/ui/button'
import HorizontalScrollCarousel from '@/components/HorizontalScrollCarousel'



export default function Home() {
 
  

  return (
    <main className=' ' >
       {/* second section */}
      <HorizontalScrollCarousel />
        {/* third section */}
        <section className=' text-white grid grid-rows-2 grid-flow-row md:grid-rows-1 md:grid-cols-2 p-4'>
           <div className='row-start-2  md:row-start-1 flex justify-center items-center '>
              <div className='space-y-5 text-center md:text-start px-10 lg:px-16'>
                  <span className='text-sm md:text-xl'>Explore</span>
                  <h1 className='uppercase text-lg md:text-4xl font-medium'>Race edition gtx wool coat</h1>
                    <p className='text-sm leading-normal'>Explore the Race Edition GTX Wool Coat constructed in a premium Tecnowool by Pontetorto.
                      Lined with Gore-Tex® Spider&nbsp;Liner which makes the coat waterproof and windproof. The coat features a PFC-free DWR treatment to prevent the wool from getting wet. The body of the coat is insulated with 40g Primaloft Black Eco for optimal warmth. The hood of the coat is insulated with 90/10 certified down and feathers, for more structure. 
                      The down-filled hood has a welded flap with
                        a cohaesive stopper solution at the back.&nbsp;
                    </p>
                    <Button asChild className=' w-48 bg-black hover:bg-white hover:text-black border border-white'>
                      <Link href="/" >Explore</Link>
                    </Button>
                    
              </div>
           </div>
           <Image src="/content-slider-wool.webp" height={500} width={500} alt='coat image' className='h-full w-full' />
       </section>
        {/* fourth section */}
        <section className=' text-white md:mt-20'>
          <div className="flex flex-col justify-center items-center ">
              <div className='text-center space-y-2'>
                <h3 className='text-sm'>Explore</h3>
                <h1 className='uppercase text-2xl font-medium'>Expidition Gear</h1>
              </div>

              <div className='mt-10 '>
                  <CarouselComponent className="w-full max-w-md md:hidden " />
                   <CardComponent className="hidden md:grid grid-cols-3 gap-5 px-14 lg:px-24"  />
                 
              </div>
          </div>
        </section>

        {/* fifth Video Section */}
       <section className='mt-10 md:mt-20'>
          <VideoCarousel/>
       </section>

       {/* sixth Banner Section */}

       <section className=' grid grid-cols-1 lg:grid-cols-2 place-content-center mt-5 p-3 md:p-28 text-white'>
         <div className=' pl-0 lg:pl-14'>
           <span className='uppercase text-xs font-medium'>Official clothing partner</span>
           <h1  className='text-4xl font-semibold '>ALINGHI RED BULL <br /> RACING</h1>
        </div>
        <div>
            <p className='text-sm font-medium leading-5'>
            Sail Racing International has been appointed Official Clothing Supplier to Alinghi 
            Red Bull Racing, challenger of the 37th America’s Cup. With experience from multiple America’s 
            Cup campaigns, Sail Racing is now ready to take on Alinghi Red Bull Racing. Sail Racing will provide 
            the team with technical sailing gear, protective wear, and onshore gear. Sail Racing will also design 
            and develop the team’s official replica collection that will be available worldwide
              at sailracing.com, at the team base and at the coming events around the world.
            </p>
         </div>
       </section>

        {/* 7th  Section */}
        <section className='text-white mt-20'>
            <div className='flex flex-col justify-center items-center'>
              <div className='text-center space-y-2'>
                  <h3 className='text-sm'>Official Clothing Partner</h3>
                  <h1 className='uppercase text-2xl font-medium'>ALINGHI RED BULL RACING</h1>
              </div>
              <div className="mt-10">
                <CardComponent2 className="hidden md:grid grid-cols-3 gap-5 px-14 lg:px-24"/>
                <CarouselComponent2 className="w-full max-w-md md:hidden"/>
              </div>
              </div>
        </section>

        {/* 8th Section */}
         <section className=' h-[50vh] md:h-screen relative flex justify-center items-center  '>
            <div className='text-center space-y-2 z-10 text-white'>
                  <h3 className='text-sm'>Explore</h3>
                  <h1 className='uppercase text-2xl font-medium'>lightweight down</h1>
            </div>          
          
            <Image
              alt="big-spraydown image"
              src="/big-spraydown-2.webp"
              fill
              quality={100}
              
              style={{
                objectFit: 'contain', // cover, contain, none
              }}
            /> 
         </section>

         {/* Last Section */}

         <section className='h-[400px] p-5 lg:p-20 '>
            <div className='flex flex-col justify-center items-center gap-5 text-white/50 text-sm font-extralight '>
              <p className='text-center lg:px-48'>
              Sail Racing is a highly specialized company that is focused on constructing 
              the most innovative and technical gear for high speed sailing. Our aim is to 
              develop durable and long-lasting performance garments for future generations 
              and high speed sailors using innovative and environmentally sustainable production
              methods and fabrics.
              </p>
              <p className='text-center lg:px-48'>
                Our knowledge and commitment for sailing extends beyond the sea, as we also 
                provide winter expedition gear designed to withstand the challenges of extreme
                cold environments.
              </p>
              <p className='text-center lg:px-48'>
              Sign up for latest news about our products, stories and exclusive VIP sale
              invitation online and at our concept stores Sail Racing Club House.
              </p>
            </div>

            <div className='flex flex-col md:flex-row  justify-center mt-10'>
                <input
                 type="text"
                 className='px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative  bg-white  text-sm border-0 shadow outline-none focus:outline-none focus:ring  pl-10' 
                 placeholder='EMAIL ADDRESS'
                 required/>
                <button className='text-white border border-white/30 px-5 py-2 '>Subscribe</button>
            </div>
         </section>
         <div className='h-10'></div> 
    
    </main>
  )
}



