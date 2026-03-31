interface CategoryFilterProps {
    categories: string[]
    selectedCategory: string | null
    onSelect: (category: string | null) => void
}

export const CategoryFilter = ({ categories, selectedCategory, onSelect }: CategoryFilterProps) => {
    return (
        <div className="flex gap-2 p-4 overflow-x-auto flex-nowrap">
            <button onClick={() => onSelect(null)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors  shrink-0  ${selectedCategory === null
                ? 'bg-white text-zinc-900'
                : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}>
                All</button>
            {categories.map((category) => (
                <button onClick={() => onSelect(category)}
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${selectedCategory === category
                        ? 'bg-white text-zinc-900'
                        : 'bg-zinc-800 text-zinc-400 hover:text-white'
                        }`}
                >{category}</button>
            ))}
        </div>
    )
}