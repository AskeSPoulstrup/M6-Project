import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import type { Product } from '../types/product'

export async function getProducts(): Promise<Product[]> {
  if (!db) {
    return []
  }

  const snapshot = await getDocs(collection(db, 'products'))
  return snapshot.docs.map((entry) => {
    const data = entry.data() as Omit<Product, 'id'>

    return { id: entry.id, ...data }
  })
}

export async function getProductById(id: string): Promise<Product | null> {
  if (!db) {
    return null
  }

  const snapshot = await getDoc(doc(db, 'products', id))
  if (!snapshot.exists()) {
    return null
  }

  const data = snapshot.data() as Omit<Product, 'id'>
  return { id: snapshot.id, ...data }
}