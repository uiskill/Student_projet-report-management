import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {

  const navigate = useNavigate();
  return <Container style={{ padding: "70px" }}>
    <h1 style={{ padding: "20px" }} className="text-center"><b>Welcome</b></h1>
    <Row>
      <Col>

        <h4 className="text-center">Browse through our collection of project reports categorized by year. Each report provides detailed information on objectives, methodologies, findings, and conclusions</h4>


        {/* Centering the button */}
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            tabIndex="3"
            className="mb-3 btn btn-success"
            onClick={() => navigate("/login")}
          >
            Browse
          </button>
        </div>


        <h4 className="text-center">Project Reports aims to provide comprehensive insights into the projects undertaken by our department. Explore the innovative solutions, research outcomes, and academic endeavors that shape our department’s contributions.</h4>


      </Col>
    </Row>
  </Container>;
};

export default Home;
