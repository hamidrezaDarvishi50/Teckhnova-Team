
"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "@/components/MainPage/Shop/ProductCard";

export default function NewestProductsCarousel({ products = [] }) {
    const carouselRef = useRef(null);

    const newestProducts = products.slice(0, 10);

    const scrollCarousel = (direction) => {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const firstCard = carousel.querySelector("[data-product-card]");

        const cardWidth = firstCard
            ? firstCard.getBoundingClientRect().width
            : 300;

        carousel.scrollBy({
            left: direction * (cardWidth + 16),
            behavior: "smooth",
        });
    };

    if (newestProducts.length === 0) {
        return null;
    }

    return (
        <div className="w-full">
            {/* دکمه‌های کاروسل */}
            <div className="mb-5 flex items-center justify-end gap-3 px-5 sm:px-10">
                <button
                    type="button"
                    onClick={() => scrollCarousel(1)}
                    aria-label="محصول قبلی"
                    className="flex h-11 w-11 items-center justify-center
                        rounded-full border border-white/70 bg-white/50
                        text-[#061A40] shadow-sm backdrop-blur-xl
                        transition hover:bg-[#0755D9] hover:text-white"
                >
                    <FaChevronRight />
                </button>

                <button
                    type="button"
                    onClick={() => scrollCarousel(-1)}
                    aria-label="محصول بعدی"
                    className="flex h-11 w-11 items-center justify-center
                        rounded-full border border-white/70 bg-white/50
                        text-[#061A40] shadow-sm backdrop-blur-xl
                        transition hover:bg-[#0755D9] hover:text-white"
                >
                    <FaChevronLeft />
                </button>
            </div>

            {/* لیست افقی محصولات */}
            <div
                ref={carouselRef}
                dir="rtl"
                className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-5 pb-5 sm:px-10
                    [scrollbar-width:thin]
                    [scrollbar-color:#0755D9_#EAF2FF]
                    [&::-webkit-scrollbar]:h-2
                    [&::-webkit-scrollbar-track]:rounded-full
                    [&::-webkit-scrollbar-track]:bg-[#EAF2FF]
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:bg-[#0755D9]
                    [&::-webkit-scrollbar-thumb:hover]:bg-[#0645B5]"
            >
                {newestProducts.map((product) => (
                    <div
                        key={product.id}
                        data-product-card
                        className="w-[260px] shrink-0 snap-start sm:w-[280px] lg:w-[300px]"
                    >
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}
