import { message} from 'antd';
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react"
import Seperator from "../Seperator"
import CurrentGenerateArticleBlog from "./CurrentGenerateArticleBlog"
import { basic_url } from "@/stack/stack";

const News = () => {
  const [mostPopularArticle, setMostPopularArticle] = useState({
    id: 0,
    title: "",
    summary: "",
    mdate: "",
    img_url: ""
  })

  useEffect(() => {
    axios
      .get(`${basic_url}blogposts/popular_article_related_articles`)
      .then((res) => {
        setMostPopularArticle({
          id: res.data[0].id,
          title: res.data[0].title,
          summary: res.data[0].summary,
          mdate: moment(res.data[0].created_at).format(
            "kk:mm:ss MM / DD / YYYY",
          ),
          img_url: res.data[0].img_url,
        })
      })
      .catch(() => message.error("Error network Popular And Related Article"))
  }, [])


  return (
    <div>
      <h1 className="text-right font-extrabold text-5xl text-[#FFFFFF]/80 pb-5 px-5">News</h1>
      <div className="">
        <Seperator />
        <div className="grid grid-cols-2 p-5 gap-10">
          <CurrentGenerateArticleBlog
            id={mostPopularArticle.id}
            title={mostPopularArticle.title}
            summary={mostPopularArticle.summary}
            mdate={mostPopularArticle.mdate}
            img_url={mostPopularArticle.img_url}
          />
          <div>
            <iframe className="order-0 widget_preview_iframe" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen={true} scrolling="no" style={{ visibility: "visible", width: "100%", height: "623px" }} src="https://www.feedspot.com/widgets/lookup/dea1Uv6h3f03"></iframe>
          </div>
        </div>
        <Seperator />
      </div>
    </div>
  )
}

export default News