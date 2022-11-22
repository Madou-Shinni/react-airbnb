import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import routers from "@/router";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

function App() {
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
