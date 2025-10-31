'use client';

import { useState, useRef, useEffect } from 'react';

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

interface MultiSelectProps {
    options: SelectOption[];
    value: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    maxSelections?: number;
    searchable?: boolean;
}

export default function MultiSelect({
    options,
    value,
    onChange,
    placeholder = "Select options",
    className = "",
    disabled = false,
    maxSelections,
    searchable = true
}: MultiSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const selectRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedOptions = options.filter(option => value.includes(option.value));

    // Filter options based on search query
    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !option.disabled
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
        if (isOpen && inputRef.current && searchable) {
            inputRef.current.focus();
        }
    }, [isOpen, searchable]);

    const handleOptionClick = (optionValue: string) => {
        if (value.includes(optionValue)) {
            // Remove from selection
            onChange(value.filter(v => v !== optionValue));
        } else {
            // Add to selection (check max selections)
            if (!maxSelections || value.length < maxSelections) {
                onChange([...value, optionValue]);
            }
        }
    };

    const handleRemoveTag = (optionValue: string) => {
        onChange(value.filter(v => v !== optionValue));
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
                    w-full px-4 py-2 rounded-lg border border-gray-200 
                    focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent 
                    bg-white text-left shadow-sm min-h-[38px]
                    transition-all duration-200 ease-in-out
                    ${disabled
                        ? 'opacity-50 cursor-not-allowed bg-gray-50'
                        : 'hover:border-gray-300 hover:shadow-md cursor-pointer'
                    }
                    ${isOpen ? 'ring-2 ring-brand-500 border-brand-500 shadow-lg' : ''}
                `}
            >
                <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                        {selectedOptions.length > 0 ? (
                            selectedOptions.map((option) => (
                                <span
                                    key={option.value}
                                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-brand-100 text-brand-700 text-sm font-medium border border-brand-200"
                                >
                                    <span className="truncate max-w-[120px]">{option.label}</span>
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveTag(option.value);
                                        }}
                                        className="ml-1.5 hover:text-brand-900 transition-colors"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </span>
                            ))
                        ) : (
                            <span className="text-gray-500">{placeholder}</span>
                        )}
                    </div>
                    <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ease-in-out flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}
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
                    {searchable && (
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
                    )}

                    {/* Options List */}
                    <div className="max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => handleOptionClick(option.value)}
                                    disabled={option.disabled || (maxSelections && value.length >= maxSelections && !value.includes(option.value)) || false}
                                    className={`
                                        w-full px-4 py-3 text-left text-sm transition-all duration-150 ease-in-out
                                        hover:bg-brand-50 hover:text-brand-700 border-b border-gray-50 last:border-b-0
                                        ${value.includes(option.value)
                                            ? 'bg-brand-100 text-brand-700 font-medium border-l-4 border-l-brand-500'
                                            : 'text-gray-900'
                                        }
                                        ${option.disabled || (maxSelections && value.length >= maxSelections && !value.includes(option.value))
                                            ? 'opacity-50 cursor-not-allowed'
                                            : ''
                                        }
                                        ${index === 0 ? 'rounded-t-none' : ''}
                                        ${index === filteredOptions.length - 1 ? 'rounded-b-none' : ''}
                                    `}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="truncate">{option.label}</span>
                                        {value.includes(option.value) && (
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

                    {/* Max selections warning */}
                    {maxSelections && value.length >= maxSelections && (
                        <div className="px-4 py-2 text-xs text-gray-500 border-t border-gray-100 bg-gray-50/50">
                            <div className="flex items-center">
                                <svg className="w-4 h-4 mr-1 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Maximum {maxSelections} selection{maxSelections > 1 ? 's' : ''} allowed
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
