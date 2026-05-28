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
        setItems((currentItems) => {
          const existingItem = currentItems.find((item) => item.product.id === product.id)

          if (existingItem) {
            return currentItems.map((item) =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            )
          }

          return [...currentItems, { product, quantity }]
        })
      },
      removeFromCart: (productId) => {
        setItems((currentItems) => currentItems.filter((item) => item.product.id !== productId))
      },
      clearCart: () => {
        setItems([])
      },
    }
  }, [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}