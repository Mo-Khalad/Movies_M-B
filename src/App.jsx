import React from "react";
import { createBrowserRouter, RouterProvider } from "@/Shared/Libs";
import {  
  Home , 
  DetailsMovie ,
  DetailsTVShow ,
  LayOut ,
  Favorite ,
  Movies , 
  TVShows ,
  WatchList ,
  MainError , 
  Login , 
  Register  } from "@/Shared/Components";

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
  