"use client"

import { createContext, useContext, useEffect, useState } from "react"


type ShoppingCartProps = {
   children: React.ReactNode
}

export type ShoppingCart = {
  addCartItems: CartItems[]
  handleAddToCart: (item: CartItems) => void
  handleOpenCart: () => void
  handleActiveButton: (id:number) => void
  active: number
  loading: boolean
  openCart: boolean
}

type Sizes = {
   size_id: number
   size_name: string
}


type CartItems = {
   id: number
   imageUrl: string
   title: string
   color: string
   price: number
   sizes?: Sizes[]
   
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
     
    const handleAddToCart = async(item : CartItems) => {
       const productItem = addCartItems.find((items) => items.id === item.id)
       if(productItem){
         setLoading(true)
         await new Promise (resolve => setTimeout(resolve, 3000))
         setAddCartItems(addCartItems.map((items)=> {
             return items.id === item.id ? {...items, price: items.price + 4200} : items
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
    const handleOpenCart = async() => {
      await new Promise ((resolve)=> setTimeout(resolve, 1000))
      setOpenCart(false)
    }

    const handleActiveButton = (id:number) => {
       isActive(id)
    }


     return (
        <ShoppingCartContext.Provider value={{ addCartItems, handleAddToCart, loading, openCart, handleOpenCart, handleActiveButton, active }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}