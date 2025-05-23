import { Link } from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';

const items: MenuProps['items'] = [
  {
    label: (
      <Link to={'/'} className="text-base">
        Feature Article
      </Link>
    ),
    key: '0',
  },
  {
    label: (
      <Link to={'/'} className="text-base">
        About Us
      </Link>
    ),
    key: '1',
  },
  {
    label: (
      <Link to={'/'} className="text-base">
        Contact Us
      </Link>
    ),
    key: '2',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <button className="text-base">
        Subscribe
      </button>
    ),
    key: '3',
  }
]

function Header() {

  return (
    <>
      <header className="bg-[rgba(255,255,255,0.01)] backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/icons/icon.png" alt="Logo" className="h-8 w-8" />
            <p className="text-[28px] font-extrabold">TrdArts</p>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex h-12 items-center rounded-full border border-[#E2E8FF]/10 p-1">
            <Link
              to="/"
              className="text-nowrap flex h-full items-center justify-center rounded-full px-6 text-sm font-medium text-[#E2E8FF]/75 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              <li className="flex h-full items-center">Feature Article</li>
            </Link>
            <Link
              to="/"
              className="text-nowrap flex h-full items-center justify-center rounded-full px-6 text-sm font-medium text-[#E2E8FF]/75 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              <li className="flex h-full items-center">About Us</li>
            </Link>
            <Link
              to="/"
              className="text-nowrap flex h-full items-center justify-center rounded-full px-6 text-sm font-medium text-[#E2E8FF]/75 transition-colors duration-300 ease-in-out hover:bg-white hover:text-black"
            >
              <li className="flex h-full items-center">Contact Us</li>
            </Link>
          </ul>

          {/* Desktop Subscribe Button */}
          <div className="hidden md:block h-12 w-[170px] rounded-lg bg-gradient-to-tr from-[#FFFFFF19] to-[#FFFFFF99] p-[1px]">
            <button
              type="button"
              className="font-base h-full w-full rounded-lg bg-[#06070A] bg-gradient-to-t from-[#FFFFFF14] to-[#FFFFFF00] text-white"
            >
              Subscribe
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className="md:hidden">
            <Dropdown 
            menu={{ items }} 
            trigger={['click']} 
            overlayClassName="mt-6 bg-[#06070A]"
            >
              <a onClick={(e) => e.preventDefault()}>
                <MenuOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
      </header>
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent opacity-[0.15]"></div>
    </>
  );
}

export default Header;
