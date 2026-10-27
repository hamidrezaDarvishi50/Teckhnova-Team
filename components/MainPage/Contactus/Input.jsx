
"use client";

import { useState } from "react";
import {FiArrowLeft, FiCheckCircle, FiChevronDown, FiMapPin, FiMessageCircle, FiSend, FiZap} from "react-icons/fi";
import Link from "next/link";

export default function Input(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);
    const faqs = [
        {
            question: "چطور می‌توانم سفارش خودم را پیگیری کنم؟",
            answer:
                "پس از ثبت سفارش، می‌توانید از طریق بخش سفارش‌های حساب کاربری خود، وضعیت سفارش را بررسی کنید. در صورت نیاز به راهنمایی بیشتر، پیام خود را از طریق فرم تماس ارسال کنید.",
        },
        {
            question: "چطور درباره مشخصات یک محصول سؤال بپرسم؟",
            answer:
                "نام محصول و سؤال خود را در فرم تماس بنویسید تا درخواست شما برای بررسی و راهنمایی ثبت شود.",
        },
        {
            question: "اگر محصول خریداری‌شده مشکلی داشته باشد چه کار کنم؟",
            answer:
                "موضوع، نام محصول و شماره سفارش خود را در پیام توضیح دهید تا امکان بررسی درخواست شما فراهم شود.",
        },
        {
            question: "چطور پیشنهاد یا انتقاد خودم را ثبت کنم؟",
            answer:
                "از فرم تماس استفاده کنید و موضوع پیام را مشخص کنید. نظرات شما به ما کمک می‌کند تجربه خرید بهتری فراهم کنیم.",
        },
    ];

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        // اتصال به API برای ارسال واقعی پیام باید اضافه شود.
        setSubmitted(true);
    }


    return (
        <>
            <section
                id="contact-form"
                className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-20 sm:px-10 lg:px-12 lg:pb-28"
            >
                <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr]">
                    {/* Contact form */}
                    <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/60 p-6 shadow-[0_20px_70px_rgba(7,85,217,0.10)] backdrop-blur-2xl sm:p-9 lg:p-10">
                        <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[var(--color-primary-light)]/80 blur-3xl" />

                        <div className="relative">
                            <div className="mb-8">


                                <h2 className="mt-3 text-2xl font-black sm:text-3xl">
                                    با ما در تماس باشید
                                </h2>

                                <p className="mt-3 text-sm leading-8 text-[var(--color-text-secondary)]">
                                    فرم زیر را تکمیل کنید و موضوع موردنظرتان
                                    را با ما در میان بگذارید.
                                </p>
                            </div>

                            {submitted ? (
                                <div
                                    role="status"
                                    className="rounded-2xl border border-blue-200 bg-[var(--color-primary-light)]/80 p-7 text-center backdrop-blur-xl"
                                >
                                    <FiCheckCircle className="mx-auto text-4xl text-[var(--color-primary)]" />

                                    <h3 className="mt-4 text-xl font-black">
                                        فرم شما آماده است!
                                    </h3>

                                    <p className="mt-3 text-sm leading-8 text-[var(--color-text-secondary)]">
                                        ظاهر فرم با موفقیت تکمیل شد؛ اما برای
                                        ارسال واقعی پیام، باید آن را به API
                                        یا سرویس پشتیبانی متصل کنید.
                                    </p>

                                    <button
                                        type="button"
                                        onClick={() => setSubmitted(false)}
                                        className="mt-6 rounded-xl border border-[var(--color-primary)]/20 bg-white/70 px-5 py-3 text-sm font-bold text-[var(--color-primary)] transition hover:bg-white"
                                    >
                                        بازگشت به فرم
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="relative space-y-5"
                                >
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-sm font-bold"
                                            >
                                                نام و نام خانوادگی
                                            </label>

                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="نام شما"
                                                className="w-full rounded-xl border border-blue-100/80 bg-white/55 px-4 py-3.5 text-sm outline-none backdrop-blur-xl transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-electric)] focus:bg-white/90 focus:ring-4 focus:ring-blue-100/70"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-bold"
                                            >
                                                آدرس ایمیل
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="example@email.com"
                                                dir="ltr"
                                                className="w-full rounded-xl border border-blue-100/80 bg-white/55 px-4 py-3.5 text-left text-sm outline-none backdrop-blur-xl transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-electric)] focus:bg-white/90 focus:ring-4 focus:ring-blue-100/70"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="mb-2 block text-sm font-bold"
                                        >
                                            موضوع پیام
                                        </label>

                                        <select
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full rounded-xl border border-blue-100/80 bg-white/55 px-4 py-3.5 text-sm outline-none backdrop-blur-xl transition focus:border-[var(--color-electric)] focus:bg-white/90 focus:ring-4 focus:ring-blue-100/70"
                                        >
                                            <option value="" disabled>
                                                موضوع پیام را انتخاب کنید
                                            </option>
                                            <option value="product">
                                                راهنمایی درباره محصولات
                                            </option>
                                            <option value="order">
                                                پیگیری سفارش
                                            </option>
                                            <option value="return">
                                                تعویض یا مشکل محصول
                                            </option>
                                            <option value="suggestion">
                                                پیشنهاد و انتقاد
                                            </option>
                                            <option value="other">
                                                سایر موارد
                                            </option>
                                        </select>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-sm font-bold"
                                        >
                                            متن پیام
                                        </label>

                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={6}
                                            maxLength={2000}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="چطور می‌تونیم کمکت کنیم؟"
                                            className="w-full resize-y rounded-xl border border-blue-100/80 bg-white/55 px-4 py-4 text-sm leading-8 outline-none backdrop-blur-xl transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-electric)] focus:bg-white/90 focus:ring-4 focus:ring-blue-100/70"
                                        />
                                        <p className="mt-2 text-left text-xs text-[var(--color-text-muted)]">
                                            {formData.message.length}/2000
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="group inline-flex w-full items-center justify-center gap-3 rounded-xl border border-white/30 bg-gradient-to-l from-[var(--color-primary)] to-[var(--color-electric)] px-6 py-4 font-bold text-white shadow-[0_8px_24px_rgba(7,85,217,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(7,85,217,0.3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-electric)] sm:w-auto sm:min-w-48"
                                    >
                                        ارسال پیام
                                        <FiSend className="transition-transform group-hover:-translate-x-1" />
                                    </button>

                                    <p className="text-xs leading-6 text-[var(--color-text-muted)]">
                                        فیلدهای فرم را با اطلاعات صحیح تکمیل کنید.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Side panel */}
                    <aside className="space-y-6">
                        <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[var(--color-navy)] to-[#0B3474] p-7 text-white shadow-xl shadow-blue-950/10 backdrop-blur-2xl sm:p-8">
                            <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[var(--color-electric)]/20 blur-3xl" />

                            <div className="relative">


                                <h3 className="mt-6 text-2xl font-black">
                                    چطور می‌تونیم کمکت کنیم؟
                                </h3>

                                <p className="mt-4 text-sm leading-8 text-blue-100/75">
                                    برای اینکه سریع‌تر به نتیجه برسی،
                                    موضوع پیامت رو مشخص کن و جزئیات لازم رو
                                    بنویس. این کار به بررسی دقیق‌تر درخواستت
                                    کمک می‌کنه.
                                </p>

                                <div className="mt-7 rounded-2xl border border-white/15 bg-white/[0.07] p-5 backdrop-blur-xl">
                                    <div className="flex items-center gap-3">
                                        <FiMapPin className="shrink-0 text-xl text-[var(--color-electric)]" />
                                        <span className="font-bold">
                                            فروشگاه آنلاین تکنووا
                                        </span>
                                    </div>

                                    <p className="mt-3 text-sm leading-7 text-blue-100/70">
                                        خرید آسان محصولات دیجیتال، بدون نیاز
                                        به مراجعه حضوری.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-white/70 bg-white/60 p-6 shadow-[0_12px_40px_rgba(7,85,217,0.07)] backdrop-blur-2xl sm:p-7">
                            <h3 className="text-xl font-black">
                                قبل از ارسال پیام
                            </h3>

                            <p className="mt-3 text-sm leading-8 text-[var(--color-text-secondary)]">
                                شاید پاسخ سؤال شما در بخش پرسش‌های متداول
                                موجود باشد. آنجا را هم بررسی کنید.
                            </p>

                            <a
                                href="#faq"
                                className="group mt-5 inline-flex items-center gap-2 font-bold text-[var(--color-primary)] transition hover:text-[var(--color-primary-hover)]"
                            >
                                مشاهده پرسش‌های متداول
                                <FiArrowLeft className="transition-transform group-hover:-translate-x-1" />
                            </a>
                        </div>
                    </aside>
                </div>
            </section>
            {/* FAQ */}
            <section
                id="faq"
                className="relative border-t border-blue-100/70 bg-white/45 py-20 backdrop-blur-xl lg:py-24"
            >
                <div className="mx-auto max-w-4xl px-6 sm:px-10">
                    <div className="text-center">


                        <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                            سؤالات پرتکرار
                        </h2>

                        <p className="mx-auto mt-4 max-w-xl text-sm leading-8 text-[var(--color-text-secondary)]">
                            پاسخ برخی از پرسش‌های رایج درباره خرید و خدمات
                            تکنووا را اینجا پیدا کنید.
                        </p>
                    </div>

                    <div className="mt-10 space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.question}
                                    className={`overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-300 ${
                                        isOpen
                                            ? "border-blue-200 bg-white/90 shadow-[0_10px_30px_rgba(7,85,217,0.08)]"
                                            : "border-white/80 bg-white/55 hover:border-blue-100 hover:bg-white/80"
                                    }`}
                                >
                                    <button
                                        type="button"
                                        aria-expanded={isOpen}
                                        onClick={() =>
                                            setOpenFaq(isOpen ? -1 : index)
                                        }
                                        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right sm:px-6"
                                    >
                                        <span className="text-sm leading-7 font-bold sm:text-base">
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                                                isOpen
                                                    ? "rotate-180 bg-[var(--color-primary)] text-white"
                                                    : "bg-[var(--color-primary-light)] text-[var(--color-primary)]"
                                            }`}
                                        >
                                            <FiChevronDown />
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-5 sm:px-6">
                                            <div className="border-t border-blue-100 pt-4 text-sm leading-8 text-[var(--color-text-secondary)]">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )

}