import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/entities/cart/model/store";
import { useUserStore } from "@/entities/user";
export const Header = () => {
  const { items } = useCartStore()
  const { token, logout } = useUserStore()
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-900 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-xl tracking-tight">
          SHOP
        </Link>
        <nav className="flex items-center gap-6">
          {token ? (
            <Link to=
              '/profile'
              className="text-zinc-600 hover:text-white transition-colors text-sm">
              Profile
            </Link>
          ) : null}
          <div className="relative">

            <Link
              to="/cart"
              className="text-zinc-400 hover:text-white transition-colors text-sm"
            >
              <ShoppingCart size={24} />
              <span className="absolute top-4 -right-4  bg-white text-zinc-900 text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {items.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </Link>
          </div>

          {token ? (
            <button
              onClick={logout}
              className="bg-white text-zinc-900 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-white text-zinc-900 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Login
            </Link>

          )}

        </nav>

      </div>
    </header>
  );
};
