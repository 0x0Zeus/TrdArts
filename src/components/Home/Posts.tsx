import axios from "axios";
import type { PaginationProps } from "antd"
import { message, Pagination } from 'antd'
import Seperator from "../Seperator"
import { basic_url } from "@/stack/stack";
import { useEffect, useState } from "react";
import moment from "moment";
import RelatedPersonSay from "./RelatedPersonSay";
import "@/styles/custom-antd-pagination.css"

interface DataItem {
  category_id: number;
  created_at: Date;
  img_url: string;
  id: number;
  modified_at: Date;
  owner_id: number;
  rating: number;
  summary: string;
  title: string;
}

const Posts = () => {
  const [searchVal, setSearchVal] = useState<string>("")
  const [allData, setAllData] = useState<DataItem[]>([]);
  const [pgNumber, setPgNumber] = useState(1);
  const [pgSize, setPgSize] = useState(10);
  const [category, setCategory] = useState<string>("latest");
  const [totalCount, setTotalCount] = useState<number>(0)

  const onChange: PaginationProps["onChange"] = (pageNumber, pageSize) => {
    setPgNumber(pageNumber);
    setPgSize(pageSize)
  }

  const handleChange = (value: string) => {
    setSearchVal(value);
  }

  const handleCategory = (value: string) => {
    setCategory(value)
  }

  useEffect(() => {
    axios
      .get(`${basic_url}blogposts/all_blogposts_count`)
      .then((res) => {
        setTotalCount(res.data.count);
      });
    
  })

  const searchFunction = () => {
    if (category === 'popular') {
      if (searchVal) {
        axios
          .get(
            `${basic_url}blogposts/articles_by_popualr/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Popular All data with Search Value"),
          )
      } else {
        axios
          .get(
            `${basic_url}blogposts/articles_by_popular/${pgNumber}/${pgSize}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() => message.error("Error network Popular All Data No Search Value"))
      }
    } else if (category === "latest") {
      if (searchVal) {
        axios
          .get(
            `${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() => message.error("Error network Latest All Data with Search Value"))
      } else {
        axios
          .get(
            `${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}`
          )
          .then((res) => {
            setAllData(res.data)
          })
          .catch(() => message.error("Error network Latest All Data No Search Value"))
      }
    }
  }

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchFunction()
    }
  }

  useEffect(() => {
    searchFunction()
  }, [category, pgNumber, pgSize])


  return (
    <div className="mt-[88px] mb-20">
      <h1 className="font-extrabold text-5xl text-[#FFFFFF]/80 pb-5 px-5">
        All Posts
      </h1>
      <div className="flex items-center justify-end gap-6 pb-5 px-5">
        <div className="relative w-[200px]">
          <input
            id="search-bar"
            type="text"
            placeholder="Search"
            className="w-full rounded-lg h-12 pr-8 pl-4 bg-[#FFFFFF08] border border-[#FFFFFF20]"
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => handleSearch(e)}
          />
          <img
            src="/icons/search.png"
            className="absolute h-4 w-4 right-3 top-1/2 -translate-y-1/2"
          />
        </div>
        <label className="pr-2 text-lg text-[#FFFFFF]/80">
          Order by :{" "}
        </label>
        <select
          name="Order by Category"
          value={category}
          onChange={(e) => handleCategory(e.target.value)}
          id="order_by_category"
          className="h-12 w-[160px] rounded-lg border border-[#FFFFFF]/20 bg-[#FFFFFF09] text-base text-[#FFFFFF]/80 font-medium outline-none px-4"
        >
          <option value="latest" className="text-black">Latest</option>
          <option value="popular" className="text-black">Popular</option>
        </select>
      </div>
      <div>
        <Seperator />
        <div className="grid grid-cols-3 gap-10 p-5 py-7">
          {allData.map((item, index) => {
            return (
              <RelatedPersonSay
                key={index}
                id={item.id}
                author="TRDARTS.com"
                time={moment(item.created_at).format(
                  "kk:mm:ss MM / DD / YYYY",
                )}
                articleTitle={item.title}
                articleSubtitle={item.summary}
                img_url={item.img_url}
              />
            )
          })}
        </div>
        <Seperator />
      </div>
      <Pagination
        showQuickJumper
        defaultCurrent={1}
        total={totalCount}
        onChange={onChange}
        className="mt-8 px-5 select-none"
        itemRender={(page, type, originalElement) => {
          if (type === 'prev') {
            return <span>{"<"}</span>;
          } 
          if (type === 'next') {
            return <span>{">"}</span>;
          }
          return originalElement 
        }}
        pageSizeOptions={['12', '24', '48', '96']}
        defaultPageSize={12}
      />
    </div>
  )
}

export default Posts