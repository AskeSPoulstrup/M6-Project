import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { db, isFirebaseConfigured } from './firebase'
import type { Product } from '../types/product'

type ProductDocument = {
  name?: string
  slug?: string
  price?: number
  description?: string
  shortDescription?: string
  image?: string
  imageUrl?: string
  category?: string
  subcategory?: string
  brand?: string
  unit?: string
  inStock?: boolean
  stockQuantity?: number
  featured?: boolean
}

function normalizeAssetPath(value: string | undefined): string {
  if (!value) return ''
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  return `/${value.replace(/^[./\\]+/, '')}`
}

function normalizeProduct(id: string, raw: ProductDocument): Product {
  const description = raw.description ?? raw.shortDescription ?? ''
  const imageUrl = normalizeAssetPath(raw.imageUrl ?? raw.image)
  return {
    id,
    name: raw.name ?? 'Untitled product',
    slug: raw.slug ?? id,
    price: raw.price ?? 0,
    description,
    shortDescription: raw.shortDescription ?? description,
    image: normalizeAssetPath(raw.image ?? imageUrl),
    imageUrl,
    category: raw.category ?? 'uncategorized',
    subcategory: raw.subcategory,
    brand: raw.brand,
    unit: raw.unit,
    inStock: raw.inStock,
    stockQuantity: raw.stockQuantity,
    featured: raw.featured,
  }
}

export async function getProducts(): Promise<Product[]> {
  if (!isFirebaseConfigured || !db) return []
  const snapshot = await getDocs(collection(db, 'products'))
  return snapshot.docs.map((e) => normalizeProduct(e.id, e.data() as ProductDocument))
}

export async function getFeaturedProducts(): Promise<Product[]> {
  if (!isFirebaseConfigured || !db) return []
  const q = query(collection(db, 'products'), where('featured', '==', true))
  const snapshot = await getDocs(q)
  return snapshot.docs.map((e) => normalizeProduct(e.id, e.data() as ProductDocument))
}

export async function getProductById(id: string): Promise<Product | null> {
  if (!isFirebaseConfigured || !db) return null
  const snapshot = await getDoc(doc(db, 'products', id))
  if (!snapshot.exists()) return null
  return normalizeProduct(snapshot.id, snapshot.data() as ProductDocument)
}
