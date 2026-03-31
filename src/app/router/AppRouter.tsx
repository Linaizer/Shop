import { Route, Routes } from "react-router-dom"
import React, { Suspense } from "react"
import { ProtectedRoute } from "@/features/protectedRoute"
import { LoginPage } from "@/pages/login"
import { Loader } from "@/shared"
const HomePage = React.lazy(() => import("@/pages/home"))
const ProductPage = React.lazy(() => import('@/pages/product'))
const CartPage = React.lazy(() => import('@/pages/cart'))
const NotFoundPage = React.lazy(() => import('@/pages/notFounPage'))
const ProfilePage = React.lazy(() => import('@/pages/profile/'))


const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="/product/:id" element={<ProtectedRoute><ProductPage /></ProtectedRoute>} />
                <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )

}

export default AppRouter