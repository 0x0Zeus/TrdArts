import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="">
      <div className="container text-[#FFFFFF]/60 text-base">
        <div className="px-5 py-10 flex items-center justify-between">
        <span>@ 2025 TrdArts, All Rights Reserved.</span>
        <ul className="flex items-center divide-x-2 divide-[#FFFFFF]/60">
          <li className="px-4">Privacy Policy</li>
          <li className="px-4">Terms and Conditions</li>
        </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
