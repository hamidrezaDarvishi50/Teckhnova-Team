import Hero from "@/components/Category/Hero";
import CategoryCard from "@/components/Category/CategoryCard";

export default function categoryPage(){
    return(
        <>
            <Hero />
            <section dir="rtl" className="bg-[#030D23] px-6 py-12">
                <div className="mx-auto grid max-w-7xl
                grid-cols-1 justify-items-center gap-6
                sm:grid-cols-2 lg:grid-cols-4"
                >
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
            </section>
        </>
    )
}