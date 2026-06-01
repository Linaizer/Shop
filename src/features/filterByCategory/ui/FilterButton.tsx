import { getButtonClass } from "../lib/getButtonClass"

interface  FilterButtonProps {
    label: string
    isActive: boolean
    onClick: ()=> void
}

const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => (
    <button 
        onClick={onClick}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 ${getButtonClass(isActive)}`}
    >
        {label}
    </button>
)
export default FilterButton