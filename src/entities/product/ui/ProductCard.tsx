import { Link } from "react-router-dom"
import type { Product } from "../model/types"


export const ProductCard = ({ product }: { product: Product }) => {

  return (
    <Link to={`/product/${product.id}`}>

      <div className="bg-zinc-900 rounded-2xl p-4 flex flex-col gap-3 hover:ring-1 hover:ring-zinc-700 transition-all">
        <div className="bg-zinc-800 rounded-xl flex items-center justify-center h-48 overflow-hidden">
          <img src={product.image} alt={product.title} className="h-full object-contain p-4" />
        </div>
        <span className="text-zinc-500 text-xs uppercase tracking-wider">{product.category}</span>
        <h2 className="text-white text-sm font-medium line-clamp-2">{product.title}</h2>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-white font-bold text-lg">${product.price}</span>
          <span className="text-zinc-400 text-xs">⭐ {product.rating.rate} ({product.rating.count})</span>
        </div>
      </div>
    </Link>
  )
}