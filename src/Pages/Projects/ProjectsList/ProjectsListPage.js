import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "./Components/Toolbar";
import ProjectCard from "./Components/ProjectCard";
import ProjectItem from "./Components/ProjectItem";

class ProjectsListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      layout: "gallery",
      search: null,
      sorting: "new",
    };

    this.handleLayout = this.handleLayout.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  getData() {
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
        this.setState({ projects: response.projects })
      });
  }

  handleLayout(layoutChange) {
    if (layoutChange[1] !== undefined) {
      this.setState({ layout: layoutChange[1] });
    }
  }

  handleSorting(newSorting) {
    if (newSorting !== this.state.sorting) {
      this.setState({ sorting: newSorting });
    }
  }

  handleSearch(event) {
    this.setState({ search: event.target.value.toLowerCase() });
  }

  filterProjects = (projects, filtering) =>
    projects.filter(a =>
      filtering === null || (
        a.title.toLowerCase().includes(filtering) ||
        a.description.toLowerCase().includes(filtering) ||
        a.location.toLowerCase().includes(filtering)
      )
    );

  sortProjects = (projects, sorting) =>
    projects.sort((a, b) => {
      if (sorting === "new") {
        return b.date - a.date;
      } else if (sorting === "old") {
        return a.date - b.date;
      } else {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      }
    });

  projectsCards = projects => projects.map(project => (
    <Col key={project.date} xs={6}>
      <ProjectCard
        projectId={project.id}
        title={project.title}
        description={project.description}
        placeholder={project.placeholder}
        location={project.location}
      />
    </Col>
  ));

  projectsList = projects => projects.map(project => (
    <ProjectItem
      projectId={project.id}
      key={project.date}
      title={project.title}
      description={project.description}
      placeholder={project.placeholder}
      location={project.location}
    />
  ));

  componentDidMount() {
    this.getData();
  }

  render() {
    const { projects, layout, sorting, search } = this.state;

    const filteredProjects = this.filterProjects(projects, search);
    const sortedProjects = this.sortProjects(filteredProjects, sorting);

    return (
      <Container className='projects-page-container'>
        <Row className="justify-content-center">
          <Col sm={12} md={10}>
            <Container>
              <Row>
                <Col>
                  <Toolbar
                    layout={layout}
                    handleLayout={this.handleLayout}
                    sorting={sorting}
                    handleSorting={this.handleSorting}
                    handleSearch={this.handleSearch}
                  />
                </Col>
              </Row>
              <Row>
                {layout === "gallery" ? this.projectsCards(sortedProjects) : this.projectsList(sortedProjects)}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectsListPage;
