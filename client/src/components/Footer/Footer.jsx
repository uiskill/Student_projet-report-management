import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar collapseOnSelect expand="md" variant="dark" id="nav" fixed="bottom">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={12}>
            <div className="d-flex justify-content-center">
              <p className="text-white" style={{marginTop: "10px",marginBottom: "1rem"}}>Copyright @2024. All Rights Reserved.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default Footer;