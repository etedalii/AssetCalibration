import React from "react";
import { Navbar, FormControl, Form, Container, Button } from "react-bootstrap";
const userForm = () => {
  return (
    <>
      <Form.Group
        className="mb-1 d-flex flex-row"
        controlId="formBasicEmail"
        size="sm"
      >
        <Form.Label className="w-25 text-right">EMAIL ADDRESS:</Form.Label>
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
        <Form.Label className="w-25 text-right text-color">EMAIL:</Form.Label>
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
        <Form.Control className="text-box-color" size="sm" type="password" />
      </Form.Group>
    </>
  );
};

export default userForm;
