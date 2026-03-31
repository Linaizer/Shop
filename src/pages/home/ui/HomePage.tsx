import { Hero } from "@/widgets/hero"
import { ProductList } from "@/widgets/productList"
import { useState } from 'react'

 const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    return (
        <>
            <Hero selectedCategory={selectedCategory} />
            <ProductList selectedCategory={selectedCategory} onCategorySelect={setSelectedCategory} />
        </>
    )
}
export default HomePage