import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "@/styles/article-detail.css";
import moment from "moment";
import axios from "axios";
import { basic_url } from "@/stack/stack";
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
        <div className="mb-3 text-[18px] text-[#FFFFFF]/80">
          <span>Published: </span>
          <span>
            {moment(detailData?.created_at).format("YYYY/MM/DD kk:mm:ss ")}
            GMP-5
          </span>
        </div>
        <Seperator />
        <div className="article-content md:py-16">
          {detailData !== undefined && parse(detailData.contents)}
        </div>
        <Seperator />
        
      </div>
    </>
  );
};

export default ArticleDetail;
