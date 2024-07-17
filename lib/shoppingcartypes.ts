export type ShoppingCart = {
    addCartItems: CartItems[]
    handleAddToCart: (item: CartItems) => void
    handleRemoveCart: (item:CartItems) => void
    handleOpenCart: () => void
    handleActiveButton: (size:Sizes) => void
    handlePaymentCart: () => void
    handleIncreaseQuantity: (itemProps:CartItems) => void
    handleDecreaseQuantity: (itemProps:CartItems) => void
    active: number
    loading: boolean
    openCart: boolean
    paymentCart: boolean
   
  }


  
 export type Sizes = {
     size_id: number
     size_name: string
  }
  
  
 export type CartItems = {
     id: number
     imageUrl: string
     title: string
     color: string
     price: number
     quantity: number
     totalPrice?: number
     sizes?: Sizes[]
     
  }

  
  