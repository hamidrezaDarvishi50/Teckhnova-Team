import {GrApple} from "react-icons/gr";
import {SiAsus, SiHtc, SiHuawei, SiNokia, SiOneplus, SiSamsung, SiSony, SiXiaomi} from "react-icons/si";
import {TiVendorMicrosoft} from "react-icons/ti";
import {FaArrowLeftLong} from "react-icons/fa6";

export default function Category(){
    const brands = [
        {
            svg: <GrApple />,
            title: "Apple",
        },
        {
            svg: <SiSamsung />,
            title: "Samsung",
        },
        {
            svg: <SiXiaomi />,
            title: "Xiaomi",
        },
        {
            svg: <SiOneplus />,
            title: "One Plus",
        },
        {
            svg: <SiHtc />,
            title: "HTC",
        },
        {
            svg: <SiSony />,
            title: "Sony",
        },
        {
            svg: <SiHuawei />,
            title: "Huawei",
        },
        {
            svg: <SiAsus />,
            title: "Asus",
        },
        {
            svg: <SiNokia />,
            title: "Nokia",
        },
        {
            svg: <TiVendorMicrosoft />,
            title: "Microsoft",
        }

    ]

    return (
        <>
            <div className="w-[95%] m-auto pb-22">
                <div className="flex w-full justify-between items-center pl-10 pr-10">
                    <h2 className="text-[#061A40] text-xl font-bold">دسته بندی</h2>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <a href="/shop" className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl  px-6 py-4 text-sm font-semibold text-[#061A40] backdrop-blur-2xl transition-all duration-300  ">
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-l from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"/>
                            <span className="relative text-[#061A40] text-xl font-bold">بیشتر </span>

                            <span className="relative  text-[#061A40] text-xl font-bold transition-transform duration-300 group-hover:-translate-x-1"><FaArrowLeftLong /></span>
                        </a>
                    </div>
                </div>
                <div className="w-[93%] m-auto flex justify-between items-center flex-wrap ">
                    {brands.map((item, index) => (
                        <div key={index} className="items-center ">
                            <div className=" text-center items-center ">
                                <div className="w-[100px] h-[100px] border border-[#3295FF]/50 shadow-[0_8px_8px_rgba(7,85,217,0.35)] m-auto rounded-full text-[50px] mb-4 bg-white/50  text-[#061A40] text-center items-center flex justify-center hover:scale-105 transition duration-200 cursor-pointer">
                                    {item.svg}
                                </div>
                                <p className="text-[20px] m-auto font-bold text-[#061A40] ">
                                    {item.title}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}