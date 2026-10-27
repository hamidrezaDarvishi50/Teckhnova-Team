"use client";

import { useState } from "react";
import {
    FiChevronDown,
    FiSliders,
    FiRotateCcw,
    FiCheck,
    FiTag,
    FiDollarSign,
    FiPackage,
    FiStar,
    FiSearch,
    // FiArrowUpDown,
} from "react-icons/fi";

const sortOptions = [
    { value: "newest", label: "جدیدترین ها" },
    { value: "popular", label: "محبوب‌ترین‌ها" },
    { value: "cheapest", label: "ارزان‌ترین" },
    { value: "expensive", label: "گران‌ترین" },
];

const filterGroups = [
    {
        id: "category",
        title: "دسته‌بندی محصول",
        icon: FiPackage,
        options: [
            "موبایل و تبلت",
            "لپ‌تاپ و کامپیوتر",
            "هدفون و هندزفری",
            "ساعت هوشمند",
            "لوازم جانبی",
            "کنسول بازی",
        ],
    },
];

export default function FilterPanel() {
    const [openFilter, setOpenFilter] = useState("category");
    const [sortBy, setSortBy] = useState("newest");
    const [selected, setSelected] = useState({});
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [search, setSearch] = useState("");

    const selectedCount =
        Object.values(selected).reduce(
            (total, values) => total + values.length,
            0
        ) +
        (minPrice !== "" ? 1 : 0) +
        (maxPrice !== "" ? 1 : 0);

    function toggleFilter(id) {
        setOpenFilter((current) => current === id ? null : id);
    }

    function toggleOption(groupId, option) {
        setSelected((current) => {
            const currentOptions = current[groupId] || [];

            const nextOptions = currentOptions.includes(option)
                ? currentOptions.filter((item) => item !== option)
                : [...currentOptions, option];

            return {
                ...current,
                [groupId]: nextOptions,
            };
        });
    }

    function handlePriceChange(setter, value) {
        setter(value.replace(/[^0-9]/g, ""));
    }

    function resetFilters() {
        setSelected({});
        setMinPrice("");
        setMaxPrice("");
        setSortBy("newest");
        setSearch("");
        setOpenFilter("category");
    }

    return (
        <aside
            dir="rtl"
            className=" w-full max-w-[370px] overflow-hidden rounded-3xl border border-white/80 bg-white/75 p-5 text-[var(--color-text)] shadow-[0_20px_60px_rgba(7,85,217,0.10)] backdrop-blur-2xl sm:p-6"
        >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 text-xl text-[var(--color-primary)] shadow-sm">
                        <FiSliders />
                    </div>

                    <div>
                        <h2 className="text-lg font-black">
                            فیلتر محصولات
                        </h2>


                    </div>
                </div>

                {selectedCount > 0 && (
                    <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-[var(--color-primary)] px-2 text-xs font-bold text-white">
                        {selectedCount}
                    </span>
                )}
            </div>

            {/* Search */}
            <div className="relative mb-6">
                <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-slate-400" />

                <input
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="جستجوی فیلتر..."
                    className="h-12 w-full rounded-2xl border border-blue-100/80 bg-white/70 pr-11 pl-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[var(--color-electric)] focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
            </div>

            {/* Sorting */}
            <section className="mb-6">
                <SectionTitle title="مرتب‌سازی" />

                <div className="mt-3 grid grid-cols-2 gap-2">
                    {sortOptions.map((option) => {
                        const isActive = sortBy === option.value;

                        return (
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => setSortBy(option.value)}
                                aria-pressed={isActive}
                                className={`flex min-h-11 items-center justify-between gap-2 rounded-xl border px-3 py-2 text-right text-xs font-bold transition duration-200 ${
    isActive
        ? "border-blue-300 bg-blue-50 text-[var(--color-primary)] shadow-sm"
        : "border-blue-100/70 bg-white/55 text-[var(--color-text-secondary)] hover:border-blue-200 hover:bg-blue-50/70"
}`}
                            >
                                <span>{option.label}</span>

                                {isActive && (
                                    <FiCheck className="shrink-0" />
                                )}
                            </button>
                        );
                    })}
                </div>
            </section>

            <Divider />

            {/* Price Range */}
            <section className="py-5">
                <button
                    type="button"
                    onClick={() => toggleFilter("price")}
                    aria-expanded={openFilter === "price"}
                    className="flex min-h-11 w-full items-center justify-between gap-3 text-right"
                >
                    <span className="flex items-center gap-3">
                        <FilterIcon>
                            <FiDollarSign />
                        </FilterIcon>

                        <span className="text-sm font-extrabold">
                            محدوده قیمت
                        </span>
                    </span>

                    <FiChevronDown
                        className={`text-slate-400 transition-transform duration-300 ${
    openFilter === "price" ? "rotate-180 text-blue-600" : ""
}`}
                    />
                </button>

                <div
                    className={`grid transition-all duration-300 ${
    openFilter === "price"
        ? "mt-4 grid-rows-[1fr] opacity-100"
        : "grid-rows-[0fr] opacity-0"
}`}
                >
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-2 gap-3 pb-1">
                            <label className="text-xs font-semibold text-slate-500">
                                حداقل قیمت

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={minPrice}
                                    onChange={(event) =>
                                        handlePriceChange(
                                            setMinPrice,
                                            event.target.value
                                        )
                                    }
                                    placeholder="از قیمت"
                                    className="mt-2 h-11 w-full rounded-xl border border-blue-100 bg-white/80 px-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </label>

                            <label className="text-xs font-semibold text-slate-500">
                                حداکثر قیمت

                                <input
                                    type="text"
                                    inputMode="numeric"
                                    value={maxPrice}
                                    onChange={(event) =>
                                        handlePriceChange(
                                            setMaxPrice,
                                            event.target.value
                                        )
                                    }
                                    placeholder="تا قیمت"
                                    className="mt-2 h-11 w-full rounded-xl border border-blue-100 bg-white/80 px-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10"
                                />
                            </label>
                        </div>

                        <p className="mt-2 text-[10px] text-slate-400">
                            قیمت‌ها برحسب تومان هستند.
                        </p>
                    </div>
                </div>
            </section>

            <Divider />

            {/* Filter Groups */}
            <div className="py-2">
                {filterGroups.map((group) => {
                    const filteredOptions = group.options.filter((option) =>
                        option.toLowerCase().includes(
                            search.trim().toLowerCase()
                        )
                    );

                    if (filteredOptions.length === 0) return null;

                    const isOpen = openFilter === group.id;
                    const Icon = group.icon;
                    const selectedOptions = selected[group.id] || [];

                    return (
                        <section
                            key={group.id}
                            className="border-b border-blue-100/70 last:border-b-0"
                        >
                            <button
                                type="button"
                                onClick={() => toggleFilter(group.id)}
                                aria-expanded={isOpen}
                                className="flex min-h-[60px] w-full items-center justify-between gap-3 py-3 text-right"
                            >
                                <span className="flex items-center gap-3">
                                    <FilterIcon>
                                        <Icon />
                                    </FilterIcon>

                                    <span className="text-sm font-extrabold">
                                        {group.title}
                                    </span>

                                    {selectedOptions.length > 0 && (
                                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-100 px-1.5 text-[10px] font-black text-blue-700">
                                            {selectedOptions.length}
                                        </span>
                                    )}
                                </span>

                                <FiChevronDown
                                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${
    isOpen ? "rotate-180 text-blue-600" : ""
}`}
                                />
                            </button>

                            <div
                                className={`grid transition-all duration-300 ${
    isOpen
        ? "grid-rows-[1fr] opacity-100"
        : "grid-rows-[0fr] opacity-0"
}`}
                            >
                                <div className="overflow-hidden">
                                    <div className="space-y-1 pb-4">
                                        {filteredOptions.map((option) => {
                                            const checked =
                                                selectedOptions.includes(option);

                                            return (
                                                <label
                                                    key={option}
                                                    className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
    checked
        ? "bg-blue-50 font-bold text-[var(--color-primary)]"
        : "text-[var(--color-text-secondary)] hover:bg-white/80"
}`}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={checked}
                                                        onChange={() =>
                                                            toggleOption(
                                                                group.id,
                                                                option
                                                            )
                                                        }
                                                        className="sr-only"
                                                    />

                                                    <span
                                                        className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-md border transition ${
    checked
        ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
        : "border-slate-300 bg-white"
}`}
                                                    >
                                                        {checked && (
                                                            <FiCheck className="text-xs" />
                                                        )}
                                                    </span>

                                                    {option}
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Reset */}
            <div className="mt-5 border-t border-blue-100/80 pt-5">
                <button
                    type="button"
                    onClick={resetFilters}
                    className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-white/70 text-sm font-extrabold text-[var(--color-primary)] transition hover:border-blue-300 hover:bg-blue-50"
                >
                    <FiRotateCcw />
                    پاک کردن همه فیلترها
                </button>

                <p className="mt-3 text-center text-[11px] leading-5 text-slate-400">
                    انتخاب‌ها در همین پنل نگهداری می‌شن.
                </p>
            </div>
        </aside>
    );
}

function SectionTitle({ title }) {
    return (
        <div className="flex items-center gap-3">
            {/*<FiArrowUpDown className="shrink-0 text-[var(--color-primary)]" />*/}

            <h3 className="shrink-0 text-sm font-black">
                {title}
            </h3>

            <div className="h-px flex-1 bg-gradient-to-l from-blue-200 to-transparent" />
        </div>
    );
}

function FilterIcon({ children }) {
    return (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50 text-base text-[var(--color-primary)] shadow-sm">
            {children}
        </span>
    );
}

function Divider() {
    return (
        <div className="h-px w-full bg-gradient-to-l from-blue-200/80 via-blue-100 to-transparent" />
    );
}
