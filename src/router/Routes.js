import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";

const privateRoutes = [
  {path: '/login', element: Login},
]

const publicRoutes = [
  {path: '/', element: Home},
  {path: '/about', element: About},
  {path: '/posts', element: Posts},
  {path: '/posts/:id', element: PostIdPage},
  {path: '*', element: Error},
]

export {publicRoutes, privateRoutes}