import { FaArrowLeftLong } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";

export default function CategoryCard(img,title,link) {
    return (
        <div
            dir="rtl"
            className="group relative isolate w-full max-w-[300px] overflow-hidden
            rounded-[40px] border border-white/10
            bg-[#061A40]/95 p-6
            shadow-[0_15px_45px_rgba(6,26,64,0.25)]
            backdrop-blur-2xl
            transition-all duration-300
            hover:-translate-y-2 hover:border-[#3295FF]/60
            hover:shadow-[0_20px_50px_rgba(50,149,255,0.18)]"
        >
            {/* جلوه‌های نوری پس‌زمینه */}
            <div
                className="pointer-events-none absolute -right-20 top-20 -z-10
                h-52 w-52 rounded-full bg-[#3295FF]/20
                blur-[80px] transition-all duration-500
                group-hover:bg-[#3295FF]/35"
            />

            <div
                className="pointer-events-none absolute -bottom-20 -left-16 -z-10
                h-52 w-52 rounded-full bg-blue-300/10 blur-[80px]"
            />

            {/* عنوان و آیکون */}
            <div className="relative z-10 flex items-center justify-between">
                <span
                    className="flex items-center gap-2 rounded-full
                    border border-[#3295FF]/30 bg-[#3295FF]/15
                    px-3 py-1.5 text-xs font-bold text-[#BBDFFF]"
                >
                    <MdDevices className="text-base" />
                    دسته‌بندی محصولات
                </span>

                <span
                    className="flex h-10 w-10 items-center justify-center
                    rounded-full border border-white/15 bg-white/10
                    text-xl text-[#BBDFFF] backdrop-blur-xl
                    transition-all duration-300
                    group-hover:border-[#3295FF]/50
                    group-hover:bg-[#3295FF]/20"
                >
                    <MdDevices />
                </span>
            </div>

            {/* تصویر دسته‌بندی */}
            <div
                className="relative z-10 mt-5 flex h-[190px]
                items-center justify-center overflow-hidden rounded-3xl
                border border-white/5 bg-white/[0.04]"
            >
                <div
                    className="absolute inset-0 bg-gradient-to-t
                    from-[#061A40]/50 via-transparent to-white/[0.03]"
                />

                <img
                    src={img}
                    alt="دسته‌بندی گوشی‌های هوشمند"
                    className="relative h-full w-full object-contain
                    p-3 drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]
                    transition-transform duration-500
                    group-hover:scale-110"
                />
            </div>

            {/* اطلاعات دسته‌بندی */}
            <div className="relative z-10 mt-5">
                <h2
                    className="text-xl font-black text-white
                    transition-colors duration-300
                    group-hover:text-[#8CC8FF]"
                >
                    {title}
                </h2>




                {/* دکمه مشاهده دسته‌بندی */}
                <a
                    href={link}
                    className="group/btn relative mt-6 flex w-full
                    items-center justify-center gap-2 overflow-hidden
                    rounded-full border border-white/70
                    bg-gradient-to-l from-white to-[#BBDFFF]
                    px-4 py-3.5 font-bold text-[#061A40]
                    shadow-[0_8px_25px_rgba(50,149,255,0.12)]
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-white
                    hover:shadow-[0_12px_30px_rgba(50,149,255,0.3)]"
                >
                    <span
                        className="absolute inset-0 -translate-x-full
                        bg-gradient-to-l from-transparent via-white/80
                        to-transparent transition-transform duration-700
                        group-hover/btn:translate-x-full"
                    />

                    <span className="relative">
                        مشاهده دسته‌بندی
                    </span>

                    <FaArrowLeftLong
                        className="relative text-lg transition-transform
                        duration-300 group-hover/btn:-translate-x-1"
                    />
                </a>
            </div>
        </div>
    );
}
