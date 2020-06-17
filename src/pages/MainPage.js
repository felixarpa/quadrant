import React from 'react';
import { Route } from "react-router-dom";
import Header from './Components/Header';

const MainPage = () => (
  <div>
    <Header />
    <Route exact path={'/under-construction/'}>
      About us
    </Route>
    <Route path={'/under-construction/projects'}>
      Projects
    </Route>
    <Route path={'/under-construction/team'}>
      Team
    </Route>
    <Route path={"/under-construction/contact"}>
      Contact
    </Route>
  </div>
);


export default MainPage;
