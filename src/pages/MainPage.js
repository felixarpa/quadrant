import React from 'react';
import { Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from "./Components/Footer";

const Styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
  },
  content: {
    paddingBottom: '14.5em',
  },
};

const MainPage = () => (
  <div style={Styles.container}>
    <Header />
    <div style={Styles.content}>
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
    <Footer />
  </div>
);


export default MainPage;
