import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useProductStore } from "@/entities/product"
import { motion } from "framer-motion"
import { useCartStore } from "@/entities/cart/model/store"
import { Loader } from "@/shared"

export const ProductPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { selectedProductById, fetchProductById, status } = useProductStore()
    const { addToCart } = useCartStore()

    useEffect(() => {
        fetchProductById(Number(id))
    }, [])

    if (status === 'loading') {
        return  <Loader/>
    }

    if (!selectedProductById) return null

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <button
                    onClick={() => navigate(-1)}
                    className="text-zinc-400 hover:text-white mb-8 flex items-center gap-2 transition-colors"
                >
                    ← Back
                </button>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <div className="bg-zinc-900 rounded-2xl p-8 flex items-center justify-center">
                        <img
                            src={selectedProductById.image}
                            alt={selectedProductById.title}
                            className="max-h-96 object-contain"
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <span className="text-zinc-500 text-sm uppercase tracking-wider">
                            {selectedProductById.category}
                        </span>
                        <h1 className="text-3xl font-bold">{selectedProductById.title}</h1>
                        <p className="text-zinc-400 leading-relaxed">{selectedProductById.description}</p>
                        <div className="flex items-center gap-2 text-zinc-400 text-sm">
                            ⭐ {selectedProductById.rating.rate} ({selectedProductById.rating.count} reviews)
                        </div>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-4xl font-bold">${selectedProductById.price}</span>
                            <button className="bg-white text-zinc-900 px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors cursor-pointer"
                                onClick={() => {
                                    addToCart(selectedProductById)
                                }}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}