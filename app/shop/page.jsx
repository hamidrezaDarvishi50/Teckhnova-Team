import Hero from "@/components/Shop/Hero";
import FilterPanel from "@/components/Shop/FilterPanel";
import ProductCard from "@/components/Shop/ProductCard";

export default function shopPage(){
    return (
        <>
            <Hero />
            <section
                dir="rtl"
                className="relative isolate flex gap-5 h-full w-full pt-10 pb-10 pl-10 pr-10  overflow-hidden bg-[#061A40] bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/product/cartbg.jpg')",
                }}
            >
                <FilterPanel />
                <div>
                    <ProductCard />
                </div>
            </section>


        </>
    )
}