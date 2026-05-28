import type { Customer } from './customer'
import type { Product } from './product'

export type OrderItem = {
  product: Product
  quantity: number
}

export type Order = {
  id?: string
  customer: Customer
  items: OrderItem[]
  total: number
  createdAt: string
}