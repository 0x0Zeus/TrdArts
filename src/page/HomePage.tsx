import News from "@/components/Home/News";
import Posts from "@/components/Home/Posts";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto font-inter">
        <div className="mb-4 mt-[120px] space-y-4 px-4 md:px-5 md:text-left text-center">
          <h1 className="text-3xl font-extrabold md:text-5xl">
            Welcome to TRADE ARTS
          </h1>
          <p className="text-lg text-[#FFFFFF]/80 md:text-xl">
            Your Gateway to the World of Art, Auctions, and NFTs
          </p>
        </div>
        <News />
        <Posts />
      </div>
    </>
  );
};

export default HomePage;
