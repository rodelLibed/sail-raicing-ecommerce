import Cart2 from "./Cart2"
import { Sheet, SheetContent, SheetTrigger, SheetClose} from "@/components/ui/sheet"
import { X, ShoppingBag } from "lucide-react"
import { useShoppingCart } from "@/context/ShoppingCartContext"
import PayMentCart from "./PayMentCart"


const ShoppingCart = () => {
    const { addCartItems, paymentCart, handleOpenCart } = useShoppingCart()

  return (
    <div>
       <Sheet onOpenChange={handleOpenCart}>
        <SheetTrigger asChild >
            <div className="relative">
           <ShoppingBag className="text-white w-5 h-5 cursor-pointer" />
             <span className={`${addCartItems.length === 0 ? 'hidden' : 'block'} absolute -top-2 -right-1 bg-white h-2 w-2 rounded-full`}></span>
           </div>
        </SheetTrigger>
       
        <SheetContent side={"right"} className="bg-white ">
            <SheetClose className="text-black font-extrabold absolute top-5 right-5"><X /></SheetClose>
            {paymentCart ? <Cart2 cart2={addCartItems} /> : <PayMentCart/>}
             
        </SheetContent>
        
      </Sheet>
    </div>
  )
}

export default ShoppingCart






