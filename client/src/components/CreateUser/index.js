import React, { useState, useEffect } from "react";
import { Navbar, FormControl, Form, Container } from "react-bootstrap";
const CreateUser = () => {
  return (
    <>
      <Navbar expand="lg" className="nav-color w-100 " variant="dark">
        <Form.Group
          className={"ms-3 d-flex justify-content-end position-relative  me-3"}
        >
          <FormControl
            placeholder={"Search"}
            className="showPswInput "
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
          <span>maintenance supervisor dashboard</span>
          <div>
            <span className="me-3">Manage User</span>
            <span>Add Asset</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
