import React, { useState, useEffect } from "react";
import UserForm from "../../miniComponents/UserForm";
import { Navbar, FormControl, Form, Container, Button } from "react-bootstrap";
const CreateUser = () => {
  const [displayUserForm, setDisplayUserForm] = useState(false);

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
        <h1 className="mb-2 text-color">Active User List</h1>

        <table>
          <tr>
            <th className="py-2">#</th>
            <th>USER ID</th>
            <th>FULL NAME</th>
            <th>POSITION</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Joel</td>
            <td>Technician</td>
            <td>
              <Button
                className="py-0"
                onClick={() => {
                  displayUserForm
                    ? setDisplayUserForm(false)
                    : setDisplayUserForm(true);
                }}
              >
                Edit
              </Button>
            </td>
          </tr>
        </table>
        {displayUserForm && (
          <div className="div-border-line p-3 w-100">
            <Form>
              <UserForm />
              <Form.Group
                className="d-flex flex-column"
                controlId="formBasicPassword"
              >
                <div className="align-self-end">
                  <Button type="submit" className="btn btn-danger px-3 py-1">
                    Delete
                  </Button>
                  <Button type="submit" className="btn btn-warning px-3 py-1">
                    Cancel
                  </Button>
                  <Button type="submit" className="btn btn-success px-3 py-1">
                    Save
                  </Button>
                </div>
              </Form.Group>
            </Form>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateUser;
