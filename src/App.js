import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { UnderConstructionPage, MainPage } from "./Pages/";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/">
        <UnderConstructionPage />
      </Route>
    <Route path="/under-construction">
        <MainPage />
      </Route>
    </div>
  </BrowserRouter>
);


export default App;
