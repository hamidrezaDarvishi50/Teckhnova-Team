import {FaArrowLeftLong} from "react-icons/fa6";

export default function Discount() {
    return (
        <>
            <div className="flex flex-wrap items-center mt-25 mb-25 rounded-3xl gap-4 lg:w-[85%] w-[95%] mx-auto min-h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat"
                 style={{
                     backgroundImage: "url('/home/hero/discount1.png')",
                 }} >

                <div className="min-w-[50%] min-h-full pr-5 lg:pr-10 ">
                    <h1 className="bg-gradient-to-l from-white via-[#BBDFFF] to-[#3295FF] bg-clip-text text-transparent sm:text-5xl lg:text-5xl  font-black">پیشنهاد ویژه</h1>

                    <p className="lg:text-4xl font-black text-gray-100 pt-3 lg:pt-10 "> تا <span className="text-[60px]">30%</span> تخفیف در اولین خرید</p>
                    <div className="pt-3 lg:pt-10 flex flex-wrap items-center gap-4">
                        <a href="/shop" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl border border-white/25 bg-white/[0.12] px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(7,85,217,0.2)] backdrop-blur-2xl transition-all duration-300  hover:border-[#3295FF]/70 hover:bg-[#0755D9]/30 hover:shadow-[0_12px_40px_rgba(7,85,217,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3295FF]">
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"/>
                            <span className="relative text-white">مشاهده محصولات</span>

                            <span className="relative text-lg text-[#8CC8FF] transition-transform duration-300 group-hover:-translate-x-1"><FaArrowLeftLong /></span>
                        </a>
                    </div>
                </div>

            </div>
        </>
    )
}