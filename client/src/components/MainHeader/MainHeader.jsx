import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import auth from "../auth/auth";
import Navigation from "./Navigation";
const MainHeader = (props) => {
  const [loggedInUser, setloggedInUser] = useState();
  const [userRole, setUserRole] = useState()

  useEffect(() => {
    const islogin = auth.getToken();
    setloggedInUser(islogin);
  }, []);


  const getLocalItem = () => {
    const role = JSON.parse(localStorage.getItem('user'))?.role.toUpperCase()
    setUserRole(role)
  }

  useEffect(() => {
    getLocalItem()
  }, [props.location])



  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
        <Container>
          <Navbar.Brand href="/">Asset Calibration System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navigation isLoggedIn={loggedInUser} />
        </Container>
      </Navbar>
      <div className="title-bar">
        <Container>
          { userRole &&
            <font className="title-font">MAINTENANCE {userRole}'S DASHBOARD</font>
          }
        </Container>
      </div>

    </React.Fragment>
  );
};

export default MainHeader;
