import Hero from "@/components/MainPage/About/Hero";
import Link from "next/link";
import {
    FiArrowLeft,
    FiShoppingBag,
    FiShield,
    FiTruck,
    FiHeadphones,
    FiZap,
    FiTarget,
    FiHeart,
    FiAward,
    FiCheckCircle,
} from "react-icons/fi";
import Services from "@/components/MainPage/Home/Services";
import {FaArrowLeftLong} from "react-icons/fa6";

export default function AboutPage() {
    return (
        <main
            dir="rtl"
            className="min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]"
        >
            <Hero/>


            {/* Brand Introduction */}
            <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <div>
            <span className="text-sm mb-2 font-extrabold text-[var(--color-primary)]">
              داستان ما
            </span>

                        <h2 className="mt-4 text-3xl leading-relaxed font-black sm:text-4xl">
                            بیشتر از یک فروشگاه،
                            <span className="text-[var(--color-primary)]">
                {" "}
                                همراه شما در دنیای فناوری
              </span>
                        </h2>

                        <div className="mt-6 space-y-5 text-base leading-9 text-[var(--color-text-secondary)]">
                            <p>
                                تکنووا با یک ایده شکل گرفته است: خرید محصولات دیجیتال باید
                                تجربه‌ای ساده، لذت‌بخش و قابل اعتماد باشد. ما می‌خواهیم
                                انتخاب تکنولوژی مناسب، به‌جای یک فرایند پیچیده، به تجربه‌ای
                                خوشایند تبدیل شود.
                            </p>

                            <p>
                                در دنیایی که فناوری هر روز سریع‌تر پیشرفت می‌کند، انتخاب
                                محصول مناسب اهمیت زیادی دارد. به همین دلیل، هدف ما فراهم
                                کردن بستری برای بررسی، مقایسه و خرید محصولات دیجیتال با
                                اطلاعات روشن و تجربه کاربری آسان است.
                            </p>

                            <p>
                                در تکنووا، فقط به فروش یک محصول فکر نمی‌کنیم؛ می‌خواهیم
                                تجربه‌ای بسازیم که از اولین بازدید شما شروع شود و با
                                پشتیبانی مسئولانه پس از خرید ادامه پیدا کند.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--color-primary-light)] to-transparent" />

                        <div className="relative rounded-[2rem] border border-blue-100 bg-white p-7 shadow-xl shadow-blue-900/5 sm:p-10">
                            <div className="flex h-14 w-14 pb-5 items-center justify-center rounded-2xl  text-3xl text-[var(--color-primary)]">
                                <FiZap />
                            </div>

                            <h3 className="mt-7 text-2xl font-black">
                                چرا تکنووا؟
                            </h3>

                            <p className="mt-7 leading-9 text-[var(--color-text-secondary)]">
                                چون باور داریم تجربه خرید خوب، فقط به انتخاب یک محصول
                                خلاصه نمی‌شود؛ اطلاعات کاربردی، فرایند ساده سفارش،
                                پرداخت مطمئن و پشتیبانی پاسخ‌گو هم بخشی از آن هستند.
                            </p>

                            <div className="mt-7 space-y-4">
                                {[
                                    "تجربه خرید ساده و کاربرپسند",
                                    "اطلاعات روشن برای انتخاب بهتر",
                                    "توجه به امنیت و رضایت مشتری",
                                    "تلاش برای ارائه خدمات قابل اعتماد",
                                ].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <FiCheckCircle className="mt-1 shrink-0 text-xl text-[var(--color-primary)]" />
                                        <span className="text-sm leading-7 text-[var(--color-text)]">
                      {item}
                    </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                   {/* Features */}
            <section className="border-y border-blue-100/80 bg-white py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                            چرا از تکنووا خرید کنیم؟
                        </h2>

                        <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
                            تلاش می‌کنیم تمام جزئیات خرید شما، از انتخاب محصول تا دریافت
                            سفارش، ساده‌تر و مطمئن‌تر باشد.
                        </p>
                    </div>

                    <div className=" w-full rounded-tl-2xl rounded-tr-2xl">

                        <Services />
                    </div>
                </div>
            </section>



                   {/* Final CTA */}
            <section className="px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
                <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-l from-[var(--color-primary)] to-[var(--color-navy)] px-7 py-14 text-center shadow-2xl shadow-blue-900/15 sm:px-14 sm:py-20">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[40px] border-white/5" />
                    <div className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[var(--color-electric)]/20 blur-3xl" />

                    <div className="relative mx-auto max-w-3xl">
            <span className="text-sm font-bold text-blue-200">
              قدم بعدی، انتخاب شماست
            </span>

                        <h2 className="mt-5 text-3xl leading-relaxed font-black text-white sm:text-4xl lg:text-5xl">
                            دنیای تکنولوژی منتظر شماست!
                        </h2>

                        <p className="mt-5 leading-9 text-blue-100/85">
                            جدیدترین محصولات دیجیتال را کشف کنید، گزینه‌ها را بررسی کنید
                            و با خیال راحت قدم بعدی را برای هوشمندتر کردن زندگی خود بردارید.
                        </p>

                        <div className="mt-9 inline-flex flex-wrap items-center gap-4">
                            <a href="/products" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/25 bg-white/[0.12] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(7,85,217,0.2)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#3295FF]/70 hover:bg-[#0755D9]/30 hover:shadow-[0_12px_40px_rgba(7,85,217,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3295FF]">
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"/>
                                <span className="relative text-white">                            شروع خرید

</span>

                                <span className="relative text-lg text-[#8CC8FF] transition-transform duration-300 group-hover:-translate-x-1"><FaArrowLeftLong /></span>
                            </a>
                        </div>


                    </div>
                </div>
            </section>
        </main>

    )
}