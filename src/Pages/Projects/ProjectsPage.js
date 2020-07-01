import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "./Components/Toolbar";
import ProjectCard from "./Components/ProjectCard";
import ProjectItem from "./Components/ProjectItem";

const PROJECTS = [
  {
    title: "Cool garden",
    location: "Barcelona",
    date: "2020-02-01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in tempus lectus, ac accumsan risus. Mauris vitae nunc lobortis, aliquam risus ac, aliquet quam. Sed nec sodales dolor, id aliquam lacus. Vivamus sit amet fringilla risus. Donec imperdiet nisi mi, interdum cursus dui convallis ut. Phasellus molestie odio id velit feugiat, quis dictum tellus consequat. In id tincidunt lacus, faucibus imperdiet sapien. Sed pellentesque tempus tincidunt. Vestibulum ac tristique libero. Nunc elementum, libero at efficitur posuere, mi dui faucibus risus, vitae molestie est mauris vitae justo. Cras accumsan urna nec varius sagittis. Nulla et lorem elit. Nunc lacus lectus, convallis id ex vel, varius convallis lectus.",
    imageURL: "https://quadrant12.netlify.app/images/zmramis/04.jpg",
  },
  {
    title: "Black columns in white room",
    location: "Nepal",
    date: "2019-10-05",
    description: "Nunc varius enim purus, ac aliquam enim auctor at. Donec condimentum urna a libero porta feugiat id porttitor turpis. Nam mi arcu, consectetur nec libero et, euismod tincidunt quam. Sed imperdiet id justo quis mollis. Sed vestibulum vel tellus sit amet gravida. Nulla maximus vestibulum nulla, sed tincidunt enim interdum non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus justo erat, mollis in odio eget, volutpat luctus risus. Nulla velit metus, vulputate et sapien ut, auctor ullamcorper risus. Morbi a sem leo.",
    imageURL: "https://quadrant12.netlify.app/images/zmramis/10.jpg",
  },
  {
    title: "Not fancy",
    location: "Bellaterra",
    date: "2019-08-04",
    description: "Vivamus mollis varius urna, id molestie felis. Suspendisse sed dui odio. Cras vel ipsum lorem. Aliquam erat volutpat. Sed in ex ornare, ullamcorper dui sit amet, porta risus. Donec lacus justo, viverra non auctor at, tempus sed dui. Proin cursus et ante at auctor. Fusce quis consectetur nulla. Maecenas pulvinar rutrum porta. Nam placerat justo ut urna euismod suscipit. Mauris sagittis elit quis elementum rhoncus. Curabitur gravida tempus tincidunt. Nunc vitae ex vitae eros elementum ullamcorper a vitae odio. Pellentesque mollis posuere dolor, fermentum tincidunt turpis semper eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
    imageURL: "https://quadrant12.netlify.app/images/ballobar/20191107_170457.jpg"
  },
];

class ProjectsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: "list",
      search: null,
      sorting: "new",
      filter: null,
    };

    this.handleLayout = this.handleLayout.bind(this);
    this.handleSorting = this.handleSorting.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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
    this.setState({ search: event.target.value });
  }

  render() {
    const { layout, sorting } = this.state;

    const projectsCards = PROJECTS.map(project => (
      <Col xs={6} className="project-card">
        <ProjectCard
          title={project.title}
          description={project.description}
          imageURL={project.imageURL}
          location={project.location}
        />
      </Col>
    ));

    const projectsList = PROJECTS.map(project => (
      <ProjectItem
        title={project.title}
        description={project.description}
        imageURL={project.imageURL}
        location={project.location}
      />
    ));

    return (
      <Container className='page-container'>
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
              {layout === "gallery" ?
                <Row>
                  {projectsCards}
                </Row>
                :
                <Row>
                  {projectsList}
                </Row>
              }
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectsPage;
