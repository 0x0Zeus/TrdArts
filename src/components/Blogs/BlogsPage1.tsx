import { NavLink } from "react-router-dom";
import Seperator from "../Seperator";

const BlogsPage1 = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-[80%] max-w-[800px] flex-col gap-5">
        <NavLink to="/blogs/1">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/1/1.jpg"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              NFTs Transforming Digital Fashion and Wardrobes
              </h1>
              <p className="text-justify line-clamp-3">
              Discover how Non-Fungible Tokens (NFTs) are reshaping the world of digital fashion, offering new opportunities for designers and consumers alike, and what this means for the future of virtual wardrobes.
              </p>
            </div>
          </div>
        </NavLink>
        <Seperator />
        <NavLink to="/blogs/2">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/2/1.jpg"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              NFTs: Transforming Digital Identity and Personal Branding
              </h1>
              <p className="text-justify line-clamp-3">
              As we navigate the ever-evolving landscape of the digital world, one phenomenon has captured the collective imagination: NFTs, or Non-Fungible Tokens. These digital assets have emerged as a transformative force, reshaping how we perceive ownership and value in the virtual space. But beyond their speculative allure, NFTs are paving the way for a revolution in digital identity and personal branding. In this blog post, I want to delve into how NFTs are redefining our digital personas and the potential they hold for creators and individuals alike.
              </p>
            </div>
          </div>
        </NavLink>
        <Seperator />
        <NavLink to="/blogs/3">
          <div className="grid items-center grid-cols-4 gap-10 px-5">
            <div className="h-[124px] overflow-hidden">
              <img
                src="/images/blogs/3/1.jpg"
                className="h-[124px] w-full rounded-xl border-4 object-cover object-center"
              />
            </div>
            <div className="col-span-3">
              <h1 className="mb-5 text-2xl font-bold text-justify line-clamp-1">
              The Evolution of NFT Gaming: Play-to-Earn Revolution
              </h1>
              <p className="text-justify line-clamp-3">
              Dive into the world of NFT gaming and explore how the play-to-earn model is revolutionizing the gaming industry. Discover the relevance, challenges, and benefits of this innovative approach and learn how it could be your next big opportunity.
              </p>
            </div>
          </div>
        </NavLink>
        
      </div>
    </div>
  )
}

export default BlogsPage1;