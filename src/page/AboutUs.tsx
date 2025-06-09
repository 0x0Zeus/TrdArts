import Seperator from "@/components/Seperator";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 font-inter sm:px-6 md:px-8">
        <div className="mx-auto max-w-[850px] space-y-4 pb-4 pt-[100px] sm:space-y-5 sm:pb-6 sm:pt-[120px] md:pb-20 md:pt-[150px]">
          <p className="text-base sm:text-lg md:text-lg">
            Welcome to Trade Arts, your gateway to the evolving world of digital
            creativity and NFT innovation. At the intersection of art and
            technology, we are redefining how art is created, owned, and traded
            in the 21st century. Our platform is a curated space for artists,
            collectors, and enthusiasts who believe in the future of
            decentralized art ownership and global accessibility.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            Founded by a passionate collective of digital artists, tech
            pioneers, and blockchain advocates, Trade Arts was born from a
            desire to support creators while empowering collectors through
            transparent, secure, and meaningful art exchanges. We believe that
            digital art deserves a lasting place in the art world—where
            authenticity, provenance, and value are protected and celebrated.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            At Trade Arts, you’ll find a dynamic marketplace showcasing a wide
            range of digital artworks, from generative art and 3D sculptures to
            motion graphics, AI creations, and limited-edition NFT collections.
            Every piece is tokenized on the blockchain, ensuring verifiable
            ownership and traceable history, while offering creators lifetime
            royalties for their work.
          </p>
          <p className="text-base sm:text-lg md:text-lg">
            We’re not just a marketplace—we’re a movement. Our mission is to
            elevate digital art by building a trusted community where artists
            can flourish, collectors can discover rare gems, and both can engage
            in a transparent and rewarding ecosystem. Whether you’re an emerging
            artist looking to mint your first NFT, a seasoned collector
            searching for high-potential digital assets, or simply curious about
            the NFT revolution, Trade Arts welcomes you.
          </p>
        </div>
        <Seperator />
      </div>
    </>
  );
};

export default AboutUs;
