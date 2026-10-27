
"use client";

import { useRef } from "react";
import {
    FiChevronLeft,
    FiChevronRight,
    FiThumbsUp,
    FiMessageCircle,
    FiCheckCircle,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const comments = [
    {
        id: 1,
        name: "علی رضایی",
        date: "۱۴۰۵/۰۷/۱۸",
        rating: 5,
        title: "کیفیت فوق‌العاده‌ای داره",
        text: "کیفیت دوربین و صفحه‌نمایش واقعاً عالیه. گوشی خیلی سریع و روان کار می‌کنه و از خریدم کاملاً راضی‌ام.",
        likes: 12,
        verified: true,
    },
    {
        id: 2,
        name: "سارا محمدی",
        date: "۱۴۰۵/۰۷/۱۵",
        rating: 4,
        title: "ارزش خرید بالایی داره",
        text: "طراحی گوشی خیلی جذابه و کیفیت ساختش حس خوبی می‌ده. فقط انتظار داشتم شارژدهی باتری کمی بهتر باشه.",
        likes: 8,
        verified: true,
    },
    {
        id: 3,
        name: "محمد کریمی",
        date: "۱۴۰۵/۰۷/۱۲",
        rating: 5,
        title: "کاملاً پیشنهادش می‌کنم",
        text: "سرعت اجرای برنامه‌ها عالیه و دوربین هم توی نور کم عملکرد خوبی داره. تجربه استفاده ازش خیلی لذت‌بخشه.",
        likes: 17,
        verified: true,
    },
    {
        id: 4,
        name: "نگار احمدی",
        date: "۱۴۰۵/۰۷/۰۹",
        rating: 4,
        title: "طراحی شیک و عملکرد سریع",
        text: "ظاهر گوشی خیلی شیکه و کیفیت نمایشگرش واقعاً چشم‌نوازه. بسته‌بندی هم مرتب بود و محصول سالم به دستم رسید.",
        likes: 5,
        verified: true,
    },
    {
        id: 5,
        name: "امیرحسین موسوی",
        date: "۱۴۰۵/۰۷/۰۵",
        rating: 5,
        title: "تجربه خرید عالی",
        text: "هم کیفیت محصول خوب بود و هم از عملکردش راضی‌ام. برای عکاسی و استفاده روزمره انتخاب خیلی خوبیه.",
        likes: 10,
        verified: true,
    },
];

export default function ProductComments() {
    const carouselRef = useRef(null);

    function scrollCarousel(direction) {
        if (!carouselRef.current) return;

        const carousel = carouselRef.current;
        const card = carousel.querySelector("[data-comment-card]");
        const cardWidth = card
            ? card.getBoundingClientRect().width
            : 320;

        carousel.scrollBy({
            left: direction * (cardWidth + 16),
            behavior: "smooth",
        });
    }

    return (
        <section
            dir="rtl"
            className=" w-[90%] m-auto rounded-2xl border border-white/10 bg-gradient-to-br from-[#0B2148]/90 via-[#071832]/95 to-[#030D23] p-5 sm:p-7 lg:p-8"
        >
            <div className="flex  snap-x  gap-4   justify-between items-center  ">
                <button
                    type="button"
                    onClick={() => scrollCarousel(1)}
                    aria-label="نظرات قبلی"
                    className="flex h-10 w-10 items-center justify-center rounded-full  text-white transition   hover:text-[#3295FF]"
                >
                    <FiChevronRight size={30} />
                </button>
                <div
                    ref={carouselRef}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-color:rgba(50,149,255,0.5)_transparent] [scrollbar-width:thin]"
                >

                    {comments.map((comment) => (
                        <article
                            key={comment.id}
                            data-comment-card
                            className="w-full min-w-0 shrink-0 snap-start rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-[#3295FF]/40 hover:bg-[#3295FF]/[0.045] sm:w-[calc(50%-8px)] xl:w-[calc(33.333%-11px)]"
                        >
                            {/* نام و تاریخ */}
                            <div className="mb-4 flex items-start justify-between gap-3">
                                <div className="flex min-w-0 items-center gap-3">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#3295FF]/30 bg-gradient-to-br from-[#3295FF]/25 to-[#061A40] text-sm font-black text-[#BBDFFF]">
                                        {comment.name.charAt(0)}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-bold text-white">
                                            {comment.name}
                                        </p>

                                        <p className="mt-1 text-xs text-slate-500">
                                            {comment.date}
                                        </p>
                                    </div>
                                </div>


                            </div>

                            {/* امتیاز */}
                            <div className="mb-4 flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <FaStar
                                        key={index}
                                        size={13}
                                        className={
                                            index < comment.rating
                                                ? "text-amber-400"
                                                : "text-slate-700"
                                        }
                                    />
                                ))}

                                <span className="mr-2 text-xs text-slate-400">
                                {comment.rating} از ۵
                            </span>
                            </div>

                            {/* متن کامنت */}
                            <h3 className="mb-2 text-sm font-extrabold text-[#BBDFFF]">
                                {comment.title}
                            </h3>

                            <p className="min-h-[100px] text-sm leading-7 text-slate-300">
                                {comment.text}
                            </p>


                        </article>
                    ))}

                </div>
                <button
                    type="button"
                    onClick={() => scrollCarousel(-1)}
                    aria-label="نظرات بعدی"
                    className="flex h-10 w-10 items-center justify-center rounded-full  text-white transition   hover:text-[#3295FF]"
                >
                    <FiChevronLeft size={30} />
                </button>


            </div>
            {/* کاروسل کامنت‌ها */}

            <p className="mt-2 text-center text-xs text-slate-500 sm:hidden">
                برای دیدن نظرات بیشتر، افقی اسکرول کن
            </p>
        </section>
    );
}
