import React from "react";
import "./styles/App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import docs from "./components/docs";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/docs" component={docs} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

//  <BrowserRouter>
//    <div className="wrapper">
//      <Sidebar />
//      <Switch>
//        <Route exact path="/" component={Home} />
//        <Route exact path="/docs" component={docs} />
//      </Switch>
//      <Home />
//    </div>
//  </BrowserRouter>;
