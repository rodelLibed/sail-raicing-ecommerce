"use client"

import { createContext, useContext,  useState } from "react"
import { type ShoppingCart, CartItems } from "@/lib/shoppingcartypes"


type ShoppingCartProps = {
   children: React.ReactNode
}


 const ShoppingCartContext = createContext({} as ShoppingCart)

export function useShoppingCart(){
     return useContext(ShoppingCartContext)
}

export default function MenShoppingCartProvider({children} : ShoppingCartProps){
   
    const [addCartItems, setAddCartItems] = useState<CartItems[]>([])
    const [loading, setLoading] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [active, isActive] = useState(0)
    const [paymentCart, setPaymentCart] = useState(true)

     
    const handleAddToCart = async (item : CartItems) => {
       const productItem = addCartItems.find((items) => items.id === item.id)
       if(productItem){
         setLoading(true)
         await new Promise (resolve => setTimeout(resolve, 3000))
         setAddCartItems(addCartItems.map(items => {
             return items.id === item.id ? {...items, price: items.price + item.price} : items
         }))
         setLoading(false)
         setOpenCart(true)
       }else{
         setLoading(true)
         await new Promise (resolve => setTimeout(resolve, 3000))
         setAddCartItems([...addCartItems, item])
         setLoading(false)
         setOpenCart(true)
       } 
    
    }

    const handleOpenCart = () => {
      setTimeout(()=> {
         console.log("Open Cart....")
      }, 3000)
      setOpenCart(false)
      setPaymentCart(true)
    }

    const handlePaymentCart = () => {
       setPaymentCart(!paymentCart)
    }

    const handleIncreaseQuantity = (id:number) => {
        const productQuantity = addCartItems.find((items)=>items.id === id)   
        if(productQuantity){
          setAddCartItems(addCartItems.map((items) => {
            return items.id === id ? {...items, quantity: items.quantity + 1} : items
         }))
        }
    }

    const handleDecreaseQuantity = (id:number) => {
      const productQuantity = addCartItems.find((items)=>items.id === id)   
      if(productQuantity){
        setAddCartItems(addCartItems.map((items) => {
          return items.id === id ? {...items, quantity: items.quantity - 1} : items
       }))
      }
    }

    const handleActiveButton = (id:number) => {
      isActive(id)
    }



     return (
        <ShoppingCartContext.Provider value={{ 
         addCartItems,
         handleAddToCart, 
         loading, 
         openCart,
         handleOpenCart, 
         handleActiveButton, 
         active, 
         paymentCart, 
         handlePaymentCart,
         handleIncreaseQuantity,
         handleDecreaseQuantity
        
          }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}