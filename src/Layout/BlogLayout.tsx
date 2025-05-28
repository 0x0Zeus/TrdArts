import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div className="flex justify-center">
      <div className="my-20 w-full max-w-[1200px]">
        <div className="flex justify-end pr-10 mb-10">
          <NavLink to="/blogs/page1">
            {
              ({ isActive }) => (
                <button className={`${isActive ? 'bg-[#00000044]' : 'bg-transparent'} h-10 w-10 border text-center hover:bg-[#00000044] active:scale-75 transition-all origin-center`}>1</button>
              )
            }
          </NavLink>
          <NavLink to="/blogs/page2">
            {
              ({ isActive }) => (
                <button className={`${isActive ? 'bg-[#00000044]' : 'bg-transparent'} h-10 w-10 border text-center hover:bg-[#00000044] active:scale-75 transition-all origin-center`}>2</button>
              )
            }
          </NavLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default BlogLayout;
