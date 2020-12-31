import React from "react";
import "./index.scss";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Gallery from "./Components/Gallery";
import MessagePage from "./Components/MessagePage";

const Status = {
  LOADING: 0,
  SUCCESS: 1,
  NOT_FOUND: 2,
};

class ProjectDetailsPage extends React.Component {
  constructor(props) {
    super(props);


    const projectId = this.getProjectId();

    this.state = {
      projectId: projectId,
      project: {},
      status: Status.LOADING,
    };
  }

  getProjectId() {
    const path = window.location.href;
    const pathParams = path.split("?")[0];
    const params = pathParams.split("/");
    const projectId = params[params.length - 1];
    return projectId
  }

  getData(id) {
    fetch('/data/projects.json'
      ,{
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(response => {
        const filteredProject = response.projects.filter(project => project.id === id);
        if (filteredProject.length === 0) {
          this.setState({ status: Status.NOT_FOUND })
        } else {
          this.setState({
            project: filteredProject[0],
            status: Status.SUCCESS,
          })
        }
      });
  }

  componentDidMount() {
    this.getData(this.state.projectId);
  }

  render() {
    const { project, status } = this.state;

    if (status === Status.NOT_FOUND) {
      return (
        <MessagePage message={"Project not found"} />
      );
    } else if (status === Status.LOADING) {
      return (
        <MessagePage message={"Loading..."} />
      );
    }

    return (
      <div>
        <Header placeholder={project.placeholder}/>
        <Content title={project.title} location={project.location} description={project.description}/>
        <Gallery projectId={project.id} images={project.images} />
      </div>
    )
  }
}

export default ProjectDetailsPage;
