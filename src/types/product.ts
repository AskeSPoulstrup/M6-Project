export type Product = {
  id: string
  name: string
  slug: string
  price: number
  description: string
  shortDescription?: string
  image?: string
  imageUrl?: string
  category: string
  subcategory?: string
  brand?: string
  unit?: string
  inStock?: boolean
  stockQuantity?: number
  featured?: boolean
}