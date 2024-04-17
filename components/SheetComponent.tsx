"use client"

import { Sheet, SheetContent, SheetTrigger, SheetClose} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button" 
import { X } from "lucide-react"
import { useShoppingCart} from "@/context/ShoppingCartContext"
import { SheetDetails } from "@/lib/types"
import Cart1 from "./Cart1"
import Cart2 from "./Cart2"
import PayMentCart from "./PayMentCart"
 



const SheetComponent = ({sheet, className}: SheetDetails) => {
  const { handleOpenCart, handleAddToCart, openCart, loading, addCartItems, handleActiveButton, paymentCart } = useShoppingCart()
  
  return (
   <div className={className}>
      <Sheet onOpenChange={handleOpenCart}>
        <SheetTrigger asChild>
         <div className="flex flex-wrap justify-center items-center  gap-2 mt-5 ">
          {sheet.sizes?.map((size)=> {
             return (
              <Button key={size.size_id} onClick={()=>handleActiveButton(size.size_id)}
              className="bg-white text-black
             hover:bg-black hover:text-white transition
               ease-in-out duration-200 border border-black 
               w-5 h-5 p-[14px] md:p-4" size="sm">
                  {size.size_name}
             </Button> 
             )
          })}
               
         </div>
        </SheetTrigger>
       
        <SheetContent  side={"right"} className="bg-white ">
            <SheetClose onClick={handleOpenCart} className="text-black font-extrabold absolute top-5 right-5"><X /></SheetClose>
            {paymentCart ? 
             <>
              {openCart ? <Cart2  cart2={addCartItems} /> :
              <Cart1
              items={sheet} 
              spinner={loading}
              OnCart={()=>handleAddToCart(sheet)}
                />}
            </> : <PayMentCart/>
            }
        </SheetContent>
        
      </Sheet>
    </div>
  )
}

export default SheetComponent









