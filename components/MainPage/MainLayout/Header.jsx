
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiHeart,
  FiSearch,
  FiUser,
  FiMenu,
  FiX,
  FiShoppingBag,
  FiHome,
} from "react-icons/fi";
import LoginModal from "@/components/Auth/Customer/LoginModal";
import FavoriteLoginModal from "@/components/MainPage/Favorite/FavoriteLoginModal";
import {useAuth} from "@/context/AuthContext";
import UserProfilePopover from "../../Auth/Customer/UserProfilePopover";

const navItems = [
  { title: "خانه", href: "/" },
  { title: "فروشگاه", href: "/shop" },
  { title: "دسته‌بندی‌ها", href: "/categories" },
  { title: "تخفیف‌ها", href: "/deals" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loginOpen, setLoginOpen] = useState(false);
  const [favoriteOpen, setFavoriteOpen] = useState(false);
  const { user, isAuthLoading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleSearch(event) {
    event.preventDefault();
    const query = search.trim();

    if (!query) return;

    window.location.href = `/shop?search=${encodeURIComponent(query)}`;
  }

  const iconClass =
      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10";


  // console.log("Header render:", {
  //   isScrolled,
  //   menuOpen,
  //   searchOpen,
  //   navItems,
  // });
  return (
      <div dir="rtl" className="relative z-50">
        <header
            className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                isScrolled
                    ? "top-0 px-0"
                    : "top-5 px-3 sm:top-8 sm:px-5"
            }`}
        >
          {/* قاب اصلی نوبار */}
          <div
              className={`mx-auto flex min-h-[62px] items-center justify-between gap-3 border transition-all duration-500 ease-in-out sm:min-h-[70px] ${
                  isScrolled
                      ? "w-full max-w-none rounded-none border-white/[0.08] bg-[#061A40]/95 px-3 shadow-[0_8px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-7 lg:px-10"
                      : "w-full max-w-[1250px] rounded-2xl border-white/10  px-3 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:rounded-[22px] sm:px-5 lg:px-7"
              }`}
          >
            {/* سمت راست: آیکون خانه و منوی سفید */}
            <div className="flex min-w-0 flex-1 items-center justify-start gap-2">
              <Link
                  href="/public"
                  aria-label="صفحه اصلی"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition hover:bg-white/10"
              >
                <FiHome size={18} className="text-[#F3F7FD]"/>
              </Link>

              {/* کپسول سفید وسط */}
              <nav className={`hidden min-w-0 items-center gap-0.5 rounded-full  text-[11px] text-black shadow-sm md:flex lg:gap-1 lg:px-1.5 lg:text-[15px]
              ${
                  isScrolled
                      ? " rounded-2xl border-white/10  px-3 shadow-[0_12px_40px_rgba(0,0,0,0.25)] bg-white/30 backdrop-blur-xl text-white"
                      :"border border-black/10 bg-white/40 text-white p-1 px-3 backdrop-blur-xl"
              }`}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`whitespace-nowrap rounded-full transition hover:bg-black/20 hover:text-black  px-2.5 py-2  duration-300 lg:px-3.5 active:bg-black/50 active:text:white`}
                    >
                      {item.title}
                    </Link>
                ))}
              </nav>

              {/* نسخه موبایل */}
              <button
                  type="button"
                  aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
                  onClick={() => setMenuOpen((open) => !open)}
                  className={`${iconClass} md:hidden`}
              >
                {menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
              </button>
              <h1 className="bg-gradient-to-l from-white via-[#BBDFFF] to-[#3295FF] bg-clip-text text-transparent text-3xl font-black mr-15 ">TechNova</h1>
            </div>



            {/*  آیکون‌ها */}
            <div className="relative flex shrink-0 items-center gap-1.5 sm:gap-2">
              <div className="relative">
                {searchOpen && (
                    <form
                        onSubmit={handleSearch}
                        className="absolute left-0 top-12 z-[70] w-[230px] sm:left-12 sm:top-1/2 sm:-translate-y-1/2"
                    >
                      <input
                          autoFocus
                          type="search"
                          value={search}
                          onChange={(event) => setSearch(event.target.value)}
                          placeholder="جستجوی محصول..."
                          className="w-full rounded-xl border border-white/15 bg-[#F3F7FD] px-4 py-2 text-sm text-[#061A40] outline-none placeholder:text-[#061A40]/40 focus:border-[#3295FF]"
                      />
                    </form>
                )}

                <button
                    type="button"
                    aria-label={searchOpen ? "بستن جستجو" : "جستجو"}
                    onClick={() => setSearchOpen((open) => !open)}
                    className={iconClass}
                >
                  {searchOpen ? <FiX size={18} /> : <FiSearch size={18} />}
                </button>
              </div>

              <button
                  type="button"
                  onClick={() => setFavoriteOpen(true)}
                  aria-label="علاقه‌مندی‌ها"
                  className={`${iconClass}border-white/30 bg-white/10 text-[var(--color-text)] hover:border-[var(--color-electric)]/60 hover:text-[var(--color-primary)]`}
              >
                <FiHeart className="text-xl" />
              </button>

              <Link
                  href="/cart"
                  aria-label="سبد خرید"
                  className={iconClass}
              >
                <FiShoppingBag size={18} className="text-[#F3F7FD]" />
              </Link>


              {!isAuthLoading && (
                  user ? (
                      <UserProfilePopover />
                  ) : (
                      <button
                          type="button"
                          onClick={() => setLoginOpen(true)}
                          aria-label="ورود به حساب کاربری"
                          title="ورود / ثبت‌نام"
                          className={iconClass}
                      >
                        <FiUser size={18} />
                      </button>
                  )
              )}

            </div>
          </div>

          <div
              className={`mx-auto overflow-hidden transition-all duration-300 md:hidden ${
                  menuOpen
                      ? "mt-2 max-h-[420px] opacity-100"
                      : "pointer-events-none mt-0 max-h-0 opacity-0"
              }`}
          >
            <nav className="rounded-2xl border border-white/10 bg-[#0755D9]/95 p-2 shadow-xl backdrop-blur-xl">
              {navItems.map((item) => (
                  <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm text-white/85 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.title}
                  </Link>
              ))}

              <Link
                  href="/login"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-white/85 hover:bg-white/10"
              >
                <FiUser size={17} />
                ورود / ثبت‌نام
              </Link>
            </nav>
          </div>
        </header>
        {loginOpen && (
            <LoginModal
                onClose={() => setLoginOpen(false)}
                onSuccess={() => {
                  setLoginOpen(false);
                }}
            />
        )}
        {favoriteOpen && (
            <FavoriteLoginModal
                onClose={() => setFavoriteOpen(false)}
                onSuccess={() => {
                  setFavoriteOpen(false);
                }}
            />
        )}
      </div>
  );
}
