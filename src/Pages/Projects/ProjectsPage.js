import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { ProjectsListPage } from "./ProjectsList";
import { ProjectDetailsPage } from "./ProjectDetails";

const ProjectsPage = () => {
  const match = useRouteMatch();
  console.log(match);
  console.log(match.path);
  return (
    <div>
      <Route exact path={match.path}>
        <ProjectsListPage />
      </Route>
      <Route path={`${match.path}/:projectId`}>
        <ProjectDetailsPage />
      </Route>
    </div>
  );
};

export default ProjectsPage;
