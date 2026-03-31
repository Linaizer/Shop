import { useCartStore } from "@/entities/cart/model/store"
import { useUserStore } from "@/entities/user"

export const ProfilePage = () => {
    const { token, logout } = useUserStore()
    const { items, totalPrice } = useCartStore()
    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center flex-col text-white px-4">
            <div className="w-full max-w-md flex flex-col gap-4">

                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 flex flex-col gap-2">
                    <p className="text-zinc-400 text-sm uppercase tracking-wider">Account</p>
                    <p className="text-white font-medium truncate">Token: {token ?? '—'}</p>
                </div>

                <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 flex flex-col gap-3">
                    <p className="text-zinc-400 text-sm uppercase tracking-wider">Cart</p>
                    <div className="flex justify-between">
                        <span className="text-zinc-400">Items</span>
                        <span className="font-medium">{items.length}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-zinc-400">Total</span>
                        <span className="font-bold text-xl">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                <button onClick={logout} className="w-full py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-200 transition-colors">
                    Logout
                </button>
            </div>
        </div>
    )
}