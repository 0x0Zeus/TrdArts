type props = {
  id: number;
  author: string;
  time: string;
  articleTitle: string;
  articleSubtitle: string;
  img_url: string;
};

const RelatedPersonSay = ({
  id,
  time,
  articleTitle,
  articleSubtitle,
  img_url,
}: props) => {
  const handleViewDetails = () => {
    window.location.href = `/articles/:${id}`;
  };

  return (
    <div
      className="flex w-full cursor-pointer flex-col justify-between gap-4 md:gap-6"
      onClick={handleViewDetails}
    >
      <img
        src={img_url}
        className="h-[200px] w-full rounded-3xl object-cover duration-500 hover:scale-[1.01] md:h-[300px]"
      />
      <div className="flex h-8 w-fit items-center justify-center rounded-full bg-[#8B37F426] px-3 py-1 text-center text-sm md:text-xl font-medium text-[#8B37F4]">
        Famous Artists
      </div>
      <h1 className="line-clamp-2 text-2xl font-semibold text-white/80 md:text-3xl">
        {articleTitle}
      </h1>
      <p className="line-clamp-3 max-w-full whitespace-normal break-words text-base text-white/50 md:text-xl">
        {articleSubtitle}
      </p>
      <p className="text-base text-white/50 md:text-xl">{time}</p>
    </div>
  );
};

export default RelatedPersonSay;
