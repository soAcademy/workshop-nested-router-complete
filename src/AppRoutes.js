import { useRoutes, Outlet } from "react-router-dom"
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import DetailOne from './Pages/DetailOne'
import DetailTwo from './Pages/DetailTwo'
import AboutUs from './Pages/AboutUs'
import PageNotFound from './Pages/PageNotFound'

const AppRoutes = () =>(
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { 
      path: "/detail", element: (
        <>
          <Detail />
          <Outlet />
        </>
      ),
      children: [
        { path: "detail-one", element: <DetailOne /> },
        { path: "detail-two", element: <DetailTwo /> },
      ]
    },
    { path: "/about-us", element: <AboutUs /> },
    { path: "/*", element: <PageNotFound /> },
  ]))

export default AppRoutes
