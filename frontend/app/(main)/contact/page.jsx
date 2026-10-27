

import Link from "next/link";
import {
    FiArrowLeft,
    FiMail,
    FiPhone,
    FiMapPin,
    FiClock,
    FiSend,
    FiMessageCircle,
    FiHeadphones,
    FiZap,
    FiCheckCircle,
    FiChevronDown,
} from "react-icons/fi";
import Input from "@/components/MainPage/Contactus/Input";
import Hero from "@/components/MainPage/Contactus/Hero";
import Connection from "@/components/MainPage/MainLayout/Connection";

export default function ContactPage() {


    const contactItems = [
        {
            icon: FiMail,
            title: "ایمیل پشتیبانی",
            description: "برای ارسال پرسش‌ها و پیشنهادهای شما",
            value: "ارسال پیام از طریق فرم",
        },
        {
            icon: FiPhone,
            title: "ارتباط تلفنی",
            description: "برای دریافت راهنمایی درباره خرید",
            value: "در انتظار ثبت اطلاعات تماس",
        },
        {
            icon: FiClock,
            title: "زمان پاسخگویی",
            description: "پیام‌های شما را با دقت بررسی می‌کنیم",
            value: "در اولین فرصت کاری",
        },
    ];

    return (
        <main
            dir="rtl"
            className="min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]"
        >
            <Hero/>


            {/* Contact information */}
            <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-6 py-16 sm:px-10 lg:px-12">
                <div className="grid gap-5 md:grid-cols-3">
                    {contactItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/65 p-6 shadow-[0_8px_32px_rgba(7,85,217,0.08)] backdrop-blur-2xl transition duration-300  hover:border-blue-200 hover:bg-white/85 hover:shadow-[0_16px_40px_rgba(7,85,217,0.13)]"
                            >
                                <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full  blur-2xl transition group-hover:bg-blue-200/70" />

                                <div className="relative">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl    text-2xl text-[var(--color-primary)]  backdrop-blur-xl transition  ">
                                        <Icon />
                                    </div>

                                    <h3 className="mt-5 text-lg font-extrabold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-[var(--color-text-secondary)]">
                                        {item.description}
                                    </p>

                                    <p className="mt-5 text-sm font-bold text-[var(--color-primary)]">
                                        {item.value}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <Connection />
            <Input />
        </main>
    );
}
