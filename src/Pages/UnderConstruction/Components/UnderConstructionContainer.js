import React from "react";
import "../index.scss";
import UnderConstructionCard from "./UnderConstructionCard";

const UnderConstructionContainer = () => (
  <div className="container">
    <div className="row-height row justify-content-center">
      <div className="col-lg-5 align-self-end col-md-8 col-sm-10">
        <UnderConstructionCard />
      </div>
    </div>
  </div>
);

export default UnderConstructionContainer;
