
import HorizontalScrollCarousel from '@/components/HorizontalScrollCarousel'
import Image from 'next/image'


export default function Home() {
 
  

  return (
    <main className='w-full h-full ' >
       {/* second section */}
       <HorizontalScrollCarousel/>
       {/* third section */}
       <section className='h-full text-white grid grid-rows-2 md:grid-rows-1 md:grid-cols-2'>
           <div className='row-start-2  md:row-start-1 flex justify-center items-center '>
              <div className='space-y-5 text-center md:text-start px-10 md:px-16'>
                  <span className='text-sm md:text-xl'>Explore</span>
                  <h1 className='uppercase text-lg md:text-4xl font-medium'>Race edition gtx wool coat</h1>
                    <p className='text-sm leading-normal'>Explore the Race Edition GTX Wool Coat constructed in a premium Tecnowool by Pontetorto.
                      Lined with Gore-Tex® Spider&nbsp;Liner which makes the coat waterproof and windproof. The coat features a PFC-free DWR treatment to prevent the wool from getting wet. The body of the coat is insulated with 40g Primaloft Black Eco for optimal warmth. The hood of the coat is insulated with 90/10 certified down and feathers, for more structure. 
                      The down-filled hood has a welded flap with
                        a cohaesive stopper solution at the back.&nbsp;
                    </p>
              </div>
           </div>
           <Image src="/content-slider-wool.webp" height={500} width={500} alt='coat image' className='h-full w-full' />
       </section>
        {/* fourth section */}
        <section className='h-screen text-white'>
            <h1>heloo</h1>
        </section>
    </main>
  )
}




