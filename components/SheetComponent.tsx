"use client"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger, SheetClose} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button" 
import SeparatorComponent from "./Seperator"
import { Truck, ArrowLeftRight, Lock, X, Loader2, Plus, Minus } from "lucide-react"
import { useShoppingCart} from "@/context/MenShoppingCartContext"
 

type Sizes = {
  size_id: number
  size_name: string
}

type Details = {
  id: number
  imageUrl: string
  title: string
  color: string
  price: number
  sizes?:Sizes[]
}

type Cart1 = {
  OnCart: (items: Details) => void
  spinner: boolean
  items: Details

}
type Cart2 = {
  cart2: Details[]

}

type SheetDetails = {
  sheet: Details 
  className: string
}


const SheetComponent = ({sheet, className}: SheetDetails) => {
  const { handleOpenCart, handleAddToCart, openCart, loading, addCartItems, handleActiveButton } = useShoppingCart()
  
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
            {openCart ? <Cart2  cart2={addCartItems} /> :
            <Cart1
             items={sheet} 
             spinner={loading}
             OnCart={()=>handleAddToCart(sheet)}
              />}
        </SheetContent>
        
      </Sheet>
    </div>
  )
}

export default SheetComponent



export const Cart1 =({
  items, 
  spinner, 
  OnCart,
 }: Cart1) => {

  const { handleActiveButton, active } = useShoppingCart()
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
       <Button disabled={spinner === true} className="rounded-none bg-black text-white hover:bg-white hover:text-black  border border-black">PAY</Button>
   </div>
   </>
  )
}


export function Cart2({cart2}: Cart2){

   return (
    <>
    
      <div className="flex flex-col justify-center items-center gap-8 mt-32">
        <h1 className=" text-2xl font-medium">Cart</h1>
        <SeparatorComponent className="bg-black"/>
        <div className="flex flex-col gap-10 max-h-[45vh] overflow-y-auto scrollbar-none">
         {cart2.map((items, index) => {
           return (
          <div key={items.id} className="flex gap-2 items-center  ">
           <img src={items.imageUrl} width={180} height={180} />

           <div className="flex flex-col gap-3 ">
             <h5>1X - {items.title}</h5>
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
                      <Minus  className="text-slate-500 cursor-pointer" />
                      <span>1</span>
                      <Plus className="text-slate-500 cursor-pointer"/>
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

     
          {cart2.map((items)=> {
            return (
              <div key={items.id} className="flex flex-col justify-center gap-2 h-[100px] fixed bottom-0 w-[460px]">
              <div className="flex justify-between">
              <h3>TOTAL IN CART</h3>
              <span>{items.price}</span>
            </div>
            <Button className="rounded-none bg-black text-white hover:bg-white hover:text-black  border border-black">PAY</Button>
            </div> 
            )
          })}    
     
    </>
   )
}



