type props = {
  id: number,
  title: string,
  summary: string,
  mdate: string,
  img_url: string,
}

const CurrentGenerateArticleBlog = ({ id, title, summary, mdate, img_url }: props) => {
  const handleViewDetails = () => {
    window.location.href = `/articles/:${id}`;
  }

  return (
    <>
      <div
        className="w-full cursor-pointer flex flex-col justify-between"
        onClick={handleViewDetails}
      >
        <img
          // src={img_url}
          src="/images/famous-blog.png"
          className="w-full rounded-3xl hover:scale-[1.01] duration-500 h-[300px] object-cover"
        />
        <div className="w-fit bg-[#8B37F426] px-3 rounded-full h-8 contents-center text-center font-medium text-xl text-[#8B37F4]">
          Famous Artists
        </div>
        <h1 className="font-semibold text-[32px] text-white/80">
          {title}
          {/* Building blocks of the digital economy */}
        </h1>
        <p className="text-xl text-white/50 break-words whitespace-normal max-w-full line-clamp-3">
          {summary}
          {/* Discover, collect, and invest in the finest works of contemporary art, digital masterpieces, and the latest NFT art collections. Whether you're a seasoned art eeeeeeeefefefefeeeeeeeefefefefeeeeeeeefefefefeeeeeeeefefefefeeeeeeeefefefefeeeeeeeefefefefeeeeeeeefefefefeeeeeeeefefefef */}
        </p>
        <p className="text-xl text-white/50">
          {mdate}
          {/* 2025 May 16 * 3 min read */}
        </p>
      </div>
    </>
  )
}

export default CurrentGenerateArticleBlog