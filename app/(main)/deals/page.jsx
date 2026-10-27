
import Hero from "@/components/MainPage/Deals/Hero";
import ProductCard from "@/components/MainPage/Shop/ProductCard";
import {serverAddress} from "@/utils/handledfetch";


async function getDiscountedProducts() {
    try {
        const response = await fetch(`${serverAddress}/products/discounted/`, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`خطا در دریافت محصولات: ${response.status}`);
        }

        const data = await response.json();

        return Array.isArray(data) ? data : data.results ?? [];
    } catch (error) {
        console.error("Discounted products API error:", error);
        return null;
    }
}

export default async function DealsPage() {
    const products = await getDiscountedProducts();

    return (
        <>
            <Hero />

            <section
                dir="rtl"
                className="relative isolate min-h-screen w-full overflow-hidden
                    bg-[#061A40] bg-cover bg-center bg-no-repeat
                    px-5 py-10 sm:px-8 lg:px-10"
                style={{
                    backgroundImage: "url('/product/cartbg.jpg')",
                }}
            >
                <div className="flex items-center flex-wrap justify-center gap-5"
                >
                    {products === null ? (
                        <p className="col-span-full text-center text-white">
                            دریافت محصولات تخفیف‌دار با خطا مواجه شد.
                            لطفاً دوباره تلاش کن.
                        </p>
                    ) : products.length === 0 ? (
                        <p className="col-span-full text-center text-white">
                            در حال حاضر محصول تخفیف‌داری وجود ندارد.
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
