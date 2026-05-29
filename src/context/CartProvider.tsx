import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { CartContext, type CartContextValue } from './cartContext'

type CartItem = CartContextValue['items'][number]

type CartProviderProps = {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((total, item) => total + item.quantity, 0)
    const subtotal = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    )

    return {
      items,
      itemCount,
      subtotal,
      addToCart: (product, quantity = 1) => {
        setItems((cur) => {
          const existing = cur.find((i) => i.product.id === product.id)
          if (existing) {
            return cur.map((i) =>
              i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i,
            )
          }
          return [...cur, { product, quantity }]
        })
      },
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return
        setItems((cur) =>
          cur.map((i) => (i.product.id === productId ? { ...i, quantity } : i)),
        )
      },
      removeFromCart: (productId) => {
        setItems((cur) => cur.filter((i) => i.product.id !== productId))
      },
      clearCart: () => {
        setItems([])
      },
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
