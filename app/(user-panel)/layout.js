import UserNavbar from "@/components/UserPanel/Navbar/UserNavbar";


export default function UserPanelLayout({ children }) {
    return (
        <>
            <UserNavbar />
            <main className="min-h-screen bg-slate-50">
                {children}
            </main>
        </>
    );
}
