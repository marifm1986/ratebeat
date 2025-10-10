import React, { useState } from 'react'
interface FilterOption {
    label: string
    category: string
}

interface FilterTabsProps {
    'data-id'?: string
    options?: FilterOption[]
    defaultSelected?: string
    onFilterChange?: (filter: string) => void
}

export function FilterTabs({
    options = [
        {
            label: 'All',
            category: 'all'
        },
        {
            label: 'Buy a home',
            category: 'buy_a_home'
        },
        {
            label: 'Refinance',
            category: 'refinance'
        }
    ],
    defaultSelected,
    onFilterChange,
}: FilterTabsProps) {
    const [selected, setSelected] = useState<string>(defaultSelected || options[0].category)
    const handleSelect = (category: string) => {
        setSelected(category)
        onFilterChange?.(category)
    }
    return (
        <div
            className="inline-flex items-center bg-gray-100 rounded-full p-1.5 gap-1"
        >
            {options.map((option) => (
                <button
                    key={option.category}
                    onClick={() => handleSelect(option.category)}
                    className={`
            px-6 py-2.5 rounded-full font-medium text-sm transition-all
            ${selected === option.category ? 'bg-white text-gray-900 shadow-sm' : 'bg-transparent text-gray-600 hover:text-gray-900'}
          `}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}
