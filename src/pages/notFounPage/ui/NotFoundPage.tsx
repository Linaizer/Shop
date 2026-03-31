import { useNavigate } from "react-router-dom"
export const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center  flex-col text-white">
            <h1 className="text-9xl font-bold">404</h1>
            <h2> Ohh, something went wrong...</h2>
            <p>Page not found </p>
            <button onClick={() => navigate('/')} className="text-zinc-400 hover:text-white mb-8 flex items-center gap-2 transition-colors  cursor-pointer">   ← Back</button>
        </div>
    )
}