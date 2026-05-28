import { useEffect, useState } from 'react'
import { getProductById } from '../services/productService'
import type { Product } from '../types/product'

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    void getProductById(id)
      .then((result) => {
        if (active) {
          setProduct(result)
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [id])

  return { product, loading }
}