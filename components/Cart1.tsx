import Image from "next/image"
import { type Cart1 } from "@/lib/types"
import { useShoppingCart } from "@/context/ShoppingCartContext"
import { Button } from "./ui/button"
import SeparatorComponent from "./Seperator"
import { Truck, ArrowLeftRight, Lock, Loader2 } from "lucide-react"

export default function Cart1 ({
    items, 
    spinner, 
    OnCart,
   }: Cart1)  {
  
    const { handleActiveButton, active, handlePaymentCart } = useShoppingCart()
    return (
     <>
     <div className="h-[60vh] mt-32">
      <div className="flex flex-col gap-3 items-center max-h-[50vh] overflow-y-auto scrollbar-none ">
           <div className="text-center space-y-2" >
             <h1 className="text-black text-xl font-semibold">{items.title}</h1>
             <h6 className="text-black text-xs">{items.color}</h6>
             <span className="text-black font-semibold text-sm">{items.price}</span>
           </div>
           <div className="text-center" >
             <img src={items.imageUrl} height={100} width={100} alt="Sheet Image"/>
             <span className="text-black text-xs">CHOOSE SIZE</span>
           </div>
           <div className="flex flex-wrap justify-center items-center  gap-2 mt-5 ">
            {items.sizes?.map((size)=> {
               return (
                <Button key={size.size_id} onClick={()=>handleActiveButton(size.size_id)}
                 className={`${active === size.size_id ? 'bg-black text-white': 'bg-white text-black' } 
                  hover:bg-black hover:text-white transition ease-in-out duration-200 border border-black 
                   w-5 h-5 p-[14px] md:p-4 `} size="sm">
                    {size.size_name}
                </Button>
               )
            })}
             
           </div>
           <span className="text-black text-xs">SIZE GUIDE </span>
           <div className="flex flex-col justify-center items-center text-black text-xs">
             <span className="flex gap-2"> <Truck className="text-black h-4 w-4"/> 1-2 WEEKDAYS SHIPPING</span><br />
             <span className="flex gap-2"><ArrowLeftRight className="text-black h-4 w-4" />30 DAYS RETURN POLICY, FREE EXCHANGES</span>
           </div>
           <SeparatorComponent className="bg-black"/>
           <h2 className="text-black font-semibold text-lg">Available Color</h2>
           <div className="flex gap-2">
             <Image src="/alingi-red-bull/alingi-jacket1.webp" height={100} width={100} alt="Sheet Image"/>
             <Image src="/alingi-red-bull/alingi-jacket1.webp" height={100} width={100} alt="Sheet Image"/>
             <Image src="/alingi-red-bull/alingi-jacket1.webp" height={100} width={100} alt="Sheet Image"/>
           </div>
       </div>
     </div>
     
     <div className="flex flex-col justify-center gap-2 h-[100px] fixed bottom-5 w-[460px]">
         <h1 className="flex gap-2 justify-center font-medium text-sm"><Lock className="text-green-400 h-4 w-4"  />ITEM IS IN STOCK</h1>
         <Button  onClick={()=>OnCart(items) } disabled={spinner === true} className="rounded-none bg-black text-white hover:bg-white hover:text-black border border-black">
          {spinner ?  <Loader2 className="animate-spin text-slate-400" />: "ADD TO CART"}
         </Button>
         <Button onClick={handlePaymentCart} disabled={spinner === true} className="rounded-none bg-black text-white hover:bg-white hover:text-black  border border-black">PAY</Button>
     </div>
     </>
    )
  }
  