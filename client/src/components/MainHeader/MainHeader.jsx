import React, { useContext } from "react";
import { Navbar, Container, Form, FormControl } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <React.Fragment>
      <Navbar expand="xs" className="nav-color w-100 " variant="dark">
        <Form.Group
          className={"ms-3 d-flex justify-content-end position-relative  me-3"}
        >
          <FormControl
            placeholder={"Search"}
            className="rounded-pill "
            aria-describedby="basic-addon1"
          />
          <i
            className={`bi bi-search fa-search position-absolute  top-50 translate-middle s-2`}
          ></i>
        </Form.Group>
        <button className="me-3 btn-lbl">logout</button>
      </Navbar>
      <div className="title-bar w-100 px-3">
        <div className="d-flex justify-content-between w-100">
          <span className="text-sub-navbar">
            MAINTENANCE {authCtx.getRole()}'S DASHBOARD
          </span>
          <div>
            <NavLink className="me-5 text-sub-navbar" to="/manageuser">
              <span className="me-3 ">Manage User</span>
            </NavLink>
            <NavLink  className="text-sub-navbar" to='assetlist'>Asset List</NavLink>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainHeader;
