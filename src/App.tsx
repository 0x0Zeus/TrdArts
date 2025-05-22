import { FC } from "react";
import HomePage from "@/pages/Home/HomePage";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./Layout";
import { setAuthToken } from "./Middlewares/setAuthTokens";
import ArticleDetail from "./pages/Home/ArticleDetail";
import AboutUs from "./pages/Home/AboutUs";
import ContactUs from "./pages/Home/ContactUs";
import BlogLayout from "./Layout/BlogLayout";
import BlogsPage1 from "./components/Blogs/BlogsPage1";
import Blog1 from "./blogs/Blog1";
import Blog2 from "./blogs/Blog2";
import Blog3 from "./blogs/Blog3";
import Blog4 from "./blogs/Blog4";
import Blog5 from "./blogs/Blog5";
import Blog6 from "./blogs/Blog6";
import Blog7 from "./blogs/Blog7";
import Blog8 from "./blogs/Blog8";
import Blog9 from "./blogs/Blog9";
import Blog10 from "./blogs/Blog10";
import Blog11 from "./blogs/Blog11";
import Blog12 from "./blogs/Blog12";
import Blog13 from "./blogs/Blog13";
import Blog14 from "./blogs/Blog14";
import BlogsPage2 from "./components/Blogs/BlogsPage2";
import Blog15 from "./blogs/Blog15";
import Blog16 from "./blogs/Blog16";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/articles/:id",
        element: <ArticleDetail/>
      },
      {
        path: "/aboutus",
        element: <AboutUs/>
      },
      {
        path: "/contactus",
        element: <ContactUs/>
      },
      {
        path: "*",
        element: <HomePage/>
      },
      {
        path: "/blogs",
        element: <BlogLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="/blogs/page1" replace />
          },
          {
            path: '/blogs/page1',
            element: <BlogsPage1 />,
          },
          {
            path: '/blogs/page2',
            element: <BlogsPage2 />,
          },
          {
            path: "/blogs/gold-investment-shield-against-volatility-inflation",
            element: <Blog1 />
          },
          {
            path: "/blogs/gold-investment-beginners-guide",
            element: <Blog2 />
          },
          {
            path: "/blogs/gold-investment-physical-vs-etfs",
            element: <Blog3 />
          },
          {
            path: "/blogs/bulletproof-wealth-with-gold-inflation",
            element: <Blog4 />
          },
          {
            path: "/blogs/role-of-gold-diversified-portfolio",
            element: <Blog5 />
          },
          {
            path: "/blogs/gold-coins-vs-gold-bars-investment",
            element: <Blog6 />
          },
          {
            path: "/blogs/top-gold-investment-strategies-2024",
            element: <Blog7 />
          },
          {
            path: "/blogs/how-central-banks-shape-gold-market",
            element: <Blog8 />
          },
          {
            path: "/blogs/environmental-impact-gold-mining-responsible-investing",
            element: <Blog9 />
          },
          {
            path: "/blogs/physical-gold-etfs-IRA",
            element: <Blog10 />
          },
          {
            path: "/blogs/gold-ira-fees",
            element: <Blog11 />
          },
          {
            path: "/blogs/top-gold-ira-companies-consider-2024",
            element: <Blog12 />
          },
          {
            path: "/blogs/right-time-invest-gold",
            element: <Blog13 />
          },
          {
            path: "/blogs/importance-custodians-storage-gold-iras",
            element: <Blog14 />
          },
          {
            path: "/blogs/15",
            element: <Blog15 />
          },
          {
            path: "/blogs/16",
            element: <Blog16 />
          },
        ]
      },
    ],
  },
]);
const App: FC = () => {
  
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

  return (
    <RouterProvider router={router} />
  );
};

export default App;
