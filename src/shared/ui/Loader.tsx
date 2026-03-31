import { motion } from "framer-motion"

export const Loader = () => {
    return (
        <div className="flex items-center justify-center h-screen gap-2">
            {[0, 0.15, 0.3].map((delay, i) => (
                <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        delay,
                    }}
                />
            ))}
        </div>
    )
}