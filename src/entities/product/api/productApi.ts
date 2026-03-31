import { axiosInstance } from "@/shared"
import type { Product } from "../model/types"

export const getProducts = async (): Promise<Product[]> => {
    const response = await axiosInstance.get<Product[]>('/products')
    return response.data
}

export const getProductById = async (id: number): Promise<Product> => {
    const response = await axiosInstance.get<Product>(`/products/${id}`)
    return response.data
}

export const getCategories = async (): Promise<string[]> => {
    const response = await axiosInstance.get<string[]>(`/products/categories`)
    return response.data
}

export const getProductByCategory = async (category:string): Promise<Product[]> => {
    const response = await axiosInstance.get<Product[]>(`/products/category/${category}`)
    return response.data
}
