import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import ProductCard from "@/components/Shop/ProductCard";
import {FaArrowLeftLong} from "react-icons/fa6";
import Discount from "@/components/Home/Discount";
import Category from "@/components/Home/Category";
import Connection from "@/components/Layout/Connection";

export default function Home() {
  return (
    <>
      <Hero/>
      <div className="bg-[var(--color-primary-light)] w-full rounded-tl-2xl rounded-tr-2xl">
          <Services />

          <div
              className="w-full pb-10 relative isolate  min-h-[550px] overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{
                  backgroundImage: "url('/product/cartbg.jpg')",
              }} >

              <div className="flex w-[95%] m-auto justify-between items-center pl-10 pr-10">
                  <h2 className="text-[#061A40] text-xl font-bold">جدیدترین محصولات</h2>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                      <a href="/shop" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl  px-6 py-4 text-sm font-semibold text-[#061A40] backdrop-blur-2xl transition-all duration-300  ">
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"/>
                          <span className="relative text-[#061A40] text-xl font-bold">مشاهده </span>

                          <span className="relative  text-[#061A40] text-xl font-bold transition-transform duration-300 group-hover:-translate-x-1"><FaArrowLeftLong /></span>
                      </a>
                  </div>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-4 pl-10 pr-10 m-auto">
                  <ProductCard/>
              </div>
          </div>

          <Discount />
          <Category />

          <div
              className="w-full pb-10 relative isolate  min-h-[550px] overflow-hidden bg-cover bg-center bg-no-repeat"
              >

              <div className="flex w-[95%] m-auto justify-between items-center pl-10 pr-10">
                  <h2 className="text-[#061A40] text-xl font-bold">پرفروش ترین محصولات</h2>
                  <div className="mt-9 flex flex-wrap items-center gap-4">
                      <a href="/shop" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl  px-6 py-4 text-sm font-semibold text-[#061A40] backdrop-blur-2xl transition-all duration-300  ">
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"/>
                          <span className="relative text-[#061A40] text-xl font-bold">مشاهده </span>

                          <span className="relative  text-[#061A40] text-xl font-bold transition-transform duration-300 group-hover:-translate-x-1"><FaArrowLeftLong /></span>
                      </a>
                  </div>
              </div>
              <div className="flex flex-wrap items-center justify-start gap-4 pl-10 pr-10 m-auto">
                  <ProductCard/>
              </div>
          </div>

          <Connection />

      </div>
    </>
  );
}
