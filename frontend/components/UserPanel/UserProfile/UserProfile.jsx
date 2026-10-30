
"use client";

import {
    FiUser,
    FiPhone,
    FiMail,
    FiCalendar,
    FiShield,
    FiEdit3,
} from "react-icons/fi";

const userInfo = {
    firstName: "یاسمین",
    lastName: "حسین‌زاده",
    phone: "09123456789",
    email: "yasmin@example.com",
    joinDate: "۱۴۰۵/۰۵/۱۲",
    status: "فعال",
};

const details = [
    {
        label: "شماره موبایل",
        value: userInfo.phone,
        icon: FiPhone,
        direction: "ltr",
    },
    {
        label: "آدرس ایمیل",
        value: userInfo.email,
        icon: FiMail,
        direction: "ltr",
    },
    {
        label: "تاریخ عضویت",
        value: userInfo.joinDate,
        icon: FiCalendar,
    },
    {
        label: "وضعیت حساب",
        value: userInfo.status,
        icon: FiShield,
        status: true,
    },
];

export default function UserProfile() {
    return (
        <section
            dir="rtl"
            className="w-full rounded-3xl border border-white/20
      bg-white/10 p-4 shadow-[0_8px_32px_rgba(6,26,64,0.15)]
      backdrop-blur-xl sm:p-6 lg:p-8"
        >
            {/* Header */}
            <div className="mb-6 flex items-center justify-between gap-3">
                    <h2 className="text-xl font-bold text-[#061A40] sm:text-2xl">
                        اطلاعات حساب کاربری
                    </h2>
            </div>

            {/* User information */}
            <div className="rounded-2xl border border-white/50 bg-white/70 p-4 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    {/* Avatar */}
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center
          rounded-full border-4 border-white bg-[#EAF2FF]
          text-[#0755D9] shadow-md">
                        <FiUser size={38} />
                    </div>

                    {/* Name */}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#061A40]">
                            {userInfo.firstName} {userInfo.lastName}
                        </h3>

                        <span className="mt-3 inline-flex items-center gap-2
            rounded-full bg-emerald-50 px-3 py-1 text-xs
            font-medium text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              حساب کاربری فعال
            </span>
                    </div>

                    {/* Edit button */}
                    <button
                        type="button"
                        onClick={() => alert("بخش ویرایش اطلاعات به‌زودی اضافه می‌شود.")}
                        className="inline-flex items-center justify-center gap-2
            rounded-xl bg-[#0755D9] px-4 py-3 text-sm
            font-medium text-white transition hover:bg-[#0645B5]"
                    >
                        <FiEdit3 size={17} />
                        ویرایش اطلاعات
                    </button>
                </div>

                <div className="my-6 border-t border-slate-200" />

                {/* Details grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {details.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-200/70
                bg-[#F3F7FD]/80 p-4 transition hover:border-[#3295FF]/50"
                            >
                                <div className="mb-3 mt-3 flex text-sm justify-between items-center gap-2 text-[#0755D9]">
                                    <div className=" flex text-md items-center gap-2 text-[#0755D9]">
                                        <Icon size={19} />
                                        {item.label}
                                    </div>
                                    <p
                                        dir={item.direction || "rtl"}
                                        className={`break-words text-lg font-semibold ${
                                            item.status
                                                ? "text-emerald-600"
                                                : "text-[#172033]"
                                        }`}
                                    >
                                        {item.value}
                                    </p>
                                </div>


                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
