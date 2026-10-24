import {MdShoppingCartCheckout, MdStar} from "react-icons/md";
import {FaRegHeart} from "react-icons/fa";

export default function ProductCard() {
  return (
    // <div
    //   dir="rtl"
    //   className="min-h-[300px] flex items-center justify-center
    //   bg-gradient-to-br from-[#e9eaff] via-[#f8f7ff] to-[#d9e9ff]
    //   p-5 font-[Vazirmatn]"
    // >
      <div
        className="relative w-full max-w-[300px] overflow-hidden
        rounded-[40px] border border-white/80
        bg-white/35 p-7
        backdrop-blur-2xl hover:border-[#3295FF]/70 hover:scale-102 transition-all duration-300"
      >
        <div className="absolute -right-20 top-32 h-60 w-60
          rounded-full bg-blue-300/30 blur-[80px]" />

        <div className="absolute -left-16 bottom-40 h-52 w-52
          rounded-full bg-[#061A40]/30 blur-[80px]" />

        <div className="relative z-10 flex items-center justify-between pb-2">
          <span
            className="rounded-full  flex border tems-center gap-2 border-pink-200/70
            bg-gradient-to-l from-[#0645B5] to-[#061A40]
            px-3 py-1 text-[10px] font-bold text-white
            shadow-lg shadow-[#061A40]/20"
          >
            <MdStar /> پرفروش‌ترین
          </span>

          <button
            aria-label="افزودن به علاقه‌مندی‌ها"
            className="flex h-10 w-10 items-center justify-center
            rounded-full border border-white/80 bg-white/40
            text-lg text-[#0645B5] transition hover:bg-white/80 "
          >
            <FaRegHeart />
          </button>
        </div>

        <div className="relative z-10 flex h-[200px] items-center rounded-lg justify-center overflow-hidden">
          <img
            src="/product/phone.jpg"
            alt="گوشی آیفون ۱۶ پرو"
            className="h-full w-full object-contain drop-shadow-2xl
           "
          />
        </div>

        <div className="relative z-10 mt-5">
          <h2 className="text-lg font-extrabold text-[#17244c]">
             آیفون 18 پرومکس
          </h2>

          <p className="mt-2 text-sm text-[#737da5]">
            حافظه ۲۵۶ گیگابایت
            <span className="mx-2">•</span>
            رنگ البالویی
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-2xl font-black text-[#0645B5]">
              ۱۱۹,۹۰۰,۰۰۰
            </span>

            <span
              className="rounded-full border border-pink-200
              bg-pink-100/60 px-3 py-1.5 text-sm font-bold text-[#0645B5]"
            >
              ۱۴٪ تخفیف
            </span>
          </div>

          <p className="mt-2 text-sm text-[#9299b9] line-through">
            ۱۳۹,۹۰۰,۰۰۰ تومان
          </p>



          <button
            className="mt-7 flex w-full items-center justify-center gap-2
            rounded-full border border-pink-200/70
            bg-gradient-to-l from-[#0645B5] to-[#061A40]
            px-4 py-2 text-white shadow-[0_8px_30px_[#061A40]]
            transition duration-300 hover:-translate-y-1
            hover:shadow-[#061A40]-lg"
          >
            <span className="text-lg font-bold">
              افزودن به سبد خرید
            </span>
            <span className="text-xl"><MdShoppingCartCheckout /></span>
            {/*<span*/}
            {/*  className="flex h-11 w-11 items-center justify-center*/}
            {/*  rounded-full border border-white/20 bg-white/10 text-2xl"*/}
            {/*>*/}
            {/*  ←*/}
            {/*</span>*/}
          </button>
        </div>
      </div>
    // </div>
  );
}
