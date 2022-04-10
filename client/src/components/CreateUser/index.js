import React, { useState, useEffect } from "react";
import { Navbar, FormControl, Form } from "react-bootstrap";
const CreateUser = () => {
  return (
    <>
      <Navbar expand="lg" className="nav-color w-100 " variant="dark">
        <Form.Group
          className={"d-flex justify-content-end position-relative  me-3"}
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
        <button className="btn-lbl">logout</button>
      </Navbar>
    </>
  );
};

export default CreateUser;
