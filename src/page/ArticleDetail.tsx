import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "@/styles/article-detail.css";
import moment from "moment";
import axios from "axios";
import { basic_url } from "@/stack/stack";
import SubscribeModal from "@/components/SubscribeModal";
import parse from "html-react-parser";
import Seperator from "@/components/Seperator";

interface DataItem {
  category_id: number;
  contents: string;
  created_at: Date;
  id: number;
  modified_at: Date;
  owner_id: number;
  rating: number;
  title: string;
}

const ArticleDetail = () => {
  const id = useParams();
  const [detailData, setDetailData] = useState<DataItem | undefined>();
  const [subscribeVisible, setSubscribeVisible] = useState<boolean>(false);

  const handleSubscribe = () => {
    setSubscribeVisible(true);
  };

  useEffect(() => {
    if (id.id !== undefined) {
      const len = id.id.length;
      const st_id = id.id.slice(1, len);
      const num_id = Number(st_id);

      axios.get(`${basic_url}blogposts/${num_id}`).then((res) => {
        let responseData = res.data;
        const contents = responseData?.contents;
        const splited_array = contents?.split("<h2>");
        let content = "";
        for (var i = 0; i < splited_array?.length; i++) {
          content += splited_array[i];
          content += "<h2>";
        }
        responseData["contents"] = content;
        setDetailData(res.data);
      });
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="mb-3 mt-[100px] text-2xl md:text-4xl font-bold">
          {detailData?.title}
        </div>
        <div className="my-5 flex items-center text-xl text-[#FFFFFF]/80">
          <span className="pr-2">By :</span>
          <span className="pr-2 font-bold">TrdARTS.com</span>
          <div className="h-6 w-6 overflow-hidden rounded-[50%]">
            <img src="/icons/icon.png" className="h-6 w-6"></img>
          </div>
        </div>
        <div className="mb-3 text-[18px] text-gray-600">
          <span>Published: </span>
          <span>
            {moment(detailData?.created_at).format("YYYY/MM/DD kk:mm:ss ")}
            GMP-5
          </span>
        </div>
        <Seperator />
        <div className="article-content">
          {detailData !== undefined && parse(detailData.contents)}
        </div>
        <Seperator />
        <div className=" flex flex-col items-center justify-center gap-5  py-5 font-mono sm:flex-row">
          <p className="text-center text-base text-[#FFFFFF]/80 xl:text-xl">
            Don't miss a thing! Sign up for a daily update delivered to your
            inbox
          </p>
          <button
            type="submit"
            className="h-[46px] min-w-[160px] rounded-lg bg-[#8B37F4] text-base text-white"
            onClick={() => handleSubscribe()}
          >
            Subscribe
          </button>
        </div>
        <SubscribeModal
          visible={subscribeVisible}
          setVisible={setSubscribeVisible}
        ></SubscribeModal>
      </div>
    </>
  );
};

export default ArticleDetail;
