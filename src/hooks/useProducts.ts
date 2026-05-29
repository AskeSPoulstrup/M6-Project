import { useEffect, useState } from 'react'
import { getProducts } from '../services/productService'
import type { Product } from '../types/product'
import { isFirebaseConfigured } from '../services/firebase'

const firebaseErrorMessage = isFirebaseConfigured
  ? null
  : 'Firebase mangler stadig miljøvariabler lokalt. Tilføj VITE_FIREBASE_* for at hente produkter fra databasen.'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(isFirebaseConfigured)
  const [error, setError] = useState<string | null>(firebaseErrorMessage)

  useEffect(() => {
    let active = true

    if (!isFirebaseConfigured) {
      return () => {
        active = false
      }
    }

    void getProducts()
      .then((result) => {
        if (active) {
          setProducts(result)
        }
      })
      .catch((fetchError: unknown) => {
        if (active) {
          setError(
            fetchError instanceof Error
              ? fetchError.message
              : 'Kunne ikke hente produkter fra Firebase.',
          )
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
  }, [])

  return { products, loading, error }
}