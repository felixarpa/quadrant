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

const teamMembers = (team, xs, sm, lg) => team.map(member => (
  <Col xs={xs} sm={sm} lg={lg} key={member.name.toLowerCase()}>
    <TeamItem title={member.title} name={member.name} imageURL={member.imageURL}/>
  </Col>
));

const TeamPage = () => (
  <Container>
    <Row className="justify-content-center">
      <Col sm={12} md={10}>
        <Container>
          <Row className="justify-content-around">
            {teamMembers(HEAD, 10, 4, 4)}
          </Row>
          <Row className="justify-content-around">
            {teamMembers(TEAM, 9, 3, 3)}
          </Row>
        </Container>
      </Col>
    </Row>
  </Container>
);

export default TeamPage;
