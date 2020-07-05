import React from "react";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ProjectsPage } from "./Projects";
import { TeamPage } from "./Team";
import "./index.scss";

const MainPage = () => (
  <div className="main-page-container">
    <Header />
    <div className="main-page-content">
      <Route exact path="/under-construction/">
        About us
      </Route>
      <Route path="/under-construction/projects">
        <ProjectsPage />
      </Route>
      <Route path="/under-construction/team">
        <TeamPage />
      </Route>
      <Route path="/under-construction/contact">
        Contact
      </Route>
    </div>
    <Footer />
  </div>
);


export default MainPage;
