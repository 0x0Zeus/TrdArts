import Seperator from "@/components/Seperator";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mx-auto font-inter px-4 sm:px-6 md:px-8">
        <div className="mx-auto max-w-[850px] pb-10 md:pb-20">
          <h1 className="mt-[60px] md:mt-[138px] text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Building blocks of the digital economy
          </h1>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
            <div className="flex h-8 w-fit items-center justify-center rounded-full bg-[#8B37F426] px-3 py-1 text-center text-lg md:text-xl font-medium text-[#8B37F4]">
              Famous Artists
            </div>
            <p className="text-xl md:text-2xl text-[#ffffff]/50">
              2025 May 16 * 3min read
            </p>
          </div>
          <div className="mt-10 md:mt-[70px] space-y-6 md:space-y-[50px]">
            <img
              src="/images/famous-blog.png"
              alt="famous-blog"
              className="w-full rounded-2xl md:rounded-3xl"
            />
            <p className="text-[#ffffff]/50 line-clamp-3 text-lg md:text-xl lg:text-2xl">
              Discover, collect, and invest in the finest works of contemporary
              art, digital masterpieces, and the latest NFT art collections.
              Whether you're a seasoned art ....
            </p>
          </div>
        </div>
        <Seperator />
      </div>
    </>
  );
};

export default AboutUs;
