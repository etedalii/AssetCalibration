import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="lg" className="nav-color" variant="dark">
        <Container>
          <Navbar.Brand href="/">Asset Calibration System</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navigation isLoggedIn={isLoggedIn} />
        </Container>
      </Navbar>
      <div className="title-bar">
        <Container>
          {isLoggedIn && (
            <font className="title-font">
              MAINTENANCE {authCtx.getRole()}'S DASHBOARD
            </font>
          )}
        </Container>
        {isLoggedIn && (
          <div className={classes["me-n1"]}>
            <NavLink className="me-5" to="/manageuser">
              Manage Users
            </NavLink>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
