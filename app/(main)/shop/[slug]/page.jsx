import ProductGallery from "@/components/MainPage/Product/ProductGallery";
import ProductInfo from "@/components/MainPage/Product/ProductInfo";
import ProductFeatures from "@/components/MainPage/Product/ProductFeatures";
import ProductSpecifications from "@/components/MainPage/Product/ProductSpecifications";
import Link from "next/link";
import ProductComments from "@/components/MainPage/Contactus/ProductComments";


export default async function ProductPage({ params }) {
    const { slug } = await params;

    return (
        <main
            dir="rtl"
            className="min-h-screen bg-[#030D23] px-4 pb-16 pt-32 text-white sm:px-6 lg:px-10"
        >
            <div className="mx-auto max-w-7xl">
                <nav className="mb-8 text-sm text-white/45">
                    <Link href="/public">خانه</Link>
                    <span className="mx-2">/</span>
                    <Link href="/shop">فروشگاه</Link>

                    <span className="mx-2">/</span>
                    <span className="text-[#BBDFFF]">آیفون 16 پرو</span>
                </nav>

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">
                    <ProductGallery />
                    <ProductInfo />
                </div>


                <ProductSpecifications />


            </div>
            <ProductComments />
        </main>
    );
}
