import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { DetailsMovie } from "./Pages/DetailsMovie/DetailsMovie";
import { DetailsTVShow } from "./Pages/DetailsTVShow/DetailsTVShow";
import { LayOut } from "./Components/LayOut/LayOut";
import { Favorite } from "./Pages/Favorite/Favorite";
import { Movies } from "./Pages/Movies/Movies";
import { TVShows } from "./Pages/TVShows/TVShows";
import { WatchList } from "./Pages/WatchList/WatchList";
import { MainError } from "./Pages/Error/MainError/MainError";
import { Login } from "./Pages/Authentication/Login/Login";
import { Register } from "./Pages/Authentication/Register/Register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      errorElement: <MainError />,
      children: [
        { path: "", index: true, element: <Home /> },
        { path: "/DetailsMovie", element: <DetailsMovie /> },
        { path: "/DetailsTVShow", element: <DetailsTVShow /> },
        { path: "/Favorite", element: <Favorite /> },
        { path: "/Movies", element: <Movies /> },
        { path: "/TVShows", element: <TVShows /> },
        { path: "/WatchList", element: <WatchList /> },
        { path: "/Login", element: <Login /> },
        { path: "/Register", element: <Register /> },
      ],
    },
  ]);
  return(
  <div>
    <RouterProvider 
     className='toggle theme-controller'
    router={router}></RouterProvider> 
  </div> ) 
};
export default App;
  