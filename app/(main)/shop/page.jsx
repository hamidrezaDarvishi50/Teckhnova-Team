
import Hero from "@/components/MainPage/Shop/Hero";
import FilterPanel from "@/components/MainPage/Shop/FilterPanel";
import ProductCard from "@/components/MainPage/Shop/ProductCard";
import {serverAddress} from "@/utils/handledfetch";

// const API_URL = "http://192.168.100.95:8000";

async function getProducts() {
    try {
        const response = await fetch(`${serverAddress}/products/`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`خطا در دریافت محصولات: ${response.status}`);
        }

        const data = await response.json();

        return Array.isArray(data) ? data : data.results ?? [];
    } catch (error) {
        console.error("Products API error:", error);
        return null;
    }
}

export default async function ShopPage() {
    const products = await getProducts();

    return (
        <>
            <Hero />

            <section
                dir="rtl"
                className="relative isolate flex min-h-screen w-full
                flex-col gap-5 overflow-hidden bg-[#061A40]
                bg-cover bg-center bg-no-repeat px-5 py-10
                sm:px-8 lg:flex-row lg:px-10"
                style={{
                    backgroundImage: "url('/product/cartbg.jpg')",
                }}
            >
                <FilterPanel />

                <div className="grid flex-1 grid-cols-1 items-start
                    justify-items-center gap-6 sm:grid-cols-2
                    xl:grid-cols-3"
                >
                    {products === null ? (
                        <p className="col-span-full text-center text-white">
                            دریافت محصولات با خطا مواجه شد. دوباره تلاش کن.
                        </p>
                    ) : products.length === 0 ? (
                        <p className="col-span-full text-center text-white">
                            محصولی برای نمایش وجود ندارد.
                        </p>
                    ) : (
                        products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))
                    )}
                </div>
            </section>
        </>
    );
}
