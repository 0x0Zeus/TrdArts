import { FC } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { setAuthToken } from "./Middlewares/setAuthTokens";
import Layout from "./Layout/ui/Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
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