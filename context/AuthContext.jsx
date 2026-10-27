"use client";

import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "technova_user";

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    // بازیابی اطلاعات کاربر پس از رفرش
    useEffect(() => {
        try {
            const savedUser = localStorage.getItem(STORAGE_KEY);

            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
        } catch (error) {
            console.error("خطا در بازیابی اطلاعات کاربر:", error);
            localStorage.removeItem(STORAGE_KEY);
        } finally {
            setIsAuthLoading(false);
        }
    }, []);

    // ذخیره وضعیت ورود
    const login = useCallback((userData) => {
        setUser(userData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    }, []);

    // خروج از حساب
    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem(STORAGE_KEY);

        // پاک کردن توکن‌هایی که به‌صورت cookie معمولی ذخیره شده‌اند
        document.cookie =
            "accessToken=; Max-Age=0; Path=/; SameSite=Lax";
        document.cookie =
            "refreshToken=; Max-Age=0; Path=/; SameSite=Lax";
    }, []);

    const value = {
        user,
        isLoggedIn: Boolean(user),
        isAuthLoading,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth باید داخل AuthProvider استفاده شود."
        );
    }

    return context;
}