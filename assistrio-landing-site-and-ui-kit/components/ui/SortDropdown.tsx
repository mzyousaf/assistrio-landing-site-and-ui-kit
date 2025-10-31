import { Select } from './';

interface SortOption {
    value: string;
    label: string;
}

interface SortDropdownProps {
    sortBy: string;
    onSortChange: (sortBy: string) => void;
    options: SortOption[];
    placeholder?: string;
    className?: string;
}

export default function SortDropdown({
    sortBy,
    onSortChange,
    options,
    placeholder = "Sort by...",
    className = ''
}: SortDropdownProps) {
    return (
        <div className={`h-[38px] w-full sm:w-auto ${className}`}>
            <Select
                options={options}
                value={sortBy}
                onChange={onSortChange}
                placeholder={placeholder}
                className="w-full sm:min-w-[160px] h-[38px]"
            />
        </div>
    );
}
