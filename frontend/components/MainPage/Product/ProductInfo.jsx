
"use client";

import { useState } from "react";
import {
    FiHeart,
    FiShoppingCart,
    FiShield,
    FiTruck,
    FiHeadphones,
    FiCheckCircle,
    FiMinus,
    FiPlus,
} from "react-icons/fi";
import { IoStar, IoStarHalf } from "react-icons/io5";

const colors = [
    { name: "تیتانیوم طبیعی", value: "#A7A9AC" },
    { name: "تیتانیوم صحرایی", value: "#B9A18B" },
    { name: "تیتانیوم سفید", value: "#E8E8E8" },
    { name: "تیتانیوم مشکی", value: "#343434" },
];

const product = {
    brand: "Apple",
    title: "آیفون 16 پرو",
    rating: 4.8,
    reviews: 125,
    price: 52900000,
    oldPrice: 59900000,
    discount: 12,
    stock: 8,
    description:
        "تجربه‌ای متفاوت از قدرت، طراحی و کیفیت؛ با تراشه A18 Pro، نمایشگر پیشرفته و دوربین‌های حرفه‌ای.",
};


export default function ProductInfo() {
    const [selectedColor, setSelectedColor] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);

    const formatPrice = (price) => price.toLocaleString("fa-IR");

    return (
        <section dir="rtl" className="w-full min-w-0 space-y-6 text-white">

            {/* برند و عنوان */}
            <div className="space-y-3">
                <span className="inline-flex rounded-lg border border-[#3295FF]/20 bg-[#3295FF]/10 px-3 py-1.5 text-sm font-semibold text-[#70B8FF]">
                    {product.brand}
                </span>

                <div className="flex items-start justify-between gap-3">
                    <h1 className="text-2xl font-black leading-relaxed sm:text-3xl lg:text-4xl">
                        {product.title}
                    </h1>

                    <button
                        type="button"
                        onClick={() => setIsFavorite((value) => !value)}
                        aria-label={
                            isFavorite
                                ? "حذف از علاقه‌مندی‌ها"
                                : "افزودن به علاقه‌مندی‌ها"
                        }
                        aria-pressed={isFavorite}
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition ${
                            isFavorite
                                ? "border-rose-400/40 bg-rose-500/10 text-rose-400"
                                : "border-white/10 bg-white/[0.03] text-white/70 hover:border-[#3295FF]/50 hover:text-[#3295FF]"
                        }`}
                    >
                        <FiHeart
                            size={21}
                            className={isFavorite ? "fill-current" : ""}
                        />
                    </button>
                </div>

                {/* امتیاز */}

            </div>

            {/* توضیحات */}
            {/*<p className="text-sm leading-8 text-[#BBDFFF]/80 sm:text-base">*/}
            {/*    {product.description}*/}
            {/*</p>*/}

            {/* قیمت */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="space-y-2">
                        <span className="text-sm text-white/50">
                            قیمت محصول
                        </span>

                        <div className="flex flex-wrap items-baseline gap-2">
                            <span className="text-2xl font-black text-white sm:text-3xl">
                                {formatPrice(product.price)}
                            </span>

                            <span className="text-sm text-[#BBDFFF]">
                                تومان
                            </span>
                        </div>

                        <span className="text-sm text-white/40 line-through">
                            {formatPrice(product.oldPrice)} تومان
                        </span>
                    </div>

                    <span className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-sm font-bold text-rose-300">
                        {product.discount.toLocaleString("fa-IR")}٪ تخفیف
                    </span>
                </div>
            </div>

            {/* موجودی */}
            <div className="flex items-center gap-2 text-sm">
                <FiCheckCircle className="shrink-0 text-emerald-400" size={18} />
                <span className="text-emerald-300">موجود در انبار</span>
                <span className="text-white/40">
                    ( {product.stock.toLocaleString("fa-IR")} عدد )
                </span>
            </div>

            {/* انتخاب رنگ */}
            <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-semibold text-white">
                        {colors[selectedColor].name}
                    </span>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    {colors.map((color, index) => (
                        <button
                            key={color.value}
                            type="button"
                            onClick={() => setSelectedColor(index)}
                            aria-label={color.name}
                            aria-pressed={selectedColor === index}
                            title={color.name}
                            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition ${
                                selectedColor === index
                                    ? "border-[#3295FF] ring-2 ring-[#3295FF]/20 ring-offset-2 ring-offset-[#061A40]"
                                    : "border-white/20 hover:border-white/60"
                            }`}
                        >
                            <span
                                className="h-7 w-7 rounded-full border border-black/10"
                                style={{ backgroundColor: color.value }}
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* تعداد و افزودن به سبد */}
            <div className="flex flex-col gap-3 sm:flex-row">
                <div className="flex h-14 items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 sm:w-[140px] sm:shrink-0">
                    <button
                        type="button"
                        onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                        disabled={quantity <= 1}
                        aria-label="کاهش تعداد"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/10 hover:border-[#0755D9]! disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <FiMinus size={17} />
                    </button>

                    <span className="min-w-6 text-center font-bold">
                        {quantity.toLocaleString("fa-IR")}
                    </span>

                    <button
                        type="button"
                        onClick={() =>
                            setQuantity((value) => Math.min(product.stock, value + 1))
                        }
                        disabled={quantity >= product.stock}
                        aria-label="افزایش تعداد"
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition hover:bg-white/10 hover:border-[#0755D9]! disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <FiPlus size={17} />
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        // اتصال به سبد خرید را در مرحله بعد انجام می‌دهیم.
                    }}
                    className="group flex h-14 flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-l from-[#0755D9] via-[#1684FF] to-[#3295FF] px-5 font-bold text-white shadow-[0_8px_30px_rgba(50,149,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_35px_rgba(50,149,255,0.35)] active:translate-y-0"
                >
                    <FiShoppingCart size={20} />
                    افزودن به سبد خرید
                </button>
            </div>


        </section>
    );
}
