import React, {useEffect} from 'react';
import {useLocation, useRoutes} from "react-router-dom";
import routers from "@/router";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import useScrollTop from "@/hooks/useScrollTop";

function App() {
  /* 回到顶部 */
  useScrollTop()

  return (
    <div className="App">
      <Header />
      <div className={"page"}>
        {useRoutes(routers)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
