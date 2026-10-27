
"use client";

import { FiX } from "react-icons/fi";
import ProductCard from "@/components/MainPage/Shop/ProductCard";

export default function FavoriteLoginModal({ onClose, onSuccess }) {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-white/20 px-4 py-6 backdrop-blur-sm"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="login-title"
                dir="rtl"
                className="relative my-auto flex h-[80vh] w-[75vw] max-w-none flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-[var(--color-navy)]/85 shadow-[0_25px_100px_rgba(6,26,64,0.35)] backdrop-blur-2xl"
            >
                {/* Background effects */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[var(--color-electric)]/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[var(--color-primary)]/15 blur-3xl" />

                {/* Header */}
                <div className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/70 px-7 py-5">
                    <h1
                        id="login-title"
                        className="bg-gradient-to-l from-white via-[#BBDFFF] to-[#3295FF] bg-clip-text text-3xl font-black text-transparent"
                    >
                        TechNova
                    </h1>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="بستن پنجره"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10 focus:border-[#3295FF]"
                    >
                        <FiX size={20} />
                    </button>
                </div>

                {/* Modal content */}
                <div className="relative z-10 min-h-0 flex-1 overflow-y-auto p-6">
                    <ProductCard />
                </div>
            </div>
        </div>
    );
}
