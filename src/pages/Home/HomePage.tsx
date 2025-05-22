import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import moment from "moment";
import type { PaginationProps } from "antd";
import { Pagination, message } from "antd";
import SubscribeModal from "@/components/SubscribeModal";
import ArticleBlog from "@/components/ArticleBlog";
import CurrentGenerateArticleBlog from "@/components/CurrentGenerateArticleBlog";
import RelatedPersonSay from "@/components/RelatedPersonSay";
import TradingChart from "@/components/TradingChart";
import LoginModal from "@/components/LoginModal";
import GoldPriceChart from "@/components/GoldPriceChart";
import "@/components/Header.css";
import { basic_url } from "@/stack/stack";
import { links1, links2, links3 } from "@/stack/links";
import parse from 'html-react-parser'

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

const HomePage = () => {
  const navigate = useNavigate();

  const [searchVal, setSearchVal] = useState<string>("");
  const [allData, setAllData] = useState<DataItem[]>([]);
  const [pgNumber, setPgNumber] = useState(1);
  const [pgSize, setPgSize] = useState(10);
  const [loginModalV, setLoginModalV] = useState<number>(0);
  const [mostPopularArticle, setMostPopularArticle] = useState({
    id: 0,
    title: "",
    summary: "",
    mdate: "",
    img_url: "",
  });
  const [relatedArticles, setRelatedArticles] = useState([{}]);
  const [monthPopularArticles, setMonthPopularArticles] = useState([{}]);
  const [category, setCategory] = useState<string>("latest");
  const [subscribeVisible, setSubscribeVisible] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentGoldPrice, setCurrentGoldPrice] = useState<number>(0);
  const [link1, setLink1] = useState<string>("");
  const [link2, setLink2] = useState<string>("");
  const [link3, setLink3] = useState<string>("");

  const modalRef = useRef<HTMLDivElement>(null);
  const [modalState, setModalState] = useState<boolean>(false);
  const modalOutsideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalOutsideRef.current && !modalOutsideRef.current.contains(event.target as Node)) {
        setModalState(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [])
  
  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalState])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setModalState(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    })
    if (modalRef.current) {
      observer.observe(modalRef.current);
    }
    return () => {
      if (modalRef.current) {
        observer.unobserve(modalRef.current);
      }
    }
  }, [])

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

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (category === "popular")
        axios
          .get(
            `${basic_url}blogposts/articles_by_popular/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() => message.error("Error network"));
      if (category === "latest") {
        if (searchVal) {
          axios
            .get(
              `${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}/${searchVal}`,
            )
            .then((res) => {
              setAllData(res.data);
            })
            .catch(() => message.error("Error network"));
        } else
          axios
            .get(`${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}`)
            .then((res) => {
              setAllData(res.data);
            })
            .catch(() => message.error("Error network"));
      }
    }
  };

  const handleSubscribe = () => {
    setSubscribeVisible(true);
  };

  useEffect(() => {
    navigate("/");
    const length1 = links1.length;
    const length2 = links2.length;
    const length3 = links3.length;
    const random1 = Math.floor(Math.random() * length1);
    const random2 = Math.floor(Math.random() * length2);
    const random3 = Math.floor(Math.random() * length3);
    setLink1(links1[random1]);
    setLink2(links2[random2]);
    setLink3(links3[random3]);
  }, []);

  useEffect(() => {
    axios.get(`${basic_url}goldprices/`).then((res) => {
      setCurrentGoldPrice(res.data.price);
    });
    axios.get(`${basic_url}blogposts/all_blogposts_count`).then((res) => {
      setTotalCount(res.data.count);
    });
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
        });
        setRelatedArticles(res.data);
      })
      .catch(() => message.error("Error network Popular And Related Article"));

    axios
      .get(`${basic_url}blogposts/popular_articles_month`)
      .then((res) => {
        setMonthPopularArticles(res.data);
      })
      .catch(() => message.error("Error network Popular Articles Month"));
  }, []);

  useEffect(() => {
    if (category === "popular") {
      if (searchVal) {
        axios
          .get(
            `${basic_url}blogposts/articles_by_popular/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Popular All data With Search Value"),
          );
      } else
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

    if (category === "latest") {
      if (searchVal) {
        axios
          .get(
            `${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}/${searchVal}`,
          )
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Latest All data With Search Value"),
          );
      } else
        axios
          .get(`${basic_url}blogposts/articles_by_new/${pgNumber}/${pgSize}`)
          .then((res) => {
            setAllData(res.data);
          })
          .catch(() =>
            message.error("Error network Latest All Data No Search Value"),
          );
    }
  }, [category, pgNumber, pgSize]);

  return (
    <>
      <div className="container">
        <div className="fixed bottom-5 z-50 h-auto rounded-3xl shadow-[0_0_20px_0px] left-4 w-20 md:w-36 md:left-10 link-animate">
          {parse(link1)}
        </div>
        <div className="mb-24 md:mt-[150px] lg:mt-[80px] flex w-full flex-col justify-between xl:flex-row gap-16">
          <div className="flex flex-col gap-8 grow">
            <div className="flex flex-col justify-between gap-[130px] md:flex-row md:gap-0">
              <div className="basis-[65%]">
                <div className="mb-12 bg-[#1d4354] py-4 text-center text-4xl text-[white]">
                  The Most Popular Article
                </div>
                <CurrentGenerateArticleBlog
                  id={mostPopularArticle.id}
                  title={mostPopularArticle.title}
                  summary={mostPopularArticle.summary}
                  mdate={mostPopularArticle.mdate}
                  img_url={mostPopularArticle.img_url}
                />
              </div>
              <div className="flex basis-[33%] flex-col gap-12">
                <div className="bg-[#1d4354] py-4 text-center text-4xl text-[white]">
                  Related Articles
                </div>
                {relatedArticles.map((item: any, index: number) => {
                  return (
                    index > 0 && (
                      <ArticleBlog
                        id={item.id}
                        title={item.title}
                        mdate={moment(item.created_at).format(
                          "kk:mm:ss MM / DD / YYYY",
                        )}
                        key={index}
                        img_url={item.img_url}
                      />
                    )
                  );
                })}
              </div>
            </div>
            <div>
              <div className="mb-10 w-full bg-[#1d4354] py-4 text-center text-4xl text-[white]">
                Gold Price Chart
              </div>
              <div className="my-10 text-4xl text-[#a8323e]">
                Today's Gold Price : {currentGoldPrice}
              </div>
              <div className="mb-[150px] h-[400px] w-full">
                <GoldPriceChart />
              </div>
            </div>
            <div className="flex items-center justify-center w-full md:px-16 grow">
              <div className="shadow-[0_0_20px_0] rounded-3xl hover:scale-105 transition-transform duration-200 ease-in-out">
                {parse(link2)}
              </div>
            </div>
          </div>
          <div className="mt-[50px] flex flex-col justify-between md:flex-row xl:mt-0">
            <TradingChart />
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center gap-5 border-b border-t border-[#006F99] py-5 font-mono sm:flex-row">
          <p className="text-center text-base text-black xl:text-[19px]">
            Sign up to our newsletter to receive timely market updates and
            information on product sales and giveaways.
          </p>
          <button
            className="h-[40px] w-[200px] bg-[#006F99] text-base text-white"
            onClick={() => handleSubscribe()}
          >
            Subscribe
          </button>
        </div>
        <SubscribeModal
          visible={subscribeVisible}
          setVisible={setSubscribeVisible}
        />
        <LoginModal
          visible={loginModalV}
          setVisible={setLoginModalV}
        ></LoginModal>
        <div className="mb-[50px] mt-[200px] text-center text-5xl font-bold">
          Popular Articles in this Month
        </div>
        <div className="mb-[200px] grid grid-cols-1 gap-x-5 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {monthPopularArticles.map((item: any, index: number) => {
            return (
              <ArticleBlog
                id={item.id}
                key={index}
                title={item.title}
                mdate={moment(item.created_at).format(
                  "kk:mm:ss MM / DD / YYYY",
                )}
                img_url={item.img_url}
              />
            );
          })}
        </div>
        <div ref={modalRef}>
          {
            modalState && <div className={`transtion-opacity duration-300 ease-linear ${modalState ? 'visible opacity-100' : 'invisible opacity-0'} fixed top-0 left-0 w-screen h-screen z-50 bg-black bg-opacity-70 `}
            >
              <div
                ref={modalOutsideRef}
                onClick={(event) => event.stopPropagation()}
                className={`transition-transform duration-300 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-full bg-dark rounded-[32px] hover:scale-105`}
              >
                {parse(link3)}
              </div>
            </div>
          }
        </div>
        <div className="] mb-12 py-4 text-center text-5xl font-bold text-black">
          All Articles
        </div>
        <div className="flex flex-row items-center justify-end gap-10 mb-12">
          <div className="search-bar-form relative hidden w-[400px] lg:block">
            <img src="/icons/icons8-search(2).svg" className="search-icon" />
            <input
              id="search-bar"
              type="text"
              placeholder="Search"
              className="text-black"
              onChange={(e) => handleChange(e.target.value)}
              onKeyDown={(e) => handleSearch(e)}
            />
          </div>
          <label className="pr-2 text-2xl font-bold text-black">
            Order by :{" "}
          </label>
          <select
            name="Order by Category"
            value={category}
            onChange={(e) => handleCategory(e.target.value)}
            id="order_by_category"
            className="h-[40px] w-[180px] border bg-white text-xl text-black outline-none"
          >
            <option value="latest">Latest</option>
            <option value="popular">Popular</option>
          </select>
        </div>
        <div className="flex flex-col gap-7">
          {allData.map((item, index) => {
            return (
              <div key={index}>
                <RelatedPersonSay
                  id={item.id}
                  author="GOLDEXCG.com"
                  time={moment(item.created_at).format(
                    "kk:mm:ss MM / DD / YYYY",
                  )}
                  articleTitle={item.title}
                  articleSubtitle={item.summary}
                  img_url={item.img_url}
                />
                <hr />
              </div>
            );
          })}
        </div>
        <div className="py-16">
          <Pagination
            showQuickJumper
            defaultCurrent={1}
            total={totalCount}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};
export default HomePage;
