import { type Cart2 } from "@/lib/types"
import { useShoppingCart } from "@/context/ShoppingCartContext"
import SeparatorComponent from "./Seperator"
import { Button } from "./ui/button"
import { Minus, Plus, X } from "lucide-react"


export default function Cart2({cart2}: Cart2){
    const { handlePaymentCart, handleIncreaseQuantity, handleDecreaseQuantity } = useShoppingCart()
    return (
     <>
     
       <div className="flex flex-col justify-center items-center gap-8 mt-24">
         <h1 className=" text-2xl font-medium">Cart</h1>
         <SeparatorComponent className="bg-black/20"/>
         <div className="flex flex-col gap-10 max-h-[45vh] overflow-y-auto scrollbar-none">
          {cart2.map((items) => {
            return (
           <div key={items.id} className="flex gap-2 items-center  ">
            <img src={items.imageUrl} width={180} height={180} />
 
            <div className="flex flex-col gap-3 ">
              <h5> {items.quantity}X - {items.title}</h5>
               <div className="flex gap-10">
                   <div className="flex flex-col gap-1">
                       <span className="text-slate-600 text-xs font-medium">COLOR</span>
                       <span className="text-slate-600 text-xs font-medium"> SIZE</span>
                   </div>
                     <div className="flex flex-col gap-1">
                       <span className="text-slate-600 text-xs font-medium">{items.color}</span>
                       <span className="text-slate-600 text-xs font-medium">XL</span>
                   </div>
               </div>
 
               <div className="flex gap-20">
                   <div className="flex-col">
                     <h6 className="text-xs font-medium text-slate-500">ITEM IS IN STOCK</h6>
                     <div className="flex gap-5">
                       <button disabled={items.quantity == 0} onClick={()=>handleDecreaseQuantity(items.id)} className="text-slate-500 cursor-pointer" ><Minus /></button>
                       <span>{items.quantity}</span>
                       <button onClick={()=>handleIncreaseQuantity(items.id)} className="text-slate-500 cursor-pointer" ><Plus  /></button>
                     </div>
                   </div>
                   <div className="flex-col">
                     <h6 className="text-xs font-medium text-slate-500">PRICE {items.price}</h6>
                     <X />
                   </div>
                  
               </div>
            </div> 
               
         </div>
            )
          })
           
          }
          </div>  
       </div>
 
      
           {cart2.map((items, idx)=> {
             return (
               <div  key={items.id} className="flex justify-center">
                   <div className="flex flex-col justify-center gap-2 bg-white h-[80px] fixed bottom-0 w-[500px] px-3">
                   <div className="flex justify-between">
                   <h3>TOTAL IN CART</h3>
                   <span>{items.price}</span>
                 </div>
                 <Button onClick={handlePaymentCart} className="rounded-none bg-black text-white hover:bg-white hover:text-black  border border-black">PAY</Button>
                 </div> 
             </div>
             )
           })}    
      
     </>
    )
 }
 