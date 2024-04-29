import React from "react"

export type Sizes = {
    size_id: number
    size_name: string
  }
  
  export type Details = {
    id: number
    imageUrl: string
    title: string
    color: string
    price: number
    quantity: number
    sizes?:Sizes[]
  }
  
export type Cart1 = {
    OnCart: (items: Details) => void
    spinner: boolean
    items: Details
  
  }
  export type Cart2 = {
    cart2: Details[]
   
  
  }
  
 export type SheetDetails = {
    sheet: Details 
    className: string
  }

  export type GridCardData = {
     cardData: Details[]
  }
  