import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./Component/Router/Router";

import "aos/dist/aos.css"; // You can also use <link> for styles
import WindoLoader from "./Component/Pages/WindoLoader/WindoLoader";


function App() {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 2000);
  }, [])

  return (
    <div className="App ">
      <RouterProvider router={router} />
      <Toaster />
      {
        loader && <div className="w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-white z-50">
          <WindoLoader />
        </div>
      }
    </div>
  );
}

export default App;
