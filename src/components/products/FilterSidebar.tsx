"use client";

import { useState } from "react";
import { Filter, X, ChevronDown } from "lucide-react";

// Mock Options (To be replaced with dynamic data if needed)
const materials = ["Karton", "Plastik", "Köpük", "PET", "Kağıt"];
const sizes = ["4 oz", "7 oz", "8 oz", "12 oz", "Mini", "Orta", "Büyük"];
const usages = ["Sıcak İçecek", "Soğuk İçecek", "Paket Servis", "Sunum"];

interface FilterSidebarProps {
    onFilterChange: (filters: { material?: string; size?: string; usage?: string }) => void;
}

export default function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeFilters, setActiveFilters] = useState<{ material?: string; size?: string; usage?: string }>({});

    const handleFilterClick = (type: "material" | "size" | "usage", value: string) => {
        const newFilters = { ...activeFilters };

        if (newFilters[type] === value) {
            delete newFilters[type]; // Toggle off
        } else {
            newFilters[type] = value; // Toggle on
        }

        setActiveFilters(newFilters);
        onFilterChange(newFilters);
    };

    const clearFilters = () => {
        setActiveFilters({});
        onFilterChange({});
    };

    return (
        <>
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-gray-700 font-medium"
                >
                    <Filter className="w-4 h-4" />
                    Filtrele
                    {Object.keys(activeFilters).length > 0 && (
                        <span className="bg-primary-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full ml-1">
                            {Object.keys(activeFilters).length}
                        </span>
                    )}
                </button>
            </div>

            {/* Filter Sidebar Container */}
            <div className={`
        fixed inset-0 z-50 bg-black/50 lg:bg-transparent lg:static lg:block transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"}
      `}>
                <div className={`
          absolute lg:static top-0 right-0 w-80 h-full bg-white shadow-2xl lg:shadow-none lg:border lg:border-gray-100 lg:rounded-2xl p-6 overflow-y-auto
          transition-transform duration-300 lg:translate-x-0
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}>

                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                            <Filter className="w-5 h-5 text-primary-800" />
                            Gelişmiş Filtre
                        </h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {Object.keys(activeFilters).length > 0 && (
                        <div className="mb-6 pb-6 border-b border-gray-100">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-gray-600">Aktif Filtreler</span>
                                <button
                                    onClick={clearFilters}
                                    className="text-xs text-primary-800 font-medium hover:underline"
                                >
                                    Temizle
                                </button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(activeFilters).map(([key, value]) => (
                                    <span key={key} className="inline-flex items-center gap-1 px-2.5 py-1 bg-primary-50 text-primary-800 text-xs font-medium rounded-md border border-primary-100">
                                        {value as string}
                                        <X
                                            className="w-3 h-3 cursor-pointer hover:text-primary-900"
                                            onClick={() => handleFilterClick(key as any, value as string)}
                                        />
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="space-y-8">
                        {/* Material Filter */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center justify-between">
                                Materyal
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </h4>
                            <div className="space-y-2">
                                {materials.map(material => (
                                    <label key={material} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`
                      w-5 h-5 rounded border flex items-center justify-center transition-colors
                      ${activeFilters.material === material ? 'bg-primary-800 border-primary-800' : 'border-gray-300 group-hover:border-primary-400'}
                    `}>
                                            {activeFilters.material === material && <div className="w-2 h-2 bg-white rounded-sm" />}
                                        </div>
                                        <span className={`text-sm ${activeFilters.material === material ? 'text-gray-900 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                            {material}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Size Filter */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center justify-between">
                                Ebat / Hacim
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {sizes.map(size => (
                                    <button
                                        key={size}
                                        onClick={() => handleFilterClick("size", size)}
                                        className={`
                      px-3 py-1.5 text-xs font-medium rounded-lg border transition-all
                      ${activeFilters.size === size
                                                ? 'bg-primary-800 text-white border-primary-800 shadow-md shadow-primary-900/10'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-primary-300 hover:text-primary-800'}
                    `}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Usage Filter */}
                        <div>
                            <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center justify-between">
                                Kullanım Amacı
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </h4>
                            <div className="space-y-2">
                                {usages.map(usage => (
                                    <label key={usage} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`
                      w-5 h-5 rounded border flex items-center justify-center transition-colors
                      ${activeFilters.usage === usage ? 'bg-primary-800 border-primary-800' : 'border-gray-300 group-hover:border-primary-400'}
                    `}>
                                            {activeFilters.usage === usage && <div className="w-2 h-2 bg-white rounded-sm" />}
                                        </div>
                                        <span className={`text-sm ${activeFilters.usage === usage ? 'text-gray-900 font-medium' : 'text-gray-600 group-hover:text-gray-900'}`}>
                                            {usage}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
