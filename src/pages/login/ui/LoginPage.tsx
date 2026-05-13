import { useUserStore } from "@/entities/user"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const DEMO_USERNAME = "johnd"
const DEMO_PASSWORD = "m38rmF$"

export const LoginPage = () => {
    const { login, status } = useUserStore()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (status === 'success') {
            navigate('/')
        }
    }, [status])

    const handleDemoLogin = () => {
        setUsername(DEMO_USERNAME)
        setPassword(DEMO_PASSWORD)
        login(DEMO_USERNAME, DEMO_PASSWORD)
    }

    return (
        <div className="min-h-screen bg-zinc-950 flex">
            <div className="hidden lg:flex w-1/2 relative overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=80"
                    alt="Shop"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-12">
                    <h1 className="text-white text-4xl font-bold mb-2">LariskaShop</h1>
                    <p className="text-zinc-300 text-lg">Discover everything you need</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-center px-8">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md flex flex-col gap-6"
                >
                    <div>
                        <h2 className="text-white text-3xl font-bold">Welcome back</h2>
                        <p className="text-zinc-400 mt-1">Sign in to your account</p>
                    </div>

                    {status === 'error' && (
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-red-400 text-sm">
                            Invalid username or password
                        </div>
                    )}

                    <div className="flex flex-col gap-4">
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="bg-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-500"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="bg-zinc-800 text-white rounded-xl px-4 py-3 outline-none focus:ring-1 focus:ring-zinc-600 placeholder:text-zinc-500"
                        />
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => login(username, password)}
                            disabled={status === 'loading'}
                            className="bg-white text-zinc-900 rounded-full py-3 font-medium hover:bg-zinc-200 transition-colors disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Signing in...' : 'Sign in'}
                        </button>

                        <button
                            onClick={handleDemoLogin}
                            disabled={status === 'loading'}
                            className="bg-zinc-800 text-zinc-300 rounded-full py-3 font-medium hover:bg-zinc-700 transition-colors disabled:opacity-50 border border-zinc-700"
                        >
                            Try Demo
                        </button>
                    </div>

                    <p className="text-zinc-600 text-xs text-center">
                        Demo uses a public test API — data is shared and resets periodically
                    </p>
                </motion.div>
            </div>
        </div>
    )
}