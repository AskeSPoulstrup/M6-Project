import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from './firebase'
import type { Recipe } from '../types/recipe'

export async function getRecipes(): Promise<Recipe[]> {
  if (!db) {
    return []
  }

  const snapshot = await getDocs(collection(db, 'recipes'))
  return snapshot.docs.map((entry) => {
    const data = entry.data() as Omit<Recipe, 'id'>

    return { id: entry.id, ...data }
  })
}

export async function getRecipeById(id: string): Promise<Recipe | null> {
  if (!db) {
    return null
  }

  const snapshot = await getDoc(doc(db, 'recipes', id))
  if (!snapshot.exists()) {
    return null
  }

  const data = snapshot.data() as Omit<Recipe, 'id'>
  return { id: snapshot.id, ...data }
}