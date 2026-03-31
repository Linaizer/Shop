import { create } from "zustand";
import type { CartItem } from "./types";
import type { Product } from "@/entities/product";


interface CartStoreProps {
    items: CartItem[]
    totalPrice: number
    addToCart: (product: Product) => void
    removeFromCart: (id: number) => void
    clearCart: () => void
    decrementItemCart: (id: number) => void
}

export const useCartStore = create<CartStoreProps>((set, get) => ({
    items: [],
    totalPrice: 0,
    addToCart: (product) => {
        const currentItems = get().items
        const existing = currentItems.find(item => item.product.id === product.id)
        if (existing) {
            const updateItems = currentItems.map(item =>
                item.product.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            set({ items: updateItems })

        } else {
            set({ items: [...currentItems, { product, quantity: 1 }] })
        }
        const newTotal = get().items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
        set({ totalPrice: newTotal })

    },
    removeFromCart: (id) => {
        const removeItem = get().items.filter(item => item.product.id !== id)
        set({ items: removeItem })
        const newTotal = get().items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
        set({ totalPrice: newTotal })
    },
    clearCart: () => {
        set({ items: [] })
        const newTotal = 0
        set({ totalPrice: newTotal })
    },
    decrementItemCart: (id) => {
        const CurrentItems = get().items
        const decrementItem = CurrentItems.find(item => item.product.id === id && item.quantity === 1)
        if (decrementItem) {
            get().removeFromCart(id)
        } else {
            const updateItems = CurrentItems.map(item =>
                item.product.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item

            )
            set({ items: updateItems })
            const newTotal = get().items.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
            set({ totalPrice: newTotal })
        }
    }
}))


