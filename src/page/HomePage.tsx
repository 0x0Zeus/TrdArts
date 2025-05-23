import News from "@/components/Home/News"
import Posts from "@/components/Home/Posts"
import Subscribe from "@/components/Home/Subscribe"

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto font-inter">
        <div className="mt-[120px] space-y-4 mb-4 px-5">
          <h1 className="font-extrabold text-5xl">
            Welcome to TRADE ARTS
          </h1>
          <p className="text-xl text-[#FFFFFF]/80">
            Your Gateway to the World of Art, Auctions, and NFTs
          </p>
        </div>
        <News />
        <Posts />
        <Subscribe />
      </div>
    </>
  )
}

export default HomePage