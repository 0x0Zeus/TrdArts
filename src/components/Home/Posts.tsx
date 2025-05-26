import axios from "axios";
import type { PaginationProps } from "antd";
import { message, Pagination, Select } from "antd";
import Seperator from "../Seperator";
import { basic_url } from "@/stack/stack";
import { useEffect, useState } from "react";
import moment from "moment";
import RelatedPersonSay from "./RelatedPersonSay";
import "@/styles/custom-antd-pagination.css";

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
  const [searchVal, setSearchVal] = useState<string>("");
  const [allData, setAllData] = useState<DataItem[]>([]);
  const [pgNumber, setPgNumber] = useState(1);
  const [pgSize, setPgSize] = useState(10);
  const [category, setCategory] = useState<string>("latest");
  const [totalCount, setTotalCount] = useState<number>(0);

  const onChange: PaginationProps["onChange"] = (pageNumber, pageSize) => {
    setPgNumber(pageNumber);
    setPgSize(pageSize);
  };

  const handleChange = (value: string) => {
    setSearchVal(value);
  };

  const handleCategory = (value: string) => {
    setCategory(value);
  };

  useEffect(() => {
    axios.get(`${basic_url}blogposts/all_blogposts_count`).then((res) => {
      setTotalCount(res.data.count);
    });
  });

  const searchFunction = () => {
    if (category === "popular") {
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
          );
      } else {
        axios
          .get(
            `${basic_url}blogposts/articles_by_popular/${pgNumber}/${pgSize}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Popular All Data No Search Value"),
          );
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
          .catch(() =>
            message.error("Error network Latest All Data with Search Value"),
          );
      } else {
        axios
          .get(`${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}`)
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Latest All Data No Search Value"),
          );
      }
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchFunction();
    }
  };

  useEffect(() => {
    searchFunction();
  }, [category, pgNumber, pgSize]);

  return (
    <div className="mb-20 mt-[88px]">
      <h1 className="px-4 pb-5 text-center text-3xl font-extrabold text-[#FFFFFF]/80 md:px-5 md:text-right md:text-5xl">
        All Posts
      </h1>
      <div className="flex flex-col items-center gap-6 px-4 pb-5 md:flex-row md:justify-end md:gap-10 md:px-5">
        <div className="relative w-full md:w-[200px]">
          <input
            id="search-bar"
            type="text"
            placeholder="Search"
            className="h-12 w-full rounded-lg border border-[#FFFFFF20] bg-[#FFFFFF08] pl-4 pr-8"
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={(e) => handleSearch(e)}
          />
          <img
            src="/icons/search.png"
            className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2"
          />
        </div>
        <div className="flex items-center gap-0">
          <label className="text-nowrap whitespace-nowrap pr-2 text-lg text-[#FFFFFF]/80 md:text-xl">
            Order by :{" "}
          </label>
          <Select
            defaultValue={"latest"}
            onChange={handleCategory}
            style={{
              width: 120,
              height: 48,
            }}
            options={[
              {
                value: "latest",
                label: "Latest",
              },
              {
                value: "popular",
                label: "Popular",
              },
            ]}
          ></Select>
          
        </div>
      </div>
      <div>
        <Seperator />
        <div className="grid grid-cols-1 gap-10 p-4 py-5 md:grid-cols-3 md:p-5 md:py-16">
          {allData.map((item, index) => {
            return (
              <RelatedPersonSay
                key={index}
                id={item.id}
                author="TRDARTS.com"
                time={moment(item.created_at).format("kk:mm:ss MM / DD / YYYY")}
                articleTitle={item.title}
                articleSubtitle={item.summary}
                img_url={item.img_url}
              />
            );
          })}
        </div>
        <Seperator />
      </div>
      <Pagination
        showQuickJumper
        defaultCurrent={1}
        total={totalCount}
        onChange={onChange}
        className="mt-8 select-none px-5"
        itemRender={(_, type, originalElement) => {
          if (type === "prev") {
            return <span>{"<"}</span>;
          }
          if (type === "next") {
            return <span>{">"}</span>;
          }
          return originalElement;
        }}
        pageSizeOptions={["12", "24", "48", "96"]}
        defaultPageSize={12}
      />
    </div>
  );
};

export default Posts;
