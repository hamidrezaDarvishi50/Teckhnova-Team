
import { FiTruck } from "react-icons/fi";
import { AiOutlineSafety } from "react-icons/ai";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { GrPowerCycle } from "react-icons/gr";

export default function Services() {
    const services = [
        {
            svg: <FiTruck />,
            title: "ارسال رایگان",
            description: "برای سفارش‌های بالای ۵ میلیون تومان"
        },
        {
            svg: <AiOutlineSafety />,
            title: "پرداخت امن",
            description: "خریدی مطمئن با درگاه پرداخت امن و معتبر"
        },
        {
            svg: <FaHeadphonesSimple />,
            title: "پاسخگویی ۲۴ ساعته",
            description: "همیشه کنار شماییم؛ هر زمان که نیاز داشته باشید"
        },
        {
            svg: <GrPowerCycle />,
            title: "تعویض راحت",
            description: "فرآیند ساده تعویض کالا، بدون دردسر"
        }
    ];

    return (
        <section className="mx-auto  lg:w-[95%] py-16">
            <div className=" grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="flex h-full min-h-[150px] lg:min-h-[170px] items-center gap-4 rounded-2xl border border-white/25  px-5 py-6 text-[var(--color-text)] shadow-[0_8px_24px_rgba(7,85,217,0.12)] backdrop-blur-2xl transition-all duration-300  hover:border-[var(--color-electric)]/70 hover:bg-[var(--color-primary-light)] hover:shadow-[0_12px_28px_rgba(7,85,217,0.2)]"
                    >
                        <div className="flex shrink-0 items-center justify-center text-xl lg:text-3xl text-[var(--color-primary)]">
                            {item.svg}
                        </div>

                        <div className="flex min-w-0 flex-1 flex-col justify-center gap-2">
                            <h2 className="text-base font-bold leading-7">
                                {item.title}
                            </h2>

                            <p className="text-[5px] lg:text-sm leading-7 text-[var(--color-text-secondary)]">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
