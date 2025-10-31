'use client';

import { useState, useRef, useEffect } from 'react';

interface SelectOption {
    value: string;
    label: string;
}

interface SelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
}

export default function Select({
    options,
    value,
    onChange,
    placeholder = "Select an option",
    className = "",
    disabled = false
}: SelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedOption = options.find(option => option.value === value);

    // Filter options based on search query
    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSearchQuery("");
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Focus input when dropdown opens
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleOptionClick = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
        setSearchQuery("");
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        switch (event.key) {
            case 'Enter':
                event.preventDefault();
                if (filteredOptions.length > 0) {
                    handleOptionClick(filteredOptions[0].value);
                }
                break;
            case 'Escape':
                setIsOpen(false);
                setSearchQuery("");
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!isOpen) {
                    setIsOpen(true);
                }
                break;
        }
    };

    return (
        <div className={`relative ${className}`} ref={selectRef}>
            {/* Select Button */}
            <button
                type="button"
                onClick={() => !disabled && setIsOpen(!isOpen)}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                className={`
                    w-full px-4 py-1.5 rounded-lg border border-gray-200 
                    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent 
                    bg-white text-left shadow-sm h-[38px]
                    transition-all duration-200 ease-in-out
                    ${disabled
                        ? 'opacity-50 cursor-not-allowed bg-gray-50'
                        : 'hover:border-gray-300 hover:shadow-md cursor-pointer'
                    }
                    ${isOpen ? 'ring-2 ring-brand-500 border-brand-500 shadow-lg' : ''}
                `}
            >
                <div className="flex items-center justify-between">
                    <span className={`truncate ${selectedOption ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute z-[9999] w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-64 overflow-hidden backdrop-blur-sm">
                    {/* Search Input */}
                    <div className="p-3 border-b border-gray-100 bg-gray-50/50">
                        <div className="relative">
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search options..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white"
                            />
                        </div>
                    </div>

                    {/* Options List */}
                    <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleOptionClick(option.value)}
                                    className={`
                                        w-full px-4 py-3 text-left text-sm transition-all duration-150 ease-in-out
                                        hover:bg-brand-50 hover:text-brand-700 border-b border-gray-50 last:border-b-0
                                        ${option.value === value
                                            ? 'bg-brand-100 text-brand-700 font-medium border-l-4 border-l-brand-500'
                                            : 'text-gray-900'
                                        }
                                        ${index === 0 ? 'rounded-t-none' : ''}
                                        ${index === filteredOptions.length - 1 ? 'rounded-b-none' : ''}
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="truncate">{option.label}</span>
                                        {option.value === value && (
                                            <svg className="w-4 h-4 text-brand-600 flex-shrink-0 ml-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                </button>
                            ))
                        ) : (
                            <div className="px-4 py-6 text-sm text-gray-500 text-center">
                                <svg className="w-8 h-8 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                No options found
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
