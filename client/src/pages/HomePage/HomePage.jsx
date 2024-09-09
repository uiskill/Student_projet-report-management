import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthState } from "../../context/AuthProvider";
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Notify } from "../../utils";
import "./HomePage.css";

const HomePage = () => {
  const [privateMessage, setPrivateMessage] = useState("");

  const navigate = useNavigate();
  const { auth } = AuthState();

  const fetchPrivateDate = async () => {
    try {
      const response = await fetch("/api/private", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.token}`,
        },
      });
      const data = await response.json();

      if (data.success) {
        setPrivateMessage(data.data);
        return Notify(data.data, "success");
      } else {
        navigate("/login");
        return Notify("You are not authorized please login", "error");
      }
    } catch (error) {
      localStorage.removeItem("auth");
      navigate("/login");
      return Notify("Internal server error", "error");
    }
  };

  useEffect(() => {
    fetchPrivateDate();
    // eslint-disable-next-line
  }, []);

  return  <Container style={{padding:"70px"}}>
  <h1 style={{padding:"20px"}} className="text-center"><b>Welcome</b></h1>
  <Row>
    <Col>

<h4 className="text-center">Browse through our collection of project reports categorized by year. Each report provides detailed information on objectives, methodologies, findings, and conclusions</h4>

 
          

  <h4 className="text-center">Project Reports aims to provide comprehensive insights into the projects undertaken by our department. Explore the innovative solutions, research outcomes, and academic endeavors that shape our department’s contributions.</h4> 
   
   
    </Col>
    </Row>
</Container>;
};

export default HomePage;
