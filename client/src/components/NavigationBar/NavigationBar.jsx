import { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import IMAGES from "../../assets"; // Assuming IMAGES is an object containing all images
import { AuthState } from "../../context/AuthProvider";
import ProfileModal from "../ProfileModal/ProfileModal";

import "./NavigationBar.css";

const NavigationBar = () => {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  const { auth, setAuth } = AuthState(); // Ensure AuthState context is providing this properly

  // Logout handler
  const logoutHandler = () => {
    localStorage.removeItem("auth"); // Clear auth data from localStorage
    setAuth(null); // Set auth state to null
    navigate("/login"); // Redirect to login page
  };

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" id="nav">
      <Container>
        {/* Brand with logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Advanced Node Authentication Logo"
            src={IMAGES.logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp;Electronics & TeleCommunication Engineering Students Project Reports
        </Navbar.Brand>

        {/* Responsive toggle button for mobile view */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapsible Navbar content */}
        <Navbar.Collapse className="justify-content-end">
          {/* Check if the user is authenticated */}
          {auth ? (
            <>
              {/* Project Reports Dropdown */}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Project Reports
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/report-2023-24">
                    A.Y 2023-24
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/report-2022-23">
                    A.Y 2022-23
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/report-2021-22">
                    A.Y 2021-22
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* Profile and Logout Dropdown */}
              <DropdownButton
                align="end"
                title={
                  <Image
                    id="profileDropdownIcon"
                    src={auth.profilePic} // Assuming profilePic is part of auth object
                    alt="Navbar profile image"
                    roundedCircle
                    width="30"
                    height="30"
                  />
                }
                variant=""
              >
                {/* Profile Modal */}
                <Dropdown.Item as="button" onClick={() => setModalShow(true)}>
                  Profile
                </Dropdown.Item>
                <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />

                <Dropdown.Divider />

                {/* Logout option */}
                <Dropdown.Item as="button" onClick={logoutHandler}>
                  Log out
                </Dropdown.Item>
              </DropdownButton>
            </>
          ) : (
            <Nav>
              {/* Login and Register , Contact  buttons for unauthenticated users */}
              <button className=" btn btn-primary me-2" onClick={() => navigate("/home")}>
                Home
              </button>
              <button className=" btn btn-primary me-2" onClick={() => navigate("/login")}>
                Log in
              </button>
              <button className="btn btn-primary me-2" onClick={() => navigate("/register")}>
                Register
              </button>
             <button className="btn btn-primary me-2" onClick={() => navigate("/contact")}>
               Contact Us
              </button> 
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
