import React from 'react'
interface StatsCardProps {
    title: string
    value: string
}
export const StatsCard = ({ title, value }: StatsCardProps) => {
    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p className="text-gray-600 mb-2">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    )
}
