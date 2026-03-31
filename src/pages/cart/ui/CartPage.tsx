import { useCartStore } from "@/entities/cart/model/store"
import { useNavigate } from "react-router-dom"

export const CartPage = () => {
    const navigate = useNavigate()
    const { items, totalPrice, removeFromCart, clearCart, decrementItemCart, addToCart } = useCartStore()

    return (
        <div className="min-h-screen bg-zinc-950 text-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                <button
                    onClick={() => navigate(-1)}
                    className="text-zinc-400 hover:text-white mb-8 flex items-center gap-2 transition-colors  cursor-pointer"
                >
                    ← Back
                </button>

                <h1 className="text-3xl font-bold mb-8">Cart</h1>

                {items.length === 0 && (
                    <p className="text-zinc-400">Your cart is empty</p>
                )}

                {items.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 items-start">
                        <div className="flex flex-col gap-4">
                            {items.map((item) => (
                                <div key={item.product.id} className="bg-zinc-900 rounded-2xl border border-zinc-800 p-4 flex flex-col  items-center sm:flex-row  gap-4 ">
                                    <img
                                        src={item.product.image}
                                        alt={item.product.title}
                                        className="w-16 h-16 object-contain bg-zinc-800 rounded-xl p-1 shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-sm truncate">{item.product.title}</p>
                                        <div className="text-zinc-400 text-sm mt-1">
                                            Qty: {item.quantity}
                                            <div className="flex items-center gap-2 pt-2 ">
                                                <button onClick={() => addToCart(item.product)} className="w-6 h-6 rounded-full bg-zinc-700 hover:bg-zinc-600 text-white transition-colors">+</button>
                                                <button onClick={() => decrementItemCart(item.product.id)} className="w-6 h-6 rounded-full bg-zinc-700 hover:bg-zinc-600 text-white transition-colors">-</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                                        <button
                                            onClick={() => removeFromCart(item.product.id)}
                                            className="text-xs text-red-400 hover:text-red-300 transition-colors mt-1  cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 flex flex-col gap-4 ">
                            <div>
                                <p className="text-zinc-400 text-sm">Total</p>
                                <p className="text-3xl font-bold">${totalPrice.toFixed(2)}</p>
                            </div>
                            <button className="w-full py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition-colors cursor-pointer">
                                Checkout
                            </button>
                            <button
                                onClick={() => clearCart()}
                                className="w-full py-3 rounded-full border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors text-sm  cursor-pointer"
                            >
                                Clear cart
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}