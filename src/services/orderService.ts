import { addDoc, collection } from 'firebase/firestore'
import { db } from './firebase'
import type { Order } from '../types/order'

export async function saveOrder(order: Order): Promise<string | null> {
  if (!db) {
    return null
  }

  const docRef = await addDoc(collection(db, 'orders'), order)
  return docRef.id
}