interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
    className?: string;
}

export default function CategoryFilter({
    categories,
    selectedCategory,
    onCategoryChange,
    className = ''
}: CategoryFilterProps) {
    return (
        <div className={`mb-6 ${className}`}>
            <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${category === selectedCategory
                            ? "bg-brand-500 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                            }`}
                    >
                        {category === "All" ? "All" : category}
                    </button>
                ))}
            </div>
        </div>
    );
}
