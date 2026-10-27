
import Header from "@/components/MainPage/MainLayout/Header";
import Footer from "@/components/MainPage/MainLayout/Footer";

export default function MainLayout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
