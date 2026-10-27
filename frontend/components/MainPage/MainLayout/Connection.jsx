"use client"
import {FiArrowLeft} from "react-icons/fi";

import {useState} from "react";

export default function Connection(){
    const [email, setEmail] = useState("");

    function handleSubscribe(event) {
        event.preventDefault();

        if (!email.trim()) return;

        // اتصال به API خبرنامه را اینجا انجام بده.
        console.log("Newsletter email:", email);
        setEmail("");
    }
    return (
        <>
            <div className=" items-center mt-25 mb-25 rounded-3xl gap-4 w-[90%] mx-auto min-h-[300px] overflow-hidden bg-cover bg-center bg-no-repeat"
                 style={{
                     backgroundImage: "url('/connection/connection.png')",
                 }} dir={"ltr"} >
                <div className="max-w-[35%] mt-20 ml-30">
                    <h2 className="text-3xl text-white " dir={"rtl"}>با ما در اتباط باشید!</h2>
                    <p className="text-lg text-white " dir={"rtl"}>با وارد کردن ایمیل خود از اخرین تخفیف ها و محصلات با خبر شوید.  </p>
                    <form
                        dir={"rtl"}
                        onSubmit={handleSubscribe}
                        className="mt-5  flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-1.5 transition "
                    >
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="ایمیل شما..."
                            aria-label="ایمیل برای عضویت در خبرنامه"
                            className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-2 text-sm text-[#061A40] outline-none placeholder:text-gray-400 focus:border-[#3295FF]"
                        />

                        <button
                            type="submit"
                            aria-label="عضویت در خبرنامه"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3295FF] to-[#0755D9] text-white shadow-lg shadow-blue-950/30 transition hover:scale-105 hover:shadow-blue-500/20"
                        >
                            <FiArrowLeft size={19} />
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}