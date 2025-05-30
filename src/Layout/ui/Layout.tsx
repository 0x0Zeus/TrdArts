import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FC } from "react";
import { Outlet } from "react-router";

const Layout: FC = () => {
    return (
        <div className="w-full flex flex-col main-bg font-inter bg-[#06070a] min-h-screen select-none">
            <Header />
            <main id="main" className="w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout