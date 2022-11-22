import React from 'react';
import './App.css';
import {useRoutes} from "react-router-dom";
import routers from "@/router";

function App() {
  return (
    <div className="App">
      <div className={"header"}>header</div>
      <div className={"page"}>
        {useRoutes(routers)}
      </div>
      <div className={"footer"}>footer</div>
    </div>
  );
}

export default App;
