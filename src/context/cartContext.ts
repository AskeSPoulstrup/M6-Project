import { createContext } from 'react'
import type { Product } from '../types/product'

type CartItem = {
  product: Product
  quantity: number
}

export type CartContextValue = {
  items: CartItem[]
  itemCount: number
  subtotal: number
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)