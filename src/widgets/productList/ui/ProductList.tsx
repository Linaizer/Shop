import { useProductStore } from "@/entities/product"
import { useEffect } from "react"
import { ProductCard } from "@/entities/product"
import { CategoryFilter } from "@/features/filterByCategory"
import { Loader } from "@/shared"
import { AlertTriangle } from "lucide-react"

interface ProductListProps {
    selectedCategory: string | null
    onCategorySelect: (category: string | null) => void
}

export const ProductList = ({ selectedCategory, onCategorySelect }: ProductListProps) => {
    const { products, fetchProduct, status, categories, fetchCategories, fetchProductsByCategory } = useProductStore()
    useEffect(() => {
        if (selectedCategory) {
            fetchProductsByCategory(selectedCategory)
        } else {
            fetchProduct()
        }
    }, [selectedCategory])

    useEffect(() => {
        fetchCategories()
    }, [])

    if (status === 'loading') {
        return <Loader />
    } else if (status === 'error') {
        return (
            <div className="flex flex-col items-center justify-center p-4" >
                <AlertTriangle  size={48} className="text-zinc-400 mb-2" />
                <p className="text-3xl text-zinc-400">Something went wrong...</p>
                <button
                    onClick={fetchProduct}
                    className="bg-white text-zinc-900 px-6 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors mt-4"
                >
                    Retry
                </button>
            </div>
        )
    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {categories.length > 0 && (
                <CategoryFilter categories={categories} selectedCategory={selectedCategory} onSelect={onCategorySelect} />
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}