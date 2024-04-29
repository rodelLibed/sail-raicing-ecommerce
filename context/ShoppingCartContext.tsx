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

     
    const handleAddToCart = async (itemProps : CartItems) => {
       const productItem = addCartItems.find((items) => items.id === itemProps.id)
       if(productItem){
         setLoading(true)
         await new Promise (resolve => setTimeout(resolve, 3000))
         setAddCartItems(addCartItems.map(items => {
             return items.id === itemProps.id ? {...items, price: items.price + itemProps.price, quantity: items.quantity + 1} : items
         }))
         setLoading(false)
         setOpenCart(true)
       }else{
         setLoading(true)
         await new Promise (resolve => setTimeout(resolve, 3000))
         setAddCartItems([...addCartItems, {...itemProps,  quantity: 1}])
         setLoading(false)
         setOpenCart(true)
       } 
    
    }

    const handleRemoveCart = (item:CartItems) => {
       const productItem = addCartItems.find((items) => items.id === item.id)
       if(productItem){
          setAddCartItems(addCartItems.filter((items)=> items.id !== item.id))
       } else{
          setAddCartItems([...addCartItems, item])
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

    const handleIncreaseQuantity = (itemProps:CartItems) => {
        const productItem = addCartItems.find((items)=> items.id === itemProps.id)
        if(productItem){
         const originalPrice = itemProps.price
          setAddCartItems(addCartItems.map(items => {
            return items.id === itemProps.id ? {...items, price: items.price + originalPrice, quantity: items.quantity + 1} : items
        })) 
        }
               
    }

    const handleDecreaseQuantity = (itemProps: CartItems) => { 
        setAddCartItems(addCartItems.map((items) => {
          return items.id === itemProps.id ? {...items, quantity: items.quantity - 1} : items
       }))
      
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
         handleDecreaseQuantity,
         handleRemoveCart
          }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}