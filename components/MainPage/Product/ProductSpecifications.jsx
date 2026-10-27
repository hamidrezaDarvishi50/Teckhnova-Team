
import { FiList, FiCheckCircle } from "react-icons/fi";

const specifications = [
    { id: 1, label: "برند", value: "Apple" },
    { id: 2, label: "مدل", value: "iPhone 16 Pro" },
    { id: 3, label: "نوع نمایشگر", value: 'OLED، اندازه 6.3 اینچ' },
    { id: 4, label: "رزولوشن نمایشگر", value: "2622 × 1206 پیکسل" },
    { id: 5, label: "پردازنده", value: "Apple A18 Pro" },
    { id: 6, label: "حافظه رم", value: "8 گیگابایت" },
    { id: 7, label: "حافظه داخلی", value: "256 گیگابایت" },
    { id: 8, label: "دوربین اصلی", value: "48 + 48 + 12 مگاپیکسل" },
    { id: 9, label: "دوربین سلفی", value: "12 مگاپیکسل" },
    { id: 10, label: "سیستم‌عامل", value: "iOS 18" },
];

export default function ProductSpecifications() {
    return (
        <section dir="rtl" className="w-full  mt-10 py-8 sm:py-12">
            {/* عنوان */}
            <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-[#70B8FF]">
                    <FiList size={30} />
                    <h2 className="text-2xl font-black text-white sm:text-3xl">
                        مشخصات فنی محصول
                    </h2>
                </div>
            </div>

            {/* جدول */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0C244B]/90 to-[#061A40]/80 shadow-[0_15px_45px_rgba(0,0,0,0.12)]">
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-5 py-4">
                    <FiCheckCircle className="text-[#3295FF]" size={18} />

                    <span className="text-sm font-bold text-white">
                        اطلاعات محصول
                    </span>

                    <span className="mr-auto text-xs text-white/40">
                        {specifications.length.toLocaleString("fa-IR")} مشخصه
                    </span>
                </div>

                <dl className=" ">
                    {specifications.map((specification, index) => (
                        <div
                            key={specification.id}
                            className={`grid grid-cols-1 gap-2 py-4 transition-colors sm:grid-cols-[minmax(140px,0.7fr)_minmax(0,1.3fr)] sm:gap-6 ${
                                index % 2 === 0
                                    ? ""
                                    : "bg-white/[0.015]"
                            }`}
                        >
                            <dt className="text-sm text-[#BBDFFF]/55 pr-5">
                                {specification.label}
                            </dt>

                            <dd className="break-words text-sm pl-5 font-medium leading-7 text-white sm:text-left">
                                {specification.value}
                            </dd>
                        </div>
                    ))}
                </dl>


            </div>
        </section>
    );
}
