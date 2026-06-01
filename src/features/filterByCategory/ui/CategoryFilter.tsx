import FilterButton from "./FilterButton"

interface CategoryFilterProps {
    categories: string[]
    selectedCategory: string | null
    onSelect: (category: string | null) => void
}

export const CategoryFilter = ({ categories, selectedCategory, onSelect }:CategoryFilterProps) => (
    <div className="flex gap-2 p-4 overflow-x-auto flex-nowrap">
        <FilterButton label="All" isActive={selectedCategory === null} onClick={() => onSelect(null)} />
        {categories.map(category => (
            <FilterButton key={category} label={category} isActive={selectedCategory === category} onClick={() => onSelect(category)} />
        ))}
    </div>
)