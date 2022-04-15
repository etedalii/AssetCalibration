import React, { useState, useEffect } from "react";
import { Navbar, FormControl, Form, Container, Button } from "react-bootstrap";
const CreateUser = () => {
  return (
    <>
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
            Maintenance supervisor dashboard
          </span>
          <div>
            <span className="me-3 text-sub-navbar">Manage User</span>
            <span className="text-sub-navbar">Add Asset</span>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="mb-2 text-color">Create User</h1>

        <div className="div-border-line p-3 w-100">
          <Form>
            <Form.Group
              className="mb-1 d-flex flex-row"
              controlId="formBasicEmail"
              size="sm"
            >
              <Form.Label className="w-25 text-right">
                EMAIL ADDRESS:
              </Form.Label>
              <Form.Control size="sm" type="email" className="text-box-color" />
            </Form.Group>

            <Form.Group
              className="mb-1 d-flex flex-row text-color"
              controlId="formBasicPassword"
            >
              <Form.Label className="w-25 float-right text-right">
                POSITION:
              </Form.Label>
              <Form.Control size="sm" className="text-box-color" />
            </Form.Group>
            <Form.Group
              className="mb-1 d-flex flex-row text-color"
              controlId="formBasicPassword"
            >
              <Form.Label className="w-25 text-right text-color">
                EMAIL:
              </Form.Label>
              <Form.Control size="sm" className="text-box-color" />
            </Form.Group>
            <Form.Group
              className="mb-1 d-flex flex-row mt-4"
              controlId="formBasicPassword"
            >
              <Form.Label className="w-25 text-right ">USER ID:</Form.Label>
              <Form.Control className="text-box-color" size="sm" />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex flex-row "
              controlId="formBasicPassword"
            >
              <Form.Label className="w-25 text-right"> PASSWORD:</Form.Label>
              <Form.Control
                className="text-box-color"
                size="sm"
                type="password"
              />
            </Form.Group>
            <Form.Group
              className="d-flex flex-column"
              controlId="formBasicPassword"
            >
              <div className="align-self-end">
                <Button type="submit" className="btn btn-danger px-3 py-1">
                  Submit
                </Button>
                <Button type="submit" className="btn btn-success px-3 py-1">
                  Submit
                </Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
