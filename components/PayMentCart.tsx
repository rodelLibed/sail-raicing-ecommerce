import SeparatorComponent from "./Seperator"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function PayMentCart(){
    return (
       <>
       <div className="flex flex-col justify-center gap-8 mt-20">
           <h1 className="text-2xl text-center font-medium">Payment</h1>
           <SeparatorComponent className="bg-black/20 "/>
          
          {/*  */}

           <div className="max-h-[64vh] overflow-y-auto scrollbar-none py-2">
             <span className=" font-semibold text-black/30">Discount</span>
              <div className="mt-10">
                <h1 className="text-black font-bold text-xl">Your Information</h1> 
                <div className="flex flex-col gap-5 h-[200px] ">
                    <Input className="focus-visible:ring-0 rounded-none border border-black" type="text" placeholder="Enter your email" />
                    <Input className="focus-visible:ring-0 rounded-none border border-black" type="text" placeholder="Enter your email" />
                    <Input className="focus-visible:ring-0 rounded-none border border-black" type="text" placeholder="Enter your email" />
                </div> 
              </div>

              {/*  */}
             <div>
               <Button className="w-full py-7 bg-black">Continue</Button>
             </div>
               {/*  */}
              <div className="flex flex-col gap-2 mt-5">
                 <h1 className="text-black text-xl font-bold">Delivery</h1>
                 <div className="bg-gray-300 p-5 rounded-xl">
                    <p className="text-black">Please enter your billing address details first</p>
                 </div>
              </div>

           </div> 
       </div>
       </>
    )
}
