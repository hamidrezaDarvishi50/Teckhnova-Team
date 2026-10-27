

import {
    FiCamera,
    FiCpu,
    FiBatteryCharging,
    FiHardDrive,
    FiMonitor,
} from "react-icons/fi";

const features = [
    {
        id: 1,
        title: "دوربین اصلی",
        value: "48 مگاپیکسل",
        description: "ثبت تصاویر با جزئیات بالا",
        icon: FiCamera,
    },
    {
        id: 2,
        title: "پردازنده",
        value: "A18 Pro",
        description: "عملکرد سریع و قدرتمند",
        icon: FiCpu,
    },
    {
        id: 3,
        title: "نمایشگر",
        value: '6.3 اینچ OLED',
        description: "کیفیت تصویر و رنگ عالی",
        icon: FiMonitor,
    },
    {
        id: 4,
        title: "حافظه داخلی",
        value: "256 گیگابایت",
        description: "فضای کافی برای فایل‌ها",
        icon: FiHardDrive,
    },
    {
        id: 5,
        title: "باتری",
        value: "3274 mAh",
        description: "مناسب استفاده روزمره",
        icon: FiBatteryCharging,
    },
];

export default function ProductFeatures() {
    return (
        <section dir="rtl" className="w-full py-10 sm:py-14">
            {/* عنوان بخش */}
            <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                <div className="space-y-2">

                    <h2 className="text-2xl font-black text-[#3295FF] sm:text-3xl">
                        ویژگی‌های کلیدی
                    </h2>

                    <p className="max-w-xl text-sm leading-7 text-[#BBDFFF]/60">
                        نگاهی سریع به مهم‌ترین قابلیت‌های این محصول داشته باش.
                    </p>
                </div>

                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-[#3295FF]/20 bg-[#3295FF]/10 text-[#70B8FF] sm:flex">
                    <FiCpuFallback />
                </div>
            </div>

            {/* کارت‌ها */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <article
                            key={feature.id}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#102951]/80 to-[#061A40]/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#3295FF]/50 hover:shadow-[0_12px_35px_rgba(50,149,255,0.10)] sm:p-5"
                        >
                            {/* نور تزئینی */}
                            <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-[#3295FF]/10 blur-3xl transition group-hover:bg-[#3295FF]/20" />

                            <div className="relative flex mb-5 h-11 w-11 items-center justify-center rounded-xl border border-[#3295FF]/20 bg-[#3295FF]/10 text-[#70B8FF] transition group-hover:bg-[#3295FF]/20">
                                <Icon size={21} />
                            </div>

                            <h3 className="relative mt-5 text-sm text-white/60">
                                {feature.title}
                            </h3>

                            <p className="relative mt-2 break-words text-base font-black leading-7 text-white sm:text-lg">
                                {feature.value}
                            </p>

                            <p className="relative mt-2 text-xs leading-6 text-[#BBDFFF]/50">
                                {feature.description}
                            </p>

                            <div className="relative mt-4 h-0.5 w-8 rounded-full bg-[#3295FF]/60 transition-all duration-300 group-hover:w-14 group-hover:bg-[#3295FF]" />
                        </article>
                    );
                })}
            </div>
        </section>
    );
}

function FiCpuFallback() {
    return <FiCpu size={22} />;
}
