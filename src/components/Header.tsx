import { Link } from "react-router-dom"

function Header() {
    return (
        <header className="">
            <div className="max-w-[1180px] flex items-center justify-between py-4 mx-auto px-5">
                <Link to="/" className="flex items-center gap-3">
                    <img
                        src="/icons/icon.png"
                        alt="Logo"
                        className="w-8 h-8"
                    />
                    <p className="font-extrabold text-[28px]">TrdArts</p>
                </Link>
                <ul className="flex items-center border border-[#E2E8FF]/10 h-12 rounded-full p-1">
                    <Link to="/" className="font-medium text-sm text-[#E2E8FF]/75 text-nowrap h-full rounded-full px-6 hover:bg-white flex items-center justify-center hover:text-black transition-colors duration-300 ease-in-out">
                        <li className="h-full flex items-center">
                            Feature Article
                        </li>
                    </Link>
                    <Link to="/" className="font-medium text-sm text-[#E2E8FF]/75 text-nowrap h-full rounded-full px-6 hover:bg-white flex items-center justify-center hover:text-black transition-colors duration-300 ease-in-out">
                        <li className="h-full flex items-center">
                            About Us
                        </li>
                    </Link>
                    <Link to="/" className="font-medium text-sm text-[#E2E8FF]/75 text-nowrap h-full rounded-full px-6 hover:bg-white flex items-center justify-center hover:text-black transition-colors duration-300 ease-in-out">
                        <li className="h-full flex items-center">
                            Contact Us
                        </li>
                    </Link>
                </ul>
                <div className="bg-gradient-to-tr from-[#FFFFFF19] to-[#FFFFFF99] h-12 w-[170px] p-[1px] rounded-lg">
                    <button
                        type="button"
                        className="bg-[#06070A] bg-gradient-to-t from-[#FFFFFF14] to-[#FFFFFF00] h-full w-full rounded-lg text-white font-base"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header