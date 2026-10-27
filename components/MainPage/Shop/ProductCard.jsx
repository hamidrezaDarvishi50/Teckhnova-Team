
import { MdShoppingCartCheckout, MdStar } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  const {
    name,
    slug,
    image,
    category,
    price,
    discount,
    final_price,
    has_discount,
    stock,
  } = product;

  const formatPrice = (value) =>
      new Intl.NumberFormat("fa-IR").format(value ?? 0);

  return (
      <div
          className="relative flex h-[480px] w-full max-w-[300px] flex-col
                overflow-hidden rounded-[40px] border border-white/80
                bg-white/35 p-7 backdrop-blur-2xl
                transition-all duration-300
                hover:scale-[1.02] hover:border-[#3295FF]/70"
      >
        {/* افکت‌های پس‌زمینه */}
        <div
            className="absolute -right-20 top-32 h-60 w-60
                    rounded-full bg-blue-300/30 blur-[80px]"
        />

        <div
            className="absolute -left-16 bottom-40 h-52 w-52
                    rounded-full bg-[#061A40]/30 blur-[80px]"
        />

        {/* سربرگ کارت با ارتفاع ثابت */}
        <div
            className="relative z-10 flex h-12 shrink-0
                    items-center justify-between gap-2"
        >
          <div className="flex h-8 min-w-0 items-center">
            {has_discount ? (
                <span
                    className="flex items-center gap-2 whitespace-nowrap
                                rounded-full border border-pink-200/70
                                bg-gradient-to-l from-[#0645B5] to-[#061A40]
                                px-3 py-1 text-[13px] font-bold text-white shadow-lg"
                >
                            <MdStar />
                  {formatPrice(discount)}٪ تخفیف
                        </span>
            ) : (
                <span className="text-xs text-[#737da5]">
                            {category}
                        </span>
            )}
          </div>

          <button
              type="button"
              aria-label="افزودن به علاقه‌مندی‌ها"
              className="flex h-10 w-10 shrink-0 items-center
                        justify-center rounded-full border border-white/80
                        bg-white/40 text-lg text-[#0645B5]
                        transition hover:bg-white/80"
          >
            <FaRegHeart />
          </button>
        </div>

        {/* تصویر و اطلاعات محصول */}
        <Link
            href={slug ? `/shop/${slug}` : "/shop"}
            aria-label={`مشاهده ${name}`}
            className="relative z-10 block min-h-0 flex-1"
        >
          <div
              className="flex h-[180px] items-center justify-center
                        overflow-hidden rounded-lg"
          >
            <img
                src={image || "/product/phone.jpg"}
                alt={name}
                className="h-full w-full object-contain drop-shadow-2xl"
            />
          </div>

          <div className="mt-4">
            <h2 className="line-clamp-1 text-lg font-extrabold text-[#17244c]">
              {name}
            </h2>

            <p className="mt-3 truncate text-sm text-[#737da5]">
              دسته‌بندی: {category}
            </p>
          </div>
        </Link>

        {/* قیمت با فضای ثابت برای قیمت قبلی */}
        <div className="relative z-10 mt-auto shrink-0">
          <div className="flex h-9 flex-wrap items-center gap-2">
                    <span className="text-2xl font-black text-[#0645B5]">
                        {formatPrice(final_price ?? price)}
                    </span>

            <span className="text-sm text-[#737da5]">
                        تومان
                    </span>
          </div>

          {/* این قسمت همیشه ارتفاع یکسان دارد */}
          <div className="mt-1 flex h-6 items-center">
            {has_discount && (
                <p className="text-sm text-[#9299b9] line-through">
                  {formatPrice(price)} تومان
                </p>
            )}
          </div>

          {/* فقط یک دکمه */}
          <button
              type="button"
              disabled={stock <= 0}
              className="mt-3 flex w-full items-center justify-center gap-2
                        rounded-full border border-pink-200/70
                        bg-gradient-to-l from-[#0645B5] to-[#061A40]
                        px-4 py-3 text-white transition duration-300
                        hover:-translate-y-1 disabled:cursor-not-allowed
                        disabled:opacity-50"
          >
                    <span className="text-sm font-bold">
                        {stock > 0 ? "افزودن به سبد خرید" : "ناموجود"}
                    </span>

            <MdShoppingCartCheckout className="text-xl" />
          </button>
        </div>
      </div>
  );
}
