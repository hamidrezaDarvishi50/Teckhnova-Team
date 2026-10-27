
"use client";

import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiZoomIn } from "react-icons/fi";

const images = [
    "/product/phone.jpg",

];

export default function ProductGallery() {
    const [activeImage, setActiveImage] = useState(0);

    function changeImage(direction) {
        setActiveImage((current) => {
            return (current + direction + images.length) % images.length;
        });
    }

    return (
        <section dir="rtl" className="w-[87%] min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row">

                {/* تصاویر بندانگشتی */}
                <div className="order-2 flex gap-3 overflow-x-auto pb-2 sm:order-1 sm:w-[76px] sm:shrink-0 sm:flex-col sm:overflow-x-visible sm:overflow-y-auto sm:pb-0">
                    {images.map((image, index) => (
                        <button
                            key={image}
                            type="button"
                            onClick={() => setActiveImage(index)}
                            aria-label={`نمایش تصویر ${index + 1}`}
                            aria-pressed={activeImage === index}
                            className={`relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-xl border transition-all duration-300 sm:h-[76px] sm:w-[76px] ${
                                activeImage === index
                                    ? "border-[#3295FF] bg-[#3295FF]/10 shadow-[0_0_18px_rgba(50,149,255,0.2)]"
                                    : "border-white/10 bg-white/[0.03] hover:border-[#3295FF]/50"
                            }`}
                        >
                            <img
                                src={image}
                                alt={`تصویر ${index + 1} آیفون`}
                                className="h-[68px] w-[68px] object-cover sm:h-[76px] sm:w-[76px]"
                            />
                        </button>
                    ))}
                </div>

                {/* تصویر اصلی با ابعاد ثابت */}
                <div className="group relative order-1 h-[300px] w-full shrink-0 overflow-hidden rounded-[28px] border border-white/10 sm:order-2 sm:h-[400px] lg:h-[460px]">

                    <img
                        key={images[activeImage]}
                        src={images[activeImage]}
                        alt={`تصویر محصول آیفون 16 پرو، نمای ${activeImage + 1}`}
                        className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* قبلی */}
                    <button
                        type="button"
                        onClick={() => changeImage(-1)}
                        aria-label="تصویر قبلی"
                        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#061A40]/70 text-white backdrop-blur-xl transition hover:border-[#3295FF] hover:bg-[#3295FF]/20"
                    >
                        <FiChevronRight size={22} />
                    </button>

                    {/* بعدی */}
                    <button
                        type="button"
                        onClick={() => changeImage(1)}
                        aria-label="تصویر بعدی"
                        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#061A40]/70 text-white backdrop-blur-xl transition hover:border-[#3295FF] hover:bg-[#3295FF]/20"
                    >
                        <FiChevronLeft size={22} />
                    </button>

                    {/* شماره تصویر */}
                    <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-full border border-white/10 bg-[#061A40]/70 px-3 py-2 text-xs text-white/80 backdrop-blur-xl">
                        <FiZoomIn size={15} />
                        <span dir="ltr">
                            {activeImage + 1} / {images.length}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
