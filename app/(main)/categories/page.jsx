import Hero from "@/components/MainPage/Category/Hero";
import CategoryCard from "@/components/MainPage/Category/CategoryCard";

export default function categoryPage(){
    const categories = [
        {
            id: 1,
            title: "گوشی موبایل",
            img: "/category/phone.jpg",
            link: "/shop?category=phones",
        },
        {
            id: 2,
            title: "لپ‌تاپ",
            img: "/category/laptop.jpg",
            link: "/shop?category=laptops",
        },
        {
            id: 3,
            title: "تبلت",
            img: "/category/tablet.jpg",
            link: "/shop?category=headphones",
        },
        {
            id: 4,
            title: "کیبورد",
            img: "/category/keyboard.jpg",
            link: "/shop?category=watches",
        }, {
            id: 5,
            title: "موس",
            img: "/category/mouse.jpg",
            link: "/shop?category=watches",
        }, {
            id: 6,
            title: "ایرپاد",
            img: "/category/airpod.jpg",
            link: "/shop?category=watches",
        }, {
            id: 7,
            title: "کیف لپتاب",
            img: "/category/laptop-bag.jpg",
            link: "/shop?category=watches",
        },
    ];
    return(
        <>
            <Hero />
            <section dir="rtl" className=" px-6 py-12 bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: "url('/product/cartbg.jpg')",
            }}>
                <div
                    className="mx-auto grid max-w-7xl
                grid-cols-1 justify-items-center gap-6
                sm:grid-cols-2 lg:grid-cols-4"
                >
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            img={category.img}
                            title={category.title}
                            link={category.link}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}