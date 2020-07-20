import React from "react";
import { Col, Row, Container } from "../components/Grid";
import PostsList from "../components/Welcome";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
        </Col>
        <Col size="md-6 sm-12">
          <Welcome />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;