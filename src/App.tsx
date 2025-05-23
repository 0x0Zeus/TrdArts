import { FC } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { setAuthToken } from "./Middlewares/setAuthTokens";
import Layout from "./Layout/ui/Layout";
import HomePage from "./page/HomePage";

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
        // element: <ArticleDetail />
      }
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