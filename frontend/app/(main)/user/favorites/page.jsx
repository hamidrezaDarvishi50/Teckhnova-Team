
"use client";

import { FiHeart } from "react-icons/fi";
import ProductCard from "@/components/MainPage/Shop/ProductCard";
import Sidebar from "@/components/UserPanel/Sidebar/Sidebar";

export default function FavoritesPage() {
    return (
        <>
            <div className="h-[140px] bg-[#061A40]">

            </div>
            <div className="grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6 ">
            <Sidebar />
            <main dir="rtl" className="relative  mt-8 overflow-hidden rounded-3xl ml-8 mb-8 border border-white/20 bg-[#061A40]/85 p-4 shadow-[0_25px_80px_rgba(6,26,64,0.2)] backdrop-blur-2xl sm:p-6 lg:p-8"
            >
                {/* Background effects */}
                <div className="pointer-events-none absolute -right-20 -top-20  h-56 w-56 rounded-full bg-[#3295FF]/15 blur-3xl"
                />

                <div className="pointer-events-none absolute -bottom-24 -left-20  h-56 w-56 rounded-full bg-[#0755D9]/20 blur-3xl"
                />

                {/* Header */}
                <header className="relative z-10 mb-8 flex items-center gap-4 border-b border-white/15 pb-6">
                    <div className="flex h-14 w-14 shrink-0 items-center  justify-center rounded-2xl border border-white/15  bg-white/10 text-[#3295FF] backdrop-blur-xl">
                        <FiHeart size={28} />
                    </div>

                    <div>
                        <h1 className="bg-gradient-to-l from-white via-[#BBDFFF]  to-[#3295FF] bg-clip-text text-2xl font-black   text-transparent sm:text-3xl">
                            علاقه‌مندی‌های من
                        </h1>


                    </div>
                </header>

                {/* Products */}
                <section className="relative z-10 min-w-0">
                    <ProductCard />
                </section>
            </main>
        </div>
</>
    );
}
