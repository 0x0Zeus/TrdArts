import { FC } from "react";
import Subscribe from "./Home/Subscribe";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <footer className="w-full">
      <div className="container mx-auto">
        <Subscribe />
        <div className=" px-4 text-base text-[#FFFFFF]/60">
          <div className="flex flex-col items-center px-5 py-10 md:flex-row md:justify-between md:px-0">
            <span className="mb-4 md:mb-0">
              @ 2025 TrdArts, All Rights Reserved.
            </span>
            <ul className="flex items-center">
              <li className="px-4">
                <Link
                  to="https://x.com/ArtsTrader"
                  className="hover:text-white"
                >
                  <FaXTwitter />
                </Link>
              </li>
              <li className="px-4">Privacy Policy</li>
              <li className="px-4">Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
