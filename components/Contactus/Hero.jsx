
import { FiArrowLeft } from "react-icons/fi";
import {FaArrowLeftLong} from "react-icons/fa6";

export default function ContactHero() {
    return (
        <section
            dir="rtl"
            className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#061A40] bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/connection/connection1.png')",
            }}
        >

            <div className="relative z-10 mx-auto flex w-full max-w-[40%] bg-[#061A40]/50 backdrop-blur-sm border border-white/10 flex-col items-center rounded-3xl px-6 py-10 text-center sm:px-10">

                <h1 className="text-4xl leading-[1.7] font-black text-white sm:text-5xl lg:text-7xl">
                    با ما در
                    <span className="block bg-gradient-to-l from-[var(--color-electric)] to-blue-200 bg-clip-text text-transparent">
                        ارتباط باشید
                    </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-9 text-blue-100/80 sm:text-lg">
                     برای خرید به
                    راهنمایی نیاز داری یا پیشنهادی برای بهتر شدن
                    تکنووا داری؟
                </p>


                <div className="mt-9 flex flex-wrap items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                    <a href="/#contact-form" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/25 bg-white/[0.12] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(7,85,217,0.2)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[#3295FF]/70 hover:bg-[#0755D9]/30 hover:shadow-[0_12px_40px_rgba(7,85,217,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3295FF]">
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"/>
                        <span className="relative text-white">                        ارسال پیام
                        </span>

                        <span className="relative text-lg text-[#8CC8FF] transition-transform duration-300 group-hover:-translate-x-1"><FaArrowLeftLong /></span>
                    </a>
                </div>

            </div>
        </section>
    );
}
