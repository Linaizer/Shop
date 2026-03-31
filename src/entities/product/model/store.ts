import type { Product } from "./types"
import { create } from 'zustand'
import { getProducts, getCategories, getProductByCategory, getProductById } from "../api"

interface ProductStoreProps {
    products: Product[]
    status: 'idle' | 'success' | 'error' | 'loading'
    error: string | null
    fetchProduct: () => void
    categories: string[]
    fetchCategories: () => void
    fetchProductsByCategory: (category: string) => void
    fetchProductById: (id: number) => void
    selectedProductById: Product | null

}

export const useProductStore = create<ProductStoreProps>((set) => ({
    products: [],
    status: 'idle',
    error: null,
    categories: [],
    selectedProductById: null,
    fetchProduct: async () => {
        set({ status: 'loading' })
        try {
            const product = await getProducts()
            set({ products: product, status: 'success' })
        } catch (e) {
            set({ error: "Erro loading", status: "error" })
        }

    },
    fetchCategories: async () => {
        set({ status: "loading" })
        try {
            const categories = await getCategories()
            set({ categories: categories, status: 'success' })
        } catch (e) {
            set({ error: "Error loadning...", status: 'error' })
        }
    },
    fetchProductsByCategory: async (category: string) => {
        set({ status: 'loading' })
        try {
            const productCategory = await getProductByCategory(category)
            set({ products: productCategory, status: 'success' })
        } catch (e) {
            set({ error: 'Error loadnig...', status: 'error' })
        }
    },
    fetchProductById: async (id:number) => {
        set({ status: 'loading' })
        try {
            const productById = await getProductById(id)
            set({ status: 'success', selectedProductById: productById })
        } catch (e) {
            set({ error: 'Error loadnig...', status: 'error' })
        }
    }
}))