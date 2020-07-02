import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import TeamItem from "./Components/TeamItem";

const HEAD = [
  {
    name: "John Lennon",
    title: "CEO",
    imageURL: "https://quadrant12.netlify.app/images/zmramis/04.jpg",
  },
  {
    name: "Paul MacCartney",
    title: "CFO",
    imageURL: "https://quadrant12.netlify.app/images/zmramis/10.jpg",
  },
];

const TEAM = [
  {
    name: "George Harrison",
    title: "Guitarist",
    imageURL: "https://quadrant12.netlify.app/images/zmramis/04.jpg",
  },
  {
    name: "Ringo Star",
    title: "Drums",
    imageURL: "https://quadrant12.netlify.app/images/zmramis/10.jpg",
  },
  {
    name: "Sir. George Martin",
    title: "Producer",
    imageURL: "https://quadrant12.netlify.app/images/ballobar/20191107_170457.jpg"
  },
  {
    name: "Dave Grohl",
    title: "Singer, Guitarist, Drums",
    imageURL: "https://quadrant12.netlify.app/images/ballobar/20191107_170457.jpg"
  },
  {
    name: "Eric Clapton",
    title: "Guitarist",
    imageURL: "https://quadrant12.netlify.app/images/ballobar/20191107_170457.jpg"
  },
];

const TeamPage = () => {

  const head = HEAD.map(h => (
    <Col xs={10} sm={4} lg={4} className="team-card">
      <TeamItem title={h.title} name={h.name} imageURL={h.imageURL}/>
    </Col>
  ));

  const team = TEAM.map(t => (
    <Col xs={9} sm={3} lg={3} className="team-card">
      <TeamItem title={t.title} name={t.name} imageURL={t.imageURL}/>
    </Col>
  ));

  return (
    <Container className='page-container'>
      <Row className="justify-content-center">
        <Col sm={12} md={10}>
          <Container>
            <Row className="justify-content-around">
              {head}
            </Row>
            <Row className="justify-content-around">
              {team}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamPage;
