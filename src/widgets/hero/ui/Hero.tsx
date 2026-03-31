import { heroData } from "@/shared/config/heroData"
import { motion } from "framer-motion"

interface HeroProps {
    selectedCategory: string | null
}

export const Hero = ({ selectedCategory }: HeroProps) => {
    const data = heroData[selectedCategory ?? 'default'] ?? heroData['default']
    return (
        <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-48 overflow-hidden sm:h-96"
        >
            <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white text-2xl font-bold mb-4 sm:text-5xl "
                >
                    {data.title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-zinc-300 text-lg"
                >
                    {data.description}
                </motion.p>
            </div>
        </motion.div>
    )
}