import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/autentication/Login";
import Register from "../pages/autentication/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        index:true,
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>,
      },
      {
        path:'/register',
        element: <Register></Register>,
      },
    ]
  },
]);
export default router;
