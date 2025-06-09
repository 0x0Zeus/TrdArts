import { FC } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { setAuthToken } from "./Middlewares/setAuthTokens";
import Layout from "./Layout/ui/Layout";
import HomePage from "./page/HomePage";
import ArticleDetail from "./page/ArticleDetail";
import ContactUs from "./page/ContactUs";
import AboutUs from "./page/AboutUs";
import BlogLayout from "./Layout/BlogLayout";
import BlogsPage1 from "./components/Blogs/BlogsPage1";
// import BlogsPage2 from "./components/Blogs/BlogsPage2";
import Blog1 from "./blogs/Blog1";
import Blog2 from "./blogs/Blog2";
import Blog3 from "./blogs/Blog3";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/articles/:id',
        element: <ArticleDetail />
      },
      {
        path: '/contactus',
        element: <ContactUs />
      },
      {
        path: '/aboutus',
        element: <AboutUs />
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
          // {
          //   path: '/blogs/page2',
          //   element: <BlogsPage2 />,
          // },
          {
            path: "/blogs/1",
            element: <Blog1 />
          },
          {
            path: "/blogs/2",
            element: <Blog2 />
          },
          {
            path: "/blogs/3",
            element: <Blog3 />
          },
          
        ]
      },
    ]
  }
])

const App: FC = () => {
  const token = localStorage.getItem('token');
  if (token) {
    setAuthToken(token);
  }

  return (
    <RouterProvider router={router} />
  )
}

export default App