export type ShoppingCart = {
    addCartItems: CartItems[]
    handleAddToCart: (item: CartItems) => void
    handleOpenCart: () => void
    handleActiveButton: (id:number) => void
    handlePaymentCart: () => void
    handleIncreaseQuantity: (id:number) => void
    handleDecreaseQuantity: (id:number) => void
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
     sizes?: Sizes[]
     
  }
  