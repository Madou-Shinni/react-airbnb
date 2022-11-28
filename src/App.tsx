import React from 'react';
import {useRoutes} from "react-router-dom";
import routers from "@/router";
import Footer from "@/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className={"page"}>
        {useRoutes(routers)}
      </div>
      <Footer />
    </div>
  );
}

export default App;
